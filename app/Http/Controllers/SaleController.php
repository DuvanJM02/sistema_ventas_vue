<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\FuncCall;
use Throwable;
use Illuminate\Support\Facades\Cache;
use PDF;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request){
            $query = trim($request->get('search'));
            $sales = DB::table('sales as s')
            ->join('users as u', 's.user_id', 'u.id')
            ->join('sale_details as sd', 's.id', 'sd.sale_id')
            ->select('s.id', 's.date', 'u.name', 's.t_comprobante', 's.s_comprobante', 's.n_comprobante', 
                    's.tax', 's.status', 's.sale_total')
            ->where('s.n_comprobante', 'like', '%' . $query . '%')->orderBy('s.id', 'desc')
            ->groupBy('s.id', 's.date', 'u.name', 's.t_comprobante', 's.s_comprobante', 's.n_comprobante', 
                    's.tax', 's.status', 's.sale_total')->get();
            return response()->json($sales);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = User::where('role', 'customer')->get();
        $products = DB::table('products as p')
        // ->select(DB::raw("CONCAT(p.code, ' - ', p.name) as product"), 'p.id')
        ->select(DB::raw("p.name as product"), 'p.id', 'p.stock')
        ->where('p.status', '1')->get();  

        return response()->json([ $users, $products ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            't_comprobante' => 'required',
            's_comprobante' => 'required',
            'n_comprobante' => 'required',
            'sale_total' => 'required',
            'iproduct_id' => 'required',
            'iquantity' => 'required',
            'isale_price' => 'required',
        ]);

        try {
            DB::beginTransaction();

            $sale = new Sale();

            $myTime = Carbon::now('America/Bogota');
            $sale->user_id = $request->user_id;
            $sale->t_comprobante = $request->t_comprobante;
            $sale->s_comprobante = $request->s_comprobante;
            $sale->n_comprobante = $request->n_comprobante;
            $sale->sale_total = $request->sale_total;
            $sale->date = $myTime->toDateTimeString();
            $sale->tax = '19';
            $sale->status = '1';

            $sale->save();

            $product_id = $request->iproduct_id;
            $quantity = $request->iquantity;
            $sale_price = $request->isale_price;
            $discount = $request->idiscount;

            $cont = 0;

            while($cont < count($product_id)){
                $sale_detail = new SaleDetail();
                $sale_detail->sale_id = $sale->id;
                $sale_detail->product_id = $product_id[$cont];
                $sale_detail->quantity = $quantity[$cont];
                if($discount[$cont] == null){
                    $discount[$cont] = 0;
                }
                $sale_detail->discount = $discount[$cont];
                Product::findOrFail($product_id[$cont])->update([
                    'stock' => Product::findOrFail($product_id[$cont])->stock - $quantity[$cont]
                ]);
                if(Product::findOrFail($product_id[$cont])->stock == 0){
                    Product::findOrFail($product_id[$cont])->update([
                        'status' => '0'
                    ]);
                }
                $sale_detail->sale_price = $sale_price[$cont];
                $sale_detail->save();

                $cont = $cont + 1;
            }
            
            Cache::forget('products');

            DB::commit();
            return redirect('/sale');
            return response()->json([
                'message' => '¡Ingreso creado satisfactoriamente!'
            ]);
        } catch (Throwable $th) {
            DB::rollback();
            return "No creado " . $th;
            return response()->json([
                'message' => '¡Ingreso NO fue creado!',
                'error' => $th
            ]);
        }

        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function show($id) 
    {
        $sale = DB::table('sales as s')
        ->join('users as u', 's.user_id', '=', 'u.id')
        ->join('sale_details as sd', 's.id', '=', 'sd.sale_id')
        ->select('s.id', 's.date', 'u.name', 's.t_comprobante', 's.s_comprobante', 's.n_comprobante', 's.tax', 's.status', 's.sale_total as total')
        ->where('s.id', $id)
        ->groupBy('s.id', 's.date', 'u.name', 's.t_comprobante', 's.s_comprobante', 's.n_comprobante', 's.tax', 's.status', 's.sale_total')
        ->first();
        // dd($sale);
        $detalles = DB::table('sale_details as sd')
        ->join('products as p', 'sd.product_id', '=', 'p.id')
        ->select('p.name as product', 'sd.quantity', 'sd.discount', 'sd.sale_price')
        ->where('sd.sale_id', $id)->get();

        return response()->json(['sale' => $sale, 'details' => $detalles]);
    }

    public function salePrint($id){
        $sale = DB::table('sales as s')
        ->join('users as u', 's.user_id', '=', 'u.id')
        ->join('sale_details as sd', 's.id', '=', 'sd.sale_id')
        ->select('s.id', 's.date', 'u.name', 's.t_comprobante', 's.s_comprobante', 's.n_comprobante', 's.tax', 's.status', 's.sale_total as total')
        ->where('s.id', $id)
        ->groupBy('s.id', 's.date', 'u.name', 's.t_comprobante', 's.s_comprobante', 's.n_comprobante', 's.tax', 's.status', 's.sale_total')
        ->first();
        // DB::raw('sum(sd.quantity*sale_price) as total'))
        // dd($sale);
        $detalles = DB::table('sale_details as sd')
        ->join('products as p', 'sd.product_id', '=', 'p.id')
        ->select('p.name as product', 'sd.quantity', 'sd.discount', 'sd.sale_price')
        ->where('sd.sale_id', $id)->get();

        $data = compact('sale', 'detalles');
        $pdf = PDF::loadView('pdf.sale', $data);
        return $pdf->stream(time() . '-income-' . $sale->id . '.pdf');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sale = Sale::findOrFail($id);
        $sale->status = '0';

        $sale->save();

        return response()->json(['sale' => $sale]);
    }

    public function activate($id)
    {
        $sale = Sale::findOrFail($id);
        $sale->status = '1';

        $sale->save();

        return response()->json(['sale' => $sale]);
    }
}

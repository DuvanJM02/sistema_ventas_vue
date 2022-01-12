<?php

namespace App\Http\Controllers;

use App\Http\Requests\IncomeFormRequest;
use App\Models\Income;
use App\Models\IncomeDetail;
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

class IncomeController extends Controller
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
            $incomes = DB::table('income as i')
            ->join('users as u', 'i.user_id', 'u.id')
            ->join('income_details as ids', 'i.id', 'ids.id')
            ->select('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 
                    'i.tax', 'i.status', 'i.total')
            ->where('i.n_comprobante', 'like', '%' . $query . '%')->orderBy('i.id', 'desc')
            ->groupBy('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 
                    'i.tax', 'i.status', 'i.total')->get();

            return response()->json($incomes);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = User::where('role', 'supplier')->get();
        $products = DB::table('products as p')
        // ->select(DB::raw("CONCAT(p.code, ' - ', p.name) as product"), 'p.id')
        ->select(DB::raw("p.name as product"), 'p.id')
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
            'total' => 'required',
            'iproduct_id' => 'required',
            'iquantity' => 'required',
            'ipurchase_price' => 'required',
            'isale_price' => 'required',
        ]);

        // return response()->json($request->all());
        try {
            DB::beginTransaction();

            $income = new Income();

            $myTime = Carbon::now('America/Bogota');
            $income->user_id = $request->user_id;
            $income->t_comprobante = $request->t_comprobante;
            $income->s_comprobante = $request->s_comprobante;
            $income->n_comprobante = $request->n_comprobante;
            $income->total = $request->total;
            $income->date = $myTime->toDateTimeString();
            $income->tax = '19';
            $income->status = '1';

            $income->save();

            $product_id = $request->iproduct_id;
            $quantity = $request->iquantity;
            $purchase_price = $request->ipurchase_price;
            $sale_price = $request->isale_price;

            $cont = 0; 

            while($cont < count($product_id)){
                $income_detail = new IncomeDetail();
                $income_detail->income_id = $income->id;
                $income_detail->product_id = $product_id[$cont];
                $income_detail->quantity = $quantity[$cont];
                Product::findOrFail($product_id[$cont])->update(['stock' => Product::findOrFail($product_id[$cont])->stock + $quantity[$cont]]);
                $income_detail->purchase_price = $purchase_price[$cont];
                $income_detail->sale_price = $sale_price[$cont];
                $income_detail->save();

                $cont = $cont + 1;
            }
            
            Cache::forget('products');

            DB::commit();
            return redirect('/income');
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
        $income = DB::table('income as i')
        ->join('users as u', 'i.user_id', '=', 'u.id')
        ->join('income_details as di', 'i.id', '=', 'di.id')
        ->select('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 'i.tax', 'i.status', DB::raw('sum(di.quantity*purchase_price) as total'))
        ->where('i.id', $id)
        ->groupBy('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 'i.tax', 'i.status')
        ->first();

        $detalles = DB::table('income_details as d')
        ->join('products as p', 'd.product_id', '=', 'p.id')
        ->select('p.name as product', 'd.quantity', 'd.purchase_price', 'd.sale_price')
        ->where('d.income_id', $id)->get();

        return response()->json(['income' => $income, 'details' => $detalles]);
    }

    public function incomePrint($id){
        $income = DB::table('income as i')
        ->join('users as u', 'i.user_id', '=', 'u.id')
        ->join('income_details as di', 'i.id', '=', 'di.id')
        ->select('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 'i.tax', 'i.status', DB::raw('sum(di.quantity*purchase_price) as total'))
        ->where('i.id', $id)
        ->groupBy('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 'i.tax', 'i.status')
        ->first();

        $detalles = DB::table('income_details as d')
        ->join('products as p', 'd.product_id', '=', 'p.id')
        ->select('p.name as product', 'd.quantity', 'd.purchase_price', 'd.sale_price')
        ->where('d.income_id', $id)->get();

        $data = compact('income', 'detalles');
        $pdf = PDF::loadView('pdf.income', $data);
        return $pdf->stream(time() . '-income-' . $income->id . '.pdf');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function edit(Income $income)
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
    public function update(Request $request, Income $income)
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
        $income = Income::findOrFail($id);
        $income->status = '0';

        $income->save();

        return response()->json(['income' => $income]);
    }

    public function activate($id)
    {
        $income = Income::findOrFail($id);
        $income->status = '1';

        $income->save();

        return response()->json(['income' => $income]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\IncomeFormRequest;
use App\Models\Income;
use App\Models\IncomeDetail;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

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
            $query = trim($request->get('searchText'));
            $incomes = DB::table('income as i')
            ->join('users as u', 'i.user_id', 'u.id')
            ->join('income_details as ids', 'i.id', 'ids.id')
            ->select('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 
                    'i.tax', 'i.status', DB::raw('sum(ids.quantity*purchase_price) as total'))
            ->where('i.n_comprobante', 'like', '%' . $query . '%')->orderBy('i.id', 'desc')
            ->groupBy('i.id', 'i.date', 'u.name', 'i.t_comprobante', 'i.s_comprobante', 'i.n_comprobante', 
                    'i.tax', 'i.status')->get();

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
    public function store(IncomeFormRequest $request)
    {
        dd($request->all());
        // try {
            DB::beginTransaction();

            $income = new Income();

            $myTime = Carbon::now('America/Bogota');
            $income->user_id = $request->user_id;
            $income->t_comprobante = $request->t_comprobante;
            $income->s_comprobante = $request->s_comprobante;
            $income->n_comprobante = $request->n_comprobante;
            $income->date = $myTime->toDateTimeString();
            $income->tax = '19';
            $income->status = '1';

            $income->save();

            $product_id = $request->product_id;
            $quantity = $request->quantity;
            $purchase_price = $request->purchase_price;
            $sale_price = $request->sale_price;

            $cont = 0;

            while($cont < count($product_id)){
                $income_detail = new IncomeDetail();
                $income_detail->income_id = $income->id;
                $income_detail->product_id = $product_id[$cont];
                $income_detail->quantity = $quantity[$cont];
                Product::findOrFail($product_id[$cont])->update(['quantity' => Product::findOrFail($product_id[$cont])->quantity + $quantity[$cont]]);
                $income_detail->purchase_price = $purchase_price[$cont];
                $income_detail->sale_price = $sale_price[$cont];
                $income_detail->save();

                $cont = $cont + 1;
            }

            DB::commit();

            return response()->json([
                'message' => '¡Ingreso creado satisfactoriamente!'
            ]);
        // } catch (Throwable $th) {
        //     DB::rollback();
        //     return response()->json([
        //         'message' => '¡Ingreso NO fue creado!',
        //         'error' => $th
        //     ]);
        // }

        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function show(Income $income)
    {
        //
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
    public function destroy(Income $income)
    {
        //
    }
}

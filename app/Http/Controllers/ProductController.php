<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
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
            $products = DB::table('products as p')
            ->join('categories as c', 'p.category_id', 'c.id')
            ->select('p.id', 'p.code', 'p.name', 'p.description', 'p.stock', 'p.status', 'p.img_path', 'c.name as category')
            ->where('p.name', 'like', '%' . $query . '%')
            ->orWhere('p.code', 'like', '%' . $query . '%')
            ->where('p.status', '1')
            ->orderBy('p.id', 'desc')
            ->get();

            return response()->json($products);

            // return response()->json($query);
        }
    } 

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category = Category::where('status', '1')->get();

        return response()->json($category);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductFormRequest $request)
    {
        if ($request->imagen) {
            $image = $request->file('imagen');
            $request->imagen->move(public_path() . '/img/products/', $image->getClientOriginalName());
            $request->imagen = $image->getClientOriginalName();
        }

        $product = Product::create($request->post());
        return response()->json(['product' => $product]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($category)
    {
        return response()->json($category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $category)
    {
        //
    }

    public function update(ProductFormRequest $request, Product $category)
    {
        $category->fill($request->post())->save();

        return response()->json(['category' => $category]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Product::findOrFail($id);
        $category->status = '0';

        $category->update();

        return response()->json([
            'mensaje' => 'Categoría ELIMINADA'
        ]);
    }
}

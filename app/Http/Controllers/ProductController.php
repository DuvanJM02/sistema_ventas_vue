<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Models\Category;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Faker\Core\File;
use Illuminate\Support\Facades\File; 
use Faker\Provider\File as ProviderFile;

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

        $product = new Product();

        $product->code = $request->code;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->stock = $request->stock;
        $product->status = $request->status;
        $product->category_id = $request->category_id;


        if ($request->img_path) {
            $image = $request->file('img_path');
            // $namePhoto = time() . '.' . $image->getClientOriginalExtension();
            $namePhoto = time() . '-' . $request->name . '.' . $image->getClientOriginalExtension();
            $request->img_path->move(public_path() . '/img/products/', $namePhoto);
            $product->img_path = $namePhoto;
        }
 
        // dd($request->img_path);

        $product->save();

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
    public function edit($id)
    {
        return response()->json([
            Product::findOrFail($id), 
            Category::all()->where('status', '1')
        ]);
    }

    // public function showCategories(){
    //     $categories = Category::all()->where('status', '1');
    //     return $categories;
    // }

    public function update(ProductFormRequest $request, $id)
    {

        // if($request->hasFile('file')){
        //     dd($request->img_path);
        //     return "Si hay imagen";
        // }else{
        //     dd($request->img_path);
        //     return "No hay imagen";
        // }

        // dd($request->img_path);

        $product = Product::findOrFail($id);

        $product->code = $request->code;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->stock = $request->stock;
        $product->status = $request->status;
        $product->category_id = $request->category_id;
        $old_img = $product->img_path;

        try{
            if ($request->img_path != $product->img_path) {
                // unlink(public_path('/img/products/' . $product->photo_path));

                $img_path = public_path('img/products/'.$product->img_path);

                // return $img_path;
                if (File::exists($img_path)) {
                    //File::delete($img_path);
                    unlink($img_path);
                }

                $image = $request->file('img_path');
                $namePhoto = time() . '-' . $request->name . '.' . $image->getClientOriginalExtension();
                $request->img_path->move(public_path() . '/img/products/', $namePhoto);
                $product->img_path = $namePhoto;
                $product->update();
            }
        }catch(Exception $e){
            $product->img_path = $old_img;
            $product->update();
            return response()->json(['e' => $e]);
        }

        return response()->json(['product' => $product]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->status = '0';

        $product->update();

        return response()->json([
            'mensaje' => 'Producto ELIMINADO'
        ]);
    }

    public function activate($id)
    {
        $product = Product::findOrFail($id);
        $product->status = '1';

        $product->update();

        return response()->json([
            'mensaje' => 'Producto ACTIVADO'
        ]);
    }
}

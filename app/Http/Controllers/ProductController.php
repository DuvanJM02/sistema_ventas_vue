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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    // public function __construct()
    // {
    //     return response()->json(['authUser' => Auth::user()], 200);
    // }
    
    public function index(Request $request)
    {
        $query = trim($request->get('search'));
        $cache_products = Cache::get('products');
        if($cache_products && $query == null){
            $products = $cache_products;
            return response()->json($products);
        }else{
            if($request){
                $products = DB::table('products as p')
                ->join('categories as c', 'p.category_id', 'c.id')
                ->select('p.id', 'p.code', 'p.name', 'p.description', 'p.stock', 'p.status', 'p.img_path', 'c.name as category')
                ->where('p.name', 'like', '%' . $query . '%')
                ->orWhere('p.code', 'like', '%' . $query . '%')
                ->orderBy('p.id', 'desc')
                ->get();

                if(!$query){
                    Cache::put('products', $products, 10);
                }

                return response()->json($products);
            }
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
        Cache::forget('products');
        $product = new Product();

        $product->code = $request->code;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->stock = $request->stock;
        $product->status = $request->status;
        $product->category_id = $request->category_id;


        if ($request->img_path != null) {
            $request->validate([
                'img_path' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $image = $request->file('img_path');
            // $namePhoto = time() . '.' . $image->getClientOriginalExtension();
            $namePhoto = time() . '-' . $request->name . '.' . $image->getClientOriginalExtension();
            $request->img_path->move(public_path() . '/img/products/', $namePhoto);
            $product->img_path = $namePhoto;
        }
 
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

    public function update(ProductFormRequest $request, $id)
    {
        Cache::forget('products');

        $product = Product::findOrFail($id);

        $product->code = $request->code;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->stock = $request->stock;
        $product->status = $request->status;
        $product->category_id = $request->category_id;
        $old_img = $product->img_path;

        try{
            if ($request->img_path != $product->img_path && $request->img_path != null) {
                // unlink(public_path('/img/products/' . $product->photo_path));


                if($request->img_path != null){
                    $img_path = public_path('img/products/'.$product->img_path);
                    // return $img_path;
                    if (File::exists($img_path)) {
                        //File::delete($img_path);
                        unlink($img_path);
                    }
                }

                $image = $request->file('img_path');
                $namePhoto = time() . '-' . $request->name . '.' . $image->getClientOriginalExtension();
                $request->img_path->move(public_path() . '/img/products/', $namePhoto);
                $product->img_path = $namePhoto;
                $product->update();
            }else{
                $product->img_path = $old_img;
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
        Cache::forget('products');
        // dd($id);
        $product = Product::findOrFail($id);
        $product->status = '0';

        $product->update();

        return response()->json([
            'mensaje' => 'Producto ELIMINADO'
        ]);
    }

    public function activate($id)
    {
        Cache::forget('products');
        $product = Product::findOrFail($id);
        $product->status = '1';

        $product->update();

        return response()->json([
            'mensaje' => 'Producto ACTIVADO'
        ]);
    }
}

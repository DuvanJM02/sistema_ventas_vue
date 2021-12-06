<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryFormRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
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
            $categories = Category::where('name', 'like', '%' . $query . '%')->where('status', '1')->orderBy('id', 'desc')->get();

            return response()->json($categories);

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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryFormRequest $request)
    {
        $category = Category::create($request->post());
        return response()->json(['category' => $category]);
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
        $category = Category::findOrFail($id);
        // return response()->json($category);
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryFormRequest $request, Category $category)
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
        // $category->update([
        //     'status' => '0',
        // ]);

        $category = Category::findOrFail($id);
        $category->status = '0';

        $category->update();

        // $category->fill($category->post())->save();

        return response()->json([
            'mensaje' => 'Categoría ELIMINADA'
        ]);
    }
}

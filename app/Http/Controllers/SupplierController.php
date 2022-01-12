<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserFormRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SupplierController extends Controller
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
            $suppliers = User::where('role', 'supplier')->where('name', 'like', '%' . $query . '%')->orderBy('id', 'desc')->get();

            return response()->json($suppliers);
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
    public function store(UserFormRequest $request)
    {
        $supplier = new User();

        $supplier->name = $request->name;
        $supplier->email = $request->email; 
        $supplier->password = bcrypt($request->password);
        $supplier->role = $request->role;
        $supplier->document = $request->document;
        $supplier->n_document = $request->n_document;
        $supplier->location = $request->location;
        $supplier->phone = $request->phone;
        $supplier->status = $request->status;

        if ($request->img_path != "null") {
            $image = $request->file('img_path');
            $namePhoto = time() . '-' . $request->name . '.' . $image->getClientOriginalExtension();
            $request->img_path->move(public_path() . '/img/users/', $namePhoto);
            $supplier->img_path = $namePhoto;
        }

        $supplier->save();

        return response()->json(['supplier' => $supplier]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(User::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserFormRequest $request, $id)
    {
        $supplier = User::findOrFail($id);

        $supplier->name = $request->name;
        $supplier->email = $request->email;
        $supplier->password = bcrypt($request->password);
        $supplier->role = $request->role;
        $supplier->document = $request->document;
        $supplier->n_document = $request->n_document;
        $supplier->location = $request->location;
        $supplier->phone = $request->phone;
        $supplier->status = $request->status;
        $old_img = $supplier->img_path; 

        if($request->img_path != 'undefined' || $request->img_path != null){
            try{
                if ($request->img_path != $supplier->img_path && $request->img_path != null) {
                    
                    // unlink(public_path('/img/suppliers/' . $supplier->photo_path));
                    if($request->img_path != null && $supplier->img_path != null){
                        // dd($request->img_path);
                        $img_path = public_path('img/users/'.$supplier->img_path);
                        // return $img_path;
                        if (File::exists($img_path)) {
                            //File::delete($img_path);
                            unlink($img_path);
                        }
                    }

                    $image = $request->file('img_path');
                    $namePhoto = time() . '-' . $request->name . '.' . $image->getClientOriginalExtension();
                    $request->img_path->move(public_path() . '/img/users/', $namePhoto);
                    $supplier->img_path = $namePhoto;
                    $supplier->update();
                }
            }catch(Exception $e){
                $supplier->img_path = $old_img;
                $supplier->update();
                return response()->json(['e' => $e]);
            }
        }else{
            $supplier->img_path = $old_img;
            $supplier->update();
        }
        

        return response()->json(['supplier' => $supplier]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $supplier = User::findOrFail($id);
        $supplier->status = '0';

        $supplier->save();

        return response()->json(['supplier' => $supplier]);
    }

    public function activate($id)
    {
        $supplier = User::findOrFail($id);
        $supplier->status = '1';

        $supplier->save();

        return response()->json(['supplier' => $supplier]);
    }
}

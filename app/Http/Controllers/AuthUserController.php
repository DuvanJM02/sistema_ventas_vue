<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryFormRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthUserController extends Controller
{
    public function showUser()
    {
        if (Auth::check()) {
            return response()->json(Auth::user(), 200);
        }else{
            return "nO LOGGED IN";
        }
    } 
}

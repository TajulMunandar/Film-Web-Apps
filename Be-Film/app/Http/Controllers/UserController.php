<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $page = "User Management";
        return view('dashboard.user')->with(compact('page', 'users'));
    }
}

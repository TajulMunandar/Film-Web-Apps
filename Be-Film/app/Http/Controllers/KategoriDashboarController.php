<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriDashboarController extends Controller
{
    public function index()
    {
        $kategories = Kategori::all();
        $page = "Kategori Management";
        return view('dashboard.kategori')->with(compact('page', 'kategories'));
    }
}

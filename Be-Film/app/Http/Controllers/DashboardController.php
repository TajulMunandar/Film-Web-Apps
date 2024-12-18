<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Kategori;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $film = Film::count();
        $kategori = Kategori::count();
        $page = "Dashboard";
        return view('dashboard.index')->with(compact('page', 'film', 'kategori'));
    }
}

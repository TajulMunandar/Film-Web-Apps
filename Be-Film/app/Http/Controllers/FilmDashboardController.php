<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Http\Request;

class FilmDashboardController extends Controller
{
    public function index()
    {
        $films = Film::all();
        $page = "Film Management";
        return view('dashboard.film')->with(compact('page', 'films'));
    }
}

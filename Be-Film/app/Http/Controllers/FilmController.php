<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Http\Request;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class FilmController extends Controller
{
    public function index(Request $request)
    {
        $query = Film::with('details', 'kategoris');

        // Filter berdasarkan kategori
        if ($request->has('kategori') && $request->kategori != '') {
            $query->whereHas('kategoris', function ($q) use ($request) {
                $q->where('nama_kategori', $request->kategori);
            });
        }

        // Pencarian judul
        if ($request->has('search')) {
            $query->where('judul', 'like', '%' . $request->search . '%');
        }

        $films = $query->get();

        return response()->json([
            'status' => 'success',
            'data' => $films,
        ]);
    }

    // Detail film berdasarkan id_film
    public function show($slug)
    {
        $film = Film::with('details', 'kategoris')->where('slug', $slug)->first();

        // Jika film tidak ditemukan, kembalikan response 404
        if (!$film) {
            return response()->json(['status' => 'error', 'message' => 'Film not found'], 404);
        }


        // Kembalikan response sukses dengan data film
        return response()->json([
            'status' => 'success',
            'data' => $film
        ]);
    }
}

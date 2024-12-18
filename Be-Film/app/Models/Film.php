<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    /** @use HasFactory<\Database\Factories\FilmFactory> */
    use HasFactory;

    protected $table = 'films';
    protected $primaryKey = 'id_film'; // Pastikan primary key diset

    protected $guarded = ['id_film'];

    public function kategoris()
    {
        return $this->belongsToMany(Kategori::class, 'kategori_films', 'id_film', 'id_kategori');
    }

    public function details()
    {
        return $this->hasOne(DetailFilm::class, 'id_film', 'id_film');
    }
}

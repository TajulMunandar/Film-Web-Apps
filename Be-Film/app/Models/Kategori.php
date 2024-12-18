<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    /** @use HasFactory<\Database\Factories\KategoriFactory> */
    use HasFactory;

    protected $table = 'kategoris';
    protected $primaryKey = 'id_kategori';

    protected $guarded = ['id_kategori'];

    public function films()
    {
        return $this->belongsToMany(Film::class, 'kategori_films', 'id_kategori', 'id_film');
    }
}

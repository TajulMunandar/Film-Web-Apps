<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailFilm extends Model
{
    /** @use HasFactory<\Database\Factories\DetailFilmFactory> */
    use HasFactory;

    protected $table = 'detail_films';
    protected $primaryKey = 'id_detail_film';

    protected $guarded = ['id_detail_film'];

    public function film()
    {
        return $this->belongsTo(Film::class, 'id_film', 'id_film');
    }
}

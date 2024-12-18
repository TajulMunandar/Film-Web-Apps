<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance'];

        foreach ($categories as $category) {
            Kategori::create([
                'nama_kategori' => $category,
            ]);
        }
    }
}

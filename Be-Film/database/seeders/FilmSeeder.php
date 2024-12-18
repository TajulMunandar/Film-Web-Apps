<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\Kategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $localVideoPaths = [
            public_path('videos/dd.mp4'),
            public_path('videos/Main_1.mp4')
        ];

        $storagePaths = [];
        foreach ($localVideoPaths as $videoPath) {
            $storagePath = 'videos/' . basename($videoPath);
            if (!Storage::disk('public')->exists($storagePath)) {
                Storage::disk('public')->put($storagePath, file_get_contents($videoPath));
            }
            $storagePaths[] = $storagePath;
        }

        foreach (range(1, 10) as $index) {
            $judul = $faker->sentence(3);

            $thumbnail = $faker->imageUrl(400, 300, 'films');

            $film = Film::create([
                'judul' => $judul,
                'slug' => Str::slug($judul),
                'thumbnail' => $thumbnail,
                'rating' => rand(1, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $selectedVideo = $storagePaths[$index % 2];

            $film->details()->create([
                'deskripsi' => $faker->paragraph(3),
                'link' => url('storage/' . $selectedVideo),
                'durasi' => $faker->time('H:i:s', '03:00:00'),
                'tahun_rilis' => $faker->year(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);


            $categories = Kategori::all()->random(rand(1, 6));

            if ($categories->isNotEmpty()) {
                $film->kategoris()->attach($categories);
            }
        }
    }
}

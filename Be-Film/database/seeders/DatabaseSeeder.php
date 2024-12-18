<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;



class DatabaseSeeder extends Seeder
{
    protected static ?string $password;
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'nama' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => static::$password ??= Hash::make('123123'),
            'is_admin' => 1,
        ]);

        User::factory()->create([
            'nama' => 'Operator',
            'email' => 'admin1@gmail.com',
            'password' => static::$password ??= Hash::make('123123'),
            'is_admin' => 0,
        ]);


        $this->call([
            KategoriSeeder::class,
            FilmSeeder::class,
        ]);
    }
}

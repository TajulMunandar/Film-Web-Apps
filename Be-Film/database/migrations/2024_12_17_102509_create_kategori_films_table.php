<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kategori_films', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_film')->constrained('films', 'id_film')->onDelete('restrict')->onUpdate('cascade');
            $table->foreignId('id_kategori')->constrained('kategoris', 'id_kategori')->onDelete('restrict')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kategori_films');
    }
};

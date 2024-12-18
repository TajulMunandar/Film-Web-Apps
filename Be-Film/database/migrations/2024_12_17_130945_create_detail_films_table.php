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
        Schema::create('detail_films', function (Blueprint $table) {
            $table->id('id_detail_film');
            $table->foreignId('id_film')->constrained('films', 'id_film')->onDelete('restrict')->onUpdate('cascade');
            $table->string('deskripsi', 1000);
            $table->string('link', 2083);
            $table->time('durasi');
            $table->year('tahun_rilis');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_films');
    }
};

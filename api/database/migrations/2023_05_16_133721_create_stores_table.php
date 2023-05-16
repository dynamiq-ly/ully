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
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('store_logo');
            $table->string('store_name')->unique();
            $table->string('store_description');
            $table->string('store_thumbnail')->nullable();

            $table->string('store_email');
            $table->string('store_phone');
            $table->string('store_address');

            $table->string('store_instagram')->nullable();
            $table->string('store_facebook')->nullable();
            $table->string('store_twitter')->nullable();
            $table->string('store_whatsapp')->nullable();

            $table->boolean('store_status')->default(1);
            $table->boolean('store_is_featured')->default(0);
            $table->integer('store_view_count')->default(0);


            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stores');
    }
};

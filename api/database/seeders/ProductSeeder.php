<?php

namespace Database\Seeders;

use App\Models\product\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            $product = Product::create([
                'product_name' => $faker->word,
                'product_slug' => $faker->slug,
                'product_reference' => $faker->unique()->uuid,
                'product_description' => $faker->sentence,
                'product_details' => $faker->paragraph,
                'product_price' => $faker->randomFloat(2, 1, 100),
                'product_colors' => $faker->randomElement(['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White']),
                'product_status' => $faker->boolean,
                'category_id' => $faker->numberBetween(1, 25),
            ]);

            // Create sample images
            $images = [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
            ];

            foreach ($images as $image) {
                $product->images()->create([
                    'product_image' => $image,
                    'product_id' => $product->id,
                ]);
            }
        }
    }
}

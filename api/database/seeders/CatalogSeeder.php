<?php

namespace Database\Seeders;

use App\Models\store\Catalog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 25; $i++) {
            $catalog = [
                'catalog_name' => $faker->name(),
                'catalog_image' => $faker->imageUrl(),
                'catalog_type' => $faker->randomElement(['TYPE_MANS', 'TYPE_WOMENS', 'TYPE_KIDS', 'TYPE_ACCESSORIES', 'TYPE_OTHERS']),
                'store_id' => $faker->numberBetween(2, 11),
            ];

            Catalog::create($catalog);
        }
    }
}

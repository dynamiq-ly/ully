<?php

namespace Database\Seeders;

use App\Models\store\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 25; $i++) {
            $category = [
                'category_name' => $faker->name(),
                'catalog_id' => $faker->numberBetween(1, 5),
            ];

            Category::create($category);
        }
    }
}

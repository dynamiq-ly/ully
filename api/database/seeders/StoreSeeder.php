<?php

namespace Database\Seeders;

use App\Models\store\Store;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $store = new Store();
        $store->store_logo = 'sample_logo.jpg'; // Replace with your desired logo file name
        $store->store_name = $faker->company;
        $store->store_description = $faker->paragraph;
        $store->store_thumbnail = 'sample_thumbnail.jpg'; // Replace with your desired thumbnail file name
        $store->store_email = $faker->email;
        $store->store_phone = $faker->phoneNumber;
        $store->store_address = $faker->address;
        $store->store_instagram = $faker->userName;
        $store->store_facebook = $faker->userName;
        $store->store_twitter = $faker->userName;
        $store->store_whatsapp = $faker->phoneNumber;
        $store->store_status = $faker->boolean;
        $store->store_is_featured = $faker->boolean;
        $store->store_view_count = $faker->numberBetween(0, 100);
        $store->user_id = 1; // Replace with the desired user ID

        $store->save();
    }
}

<?php

namespace App\Http\Controllers\store;

use App\Http\Controllers\Controller;
use App\Models\store\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Store::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('store_logo')) {
            $request->file('store_logo')->store('public/store/logo');
            $store_logo = $request->file('store_logo')->hashName();
        } else {
            return response()->json(['message' => 'Please upload a store logo'], 400);
        }

        if ($request->hasFile('store_thumbnail')) {
            $request->file('store_thumbnail')->store('public/store/thumbnail');
            $store_thumbnail = $request->file('store_thumbnail')->hashName();
        } else {
            return response()->json(['message' => 'Please upload a store thumbnail'], 400);
        }

        $store = Store::create([
            'store_logo' => $store_logo,
            'store_name' => $request->store_name,
            'store_description' => $request->store_description,
            'store_thumbnail' => $store_thumbnail,
            'store_email' => $request->store_email,
            'store_phone' => $request->store_phone,
            'store_address' => $request->store_address,
            'store_instagram' => $request->store_instagram,
            'store_facebook' => $request->store_facebook,
            'store_twitter' => $request->store_twitter,
            'store_whatsapp' => $request->store_whatsapp,
            'store_status' => $request->store_status,
            'store_is_featured' => $request->store_is_featured,
            'store_view_count' => 0, // Set initial value to 0
            'user_id' => $request->user_id,
        ]);

        return $store;
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $store = Store::find($id);
        $store->update([
            'store_view_count' => $store->store_view_count + 1,
        ]);
        return $store;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $store = Store::find($id);

        if (!$store) {
            return response()->json(['message' => 'Store not found'], 404);
        }

        if ($request->hasFile('store_logo')) {
            $request->file('store_logo')->store('public/store/logo');
            $store->store_logo = $request->file('store_logo')->hashName();
        }

        if ($request->hasFile('store_thumbnail')) {
            $request->file('store_thumbnail')->store('public/store/thumbnail');
            $store->store_thumbnail = $request->file('store_thumbnail')->hashName();
        }

        $store->store_name = $request->store_name;
        $store->store_description = $request->store_description;
        $store->store_email = $request->store_email;
        $store->store_phone = $request->store_phone;
        $store->store_address = $request->store_address;
        $store->store_instagram = $request->store_instagram;
        $store->store_facebook = $request->store_facebook;
        $store->store_twitter = $request->store_twitter;
        $store->store_whatsapp = $request->store_whatsapp;
        $store->store_status = $request->store_status;
        $store->store_is_featured = $request->store_is_featured;
        $store->store_view_count = $request->store_view_count;

        $store->save();

        return $store;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Store::destroy($id);
    }
}

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
        $stores = Store::with('user', 'catalogs.categories.products')->get();

        $result = $stores->map(function ($store) {
            $store->makeHidden('catalogs');

            $store->products_total = $store->catalogs->flatMap(function ($catalog) {
                return $catalog->categories->flatMap(function ($category) {
                    return $category->products;
                });
            })->count();

            return $store;
        });

        return $result;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('store_logo')) {
            $request->file('store_logo')->store('public/store');
            $store_logo = $request->file('store_logo')->hashName();
        } else {
            return response()->json(['message' => 'Please upload a store logo'], 400);
        }

        return Store::create([
            'store_logo' => $store_logo,
            'store_name' => $request->store_name,
            'store_description' => $request->store_description,
            'store_email' => $request->store_email,
            'store_phone' => $request->store_phone,
            'store_address' => $request->store_address,
            'store_instagram' => $request->store_instagram,
            'store_facebook' => $request->store_facebook,
            'store_twitter' => $request->store_twitter,
            'store_whatsapp' => $request->store_whatsapp,
            'store_status' => 1,
            'store_is_featured' => 0,
            'store_view_count' => 0, // Set initial value to 0
            'user_id' => $request->user_id,
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // get store by store_name
        $store = Store::with('catalogs.categories.products')->where('store_name', $id)->first();
        $store->update([
            'store_view_count' => $store->store_view_count + 1,
        ]);
        return $store;
    }

    public function find(string $id)
    {
        // get store by store_name
        $store = Store::with('catalogs.categories.products')->find($id);
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
            $request->file('store_logo')->store('public/store');
            $store->store_logo = $request->file('store_logo')->hashName();
        }

        $store->update($request->only([
            'store_name',
            'store_description',
            'store_email',
            'store_phone',
            'store_address',
            'store_instagram',
            'store_facebook',
            'store_twitter',
            'store_whatsapp',
            'store_status',
            'store_is_featured',
        ]));

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

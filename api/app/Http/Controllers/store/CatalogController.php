<?php

namespace App\Http\Controllers\store;

use App\Http\Controllers\Controller;
use App\Models\store\Catalog;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->input('query');
        $catalog = Catalog::with('categories.products');

        if ($query) {
            return $catalog->where('store_id', $query)->get();
        }

        return $catalog->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('catalog_image')) {
            $request->file('catalog_image')->store('public/product/catalog');
            $catalog_image = $request->file('catalog_image')->hashName();
        } else {
            return response()->json(['message' => 'Please upload a catalog image'], 400);
        }

        return Catalog::create([
            'catalog_name' => $request->catalog_name,
            'catalog_type' => $request->catalog_type,
            'catalog_image' => $catalog_image,
            'store_id' => $request->store_id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Catalog::with('categories')->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $catalog = Catalog::find($id);

        if ($request->hasFile('catalog_image')) {
            $request->file('catalog_image')->store('public/product/catalog');
            $catalog->catalog_image = $request->file('catalog_image')->hashName();
        }

        $catalog->update($request->only([
            'catalog_name',
            'catalog_type',
        ]));

        return $catalog;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Catalog::destroy($id);
    }
}

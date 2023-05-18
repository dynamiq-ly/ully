<?php

namespace App\Http\Controllers\product;

use App\Http\Controllers\Controller;
use App\Models\product\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->input('query');
        $product = Product::with('category', 'images');

        if ($query) {
            return $product->where('category_id', $query)->get();
        }
        return $product->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('image')) {
            $product = Product::create($request->only([
                'product_name',
                'product_slug',
                'product_reference',
                'product_description',
                'product_details',
                'product_price',
                'product_colors',
                'product_status',
                'category_id',
            ]));


            // upload image
            foreach ($request->file('images') as $image) {
                $image->store('public/product/images');
                $product->images()->create([
                    'product_image' => $image->hashName(),
                ]);
            }

            return $product;
        }
        return response()->json(['message' => 'error'], 400);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Product::with('category', 'images')->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Product::destroy($id);
    }
}

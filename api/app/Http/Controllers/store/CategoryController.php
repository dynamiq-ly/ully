<?php

namespace App\Http\Controllers\store;

use App\Http\Controllers\Controller;
use App\Models\store\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->input('query');
        if ($query != null) {
            return Category::with('products')->where('catalog_id', $query)->get();
        }

        return Category::with('products')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Category::create([
            'category_name' => $request->category_name,
            'catalog_id' => $request->catalog_id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Category::with('products')->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);

        $category->update($request->only([
            'category_name' => $request->category_name,
        ]));

        return $category;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Category::destroy($id);
    }
}

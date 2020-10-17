<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\ItemCollection;

class CategoryController extends Controller
{
 
    public function index()
    {

        $length = request()->input('length');

        $query = Category::with( 'items', 'items.itemImages');
        
 
        $categories = $query->paginate($length);

        return (new CategoryCollection($categories))->additional(['meta' => [
            'draw' => request()->input('draw'),
        ]]);
    }


    // public function store(Request $request)
    // {


    //     $title = request('title');
        
    //     if (request()->has('image')) {

    //         $imgFolder = '/images';

    //         if (!is_dir(public_path($imgFolder))) {
    //             mkdir(public_path($imgFolder), 0777);
    //         }

    //         $image = request('image');

    //         $original =  $imgFolder .'/' . $request->title . '.' . $image->getClientOriginalExtension();
           
        
    //         $image->move(public_path($imgFolder), $original);

    //         $speaker = auth()->user()->speakers()
    //         ->create([
    //             'title' => $title,  
    //             'description' => request('description'),  
    //             'image_url' =>  $original

    //             ]);

    //             return \response()->json($title, 201);


    //     } 


    // }



    // public function show($id)
    // {
    //     $speaker = Speaker::with('audio')->findOrFail($id);

    //     return new SpeakerResource($speaker);
    // }

 

 

    // public function update(Request $request, Speaker $speaker)
    // {
    //     $speaker->update(
    //         [
    //             'imageUrl' => $request->imageUrl,
    //             'title' => $request->title,
    //             'description' => $request->description,
    //             'status' => $request->status,
    //         ]
    //         );
    // }

    // public function destroy(Speaker $speaker)
    // {
    //     //
    // }
    
}

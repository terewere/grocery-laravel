<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use App\Http\Resources\ItemCollection;

class ItemController extends Controller
{
    
    public function index()
    {

        // \sleep(3);
        $length = request()->input('length');
        $categoryId = request()->input('category_id');
        $searchValue = request()->input('search');
        $dir = request()->input('dir');


        if ($categoryId == null)  {
            return new AudioCollection([]);
        }

        $query = Item::where('category_id', $categoryId)
        // ->where('status', 'approved')
        ->orderBy('created_at', 'asc');

        if ($searchValue) {
            $query->where(function($query) use ($searchValue) {
                $query->where('title', 'like', '%' . $searchValue . '%')
                ->orWhere('language', 'like', '%' . $searchValue . '%');
            });
        }
       

        $audio = $query->paginate($length);


        // return new AudioCollection($audio);

        return (new ItemCollection($audio))->additional(['meta' => [
            'draw' => request()->input('draw'),
        ]]);
    }



}

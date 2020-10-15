<?php

namespace App\Http\Controllers;

use App\Category;
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

        return (new CategoryCollection($categories)) ;


        // return (new CategoryCollection($categories))->additional(['meta' => [
        //     'draw' => $request->input('draw'),
        // ]]);
    }
        
        // $project_id = request()->input('project_id');

        // $tasks = Task::where('project_id', $project_id)->with(['comments' => function ($query) {
        //     $query->orderBy('created_at', 'desc');
        //  }])->orderBy('tasks.order', 'asc')->get();

        // return new TaskCollection($tasks);
}

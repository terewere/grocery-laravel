<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Resources\OrderCollection;

class OrderController extends Controller
{
   
    public function index()
    {
    
            // \sleep(3);
            $length = request()->input('length');
            $searchValue = request()->input('search');
            $dir = request()->input('dir');
    

            $query = Order::with('user', 'items')
            // ->where('status', 'approved')
            ->orderBy('created_at', 'asc');
    
            if ($searchValue) {
                $query->where(function($query) use ($searchValue) {
                    $query->where('title', 'like', '%' . $searchValue . '%')
                    ->orWhere('language', 'like', '%' . $searchValue . '%');
                });
            }
           
    
            $orders = $query->paginate(200000);
    
    
            return (new OrderCollection($orders))->additional(['meta' => [
                'draw' => request()->input('draw'),
            ]]);
    }

   
    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        //
    }

   
    public function show(Order $order)
    {
        //
    }

  
    public function edit(Order $order)
    {
        //
    }

  
    public function update(Request $request, Order $order)
    {
        //
    }

   
    public function destroy(Order $order)
    {
        //
    }
}

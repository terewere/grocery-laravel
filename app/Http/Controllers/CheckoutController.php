<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\ItemOrder;

class CheckoutController extends Controller
{
  
    public function index()
    {
        //
    }

  
    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {



        logger( \auth()->user());

       $order = auth()->user()->orders()->create(
                [
                   'sub_total' => $request['sub_total'],
                   'shipping_fee' => $request['shipping_fee'],
                   'grand_total' => $request['grand_total'],
                   'payment_method' => $request['payment_method'],
                   'delivery_method' => $request['delivery_method']
                ]

        );
      
        foreach ($request->basket as $key => $value) {

            ItemOrder::create(
                [
                   'item_id' => $value['item']['id'], 
                   'order_id'=> $order->id, 
                   'quantity'=> $value['quantity']
                ]
            );
        }


        \logger($order->user);
        \logger($order->items);



        // "basket": widget.basket,
        // "shipping_fee": shippingFee,
        // "sub_total": subTotal,
        // "grand_total": grandTotal,
        // "payment_method": _payment,
        // "delivery_method": _delivery,
        // $table->integer('discount')->default(0);
        // $table->string('discount_code')->nullable();
        // $table->integer('subtotal')->nullable();
        // $table->integer('tax')->nullable();
        // $table->integer('total')->nullable();
        // $table->string('payment_gateway')->default('hubtel');
        // $table->boolean('shipped')->default(false);
        // $table->string('error')->nullable();





        return response()->json('success');
    }

 
    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }

  
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}

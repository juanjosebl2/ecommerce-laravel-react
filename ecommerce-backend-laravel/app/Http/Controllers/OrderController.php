<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use Carbon\Carbon;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new OrderCollection(Order::with('user')->with('products')->where('state', 0)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $order = new Order();   
        $order->user_id = Auth::user()->id;
        $order->total = $request->total;
        $order->save();

        $products = $request->products;
        $order_product = [];

        foreach($products as $product) {
            $order_product[] = [
                'order_id' => $order->id,
                'product_id' => $product['id'],
                'amount' => $product['amount'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon:: now()
            ];
        }

        //Insert for array
        OrderProduct::insert($order_product);

        return [
            'message' => 'Order succesfully'
            //'products' => $request->products,
            //'amount' => $request->amount
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order->state = 1;
        $order->save();

        return [
            'order' => $order
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}

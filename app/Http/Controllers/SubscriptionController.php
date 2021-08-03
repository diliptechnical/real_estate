<?php

namespace App\Http\Controllers;

use App\Models\subscription;
use App\Models\Transaction;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function usersubscription(Request $request){
        // return $request;
        $payment = json_decode($request->payment);
        // return $payment->razorpay_payment_id;
        $subs = new subscription;
        $subs->uid = $request->uid;
        $subs->start_date = date("Y/m/d");
        $subs->end_date = date("Y/m/d");
        $subs->month = $request->month;
        $subs->status = 1;
        $subs->save();
        $transaction = new Transaction;
        // $transaction->id = $payment->razorpay_payment_id;
        $transaction->payable_type = 'online';
        $transaction->payable_id = $request->uid;
        $transaction->type = 'deposit';
        $transaction->amount = $request->amount;
        $transaction->confirmed = 1;
        // $transaction->uuid = $request->uid;
        $transaction->save();
        return ['status'=>'success','data'=>$subs->id];
    }
}

<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Validator;
use Image;

class TransactionController extends Controller
{
    public function detail($id){
        $data=Transaction::where('payable_id',$id)->get();
        return $data;
    }
}

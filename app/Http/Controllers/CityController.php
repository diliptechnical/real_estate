<?php

namespace App\Http\Controllers;

use App\Models\CityModel;
use Illuminate\Http\Request;

class CityController extends Controller
{
    //
    public function getcity($name){
        // return $name;
        return CityModel::where('state',$name)->get();
    }
}

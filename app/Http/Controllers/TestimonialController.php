<?php

namespace App\Http\Controllers;

use App\Models\testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    //
    public function testimonialdata(){
        return testimonial::where('status',1)->get();

    }
}

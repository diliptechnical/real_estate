<?php

namespace App\Http\Controllers;

use App\Models\Cms;
use Illuminate\Http\Request;

class CmsController extends Controller
{
    
    public function detail(){
        return Cms::where('linkname','aboutus')->first();
    }
}

<?php

namespace App\Http\Controllers;

use App\Imports\IconImport;
use App\Models\Icons;
use Illuminate\Http\Request;

class IconsController extends Controller
{
    public function importFile(Request $request){
        \Excel::import(new IconImport,$request->import_file);

        \Session::put('success', 'Your file is imported successfully in database.');
           
        return back();
    }
}

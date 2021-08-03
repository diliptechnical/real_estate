<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\PropertyModel;
use App\Models\Setting;
use App\Models\User;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = User::all();
        $contact = Contact::all();
        $property = PropertyModel::all();
        $setting = Setting::all();
        return view('home', compact('user','contact','property','setting'));
    }
    public function website()
    {
        // $user = User::all();
        return view('website.home');
        // return view('home', compact('user'));
    }
}

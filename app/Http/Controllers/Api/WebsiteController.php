<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Cms;

use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $cms = Cms::all();
        return view('website.home', compact('cms'));
    }
    public function contact()
    {
        $cms = Cms::all();
        return view('website.contact', compact('cms'));
    }
    public function about()
    {
        $cms = Cms::all();
        return view('website.pages.about', compact('cms'));
    }

    public function it_resourcing()
    {
        $cms = Cms::all();
        return view('website.services.it_resourcing', compact('cms'));
    }
    public function digital_marketing()
    {
        $cms = Cms::all();
        return view('website.services.digital_marketing', compact('cms'));
    }
    public function software()
    {
        $cms = Cms::all();
        return view('website.services.software', compact('cms'));
    }
    public function development()
    {
        $cms = Cms::all();
        return view('website.services.development', compact('cms'));
    }
    public function mobileapp()
    {
        $cms = Cms::all();
        return view('website.services.mobileapp', compact('cms'));
    } public function websitedesign()
    {
        $cms = Cms::all();
        return view('website.services.websitedesign', compact('cms'));
    }
}

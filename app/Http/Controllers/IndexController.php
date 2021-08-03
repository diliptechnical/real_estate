<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        $settingData = [
            "logo" => "pinglodex",
            "site_name" => "pinglodex"
        ];
        return view('front', ["setting" => $settingData]);
    }
    public function admin()
    {
        $settingData = [
            "logo" => "pinglodex",
            "site_name" => "pinglodex"
        ];
        return view('admin', ["setting" => $settingData]);
    }
    public function news()
    {
        $settingData = [
            "logo" => "pinglodex",
            "site_name" => "news"
        ];
        return view('news', ["setting" => $settingData]);
    }
}

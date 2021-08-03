<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function all()
    {
    $aryReturn = array();
    $arySetData = Setting::where('status', 1)->get();
    // return $arySetData;
    if ($arySetData) {
        foreach ($arySetData as $iSetData) {
            $aryReturn[$iSetData['name']] = $iSetData['value'];
        }
    }
    return $aryReturn;
    }
}

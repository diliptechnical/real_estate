<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PropertyModel;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function allProperty (){
         $allPropertyModel = PropertyModel::all();
         return $allPropertyModel;
     }
     public function relatedProperty(Request $request){
         $feature = PropertyModel::where('category', $request->get('id'))->limit(9);
         return $feature->get();
     }
     public function getSinglePropertyModel($PropertyModelID){
         //return [$PropertyModelID];
         $PropertyModel = PropertyModel::find($PropertyModelID);
        // dd(DB::getQueryLog());
         return $PropertyModel;
     }
     public function PropertyModelDetail(Request $request){
         //return ["a","b"];
         $PropertyModel = PropertyModel::find($request->get('id'));
         // $PropertyModel['rating'] = Rating::select('rating')->where('pid'$PropertyModel['pid'])->get();
         return $PropertyModel;
 
     }
 
     public function getPropertyModelByType($type){
         //$allPropertyModel = PropertyModel::all();
     }
     public function savePropertyModel(Request $request){
         //$allPropertyModel = PropertyModel::all();
     }
     public function featureProperty(){
          $feature = PropertyModel::where('is_featured', 1)
          ->orderBy('id', 'desc')->limit(9);
          return $feature->get();
      }
      public function discountProperty(){
         $discount = PropertyModel::where('is_offer', 1)
         ->orderBy('id', 'desc')->limit(4);
         return $discount->get();
     }
     public function latestProperty(){
         $discount = PropertyModel::where('status', 1)
         ->orderBy('id', 'desc')->limit(9);
         return $discount->get();
     }
     public function pageProperty(Request $request){
         new Category();
         $cid = [];
         if($request->get('name')=='NewIn'){
         return PropertyModel::where('status', 1)->orderBy('id', 'desc')->limit(20)->get();
         }
         
         $cid = Category::where('linkname', $request->get('name'))->first();
         if($cid){
         // return $cid; 
         $pdata = PropertyModel::where('category', $cid['id'])
         ->orderBy('id', 'desc')->get();
             return $pdata;
         }else{
             $cid = brandModel::where('linkname', $request->get('name'));
         $catid = $cid->get('id')->first();
         //return $catid['id']; 
         $pdata = PropertyModel::where('brand_id', $catid['id'])
         ->orderBy('id', 'desc')->get();
         return $pdata;
         }
         
     }
     
     public function searchMyProperty(Request $request){ 
         $pdata = PropertyModel::where('name', 'like', "%{$request->get('name')}%")
         ->orderBy('id', 'desc');
         return $pdata->get();
     }
 
     public function allPropertyModelsdata(){
        // return ["a","b"];
         $datas = PropertyModel::all();
         return $datas;
     }
     public function PropertyModelpageData(Request $request){
         // return $request;
          $page = PropertyModel::where('id', $request->get('id'));
          return $page->get();
      }
}

<?php

namespace App\Http\Controllers;

use App\Models\Amenities;
use App\Models\CityModel;
use App\Models\mostview;
use App\Models\PropertyModel;
use App\Models\wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertyController extends Controller
{
    public function allProperty (Request $request){

        if($request->val==1){
            return PropertyModel::where('status',1)->orderBy('id', 'DESC')->get();

        }else{
            return PropertyModel::where('status',1)->orderBy('id', 'ASC')->get();

        }
        $allPropertyModel = PropertyModel::where('status',1)->get();
        // return $allPropertyModel;
        $data = [];
        $i = 0;
        foreach($allPropertyModel as $feat){
           $data[$i]['id']  = $feat['id'];
           $data[$i]['front_image']  = $feat['front_image'];
           $data[$i]['name']  = $feat['name'];
           $data[$i]['location']  = $feat['location'];
           $data[$i]['selling_cost']  = $feat['selling_cost'];
           $data[$i]['state']  = $feat['state'];
           $data[$i]['city']  = $feat['city'];
           $data[$i]['udate']  = $feat['udate'];
           $data[$i]['area']  = $feat['area'];
           $data[$i]['amenity']  = $this->getamenity($feat['amenity']);
            $i++;
        }
       return $data;
    }
    public function allPropertyOld (){
        $allPropertyModel = PropertyModel::where('status',1)->orderBy('id', 'asc')->get();
        return $allPropertyModel;
    }
    public function mostview(Request $request){
            $mostview = new mostview;
            $mostview->pid = $request->id;
            $mostview->ip_address = $request->ip_address;
            $mostview->uid = $request->ip_addressuid;
            $mostview->status = 1;
            return $mostview->save();
    }
    public function mostviewedproperty(){

        $pid = mostview::whereIn('status',[1,0])->select('pid')->distinct()->get();
        // return  $pid;
        $property = PropertyModel::whereIn('id',$pid)->get();
        $data = [];
        $i = 0;
        foreach($property as $feat){
           $data[$i]['id']  = $feat['id'];
           $data[$i]['front_image']  = $feat['front_image'];
           $data[$i]['name']  = $feat['name'];
           $data[$i]['location']  = $feat['location'];
           $data[$i]['selling_cost']  = $feat['selling_cost'];
           $data[$i]['state']  = $feat['state'];
           $data[$i]['city']  = $feat['city'];
           $data[$i]['udate']  = $feat['udate'];
           $data[$i]['area']  = $feat['area'];
           $data[$i]['amenity']  = $this->getamenity($feat['amenity']);
            $i++;
        }
       return $data;
    }
    public function featuredproperty(){
        $allPropertyModel = PropertyModel::where('is_featured',1)->get();
        $data = [];
        $i = 0;
        foreach($allPropertyModel as $feat){
           $data[$i]['id']  = $feat['id'];
           $data[$i]['front_image']  = $feat['front_image'];
           $data[$i]['name']  = $feat['name'];
           $data[$i]['location']  = $feat['location'];
           $data[$i]['selling_cost']  = $feat['selling_cost'];
           $data[$i]['state']  = $feat['state'];
           $data[$i]['city']  = $feat['city'];
           $data[$i]['udate']  = $feat['udate'];
           $data[$i]['area']  = $feat['area'];
           $data[$i]['amenity']  = $this->getamenity($feat['amenity']);
            $i++;
        }
       return $data;
        // return $allPropertyModel;
    }
    public function relatedProperty(Request $request){
        $feature = PropertyModel::where('category', $request->get('id'))->limit(9);
        return $feature->get();
    }
    public function searchproduct($name){
        // return $name;
        $pdata = PropertyModel::where('name', 'like', "%{$name}%")->orWhere('state', 'like', '%' . $name . '%')->orWhere('city', 'like', '%' . $name . '%')
        ->orderBy('id', 'desc')->get();
        return $pdata;
    }
    public function getSinglePropertyModel($id){

        $PropertyModel = PropertyModel::find($id);
        $amenity =  json_decode($PropertyModel->amenity);
        $amenities = Amenities::whereIn('id',$amenity)->get();
        $PropertyModel->amenity = $amenities;
        return  $PropertyModel;

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
         ->orderBy('id', 'desc')->limit(9)->get();
         $data = [];
         foreach($feature as $feat){
            $data['id']  = $feat['id'];
            $data['front_image']  = $feat['front_image'];
            $data['name']  = $feat['name'];
            $data['location']  = $feat['location'];
            $data['state']  = $feat['state'];
            $data['city']  = $feat['city'];
            $data['area']  = $feat['area'];
            $data['amenity']  = $this->getamenity($feat['amenity']);

         }
        return $data;

     }
     public function getamenity($data){
         $decode = json_decode($data);
         return Amenities::whereIn('id',$decode)->get();
        // return json_decode($data);
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
     public function premiumfilter(Request $request){
         return $request;
        $property_age = array();
        $build_up_area = array();
        $area = array();
        $floor_preference = array();
        if(!empty($request->property_age)){
           $property_age = $request->property_age;
        }
        if(!empty($request->build_up_area)){
           $build_up_area = $request->build_up_area;
        }
        if(!empty($request->area)){
           $area = $request->area;
        }
        if(!empty($request->$floor_preference)){
            $floor_preference = $request->floor_preference;
        }
        $filterData =  PropertyModel::whereIn('property_age', $property_age)
       ->orWhereIn('property_type', $build_up_area)
       ->orWhereIn('apartment_type',  $area)
       ->orWhereIn('property_status',  $floor_preference)
       ->get();
       $data = [];
        $i = 0;
        foreach($filterData as $feat){
           $data[$i]['id']  = $feat['id'];
           $data[$i]['front_image']  = $feat['front_image'];
           $data[$i]['name']  = $feat['name'];
           $data[$i]['location']  = $feat['location'];
           $data[$i]['selling_cost']  = $feat['selling_cost'];
           $data[$i]['state']  = $feat['state'];
           $data[$i]['city']  = $feat['city'];
           $data[$i]['udate']  = $feat['udate'];
           $data[$i]['area']  = $feat['area'];
           $data[$i]['amenity']  = $this->getamenity($feat['amenity']);
            $i++;
        }
        return $data;
     }
     public function addtowishlist(Request $request){
            // return $request;
            if($request['uid']==null){
            $result = wishlist::where("ip_address",$request["ip_address"])->where("product_id",$request["product_id"])->first();
            }else{
            $result = wishlist::where("uid",$request["uid"])->where("product_id",$request["product_id"])->first();
            }
            if(!$result){
                $record= new wishlist; //then create new object
                unset($request["id"]);
                $data = $record->create($request->all());
                return ["status"=>"success","data"=> $data];

           }else{
            $result->delete();
            return ["status"=>"success","msg"=>"Item Remove from whishlist"];
           }
     }
     public function getWhishlistProduct(Request $request){
        $productData = [];
        // return $request;
        if(!$request["uid"]){
        $result = wishlist::where("ip_address",$request["ip_address"])->get();
        // return $result;
        $i=0;
        foreach($result as $re){
        $productData[$i] =  PropertyModel::find($re['product_id']);
        $i++;}
        return $productData;
        }else{
        $result = wishlist::where("uid",$request["uid"])->get();
        // return $result;
        $i=0;
        foreach($result as $re){
        $productData[$i] =  PropertyModel::find($re['product_id']);
        $i++;}
            return $productData;
        }
        // return $productData;
    }
     public function searchfilter(Request $request){
         $property_type = array();
         $apartment_type = array();
         $property_status = array();
         if(!empty($request->property_type)){
            $property_type = $request->property_type;
         }
         if(!empty($request->apartment_type)){
            $apartment_type = $request->apartment_type;
         }
         if(!empty($request->property_status)){
            $property_status = $request->property_status;
         }
        //  DB::enableQueryLog();


        $filterData =  PropertyModel::whereIn('selling_cost', $request->range)
        ->orWhereIn('property_type', $property_type)
        ->orWhereIn('apartment_type',  $apartment_type)
        ->orWhereIn('property_status',  $property_status)
        ->get();
//         $query = DB::getQueryLog();
// print_r($query);
        $data = [];
        $i = 0;
        // return $filterData;
        foreach($filterData as $feat){
           $data[$i]['id']  = $feat['id'];
           $data[$i]['front_image']  = $feat['front_image'];
           $data[$i]['name']  = $feat['name'];
           $data[$i]['location']  = $feat['location'];
           $data[$i]['selling_cost']  = $feat['selling_cost'];
           $data[$i]['state']  = $feat['state'];
           $data[$i]['city']  = $feat['city'];
           $data[$i]['udate']  = $feat['udate'];
           $data[$i]['area']  = $feat['area'];
           $data[$i]['amenity']  = $this->getamenity($feat['amenity']);
            $i++;
        }
        return $data;
     }
}

<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Amenities;
use App\Models\AmenitiesProperty;
use App\Models\CityModel;
use App\Models\PropertyModel;
use Illuminate\Http\Request;
use Validator;
use Image;
// // use Illuminate\Support\Facades\Input;

class PropertyController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $category = PropertyModel::where('status', 1)->get();

        return view('admin.property.index', compact('category'));
    }
    public function create(Request $request)
    {
        $state = CityModel::select('state')->distinct()->get();
        $amenities = Amenities::all();
        return view('admin.property.create',compact('state','amenities'));
    }
    public function store(Request $request)
    {
        // return Input::hasfile('plan_images');
        // return $request->file('plan_images');
        // if(Input::hasfile('image'))
        // {
        //     $request->file('image')->move(public_path('img/products/'), $request->file('image')->getClientOriginalName());

        //     $product->image = 'img/products/' . $request->file('image')->getClientOriginalName();
        // }
        $category = new PropertyModel;
        $request["status"] = $request["status"] ? 1 : 0;
        $request["is_featured"] = $request["is_featured"] ? 1 : 0;
        if($request->file('front_image')){
            $png_url = "property-" . time() . ".png";
            $path = public_path() . '/uploads/property/' . $png_url;
            Image::make(file_get_contents($request["front_image"]))->save($path);
            $request["front_image"] = $png_url;
        $category->front_image = ($request->get("front_image"));

        }
    //    return $request->file('floor_plan');
        $images=array();
        if($request->file('floor_plan')){
            $files=$request->file('floor_plan');
            foreach($files as $file){
                $name=$file->getClientOriginalName();
                // $file->move(public_path() . '/uploads/floorplan' .$name);
                // $request["floor_plan"]=$name;
                $path = public_path() . '/uploads/floorplan';
                $file->move($path, $name);
                $images[]=$name;
            }
        $category->floor_plan = json_encode($images);
        }

        $category->property_type = ($request->get("property_type"));
        $category->property = ($request->get("property"));
        $category->apartment_type = ($request->get("apartment_type"));
        $category->property_status = ($request->get("property_status"));
        $category->built_up_area = ($request->get("built_up_area"));
        $category->floor_preference = ($request->get("floor_preference"));
        $category->property_age = ($request->get("property_age"));

        $category->name = ($request->get("name"));
        $category->amenity = (json_encode($request->get("amenity")));
        $category->video = ($request->get("video"));
        $category->front_image = ($request->get("front_image"));
        $category->floor_plan = ($request->get("floor_plan"));
        $category->area = ($request->get("area"));
        $category->selling_cost = ($request->get("selling_cost"));
        $category->deposite_price = ($request->get("deposite_price"));
        $category->state = ($request->get("state"));
        $category->city = ($request->get("city"));
        $category->location = ($request->get("location"));
        $category->detail = ($request->get("detail"));
        $category->is_featured = ($request->get("is_featured"));
        $category->status = ($request->get("status"));
        $category->save();

        return redirect()->route('admin.property.index');
    }

    public function edit($id)
    {
        $category = PropertyModel::where('id', $id)->first();
        $state = CityModel::select('state')->distinct()->get();
        $amenities = Amenities::all();
        return view('admin.property.edit', compact('category','state','amenities'));
    }

    public function update(Request $request, PropertyModel $category)
    {
        // return $request->amenity;

        $category = PropertyModel::find($request->id);
        if($category){
        $request["status"] = $request["status"] ? 1 : 0;
        $request["is_featured"] = $request["is_featured"] ? 1 : 0;
        if($request->file('front_image') && $category->front_image != $request->file('front_image')){
            $png_url = "property-" . time() . ".png";
            $path = public_path() . '/uploads/property/' . $png_url;
            Image::make(file_get_contents($request["front_image"]))->save($path);
            $request["front_image"] = $png_url;
        $category->front_image = ($request->get("front_image"));

        }


        $images=array();
        if($files=$request->file('floor_plan')){
            foreach($files as $file){
                $name=$file->getClientOriginalName();
                // $file->move(public_path() . '/uploads/floorplan' .$name);
                // $request["floor_plan"]=$name;
                $path = public_path() . '/uploads/floorplan';
                $file->move($path, $name);
                $images[]=$name;
            }
        $category->floor_plan = json_encode($images);
        }
        // return  $images;
        if($request->amenity && $category->amenity != $request->amenity){
        $category->amenity = (json_encode($request->get("amenity")));
        }
        $category->apartment_type = ($request->get("apartment_type"));
        $category->property_status = ($request->get("property_status"));
        $category->built_up_area = ($request->get("built_up_area"));
        $category->floor_preference = ($request->get("floor_preference"));
        $category->property_age = ($request->get("property_age"));
        $category->property_type = ($request->get("property_type"));
        $category->property = ($request->get("property"));
        $category->name = ($request->get("name"));
        $category->area = ($request->get("area"));
        $category->video = ($request->get("video"));
        $category->selling_cost = ($request->get("selling_cost"));
        $category->deposite_price = ($request->get("deposite_price"));
        $category->state = ($request->get("state"));
        $category->city = ($request->get("city"));
        $category->location = ($request->get("location"));
        $category->detail = ($request->get("detail"));
        $category->is_featured = ($request->get("is_featured"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.property.index');
        }

    }

    public function show($id)
    {
        $category = PropertyModel::find($id);

        return view('admin.property.show', compact('category'));
    }

    public function destroy(PropertyModel $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = PropertyModel::whereIn("status",[0,1]);
        if($q && $q!=''){
            $allPages->where("heading",'like','%'.$q.'%');
        }
        if ($allPages) {
            return $allPages->paginate($this->limit);
        } else {
            return ["total" => 0];
        }
    }
    public function detail($id){
        return PropertyModel::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = PropertyModel::select($select)->whereIn("status",[0,1]);
        if ($allPages) {
            $allData = [];
            $data=$allPages->get();
            foreach($data as $info){
                if($info["underof"]){
                    $info["underof"] = $info->underof()->select($select)->first();
                }
                $allData[]=$info;
            }
            //return $allData;
            return ["status"=>"success","data"=>$allData];
        } else {
            return ["status" => "error"];
        }
    }
    public function submit(Request $request){
        $validator = Validator::make($request->all(), [
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:PropertyModel|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = PropertyModel::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new PropertyModel; //then create new object
            unset($request["id"]);
            $data = $record->create($request->all());
            return ["status"=>"success","data"=> $data];
        }
        unset($request["created_at"]);
        unset($request["updated_at"]);
        $data = $record->where("id",$request->id)->update($request->all());
        return ["status"=>"success","data"=> $data];
    }
    public function remove(Request $request){
        $result = PropertyModel::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function cmspage($name){
        $result = PropertyModel::where('linkname',$name);

        return $result;
    }
}

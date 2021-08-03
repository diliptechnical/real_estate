<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Amenities;
use App\Models\Icons;
use Illuminate\Http\Request;
use Validator;
use Image;

class AmenitiesController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $category = Amenities::whereIn('status', [1,0])->get();
        return view('admin.amenities.index', compact('category'));
    }
    public function create(Request $request)
    {
        $icon = Icons::all();

        return view('admin.amenities.create', compact( 'icon'));
    }

    public function store(Request $request)
    {
        // return $request;
        $category = new Amenities;
        $request["status"] = $request["status"] ? 1 : 0;
        // $png_url = "amenities-" . time() . ".png";
        // $path = public_path() . '/uploads/amenities/' . $png_url;
        // Image::make(file_get_contents($request["value"]))->save($path);
        // $request["value"] = $png_url;
        $category->name = ($request->get("name"));
        $category->value = ($request->get("value"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.amenities.index');
    }

    public function edit($id)
    {
        $category = Amenities::where('id', $id)->first();
        $icon = Icons::all();


        return view('admin.amenities.edit', compact('category','icon'));
    }

    public function update(Request $request, Amenities $category)
    {
        // return $request;
        $category = Amenities::find($request->id);
        if($category){
        $request["status"] = $request["status"] ? 1 : 0;
        // $png_url = "amenities-" . time() . ".png";
        // $path = public_path() . '/uploads/amenities/' . $png_url;
        // Image::make(file_get_contents($request["value"]))->save($path);
        // $request["value"] = $png_url;
        $category->name = ($request->get("name"));
        $category->value = ($request->get("value"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.amenities.index');
        }
    }

    public function show($id)
    {
        $category = Amenities::find($id);
        return view('admin.amenities.show', compact('category'));
    }

    public function destroy(Amenities $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = Amenities::whereIn("status",[0,1]);
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
        return Amenities::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = Amenities::select($select)->whereIn("status",[0,1]);
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
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:Amenities|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = Amenities::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new Amenities; //then create new object
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
        $result = Amenities::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function Amenitiespage($name){
        $result = Amenities::where('linkname',$name);

        return $result;
    }
}

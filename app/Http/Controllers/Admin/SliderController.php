<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SliderModel;
use Illuminate\Http\Request;
use Image;

class SliderController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $category = SliderModel::whereIn('status', [1,0])->get();

        return view('admin.slider.index', compact('category'));
    }
    public function create(Request $request)
    {
        return view('admin.slider.create');
    }
    public function store(Request $request)
    {
        $category = new SliderModel;
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "slider-" . time() . ".png";
        $path = public_path() . '/uploads/slider/' . $png_url;
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->heading = ($request->get("heading"));
        $category->detail = ($request->get("details"));
        $category->image = ($request->get("image"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.slider.index');
    }

    public function edit($id)
    {
        $category = SliderModel::where('id', $id)->first();

        return view('admin.slider.edit', compact('category'));
    }

    public function update(Request $request, SliderModel $category)
    {
        $category = SliderModel::find($request->id);
        if($category){
        if($category->image != $request["image"] && isset($request["image"])){
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "slider-" . time() . ".png";
        $path = public_path() . '/uploads/slider/' . $png_url;
        }
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->heading = ($request->get("heading"));
        $category->detail = ($request->get("details"));
        $category->image = ($request->get("image"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.slider.index');
        }
    }

    public function show($id)
    {
        $category = SliderModel::find($id);

        return view('admin.slider.show', compact('category'));
    }

    public function destroy(SliderModel $category)
    {

        $category->delete();

        return back();
    }
    public function all($q=""){

        $allPages = SliderModel::whereIn("status",[0,1]);
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
        return SliderModel::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = SliderModel::select($select)->whereIn("status",[0,1]);
        if ($allPages) {
            $allData = [];
            $data=$allPages->get();
            foreach($data as $info){
                if($info["underof"]){
                    $info["underof"] = $info->underof()->select($select)->first();
                }
                $allData[]=$info;
            }
            return ["status"=>"success","data"=>$allData];
        } else {
            return ["status" => "error"];
        }
    }
    public function submit(Request $request){
        $validator = Validator::make($request->all(), [
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:SliderModel|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = SliderModel::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new SliderModel; //then create new object
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
        $result = SliderModel::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function cmspage($name){
        $result = SliderModel::where('linkname',$name);

        return $result;
    }
}

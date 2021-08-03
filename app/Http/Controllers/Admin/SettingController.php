<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Image;

class SettingController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }

    public function index()
    {
        $category = Setting::where('status', 1)->get();

        return view('admin.setting.index', compact('category'));
    }
    public function create(Request $request)
    {
        // $parent = Setting::where('underof', $request->id)->get();
        // }
        return view('admin.setting.create');
    }

    public function store(Request $request)
    {
        // return $request;
        $category = new Setting;
        if($request->selecttype==1){
            $png_url = "Setting-" . time() . ".png";
            $path = public_path() . '/uploads/Setting/' . $png_url;
            Image::make(file_get_contents($request["value"]))->save($path);
            $request["value"] = $png_url;
        }
        $request["status"] = $request["status"] ? 1 : 0;

        $category->name = ($request->get("name"));
        $category->value = ($request->get("value"));
        $category->type = ($request->get("selecttype"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.setting.index');
    }

    public function edit($id)
    {
        $category = Setting::where('id', $id)->first();

        return view('admin.setting.edit', compact('category'));
    }

    public function update(Request $request, Setting $category)
    {
        $category = Setting::find($request->id);
        // return $category;

        if($category){
        $request["status"] = $request["status"] ? 1 : 0;
        if($category->type==1){
        $png_url = "Setting-" . time() . ".png";
        $path = public_path() . '/uploads/Setting/' . $png_url;
        Image::make(file_get_contents($request["value"]))->save($path);
        $request["value"] = $png_url;
        }
        $category->name = ($request->get("name"));
        $category->value = ($request->get("value"));
        $category->status = ($request->get("status"));
        // return $category;
        $category->update();
        return redirect()->route('admin.setting.index');
        }else{
            $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "Setting-" . time() . ".png";
        $path = public_path() . '/uploads/Setting/' . $png_url;
        Image::make(file_get_contents($request["value"]))->save($path);
        $request["value"] = $png_url;
        $category->name = ($request->get("name"));
        $category->value = ($request->get("value"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.setting.index');
        }
    }

    public function show(Setting $category)
    {

        return view('admin.setting.show', compact('category'));
    }

    public function destroy(Setting $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = Setting::whereIn("status",[0,1]);
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
        return Setting::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = Setting::select($select)->whereIn("status",[0,1]);
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
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:Setting|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = Setting::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new Setting; //then create new object
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
        $result = Setting::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function Settingpage($name){
        $result = Setting::where('linkname',$name);

        return $result;
    }
}

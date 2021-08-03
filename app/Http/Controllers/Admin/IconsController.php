<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Icons;
use Illuminate\Http\Request;
// use App\Exports\TransactionsExport;
use App\Imports\IconImport;
use App\Exports\IconsExport;
use Maatwebsite\Excel\Facades\Excel;
use Image;

class IconsController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    // public function importFile(Request $request){

    //     // return $request->importfile;

    // }
    public function export()
    {
        // return 'yes';
        return Excel::download(new IconsExport, 'icons.xlsx');
    }
    public function import(Request $request){
        // return $request;
        \Excel::import(new IconImport,$request->importfile);

        \Session::put('success', 'Your file is imported successfully in database.');

        return back();
    }
    public function index(Request $request)
    {
        $category = Icons::whereIn('status', [1,0])->get();
        return view('admin.icons.index', compact('category'));
    }
    public function create(Request $request)
    {
        return view('admin.icons.create');
    }

    public function store(Request $request)
    {
        // return $request;
        $category = new Icons;
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "Icons-" . time() . ".png";
        $path = public_path() . '/uploads/Icons/' . $png_url;
        Image::make(file_get_contents($request["value"]))->save($path);
        $request["value"] = $png_url;
        $category->name = ($request->get("name"));
        $category->image = ($request->get("value"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.icons.index');
    }

    public function edit($id)
    {
        $category = Icons::where('id', $id)->first();
        $icon = Icons::all();


        return view('admin.icons.edit', compact('category','icon'));
    }

    public function update(Request $request, Icons $category)
    {
        // return $request;
        $category = Icons::find($request->id);
        if($category){
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "Icons-" . time() . ".png";
        $path = public_path() . '/uploads/Icons/' . $png_url;
        Image::make(file_get_contents($request["value"]))->save($path);
        $request["value"] = $png_url;
        $category->name = ($request->get("name"));
        $category->image = ($request->get("value"));
        $category->status = ($request->get("status"));
        $category->update();
        return redirect()->route('admin.icons.index');
        }
    }

    public function show($id)
    {

        $category = Icons::find($id);

        return view('admin.icons.show', compact('category'));
    }

    public function destroy(Icons $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = Icons::whereIn("status",[0,1]);
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
        return Icons::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = Icons::select($select)->whereIn("status",[0,1]);
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
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:Icons|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = Icons::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new Icons; //then create new object
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
        $result = Icons::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function Iconspage($name){
        $result = Icons::where('linkname',$name);

        return $result;
    }
}

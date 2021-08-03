<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\agent;
use Illuminate\Http\Request;
use Image;

class AgentController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $category = agent::whereIn('status', [1,0])->get();
        return view('admin.agent.index', compact('category'));
    }
    public function create(Request $request)
    {
        // $icon = Icons::all();

        return view('admin.agent.create');
    }

    public function store(Request $request)
    {
        // return $request;
        $category = new agent;
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "agent-" . time() . ".png";
        $path = public_path() . '/uploads/agent/' . $png_url;
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->content = ($request->get("detail"));
        $category->name = ($request->get("name"));
        $category->post = ($request->get("post"));
        $category->image = ($request->get("image"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.agent.index');
    }

    public function edit($id)
    {
        $category = agent::where('id', $id)->first();


        return view('admin.agent.edit', compact('category'));
    }

    public function update(Request $request, agent $category)
    {
        // return $request;
        $category = agent::find($request->id);
        if($category){
        $request["status"] = $request["status"] ? 1 : 0;
        if($request->file('image') && $category->image != $request->file('image')){
        $png_url = "agent-" . time() . ".png";
        $path = public_path() . '/uploads/agent/' . $png_url;
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->image = ($request->get("image"));
        }
        $category->content = ($request->get("detail"));
        $category->name = ($request->get("name"));
        $category->post = ($request->get("post"));
        $category->status = ($request->get("status"));
        $category->update();
        return redirect()->route('admin.agent.index');
        }
    }

    public function show($id)
    {
      $category = agent::find($id);
        return view('admin.agent.show', compact('category'));
    }

    public function destroy(agent $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = agent::whereIn("status",[0,1]);
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
        return agent::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = agent::select($select)->whereIn("status",[0,1]);
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
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:agent|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = agent::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new agent; //then create new object
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
        $result = agent::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function agentpage($name){
        $result = agent::where('linkname',$name);

        return $result;
    }
}

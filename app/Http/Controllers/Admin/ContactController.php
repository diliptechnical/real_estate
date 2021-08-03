<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $users = Contact::whereIn('status', [1,0])->get();
// return $users;
        return view('admin.Contact.index', compact('users'));
    }
    public function create(Request $request)
    {
        // $parent = Contact::where('underof', $request->id)->get();
        // }
        return view('admin.Contact.create');
    }

    public function store(Request $request)
    {
        $users = new Contact;
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "Contact-" . time() . ".png";
        $path = public_path() . '/uploads/Contact/' . $png_url;
        Image::make(file_get_contents($request["value"]))->save($path);
        $request["value"] = $png_url;
        $users->name = ($request->get("name"));
        $users->value = ($request->get("value"));
        $users->status = ($request->get("status"));
        $users->save();
        return redirect()->route('admin.Contact.index');
    }

    public function edit($id)
    {
        $user = Contact::where('id', $id)->first();

        return view('admin.Contact.edit', compact('user'));
    }

    public function update(Request $request, Contact $users)
    {
        // return $request;
        $users = Contact::find($request->id);
        if($users){
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "Contact-" . time() . ".png";
        $path = public_path() . '/uploads/Contact/' . $png_url;
        Image::make(file_get_contents($request["value"]))->save($path);
        $request["value"] = $png_url;
        $users->name = ($request->get("name"));
        $users->value = ($request->get("value"));
        $users->status = ($request->get("status"));
        $users->save();
        return redirect()->route('admin.Contact.index');
        }
    }

    public function show($id)
    {
        $users = Contact::where('id', $id)->first();

        return view('admin.Contact.show', compact('users'));
    }

    public function destroy(Contact $users)
    {
        // abort_unless(\Gate::allows('users_delete'), 403);

        $users->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = Contact::whereIn("status",[0,1]);
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
        return Contact::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = Contact::select($select)->whereIn("status",[0,1]);
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
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:Contact|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = Contact::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new Contact; //then create new object
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
        $result = Contact::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function Contactpage($name){
        $result = Contact::where('linkname',$name);

        return $result;
    }
}

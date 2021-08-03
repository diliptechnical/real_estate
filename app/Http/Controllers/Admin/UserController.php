<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Category;
use App\Models\MyDocument;
use Validator;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;
use AddMetaWalletsTable;
use App\Models\UserRequest;
use App\Models\MyWallet;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:5|max:255',
        ]);

        if ($validator->fails()) {
            return ["status"=>"error"];
        }
        $checkUser = User::where("email", $request->input('email'))->where("password", $request->input('password'));
        if($checkUser){
            return ["status"=>"success","data"=>$checkUser->first()];
        }
    }
    public function all(Request $request,$q=""){
        $allRecord = User::whereIn("status",[0,1]);
        if($q && $q!=''){
            $allRecord->where("heading",'like','%'.$q.'%');
        }
        if($request["role"] && $request["role"]!=''){
            $allRecord->whereHas('role', function ($query) use ($request) {
                $query->where('name',$request["role"]);
            });
        }
        if ($allRecord) {
            return $allRecord->paginate($this->limit);
        } else {
            return ["total" => 0];
        }
    }
    public function allusers($id){
        $allRecord = User::where("role_id",$id)->get();
        return count($allRecord);
    }
    public function detail($id){
        return User::find($id);
    }
    public function document($id){
        $data = [];
        $alldocument = MyDocument::where("user_id", $id)->get();
        $i=0;
        foreach($alldocument as $doc){
            $data[$i]["id"] = $doc["id"];
            $data[$i]["user_id"] = $doc["user_id"];
            $data[$i]["category_id"] = $this->getcategory($doc["category_id"]);
            $data[$i]["document"] = $doc["document"];
            $data[$i]["document_type"] = $doc["document_type"];
        $i++;}
        return $data;

    }
    public function getAssociaterAmount($id){
        $data = [];
        $total=0;
        $alldocument = MyDocument::where("user_id", $id)->distinct('category_id')->get();
        $i=0;
        foreach($alldocument as $doc){
        $total += $data[$i]["amount"] = $this->getcatAmount($doc["category_id"]);
        $i++;}
        $check = MyWallet::where("holder_id", $id)->first();
        if($check){
        return $total;
        }else {
            return 0;
        }



    }
    public function getcategory($id){
       $getVal = Category::select('heading')->where('id', '=', $id)->first();
        // ->select('user_id')->where('date_only', '=', $newdate)
       return $getVal;
    }
    public function getcatAmount($id){
    $getVal = Category::select('amount')->where('id', '=', $id)->first();
    return $getVal["amount"];
    }
    public function alluser(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allUser = User::select($select)->whereIn("status",[0,1]);
        if ($allUser) {
            $allData = [];
            $data=$allUser->get();
            foreach($data as $info){
                $info["role"] = $info->role()->select()->first();
                $allData[]=$info;
            }
            return ["status"=>"success","data"=>$allData];
        } else {
            return ["status" => "error"];
        }
    }
    public function submit(Request $request){
    //    return $request;
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => $request->id > 0 ? 'required|max:255' : 'required|unique:site_user|max:255',
           // 'password' => 'required',
            'role_id' => 'required',
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = User::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new User; //then create new object
            unset($request["id"]);

            $png_url = "avatar-".time().".png";
            $path = public_path().'/uploads/avatar/' . $png_url;
            Image::make(file_get_contents($request["avatar"]))->save($path);
            $request["avatar"] = $png_url;
           // $data = $record->create($request->all());
            $data = $record->create($request->all());
            return ["status"=>"success","data"=> $data];
        }
        unset($request["created_at"]);
        unset($request["updated_at"]);
        $data = $record->where("id",$request->id)->update($request->all());
        return ["status"=>"success","data"=> $data];
    }
    public function payment(Request $request){
        return $request;
    }
    public function remove(Request $request){
        $result = User::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }

    public function index()
    {
        $users = User::whereIn('status',[1,0])->where('role_id', '!=',0)->get();


        return view('admin.users.index', compact('users'));
    }

    public function create(Request $request)
    {
        return view('admin.users.create');
    }

    public function store(Request $request)
    {
        $user = new User;
        $request["status"] = $request["status"] ? 1 : 0;
        $user->name = ($request->get("name"));
        $user->mobile = ($request->get("mobile"));
        $user->email = ($request->get("email"));
        $user->password = ($request->get("password"));
        $user->aboutme = ($request->get("aboutme"));
        $user->status = ($request->get("status"));
        $user->save();
        return redirect()->route('admin.users.index');
    }

    public function edit(User $user)
    {
        $user = User::where('id', $user->id)->first();

        return view('admin.users.edit', compact('user'));
    }

    public function update(Request $request)
    {
        $user = User::find($request->id);
        $request["status"] = $request["status"] ? 1 : 0;
        $user->name = ($request->get("name"));
        $user->mobile = ($request->get("mobile"));
        $user->email = ($request->get("email"));
        $user->aboutme = ($request->get("aboutme"));
        $user->status = ($request->get("status"));
        $user->update();
        return redirect()->route('admin.users.index');
    }

    public function show(User $user)
    {
        return view('admin.users.show', compact('user'));
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back();
    }

    public function massDestroy(MassDestroyUserRequest $request)
    {
        User::whereIn('id', request('ids'))->delete();

        return response(null, 204);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommonController extends Controller
{
    public function delete(Request $request)
    {
        if($request["table"]==""){
            return ["status"=>"error","message"=>"Please add table name"];
        }
        // if(!is_array($request["id"]) || is_null($request["id"])){
        //     return ["status"=>"error","message"=>"Please add id of table"];
        // }
        $data = DB::table($request["table"])->where('id',$request["id"]);
        $data->delete();
        return ["status"=>"success","message"=>"Deleted successfully","data"=>$data];
    }
    public function update(Request $request)
    {
        // return $request;
        if($request->table==""){
            return ["status"=>"error","message"=>"Please add table"];
        }
        if($request->field=="" || $request->value==""){
            return ["status"=>"error","message"=>"Please add filed and there value properly"];
        }
        // if(!is_array($request->id) || $request->id==''){
        //     return ["status"=>"error","message"=>"Please add ids of table"];
        // }
        // return $request;

        $getStatus = DB::table($request->table)->where("id",$request->id)->first();
        // return $getStatus;
        if($getStatus->status==1){
            $request->value = 0;
        }else{
            $request->value = 1;
        }
        return $data = DB::table($request->table)
                    ->where("id",$request->id)
                    ->update([$request->field=>$request->value]);//,"(".implode(",",$request["id"]).")"]);
        return ["status"=>"success","message"=>"Update successfully","data"=>$data];
    }
}

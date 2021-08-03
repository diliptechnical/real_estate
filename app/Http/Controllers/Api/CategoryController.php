<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MyDocument;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;
use Image;

class CategoryController extends Controller
{
    protected $token;
    public function __construct(Request $request)
    {
        $this->token = $request->bearerToken();
    }
    public function detail($id)
    {
        $data = Category::find($id);
        $data["amount"] = (float)$data->amount;
        // $data["tag"]=explode(",",$data["tag"]);
        $data["documents"] = MyDocument::where("category_id", $id)->get();
        return $data;
    }
    public function getservice($id = null)
    {
        //DB::enableQueryLog();
        $catListQuery = Category::where("status", 1)->orderBy('lorder', 'asc');
        if ($id)
            $catListQuery->where("is_parent", $id);
        else
            $catListQuery->where("is_parent", 0);
        $catList = $catListQuery->get();
        //dd(DB::getQueryLog());
        $serviceList = [];
        if ($catList) {
            foreach ($catList as $cat) {
                $service = [
                    "id" => $cat->id,
                    "name" => $cat->heading,
                    "image" => $cat->icon ? config("app.url") . "uploads/category/" . $cat->icon : null,
                    "pbody" => trim(strip_tags($cat->pbody)) ? $cat->pbody : '',
                    "benefits" => $cat->benefits,
                    "amount" => (float)$cat->amount,
                    "short_detail" => $cat->short_detail ? $cat->short_detail : ''
                ];
                if ($cat->is_parent == 0) {
                    $service["design"] = $cat->design;
                } else {
                    $subcatList = Category::where("status", 1)->where("is_parent", $cat->id)->orderBy('lorder', 'asc')->get();
                    if ($subcatList) {
                        $subServiceList = [];
                        foreach ($subcatList as $subcat) {
                            $subService = [
                                "id" => $subcat->id,
                                "name" => $subcat->heading,
                                "amount" => (float)$subcat->amount,
                                "image" => $subcat->icon ? config("app.url") . "uploads/category/" . $subcat->icon : null,
                                "pbody" => trim(strip_tags($subcat->pbody)) ? $subcat->pbody : '', //$subcat->pbody,
                                "benefits" => $subcat->benefits,
                                "short_detail" => $subcat->short_detail ? $subcat->short_detail : ''
                            ];
                            $subServiceList[] = $subService;
                        }
                        $service["sub"] = $subServiceList;
                    }
                }
                $serviceList[] = $service;
            }
        }
        if (count($serviceList) > 0)
            return ["data" => $serviceList, "status" => "success"];
        return ["status" => "error"];
    }
    public function allcategory(Request $request)
    {
        $user = User::getByToken($this->token)->first();
        if ($user) {
            $select = ["*"];
            if ($request->get("field"))
                $select = explode(",", $request->get("field"));
            $allCategory = Category::select($select)->whereIn("status", [0, 1]);
            if ($allCategory) {
                $allData = [];
                $data = $allCategory->get();
                foreach ($data as $info) {
                    if ($info["is_parent"] > 0)
                        $info["is_parent"] = $info->parent()->select($select)->first();
                    else
                        $info["parent_id"] = [
                            "id" => 0,
                            "heading" => "Parent",
                            "is_parent" => 0
                        ];
                    $allData[] = $info;
                }
                return ["status" => "success", "data" => $allData];
            } else {
                return ["status" => "error"];
            }
        }
        return ["status" => "error", "message" => "User authontication failed"];
    }
    public function checksavedoc($user_id, $category_id, $document_type)
    {
        return MyDocument::where("user_id", $user_id)
            ->where("category_id", $category_id)
            ->where("document_type", $document_type)->first();
    }
    public function savedocument(Request $request)
    {
        // return $request;
        $user = User::getByToken($this->token)->first();
        // return $user;
        if ($user) {
            if ($this->checksavedoc($user["id"], $request['category_id'], $request["document_type"]))
                return ["status" => "error", "message" => "document already submited"];
            $fileData = saveFile($request["file"], "document");
            $mydocument = new MyDocument();
            $mydocument->user_id = $user["id"];
            $mydocument->category_id = $request['category_id'];
            $mydocument->document_type = $request["document_type"];
            $mydocument->document = $fileData["name"];
            $mydocument->exDate = $request["exDate"];
            $mydocument->save();
            return ["status" => "success", "message" => "document submited successfully"];
        }
        return ["status" => "error", "message" => "User authontication failed"];
    }

    public function checkdocument(Request $request)
    {
        $user = User::getByToken($this->token)->first();
        if ($user) {
            $check = $this->checksavedoc($user["id"], $request["category_id"], $request["document_type"]);
            if ($check)
                return ["status" => "success", "message" => "document found sucesssfully", "docdate" => $check->exDate];
            return ["status" => "error", "message" => "document not found"];
        }
        return ["status" => "error", "message" => "User authontication failed"];
    }
}
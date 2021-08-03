<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cms;
use Illuminate\Http\Request;
use Validator;

class CmsController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $category = Cms::where('status', 1)->get();

        return view('admin.pages.index', compact('category'));
    }
    public function create(Request $request)
    {
        $parent = Cms::where('underof', $request->id)->get();
        // }
        return view('admin.pages.create', compact('parent'));
    }

    public function store(Request $request)
    {
        // $category = Category::create($request->all());
        $category = new Cms;
        // $png_url = "category-" . time() . ".png";
        // $path = public_path() . '/uploads/category/' . $png_url;
        // Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->linkname = ($request->get("linkname"));
        $category->heading = ($request->get("heading"));
        // $category->tag_line = ($request->get("tag_line"));
        // $category->benefits = ($request->get("benefits"));
        // $category->is_parent = ($request->get("is_parent"));
        // $category->amount = ($request->get("amount"));
        // $category->short_detail = ($request->get("short_detail"));
        // $category->detail = ($request->get("detail"));
        $category->pbody = ($request->get("pbody"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.pages.index');
    }
    public function edit(Cms $category)
    {
        $subcategory = Cms::where('underof', $category->id)->get();

        return view('admin.pages.edit', compact('category', 'subcategory'));
    }

    public function update(Request $request, Cms $category)
    {
        $png_url = "category-" . time() . ".png";
        $path = public_path() . '/uploads/category/' . $png_url;
        Image::make(file_get_contents($request["icon"]))->save($path);
        $request["icon"] = $png_url;
        $category->linkname = ($request->get("linkname"));
        $category->heading = ($request->get("heading"));
        $category->tag_line = ($request->get("tag_line"));
        $category->benefits = ($request->get("benefits"));
        $category->amount = ($request->get("amount"));
        $category->short_detail = ($request->get("short_detail"));
        $category->detail = ($request->get("detail"));
        $category->pbody = ($request->get("pbody"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.pages.index');
    }

    public function show(Cms $category)
    {
        $subcategory = Cms::where('underof', $category->id)->get();
        return view('admin.pages.show', compact('category', 'subcategory'));
    }

    public function destroy(Cms $category)
    {
        $category->delete();
        return back();
    }
    public function all($q = "")
    {
        // return "yes";
        $allPages = Cms::where("status", 1)->get();
        return $allPages;
    }
    public function detail($id)
    {
        return Cms::find($id);
    }
    public function allpage(Request $request)
    {
        $select = ["*"];
        if ($request->get("field"))
            $select = explode(",", $request->get("field"));
        $allPages = Cms::select($select)->whereIn("status", [0, 1]);
        if ($allPages) {
            $allData = [];
            $data = $allPages->get();
            foreach ($data as $info) {
                if ($info["underof"]) {
                    $info["underof"] = $info->underof()->select($select)->first();
                }
                $allData[] = $info;
            }
            //return $allData;
            return ["status" => "success", "data" => $allData];
        } else {
            return ["status" => "error"];
        }
    }
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:cms|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status" => "error", "data" => $validator->errors()];
        }
        $record = Cms::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record = new Cms; //then create new object
            unset($request["id"]);
            $data = $record->create($request->all());
            return ["status" => "success", "data" => $data];
        }
        unset($request["created_at"]);
        unset($request["updated_at"]);
        $data = $record->where("id", $request->id)->update($request->all());
        return ["status" => "success", "data" => $data];
    }
    public function remove(Request $request)
    {
        $result = Cms::find($request->id);
        $result->delete();
        return ["status" => "success"];
    }
    public function cmspage($name)
    {
        $result = Cms::where('linkname', $name);

        return $result;
    }
}
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MyDocument;
use Illuminate\Http\Request;
use Validator;
use Image;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::where('is_parent', 0)->get();

        return view('admin.category.index', compact('category'));
    }
    public function create(Request $request)
    {
        $parent = Category::where('is_parent', $request->id)->get();

        return view('admin.category.create', compact('parent'));

    }

    public function store(Request $request)
    {
        $category = new Category;
        $png_url = "category-" . time() . ".png";
        $path = public_path() . '/uploads/category/' . $png_url;
        Image::make(file_get_contents($request->get("icon")))->save($path);
        $request->icon = $png_url;
        $category->linkname = ($request->get("linkname"));
        $category->heading = ($request->get("heading"));
        $category->tag_line = ($request->get("tag_line"));
        $category->benefits = ($request->get("benefits"));
        $category->is_parent = ($request->get("is_parent"));
        $category->amount = ($request->get("amount"));
        $category->short_detail = ($request->get("short_detail"));
        $category->detail = ($request->get("detail"));
        $category->pbody = ($request->get("pbody"));
        $category->status = ($request->get("status"));
        $category->save();

        return redirect()->route('admin.category.index');
    }

    public function edit(Category $category)
    {
        $subcategory = Category::where('is_parent', $category->id)->get();
        $category["document"] = MyDocument::where('category_id', $category->id)->get();
        return view('admin.category.edit', compact('category', 'subcategory'));
    }

    public function update(Request $request, Category $category)
    {
        // return $request->document_type;
        if(is_array($request->document) && $request->document!=''){
            $imp = implode(",",$request->document);
        $expl = explode(",",$imp);
        // $data =  MyDocument::whereIn('id',);
        // return $expl;
        $documents = new MyDocument;
        if($request->document_type){
            $i=0;
            foreach($request->document_type as $document){
                $documents->category_id = $category->id;
                $documents->document_type = $document;
                $documents->document = $expl[$i];
               $documents->save();  
           $i++;
            }
        } 
        }
       
        $request["status"] = $request["status"] ? 1 : 0;
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
        return redirect()->route('admin.category.index');
    }

    public function show(Category $category)
    {
        // abort_unless(\Gate::allows('category_show'), 403);
        $subcategory = Category::where('is_parent', $category->id)->get();
        return view('admin.category.show', compact('category', 'subcategory'));
    }

    public function destroy(Category $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function allcounts()
    {
        $data = Category::where("status", 1)->get();
        return count($data);
    }
    public function detail($id)
    {
        $data = Category::find($id);
        $data["tag"] = explode(",", $data["tag"]);
        return $data;
    }
    public function allcategory(Request $request)
    {
        $select = ["*"];
        if ($request->get("field"))
            $select = explode(",", $request->get("field"));
        $allCategory = Category::select($select)->whereIn("status", [0, 1]);
        if ($allCategory) {
            $allData = [];
            $data = $allCategory->orderBy('lorder', 'ASC')->get();
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
    public function submit(Request $request)
    {
        return $request;
        $validator = Validator::make($request->all(), [
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:cms|max:255',
            'heading' => 'required'
        ]);
        $record = [];
        if ($validator->fails()) {
            return ["status" => "error", "data" => $validator->errors()];
        }
        $record = Category::find($request->id);
        $data = [];
        $request["tag"] = $request["tag"] ? implode(",", $request["tag"]) : '';
        $request["status"] = $request["status"] ? 1 : 0;
        $request["is_parent"] = $request["is_parent"] ? $request["is_parent"] : 0;
        // if($request["image"] && $request["image"]!='' && $record->image!=$request["image"]){
        $png_url = "category-" . time() . ".png";
        $path = public_path() . '/uploads/category/' . $png_url;
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        // }
        if (empty($record)) { // you can do this condition to check if is empty
            $record = new Category; //then create new object
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
        $result = Category::find($request->id);
        $result->delete();
        return ["status" => "success"];
    }
}
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\testimonial;
use Illuminate\Http\Request;
use Image;

class TestimonialController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function index()
    {
        $category = testimonial::whereIn('status', [1,0])->get();
        return view('admin.testimonial.index', compact('category'));
    }
    public function create(Request $request)
    {
        // $icon = Icons::all();

        return view('admin.testimonial.create');
    }

    public function store(Request $request)
    {
        // return $request;
        $category = new testimonial;
        $request["status"] = $request["status"] ? 1 : 0;
        $png_url = "testimonial-" . time() . ".png";
        $path = public_path() . '/uploads/testimonial/' . $png_url;
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->content = ($request->get("detail"));
        $category->name = ($request->get("name"));
        $category->post = ($request->get("post"));
        $category->image = ($request->get("image"));
        $category->status = ($request->get("status"));
        $category->save();
        return redirect()->route('admin.testimonial.index');
    }

    public function edit($id)
    {
        $category = testimonial::where('id', $id)->first();


        return view('admin.testimonial.edit', compact('category'));
    }

    public function update(Request $request, testimonial $category)
    {
        // return $request;
        $category = testimonial::find($request->id);
        if($category){
        $request["status"] = $request["status"] ? 1 : 0;
        if($request->file('image') && $category->image != $request->file('image')){
        $png_url = "testimonial-" . time() . ".png";
        $path = public_path() . '/uploads/testimonial/' . $png_url;
        Image::make(file_get_contents($request["image"]))->save($path);
        $request["image"] = $png_url;
        $category->image = ($request->get("image"));
        }
        $category->content = ($request->get("detail"));
        $category->name = ($request->get("name"));
        $category->post = ($request->get("post"));
        $category->status = ($request->get("status"));
        $category->update();
        return redirect()->route('admin.testimonial.index');
        }
    }

    public function show($id)
    {
      $category = testimonial::find($id);
        return view('admin.testimonial.show', compact('category'));
    }

    public function destroy(testimonial $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function all($q=""){
        // return "yes";
        $allPages = testimonial::whereIn("status",[0,1]);
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
        return testimonial::find($id);
    }
    public function allpage(Request $request){
        $select = ["*"];
        if($request->get("field"))
            $select = explode(",",$request->get("field"));
        $allPages = testimonial::select($select)->whereIn("status",[0,1]);
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
            'linkname' => $request->id > 0 ? 'required|max:255' : 'required|unique:testimonial|max:255',
            'heading' => 'required',
            'underof' => 'required'
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = testimonial::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        $request["underof"] = $request["underof"] ? $request["underof"] : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new testimonial; //then create new object
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
        $result = testimonial::find($request->id);
        $result->delete();
        return ["status"=>"success"];
    }
    public function testimonialpage($name){
        $result = testimonial::where('linkname',$name);

        return $result;
    }
}

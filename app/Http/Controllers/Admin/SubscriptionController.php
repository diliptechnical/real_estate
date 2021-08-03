<?php

namespace App\Http\Controllers\Admin;
use App\Models\subscription;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index(Request $request)
    {
        $subscription = subscription::all();
        // return $subscription;
        $i = 0;
        foreach($subscription as $trans){
        $subscription[$i]['user'] = $this->getUser($trans->uid);
        $i++;}
        // return $subscription;
        return view('admin.subscription.index', compact('subscription'));
    }

    public function create()
    {
        // abort_unless(\Gate::allows('category_create'), 403);

        return view('admin.category.create');
    }

    public function store(StoreCategoryRequest $request)
    {
        // abort_unless(\Gate::allows('category_create'), 403);

        $category = subscription::create($request->all());

        return redirect()->route('admin.category.index');
    }

    public function edit(subscription $category)
    {
        // return $category;
       // $subcategory = Category::where('is_parent',$category->id)->get();
        return view('admin.category.edit', compact('category'));
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        // abort_unless(\Gate::allows('category_edit'), 403);
        return "Yes";
        $category->update($request->all());

        return redirect()->route('admin.category.index');
    }

    public function show($id)
    {
        $subscription = subscription::find($id);
        // $i = 0;
        // foreach($subscription as $trans){
        $subscription['user'] = $this->getUser($subscription->uid);
        // $i++;}
        return view('admin.subscription.show', compact('subscription'));
    }

    public function destroy(Category $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }
    public function getUser($id){
        //    return $id;
            return User::where('id',$id)->first();
        }
    public function massDestroy(MassDestroyCategoryRequest $request)
    {
        Category::whereIn('id', request('ids'))->delete();

        return response(null, 204);
    }
    public function detail($id){
        $data=SubscriptionController::where('payable_id',$id)->get();
        return $data;
    }
}

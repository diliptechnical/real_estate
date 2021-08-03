<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Validator;
use Image;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        if($request->type!=''){
            $transaction = Transaction::where('type',$request->type)->get();
        }else{
        $transaction = Transaction::all();
        }
        // $user = [];
        // foreach($transaction as $trans){
        // $user = User::where('id',$trans->payable_id);
        // }
       

        return view('admin.transaction.index', compact('transaction'));
    }

    public function create()
    {
        // abort_unless(\Gate::allows('category_create'), 403);

        return view('admin.category.create');
    }

    public function store(StoreCategoryRequest $request)
    {
        // abort_unless(\Gate::allows('category_create'), 403);

        $category = Transaction::create($request->all());

        return redirect()->route('admin.category.index');
    }

    public function edit(Transaction $category)
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

    public function show(Transaction $transaction)
    {
        return view('admin.transaction.show', compact('transaction'));
    }

    public function destroy(Category $category)
    {
        // abort_unless(\Gate::allows('category_delete'), 403);

        $category->delete();

        return back();
    }

    public function massDestroy(MassDestroyCategoryRequest $request)
    {
        Category::whereIn('id', request('ids'))->delete();

        return response(null, 204);
    }
    public function detail($id){
        $data=Transaction::where('payable_id',$id)->get();
        return $data;
    }
}

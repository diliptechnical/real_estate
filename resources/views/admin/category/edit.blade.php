@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Edit {{$category->is_parent==0 ? 'Service' : 'Category'}}
    </div>
    <div class="card-body">
        <form action="{{ route("admin.category.update", [$category->id]) }}" id="addform" method="POSt" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <input type="hidden" id="url_root" name="url_root" class="form-control" value="{{ route("admin.category.update", [$category->id]) }}">
            <div class="row">
            <div class="form-group col-md-6 {{ $errors->has('linkname') ? 'has-error' : '' }}">
                <label for="heading">Linkname*</label>
                <input type="text" id="linkname" name="linkname" class="form-control" value="{{ old('linkname', isset($category) ? $category->linkname : '') }}">
                @if($errors->has('linkname'))
                    <em class="invalid-feedback">
                        {{ $errors->first('linkname') }}
                    </em>
                @endif
            </div>
            <div class="form-group col-md-6 {{ $errors->has('heading') ? 'has-error' : '' }}">
                <label for="heading">Heading*</label>
                <input type="text" id="heading" name="heading" class="form-control" value="{{ old('heading', isset($category) ? $category->heading : '') }}">
                @if($errors->has('heading'))
                    <em class="invalid-feedback">
                        {{ $errors->first('heading') }}
                    </em>
                @endif
            </div>
            @if($subcategory->isEmpty())
            <div class="form-group col-md-6 {{ $errors->has('tag_line') ? 'has-error' : '' }}">
                <label for="tag_line">Tag line*</label>
                <input type="text" id="tag_line" name="tag_line" class="form-control" value="{{ old('tag_line', isset($category) ? $category->tag_line : '') }}">
                @if($errors->has('tag_line'))
                    <em class="invalid-feedback">
                        {{ $errors->first('tag_line') }}
                    </em>
                @endif
            </div>

           
            <div class="form-group col-md-6 {{ $errors->has('amount') ? 'has-error' : '' }}">
                <label for="heading">Price *</label>
                <input type="text" id="amount" name="amount" class="form-control" value="{{ old('amount', isset($category) ? $category->amount : '') }}">
                @if($errors->has('amount'))
                    <em class="invalid-feedback">
                        {{ $errors->first('amount') }}
                    </em>
                @endif
            </div>
            @endif
        </div>

            <div class="form-group {{ $errors->has('short_detail') ? 'has-error' : '' }}">
                <label for="short_detail">Short Detail</label>
                <textarea id="short_detail" name="short_detail" class="form-control " value="{{ old('short_detail', isset($category) ? $category->short_detail : '') }}">{{ old('short_detail', isset($category) ? $category->short_detail : '') }}</textarea>
                @if($errors->has('short_detail'))
                    <em class="invalid-feedback">
                        {{ $errors->first('short_detail') }}
                    </em>
                @endif
              
            </div>
            @if($subcategory->isEmpty())
            <div class="form-group {{ $errors->has('detail') ? 'has-error' : '' }}">
                <label for="detail">Detail</label>
                <textarea id="detail" name="detail" class="form-control ">{{ old('detail', isset($category) ? $category->detail : '') }}</textarea>
            </div>
            <div class="form-group">
                <label for="short_detail " class="status" >Visible this page to all</label>
                <input type="checkbox" name="status" id="status" class="" checked />
            </div>
           
            <div class="form-group {{ $errors->has('benefits') ? 'has-error' : '' }}">
                <label for="heading">Benefits*</label>
                <textarea type="text" id="benefits" name="benefits" class="form-control" value="{{ old('benefits', isset($category) ? $category->benefits : '') }}">{{ old('benefits', isset($category) ? $category->benefits : '') }}</textarea>
                @if($errors->has('benefits'))
                    <em class="invalid-feedback">
                        {{ $errors->first('benefits') }}
                    </em>
                @endif
            </div>
            @endif
            <div class="form-group">
                <label for="short_detail">Page Content</label>
                {{-- <textarea id="short_detail" name="short_detail" class="form-control ">{{ old('short_detail', isset($category) ? $category->short_detail : '') }}</textarea> --}}
                <textarea name="pbody" value="{{ old('pbody', isset($category) ? $category->pbody : '') }}">{{ old('pbody', isset($category) ? $category->pbody : '') }}</textarea>
            </div>
            <div class="form-group {{ $errors->has('icon') ? 'has-error' : '' }}">
                <label for="price">Icon</label>
                <input type="file" id="icon" name="icon" class="form-control" value="{{ old('icon', isset($category) ? $category->icon : '') }}" >
               
                <p class="helper-block">
                    <img src="{{config('app.url').'uploads/category/'.$category->icon}}" width="100">
                </p>
            </div>
            @if($subcategory->isEmpty())
        <label>Manage Documents</label>
          <div class="">
          <div class="row">
                        <div class="col-md-12">
                        <div class="table-responsive">
                        <table id="test-table" class="table table-condensed table-bordered">
                            <thead>
                            <tr>
                                <th style=" font-size: 18px;
                                font-weight: bold;
                                padding: 10px 0;text-transform: capitalize;">Document Type</th>
                                <th style=" font-size: 18px;
                                font-weight: bold;
                                padding: 10px 0;text-transform: capitalize;">Document Name</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody id="test-body">
                    @foreach($category->document as $key => $document)
                            <tr id="row0">
                                <td class="td">
                                    <input type="hidden" name="doc_id" value="{{$document->id}}">
                                <select  class="form-control" id="document_type[0]" name="document_type[{{$key}}]" value="{{ old('document_type', isset($document) ? $document->document_type : '') }}">
                                <option value="text" {{ isset($document) && $document->document_type=='text' ? 'selected' : '' }}>Textbox</option>
                                <option value="file" {{ isset($document) && $document->document_type=='file' ? 'selected' : '' }}>Image</option>
                                </select>
                                </td>
                                <td class="td">
                                <input name='document[{{$key}}]' id="document[0]" type='text' class='form-control input-md' value="{{ old('document', isset($document) ? $document->document : '') }}" />
                                </td>
                                <td class="td">
                                <input class='delete-row btn btn-danger' type='button' onclick="deleteData('mss_my_document',{{$document->id}})" value='Delete' />
                                </td>
                            </tr>
                    @endforeach
                            </tbody>
                        </table>
                        <input id='add-row' class='btn btn-primary pull-right' type='button' value='Add Row' style="width: 180px;float:right;margin:10px 0;" />
                        </div>
                        </div>
</div>
</div>
            @endif

           
            <div>
                <input class="btn btn-danger" type="submit" id="submitForms" value="Save">
            </div>
        </form>
    </div>
</div>
@if(!$subcategory->isEmpty())
<div class="card">
    <div class="card-header">
        Category List
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            Heading
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Short Detail
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($subcategory as $key => $subcategory)
                        <tr data-entry-id="{{ $subcategory->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $subcategory->heading ?? '' }} 
                            </td>
                            <td>
                                {{ $subcategory->icon ?? '' }}
                            </td>
                            <td>
                                {{ $subcategory->short_detail ?? '' }}
                            </td>
                            <td>
                                {{-- @can('category_show') --}}
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.category.show', $subcategory->id) }}">
                                        View
                                    </a>
@if($category->design!='main' && $category->design!='')

                                    <a class="btn btn-xs btn-success" href="{{ route('admin.category.create', $subcategory->id) }}">
                                        Add Category
                                    </a>
@endif

                                {{-- @endcan --}}
                                {{-- @can('category_edit') --}}
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.category.edit', $subcategory->id) }}">
                                        Edit
                                    </a>
                                {{-- @endcan --}}
                                {{-- @can('category_delete') --}}
                                    <form action="{{ route('admin.category.destroy', $subcategory->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="submit" class="btn btn-xs btn-danger" value="Delete">
                                    </form>
                                {{-- @endcan --}}
                            </td>

                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
@endif
@endsection
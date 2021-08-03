@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Edit {{$category->is_parent==0 ? 'Service' : 'Category'}}
        </div>
        <div class="card-body">
            <form action="{{ route("admin.testimonial.update", [$category->id]) }}" id="addform" method="POSt" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="{{ route("admin.testimonial.update", [$category->id]) }}">
                <input type="hidden" id="id" name="id" class="form-control" value="{{ $category->id }}">
                <div class="row">
                    <div class="form-group col-md-6 {{ $errors->has('linkname') ? 'has-error' : '' }}">
                        <label for="heading">Name*</label>
                        <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($category) ? $category->name : '') }}">
                        @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('post') ? 'has-error' : '' }}">
                        <label for="heading">Post*</label>
                        <input type="text" id="post" name="post" class="form-control" value="{{ old('post', isset($category) ? $category->post : '') }}">
                        @if($errors->has('post'))
                        <em class="invalid-feedback">
                            {{ $errors->first('post') }}
                        </em>
                        @endif
                    </div>
                </div>
                <div class="form-group {{ $errors->has('content') ? 'has-error' : '' }}">
                    <label for="content">Content </label>
                    <textarea id="content" name="detail" class="form-control " value="{{ old('content', isset($category) ? $category->content : '') }}">{{ old('content', isset($category) ? $category->content : '') }}</textarea>
                    @if($errors->has('content'))
                    <em class="invalid-feedback">
                        {{ $errors->first('content') }}
                    </em>
                    @endif

                </div>
               
                <div class="form-group {{ $errors->has('image') ? 'has-error' : '' }}">
                    <label for="price">Image</label>
                    <input type="file" id="image" name="image" class="form-control" value="{{ old('icon', isset($category) ? $category->icon : '') }}">

                    <p class="helper-block">
                        <img src="{{config('app.url').'uploads/testimonial/'.$category->image}}" width="100">
                    </p>
                </div>


                <div class="form-group">
                    <label for="short_content " class="status">Visible this page to all</label>
                    <input type="checkbox" name="status" id="status" class="" checked />
                </div>
                <div>
                    <input class="btn btn-danger" type="submit" id="submitForms" value="Save">
                </div>
            </form>
        </div>
    </div>
   
@endsection
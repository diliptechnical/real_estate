@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Add Page
    </div>

    <div class="card-body">
        <form action="{{ route("admin.testimonial.store") }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="form-group col-md-6 {{ $errors->has('name') ? 'has-error' : '' }}">
                    <label for="heading">name*</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($category) ? $category->name : '') }}">
                    @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                    @endif
                </div>
                <div class="form-group col-md-6 {{ $errors->has('name') ? 'has-error' : '' }}">
                    <label for="heading">Post*</label>
                    <input type="text" id="post" name="post" class="form-control" value="{{ old('post', isset($category) ? $category->post : '') }}">
                    @if($errors->has('post'))
                        <em class="invalid-feedback">
                            {{ $errors->first('post') }}
                        </em>
                    @endif
                </div>
              
            </div>
           
            <div class="form-group">
                <label for="short_detail">Content</label>
                {{-- <textarea id="detail" name="detail" class="form-control ">{{ old('content', isset($category) ? $category->content : '') }}</textarea> --}}
                <textarea name="detail">{{ old('content', isset($category) ? $category->content : '') }}</textarea>
            </div>
            <div class="form-group {{ $errors->has('icon') ? 'has-error' : '' }}">
                <label for="price">image</label>
                <input type="file" id="image" name="image" class="form-control" value="{{ old('image', isset($category) ? $category->image : '') }}" step="0.01">
                @if($errors->has('image'))
                    <em class="invalid-feedback">
                        {{ $errors->first('image') }}
                    </em>
                @endif
                <p class="helper-block">
                </p>
            </div>
            <div class="form-group">
                <label for="short_detail " class="status" >Visible this page to all</label>
                <input type="checkbox" name="status" id="status" class="" checked />
            </div>
            <div>
                <input class="btn btn-danger" type="submit" value="Save">
            </div>
        </form>
    </div>
</div>
</div>

@endsection
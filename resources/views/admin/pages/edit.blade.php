@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Edit {{$category->is_parent==0 ? 'Service' : 'Category'}}
        </div>
        <div class="card-body">
            <form action="{{ route("admin.pages.update", [$category->id]) }}" id="addform" method="POSt" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="{{ route("admin.pages.update", [$category->id]) }}">
                <input type="hidden" id="id" name="id" class="form-control" value="{{ $category->id }}">
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

                </div>

                <div class="form-group {{ $errors->has('pbody') ? 'has-error' : '' }}">
                    <label for="detail">Detail </label>
                    <textarea id="detail" name="detail" class="form-control " value="{{ old('pbody', isset($category) ? $category->pbody : '') }}">{{ old('short_detail', isset($category) ? $category->short_detail : '') }}</textarea>
                    @if($errors->has('pbody'))
                    <em class="invalid-feedback">
                        {{ $errors->first('pbody') }}
                    </em>
                    @endif

                </div>
                <div class="form-group  {{ $errors->has('heading') ? 'has-error' : '' }}">
                        <label for="heading">Video link*</label>
                        <input type="text" id="video" name="video" class="form-control" value="{{ old('video', isset($category) ? $category->video : '') }}">
                        @if($errors->has('video'))
                        <em class="invalid-feedback">
                            {{ $errors->first('video') }}
                        </em>
                        @endif
                    </div>
                <div class="form-group {{ $errors->has('image') ? 'has-error' : '' }}">
                    <label for="price">Image</label>
                    <input type="file" id="image" name="image" class="form-control" value="{{ old('image', isset($category) ? $category->image : '') }}">

                    <p class="helper-block">
                        <img src="{{config('app.url').'uploads/pages/'.$category->image}}" width="100">
                    </p>
                </div>

                <div class="form-group">
                    <label for="short_detail " class="status">Visible this page to all</label>
                    <input type="checkbox" name="status" id="status" class="" checked />
                </div>
                <div>
                    <input class="btn btn-danger" type="submit" id="submitForms" value="Save">
                </div>
            </form>
        </div>
    </div>

@endsection

@extends('layouts.master')
@extends('sidebar.dashboard')
@section('content')
<div class="table-container">
    <div class="card">
        <div class="card-header">
            Edit Slider
        </div>
        <div class="card-body">
            <form action="{{ route("admin.slider.update", [$category->id]) }}" id="addform" method="POSt" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" id="id" name="id" class="form-control" value="{{  $category->id }}">
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="{{ route("admin.slider.update", [$category->id]) }}">
                <div class="row">
                    <div class="form-group col-md-6 {{ $errors->has('heading') ? 'has-error' : '' }}">
                        <label for="heading">Heading*</label>
                        <input type="text" id="heading" name="heading" class="form-control" value="{{ old('heading', isset($category) ? $category->heading : '') }}">
                        @if($errors->has('heading'))
                        <em class="invalid-feedback">
                            {{ $errors->first('heading') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('details') ? 'has-error' : '' }}">
                        <label for="heading">Short Detail*</label>
                        <input type="text" id="details" name="details" class="form-control" value="{{ old('details', isset($category) ? $category->details : '') }}">
                        @if($errors->has('details'))
                        <em class="invalid-feedback">
                            {{ $errors->first('details') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6  {{ $errors->has('image') ? 'has-error' : '' }}">
                    <label for="price">Image</label>
                    <input type="file" id="image" name="image" class="form-control" value="{{ old('image', isset($category) ? $category->image : '') }}">
                    <p class="helper-block">
                        <img src="{{config('app.url').'uploads/slider/'.$category->image}}" width="100">
                    </p>
                </div>
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
</div>
@endsection
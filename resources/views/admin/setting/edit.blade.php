@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Edit Amenities
        </div>
        <div class="card-body">
            <form action="{{ route("admin.setting.update", [$category->id]) }}" id="addform" method="POSt" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" id="id" name="id" class="form-control" value="{{  $category->id }}">
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="{{ route("admin.setting.update", [$category->id]) }}">
                <input type="hidden" id="id" name="id" class="form-control" value="{{ $category->id }}">
                <div class="row">
                    <div class="form-group col-md-6 {{ $errors->has('heading') ? 'has-error' : '' }}">
                        <label for="heading">Heading*</label>
                        <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($category) ? $category->name : '') }}">
                        @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6  {{ $errors->has('value') ? 'has-error' : '' }}">
                    <label for="price">Image</label>
                    @if($category->type == 1)
                    <input type="file" id="value" name="value" class="form-control" value="{{ old('value', isset($category) ? $category->value : '') }}">
                    @else
                    <input type="text" id="value" name="value" class="form-control" value="{{ old('value', isset($category) ? $category->value : '') }}">
                    @endif
                    <p class="helper-block">
                        <img src="{{config('app.url').'uploads/amenities/'.$category->value}}" width="100">
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

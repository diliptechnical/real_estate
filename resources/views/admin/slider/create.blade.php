@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Add Slider
    </div>

    <div class="card-body">
        <form action="{{ route("admin.slider.store") }}" method="POST" enctype="multipart/form-data">
            @csrf
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
                    <label for="details">Short Detail*</label>
                    <input type="text" id="details" name="details" class="form-control" value="{{ old('details', isset($category) ? $category->details : '') }}">
                    @if($errors->has('details'))
                        <em class="invalid-feedback">
                            {{ $errors->first('details') }}
                        </em>
                    @endif
                </div>
                <div class="form-group col-md-6 {{ $errors->has('image') ? 'has-error' : '' }}">
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
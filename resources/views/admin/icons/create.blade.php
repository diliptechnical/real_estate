@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Add Page
    </div>

    <div class="card-body">
        <form action="{{ route("admin.icons.store") }}" method="POST" enctype="multipart/form-data">
            @csrf
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
                <div class="form-group col-md-6 {{ $errors->has('value') ? 'has-error' : '' }}">
                <label for="price">image</label>
                <input type="file" id="value" name="value" class="form-control" value="{{ old('value', isset($category) ? $category->value : '') }}" step="0.01">
                @if($errors->has('value'))
                    <em class="invalid-feedback">
                        {{ $errors->first('value') }}
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
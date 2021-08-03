@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Add Page
    </div>

    <div class="card-body">
        <form action="{{ route("admin.pages.store") }}" method="POST" enctype="multipart/form-data">
            @csrf
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
                <div class="form-group col-md-6 {{ $errors->has('meta_title') ? 'has-error' : '' }}">
                    <label for="heading">Meta Title*</label>
                    <input type="text" id="meta_title" name="meta_title" class="form-control" value="{{ old('meta_title', isset($category) ? $category->meta_title : '') }}">
                    @if($errors->has('meta_title'))
                        <em class="invalid-feedback">
                            {{ $errors->first('meta_title') }}
                        </em>
                    @endif
                </div>

                <div class="form-group col-md-6 {{ $errors->has('meta_description') ? 'has-error' : '' }}">
                    <label for="heading">Meta Description*</label>
                    <input type="text" id="meta_description" name="meta_description" class="form-control" value="{{ old('meta_description', isset($category) ? $category->meta_description : '') }}">
                    @if($errors->has('meta_description'))
                        <em class="invalid-feedback">
                            {{ $errors->first('meta_description') }}
                        </em>
                    @endif
                </div>
                <div class="form-group col-md-6 {{ $errors->has('short_description') ? 'has-error' : '' }}">
                    <label for="heading">Short Description *</label>
                    <input type="text" id="short_description" name="short_description" class="form-control" value="{{ old('short_description', isset($category) ? $category->short_description : '') }}">
                    @if($errors->has('short_description'))
                        <em class="invalid-feedback">
                            {{ $errors->first('short_description') }}
                        </em>
                    @endif
                </div>
                <div class="hide form-group col-md-6 {{ $errors->has('benefits') ? 'has-error' : '' }}">
                    <label for="heading">Under Of</label>
                   <select id="under_of" name="under_of" class="form-control" value="{{ old('under_of', isset($category) ? $category->under_of : '') }}">
                    @foreach($parent as $key => $parent)
                    <option value="{{ $parent->id }}"> {{ $parent->heading }} </option>
                    @endforeach
                   </select>
                </div>
            </div>

            <div class="form-group">
                <label for="short_detail">Main Content</label>
                {{-- <textarea id="detail" name="detail" class="form-control ">{{ old('short_detail', isset($category) ? $category->short_detail : '') }}</textarea> --}}
                <textarea name="detail">{{ old('pbody', isset($category) ? $category->pbody : '') }}</textarea>
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

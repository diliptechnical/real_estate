@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Add Category
    </div>

    <div class="card-body">
        <form action="{{ route("admin.category.store") }}" method="POST" enctype="multipart/form-data">
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
    
                <div class="form-group col-md-6 {{ $errors->has('heading') ? 'has-error' : '' }}">
                    <label for="heading">Tag line*</label>
                    <input type="text" id="tag_line" name="tag_line" class="form-control" value="{{ old('tag_line', isset($category) ? $category->tag_line : '') }}">
                    @if($errors->has('tag_line'))
                        <em class="invalid-feedback">
                            {{ $errors->first('tag_line') }}
                        </em>
                    @endif
                </div>
    
                <div class="form-group col-md-6 {{ $errors->has('benefits') ? 'has-error' : '' }}">
                    <label for="heading">Benefits*</label>
                    <input type="text" id="benefits" name="benefits" class="form-control" value="{{ old('benefits', isset($category) ? $category->benefits : '') }}">
                    @if($errors->has('benefits'))
                        <em class="invalid-feedback">
                            {{ $errors->first('benefits') }}
                        </em>
                    @endif
                </div>
                <div class="form-group col-md-6 {{ $errors->has('benefits') ? 'has-error' : '' }}">
                    <label for="heading">Price *</label>
                    <input type="text" id="amount" name="amount" class="form-control" value="{{ old('amount', isset($category) ? $category->amount : '') }}">
                    @if($errors->has('amount'))
                        <em class="invalid-feedback">
                            {{ $errors->first('amount') }}
                        </em>
                    @endif
                </div>
                <div class="form-group col-md-6 {{ $errors->has('benefits') ? 'has-error' : '' }}">
                    <label for="heading">Under Of</label>
                   <select id="is_parent" name="is_parent" class="form-control" value="{{ old('is_parent', isset($category) ? $category->is_parent : '') }}">
                    @foreach($parent as $key => $parent)   
                    <option value="{{ $parent->id }}"> {{ $parent->heading }} </option>
                    @endforeach
                   </select>
                </div>
            </div>
            <div class="form-group {{ $errors->has('short_detail') ? 'has-error' : '' }}">
                <label for="short_detail">Short Detail</label>
                <textarea id="short_detail" name="short_detail" class="form-control ">{{ old('short_detail', isset($category) ? $category->short_detail : '') }}</textarea>
                @if($errors->has('short_detail'))
                    <em class="invalid-feedback">
                        {{ $errors->first('short_detail') }}
                    </em>
                @endif
              
            </div>
            <div class="form-group {{ $errors->has('short_detail') ? 'has-error' : '' }}">
                <label for="short_detail">Detail</label>
                <textarea id="short_detail" name="detail" class="form-control ">{{ old('detail', isset($category) ? $category->detail : '') }}</textarea>
                @if($errors->has('detail'))
                    <em class="invalid-feedback">
                        {{ $errors->first('detail') }}
                    </em>
                @endif
              
            </div>
            <div class="form-group">
                <label for="short_detail">Main Content</label>
                {{-- <textarea id="short_detail" name="short_detail" class="form-control ">{{ old('short_detail', isset($category) ? $category->short_detail : '') }}</textarea> --}}
                <textarea name="pbody">{{ old('pbody', isset($category) ? $category->pbody : '') }}</textarea>
            </div>
            <div class="form-group {{ $errors->has('icon') ? 'has-error' : '' }}">
                <label for="price">Icon</label>
                <input type="file" id="icon" name="icon" class="form-control" value="{{ old('icon', isset($category) ? $category->icon : '') }}" step="0.01">
                @if($errors->has('icon'))
                    <em class="invalid-feedback">
                        {{ $errors->first('icon') }}
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
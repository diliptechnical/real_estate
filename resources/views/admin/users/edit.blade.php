@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

    <div>
        <div class="card-header" style="margin-bottom: 20px;">
            Edit User
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card card-body">
                    <form action="{{ route("admin.users.update", [$user->id]) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <input type="hidden" id="id" name="id" class="form-control" value="{{ $user->id }}">
                        <div class="row">
                            <div class="form-group col-sm-6 {{ $errors->has('name') ? 'has-error' : '' }}">
                                <label for="name">Full Name*</label>
                                <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($user) ? $user->name : '') }}">
                            </div>
                            <div class="form-group col-sm-6 {{ $errors->has('mobile') ? 'has-error' : '' }}">
                                <label for="password">Mobile No</label>
                                <input type="number" id="mobile" name="mobile" class="form-control" value="{{ old('mobile', isset($user) ? $user->mobile : '') }}">
                            </div>
                            <div class="form-group col-sm-6 {{ $errors->has('email') ? 'has-error' : '' }}">
                                <label for="password">Enail</label>
                                <input type="text" id="email" name="email" class="form-control" value="{{ old('email', isset($user) ? $user->email : '') }}">
                            </div>
                        </div>
                        <div class="form-group  {{ $errors->has('msg') ? 'has-error' : '' }}">
                            <label for="profession">About</label>
                            <textarea type="text" id="aboutme" name="aboutme" class="form-control" value="{{ old('aboutme', isset($user) ? $user->aboutme : '') }}">{{ old('aboutme', isset($user) ? $user->aboutme : '') }}</textarea>
                        </div>
                </div>
                <div class="card card-body">
                    <div class="form-group">
                        <label for="short_detail " class="status">Visible this page to all</label>
                        <input type="checkbox" name="status" id="status" class="" {{$user->status==1 ? 'checked' : ''}} />
                    </div>
                    <div>
                        <input class="btn btn-danger" type="submit" value="Save">
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @endsection

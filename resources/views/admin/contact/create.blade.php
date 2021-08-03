@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Create User
    </div>
    <div class="row">
        <div class="col-sm-8 ">
    <div class="card-body">
        <form action="{{ route("admin.users.store") }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="form-group col-sm-6 {{ $errors->has('name') ? 'has-error' : '' }}">
                    <label for="name">Full Name*</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($user) ? $user->name : '') }}">
                </div>

                <div class="form-group col-sm-6 {{ $errors->has('mobile') ? 'has-error' : '' }}">
                    <label for="password">Mobile No</label>
                    <input type="number" id="mobile" name="mobile" class="form-control"  value="{{ old('mobile', isset($user) ? $user->mobile : '') }}">
                </div>
                <div class="form-group col-sm-6 {{ $errors->has('email') ? 'has-error' : '' }}">
                    <label for="password">Enail</label>
                    <input type="text" id="email" name="email" class="form-control"  value="{{ old('email', isset($user) ? $user->email : '') }}">
                </div>
                <div class="form-group col-sm-6 {{ $errors->has('profession') ? 'has-error' : '' }}">
                    <label for="profession">Subject</label>
                    <input type="text" id="subject" name="subject" class="form-control"  value="{{ old('subject', isset($user) ? $user->subject : '') }}">
                </div>
                </div>
                <div class="form-group  {{ $errors->has('profession') ? 'has-error' : '' }}">
                    <label for="profession">Massage</label>
                    <textarea type="text" id="comment" name="comment" class="form-control"  value="{{ old('comment', isset($user) ? $user->comment : '') }}">{{ old('comment', isset($user) ? $user->comment : '') }}</textarea>
                </div>


        </form>
    </div>
</div>
<div class="col-sm-4">
    <div class="card-body">
<div class="form-group">
    <label for="short_detail " class="status" >Visible this page to all</label>
    <input type="checkbox" name="status" id="status" class=""  />
</div>
<div>
    <input class="btn btn-danger" type="submit" value="Save">
</div>
</div>
</div>
</div>
</div>
</div>

@endsection

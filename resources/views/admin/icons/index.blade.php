@extends('layouts.master')
@extends('sidebar.dashboard')
@section('content')
<div class="table-container">
    <div class="card">
        <div class="card-header">
       <div class="row">
            <div class="col-sm-4">
            Page List
            </div>
            <div class="col-sm-8" >
                <div class="row">
                <div class="col-sm-3">
                        <form method="GET" action="{{ url('admin/exportfile') }}" enctype="multipart/form-data">
                            <span> Export Excel </span>
                            <button type="submit"  class="btn btn-success w-100">Export</button>
                        </form>
                    </div>
                    <div class="col-sm-3">
                        <form method="POST" action="{{ url('admin/importfile') }}" enctype="multipart/form-data">
                            <span> Upload Excel </span>
                            <input type="checkbox" style="display:none;" name="header" checked>
                            <input type="file" name="importfile" onchange="form.submit()" class="btn btn-success w-100">
                        </form>
                    </div>
                    <div class="col-sm-3">
                        <form>
                            <span> Upload Images </span>
                            <input type="file" name="importImage" class="btn btn-success w-100">
                        </form>
                    </div>
                    <div class="col-sm-3">
                        <a class="btn btn-success" style="margin-top: 25px;" href="{{ route("admin.icons.create") }}">
                            Add New Icon
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class=" table table-bordered table-striped table-hover datatable">
                    <thead>
                        <tr>
                            <th width="10">

                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Image
                            </th>

                            <th>
                                Status
                            </th>
                            <th>
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($category as $key => $category)
                        <tr data-entry-id="{{ $category->id }}">
                            <td>
                            {{$key+1}}
                            </td>
                            <td>
                                {{ $category->name ?? '' }}
                            </td>
                            <td>
                                @if($category->image != '')
                                <img src="{{ config('app.url').'uploads/icons/'.$category->image }}" width="50">
                                @endif
                            </td>

                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('icons','status',0,{{$category->id}})" {{ $category->status==1 ? 'checked' : '' }}>
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="{{ route('admin.icons.show', $category->id) }}">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="{{ route('admin.icons.create','id='.$category->id) }}">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="{{ route('admin.icons.edit', $category->id) }}">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('icons',{{$category->id}})">
                                Delete
                                </button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

@endsection

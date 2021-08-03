@extends('layouts.master')
@extends('sidebar.dashboard')
@section('content')
<div class="table-container">
<div class="card">
    <div class="card-header">
        Page List
        <div class="" style="float: right;">
            <a class="btn btn-success" href="{{ route("admin.setting.create") }}">
                Add New setting
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                            S.No.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Value
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
                            <td >
                            <div style="width: 150px;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;">
                                @if($category->type == 1)
                               <img src="{{ config('app.url').'uploads/Setting/'.$category->value }}" width="100" >
                               @else
                               {{$category->value}}
                               @endif
                            </div>
                            </td>

                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('setting','status',0,{{$category->id}})" {{ $category->status==1 ? 'checked' : '' }} >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="{{ route('admin.setting.show', $category->id) }}">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="{{ route('admin.setting.create','id='.$category->id) }}">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="{{ route('admin.setting.edit', $category->id) }}">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('setting',{{$category->id}})">
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

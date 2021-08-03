@extends('layouts.master')
@extends('sidebar.dashboard')
@section('content')
<div class="table-container">
<div class="card">
    <div class="card-header">
        Page List
        <div class="" style="float: right;">
            <a class="btn btn-success" href="{{ route("admin.slider.create") }}">
                Add New Slider
            </a>
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
                                {{ $category->heading ?? '' }}
                            </td>
                            <td>
                                @if($category->image != '')
                               <img src="{{ config('app.url').'uploads/slider/'.$category->image }}" width="100" >
                               @endif
                            </td>

                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('mss_slider','status',0,{{$category->id}})" {{ $category->status==1 ? 'checked' : '' }} >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="{{ route('admin.slider.show', $category->id) }}">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="{{ route('admin.slider.create','id='.$category->id) }}">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="{{ route('admin.slider.edit', $category->id) }}">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('mss_slider',{{$category->id}})">
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

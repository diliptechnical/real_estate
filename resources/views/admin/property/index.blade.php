@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')

<div class="table-container">
<div class="card">
    <div class="card-header">
        Page List
        <div class="" style="float: right;">
            <a class="btn btn-success" href="{{ route("admin.property.create") }}">
                Add New Product
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                        S. No.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Price
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
                            <td> {{$key+1}}
                        <!-- <input type="checkbox" name="propertyid" value="{{ $category->id }}"> -->
                            </td>
                            <td>
                                {{ $category->name ?? '' }}
                            </td>
                            <td>
                                @if($category->front_image != '')
                               <img src="{{ config('app.url').'uploads/property/'.$category->front_image }}" width="100" >
                               @endif
                            </td>
                            <td>
                                {{ $category->selling_cost ?? '' }}
                            </td>
                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('mss_property','status',0,{{$category->id}})" {{ $category->status==1 ? 'checked' : '' }} >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="{{ route('admin.property.show', $category->id) }}">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="{{ route('admin.property.create','id='.$category->id) }}">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="{{ route('admin.property.edit', $category->id) }}">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('mss_property',{{$category->id}})">
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

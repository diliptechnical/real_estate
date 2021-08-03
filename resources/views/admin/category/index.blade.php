@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
   
<div class="table-container">
<div class="card">
    <div class="card-header">
        All Service List
        <div class="" style="float: right;">
            {{-- <a class="btn btn-success" href="{{ route("admin.category.create") }}">
                Add New Service
            </a> --}}
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
                          Heading
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Short Details
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($category as $key => $category)
                        <tr data-entry-id="{{ $category->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $category->heading ?? '' }}
                            </td>
                            <td>
                               <img src="{{ config('app.url').'uploads/category/'.$category->icon }}" width="100" >
                            </td>
                            <td>
                                {{ $category->short_detail ?? '' }}
                            </td>
                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox"  onchange="update('mss_category','status',0,{{$category->id}})" {{ $category->status==1 ? 'checked' : '' }} >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="{{ route('admin.category.show', $category->id) }}">
                                    View
                                </a>
                                <a class="btn btn-xs btn-success" href="{{ route('admin.category.create','id='.$category->id) }}">
                                    Add Category
                                </a>
                                <a class="btn btn-xs btn-info" href="{{ route('admin.category.edit', $category->id) }}">
                                    Edit
                                </a>
                                <form action="{{ route('admin.category.destroy', $category->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                    <input type="submit" class="btn btn-xs btn-danger" value="Delete">
                                </form>
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
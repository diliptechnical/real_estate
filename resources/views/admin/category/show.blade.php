@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
     Show {{$category->is_parent==0 ? 'Service' : 'Category'}}

    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        Cat Name
                    </th>
                    <td>
                        {{ $category->heading }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Short Detail
                    </th>
                    <td>
                        {!! $category->short_detail !!}
                    </td>
                </tr>
                <tr>
                    <th>
                        Icon
                    </th>
                    <td>
                        @if($category->icon)
                            <img  src="{{config('app.url').'uploads/category/'.$category->icon}}">
                        @endif
                    </td>
                </tr>
                <tr>
                    <th>
                        Deatil
                    </th>
                    <td>
                        {{ $category->detail }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Main Content
                    </th>
                    <td>
                        {{ $category->pbody }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Tag Line
                    </th>
                    <td>
                        {{ $category->tag_line }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Benefits
                    </th>
                    <td>
                        {{ $category->benefits }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Price
                    </th>
                    <td>
                        {{ $category->amount }}
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
@if(!$subcategory->isEmpty())

<div class="card">
    <div class="card-header">
        Category List
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
                            Short Detail
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($subcategory as $key => $subcategory)
                        <tr data-entry-id="{{ $subcategory->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $subcategory->heading ?? '' }}
                            </td>
                            <td> 
                                @if($subcategory->icon)
                                    <img  src="{{config('app.url').'uploads/category/'.$subcategory->icon}}">
                                @endif
                            </td>
                            <td>
                                {{ $subcategory->short_detail ?? '' }} 
                            </td>
                            <td>
                                {{-- @can('category_show') --}}
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.category.show', $subcategory->id) }}">
                                        View
                                    </a>
                                    @if($category->design!='main' && $category->design!='')

                                        <a class="btn btn-xs btn-success" href="{{ route('admin.category.create', $subcategory->id) }}">
                                        Add Category
                                        </a>
                                @endif
                                {{-- @endcan --}}
                                {{-- @can('category_edit') --}}
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.category.edit', $subcategory->id) }}">
                                        Edit
                                    </a>
                                {{-- @endcan --}}
                                {{-- @can('category_delete') --}}
                                    <form action="{{ route('admin.category.destroy', $subcategory->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="submit" class="btn btn-xs btn-danger" value="Delete">
                                    </form>
                                {{-- @endcan --}}
                            </td>

                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
@endif
@endsection

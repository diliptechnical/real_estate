@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
     Show Service 
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        Heading
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
                        {{ $category->icon }}
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
                            &nbsp;
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
                                {{ $subcategory->icon ?? '' }}
                            </td>
                            <td>
                                {{ $subcategory->short_detail ?? '' }}
                            </td>
                            <td>
                                {{-- @can('category_show') --}}
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.pages.show', $subcategory->id) }}">
                                        View
                                    </a>
                                    @if(!$category->design=='main')

                                    <a class="btn btn-xs btn-success" href="{{ route('admin.pages.create', $subcategory->id) }}">
                                        Add Category
                                    </a>
@endif
                                {{-- @endcan --}}
                                {{-- @can('category_edit') --}}
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.pages.edit', $subcategory->id) }}">
                                        Edit
                                    </a>
                                {{-- @endcan --}}
                                {{-- @can('category_delete') --}}
                                    <form action="{{ route('admin.pages.destroy', $subcategory->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
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
@endsection

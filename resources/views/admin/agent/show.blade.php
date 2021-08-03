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
                            Name
                        </th>
                        <td>
                            {{ $category->name }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Post
                        </th>
                        <td>
                            {!! $category->post !!}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Image
                        </th>
                        <td>
                            @if($category->image)
                            <img src="{{config('app.url').'uploads/agent/'.$category->image}}" width="100">
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Deatil
                        </th>
                        <td>
                            <div style="width: 900px;overflow:hidden;">{!! $category->content !!}</div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection

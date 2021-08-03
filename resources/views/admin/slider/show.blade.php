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
                            Short Deatil
                        </th>
                        <td>
                            {{ $category->detail }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Image
                        </th>
                        <td>
                            @if($category->image != '')
                            <img src="{{ config('app.url').'uploads/slider/'.$category->image }}" width="100">
                            @endif
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
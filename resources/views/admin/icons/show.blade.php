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
                            {{ $category->name }}
                        </td>
                    </tr>

                    <tr>
                        <th>
                            Image
                        </th>
                        <td>
                            <img src="{{config('app.url').'uploads/icons/'.$category->image }}" width="50">

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
@endsection

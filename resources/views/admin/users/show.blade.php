@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
       User List
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <td>
                        {{ $user->name }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Email
                    </th>
                    <td>
                        {{ $user->email }}
                    </td>
                </tr>
                <tr>
                    <th>
                       Mobile
                    </th>
                    <td>
                        {{ $user->mobile }}
                    </td>
                </tr>
                <tr>
                    <th>
                        About
                    </th>
                    <td>
                       {{ $user->aboutme }}
                    </td>
                </tr>
                <tr>
                    <th> Created at </th>
                    <td> {{$user->created_at}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

@endsection

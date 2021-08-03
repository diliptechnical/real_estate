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
                        {{ $users->name }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Email
                    </th>
                    <td>
                        {{ $users->email }}
                    </td>
                </tr>
                <tr>
                    <th>
                       Mobile
                    </th>
                    <td>
                        {{ $users->mobile }}
                    </td>
                </tr>
                <tr>
                    <th>
                    Massage
                    </th>
                    <td>
                       {{ $users->comment }}
                    </td>
                </tr>
                <tr>
                    <th> Date of Massage </th>
                    <td> {{$users->udate}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

@endsection

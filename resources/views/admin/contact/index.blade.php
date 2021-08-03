@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Users List
        <!-- <div class="" style="float: right;">
            <a class="btn btn-success" href="{{ route("admin.contact.create") }}">
                Add New Service
            </a>
        </div> -->
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                            User Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Mobile
                        </th>
                        <!-- <th>Status</th> -->
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($users as $key => $user)
                        <tr data-entry-id="{{ $user->id }}">
                            <td>
                                {{ $user->id ?? '' }}

                            </td>
                            <td>
                                {{ $user->name ?? '' }}
                            </td>
                            <td>
                                {{ $user->email ?? '' }}
                            </td>
                            <td>
                                {{ $user->mobile ?? '' }}
                            </td>

                            <!-- <td> <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('amenities','status',0,{{$user->id}})" {{ $user->status==1 ? 'checked' : '' }} >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label></td> -->
                            <td>
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.contact.show', $user->id) }}">
                                       View
                                    </a>
                                    <!-- <a class="btn btn-xs btn-info" href="{{ route('admin.contact.edit', $user->id) }}">
                                        Edit
                                    </a> -->
                                    <button class="btn btn-xs btn-danger" onclick="deletethis('mss_contact',{{$user->id}})">
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

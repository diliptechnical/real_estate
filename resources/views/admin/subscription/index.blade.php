@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')

<div class="table-container">
<div class="card">
    <div class="card-header">
        subscription List
        <!-- <div class="" style="float: right;">
           <select class="form-control" onchange="subscriptionData()" id="typeValue">
               <option>Select Type</option>
               <option value="deposit">Deposit</option>
               <option value="withdraw">Withdraw</option>
           </select>
            </a>
        </div> -->
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                            Id
                        </th>
                        <th>
                            User
                        </th>
                        <th>
                            Start Date
                        </th>
                        <th>
                            End Date
                        </th>

                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($subscription as $key => $permission)
                        <tr data-entry-id="{{ $permission->id }}">
                            <td>
                                {{ $permission->id ?? '' }}

                            </td>
                            <td>
                                {{ $permission->user['name'] ?? '' }}
                            </td>
                            <td>
                                {{ $permission->start_date ?? '' }}
                            </td>
                            <td>
                                {{ $permission->end_date ?? '' }}
                            </td>

                            <td>
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.subscription.show', $permission->id) }}">
                                        View
                                    </a>

                                    <button class="btn btn-xs btn-danger" onclick="deletethis('subscriptions',{{$permission->id}})">
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

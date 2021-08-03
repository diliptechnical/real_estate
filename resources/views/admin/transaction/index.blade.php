@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')

<div class="table-container">
<div class="card">
    <div class="card-header">
        Transaction List
        <!-- <div class="" style="float: right;">
           <select class="form-control" onchange="transactionData()" id="typeValue">
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
                            Payment Id
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            amount
                        </th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($transaction as $key => $permission)
                        <tr data-entry-id="{{ $permission->id }}">
                            <td>
                                {{ $permission->id ?? '' }}

                            </td>
                            <td>
                                {{ $permission->payable_id ?? '' }}
                            </td>
                            <td>
                                {{ $permission->type ?? '' }}
                            </td>
                            <td>
                                {{ $permission->amount ?? '' }}
                            </td>
                            <td>
                                {{ $permission->created_at ?? '' }}
                            </td>
                            <td>
                                {{ $permission->updated_at ?? '' }}
                            </td>
                            <td>
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.transaction.show', $permission->id) }}">
                                        View
                                    </a>

                                    <button class="btn btn-xs btn-danger" onclick="deletethis('transactions',{{$permission->id}})">
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

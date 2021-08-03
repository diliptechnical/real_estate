@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
   
<div class="table-container">
<div class="card">
    <div class="card-header">
        transaction List
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        Payable Id
                    </th>
                    <td>
                        {{ $transaction->payable_id }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Amount</th>
                    <td>
                        {{ $transaction->amount }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Type
                    </th>
                    <td>
                        {{ $transaction->type }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Wallet Id</th>
                    <td>
                        {{ $transaction->wallet_id }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Create At
                    </th>
                    <td>
                        {{ $transaction->created_at }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Update At
                    </th>
                    <td>
                        {{ $transaction->updated_at }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

@endsection
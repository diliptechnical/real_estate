@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')

<div class="table-container">
<div class="card">
    <div class="card-header">
        subscription List
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        User
                    </th>
                    <td>
                        {{ $subscription->user['name'] }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Start Date</th>
                    <td>
                        {{ $subscription->start_date }}
                    </td>
                </tr>
                <tr>
                    <th>
                        End Date
                    </th>
                    <td>
                        {{ $subscription->end_date }}
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
</div>

@endsection

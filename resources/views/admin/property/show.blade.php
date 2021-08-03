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
                            Area
                        </th>
                        <td>
                            {!! $category->area !!}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Image
                        </th>
                        <td>
                            <img src="{{config('app.url').'uploads/property/'.$category->front_image }}" width="50">
                            
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Deatil
                        </th>
                        <td>
                            {{ $category->detail }}
                        </td>
                    </tr>
                    
                    <tr>
                        <th>
                            State
                        </th>
                        <td>
                            {{ $category->Sate }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            City
                        </th>
                        <td>
                            {{ $category->city }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Address
                        </th>
                        <td>
                            {{ $category->locarion }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Deposite Price
                        </th>
                        <td>
                            {{ $category->deposite_price }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Property Price
                        </th>
                        <td>
                            {{ $category->selling_cost }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</div>
@endsection
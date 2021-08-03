@extends('layouts.master')
@extends('sidebar.dashboard')

@section('content')
<div class="table-container">

<div class="card">
    <div class="card-header">
        Add Page
    </div>

    <div class="card-body">
        <form action="{{ route("admin.amenities.store") }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">

                <div class="form-group col-md-6 {{ $errors->has('heading') ? 'has-error' : '' }}">
                    <label for="heading">Heading*</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($category) ? $category->name : '') }}">
                    @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                    @endif
                </div>
                <div class="form-group col-md-6  {{ $errors->has('value') ? 'has-error' : '' }}">
                        <label for="price">Image </label>
                        <div class="dropdown w-100" >
                            <button class="dropbtn w-100" type="button" id="changetext">
                                Select icons
                            </button>

                            <div class="dropdown-content w-100">
                            <input type="hidden" id="value" name="value" class="form-control" >

                            @foreach($icon as $ic)
                                <a href="#" onclick="addthis('{{ $ic->name }}');">
                                    <input type="hidden" id="value_{{ $ic->name }}" name="value_{{ $ic->name }}" class="form-control" value="{{$ic->image}}">
                                    <img src="{{config('app.url').'uploads/icons/'.$ic->image }}" width="20" height="15"> {{$ic->name}}
                                </a>
                            @endforeach

                            </div>
                        </div>



                    </div>
            </div>


            <div class="form-group">
                <label for="short_detail " class="status" >Visible this page to all</label>
                <input type="checkbox" name="status" id="status" class="" checked />
            </div>
            <div>
                <input class="btn btn-danger" type="submit" value="Save">
            </div>
        </form>
    </div>
</div>
</div>
<script>
     function addthis(id){

        var getImage = $('#value_'+id).val();
       $('#changetext').text(id);
       $('#value').val(getImage);
   }

</script>
@endsection

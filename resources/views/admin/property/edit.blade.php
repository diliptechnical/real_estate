@extends('layouts.master')
@extends('sidebar.dashboard')
@section('content')
<div class="table-container">
    <div class="card">
        <div class="card-header">
            Edit Property
        </div>
        <div class="card-body">
            <form action="{{ route("admin.property.update", [$category->id]) }}" id="addform" method="POSt" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="{{ route("admin.property.update", [$category->id]) }}">
                <input type="hidden" id="id" name="id" class="form-control" value="{{ $category->id }}">
                <div class="row">
                    <div class="form-group col-md-6 {{ $errors->has('heading') ? 'has-error' : '' }}">
                        <label for="heading">Name *</label>
                        <input type="text" id="name" name="name" class="form-control" value="{{ old('name', isset($category) ? $category->name : '') }}">
                        @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('area') ? 'has-error' : '' }}">
                        <label for="heading">Area (Sq ft) *</label>
                        <input type="text" id="area" name="area" class="form-control" value="{{ old('area', isset($category) ? $category->area : '') }}">
                        @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('area') ? 'has-error' : '' }}">
                        <label for="heading">Built Up Area (Sq ft) *</label>
                        <input type="text" id="built_up_area" name="built_up_area" class="form-control" value="{{ old('built_up_area', isset($category) ? $category->built_up_area : '') }}">
                        @if($errors->has('name'))
                        <em class="invalid-feedback">
                            {{ $errors->first('name') }}
                        </em>
                        @endif
                    </div>

                    <div class="form-group col-md-6 ">
                        <label for="heading">Floor Preference *</label>
                        <select id="floor_preference" onChange=""  value="{{ old('floor_preference', isset($category) ? $category->floor_preference : '') }}" name="floor_preference" class="form-control">
                        <option value="">Floor Preference</option>
                        <option value="0">Only Ground</option>
                        <option value="1">Not on Ground</option>
                    </select>
                    </div>
                    <div class="form-group col-md-6 ">
                        <label for="heading">Property Age *</label>
                        <select id="property_age" onChange=""  value="{{ old('property_age', isset($category) ? $category->property_age : '') }}" name="property_age" class="form-control">
                        <option value="">Property Age</option>
                        <option value="1"> < 1 </option>
                        <option value="2"> < 2 </option>
                        <option value="3"> < 3 </option>
                        <option value="4"> < 4 </option>
                        <option value="5"> < 5 </option>
                    </select>
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('deposite_price') ? 'has-error' : '' }}">
                        <label for="heading">Deposite Price *</label>
                        <input type="text" id="deposite_price" name="deposite_price" class="form-control" value="{{ old('deposite_price', isset($category) ? $category->deposite_price : '') }}">
                        @if($errors->has('deposite_price'))
                        <em class="invalid-feedback">
                            {{ $errors->first('deposite_price') }}
                        </em>
                        @endif
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('selling_cost') ? 'has-error' : '' }}">
                        <label for="heading">Property Price *</label>
                        <input type="text" id="selling_cost" name="selling_cost" class="form-control" value="{{ old('selling_cost', isset($category) ? $category->selling_cost : '') }}">
                        @if($errors->has('selling_cost'))
                        <em class="invalid-feedback">
                            {{ $errors->first('selling_cost') }}
                        </em>
                        @endif
                    </div>

                    <div class="form-group col-md-6 ">
                        <label for="heading">Property Type *</label>
                        <select id="property_type" onChange="getProperty()"  value="{{ old('city', isset($category) ? $category->city : '') }}" name="property_type" class="form-control">
                        <option value="">Select Property Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Other Property Type</option>
                    </select>
                    </div>
                    <div class="form-group col-md-6 ">
                        <label for="heading">Property *</label>
                        <select id="property" name="property" class="form-control">
                        <option value="">Select Property Type</option>
                        <option value="Flat">Flat</option>
                        <option value="House/Villa">House/Villa</option>
                        <option value="Plot">Plot</option>
                        <option value="Plot">Office Space</option>
                        <option value="Plot">Shop/Showroom</option>
                        <option value="Plot">Commercial Land</option>
                        <option value="Plot">Warehouse/Godown</option>
                        <option value="Plot">Industrial Building</option>
                        <option value="Plot">Industrial Shed</option>
                        <option value="Plot">Agricultural Land</option>
                        <option value="Plot">Farm House</option>
                    </select>
                    </div>
                    <div class="form-group col-md-6 ">
                        <label for="heading">Apartment Type *</label>
                        <select id="apartment_type" name="apartment_type" class="form-control">
                        <option value="">Select Apartment Type</option>
                        <option value="1BHK">1BHK</option>
                        <option value="2BHK">2BHK</option>
                        <option value="3BHK">3BHK</option>
                        <option value="4BHK">4BHK</option>
                        <option value="5BHK">5BHK +</option>
                    </select>
                    </div>
                    <div class="form-group col-md-6 ">
                        <label for="heading">Property Status *</label>
                        <select id="property_status" name="property_status" class="form-control">
                        <option value="">Property Status</option>
                        <option value="0">Under Construction</option>
                        <option value="1">Ready</option>
                    </select>
                    </div>
                    <div class="form-group col-md-6 {{ $errors->has('state') ? 'has-error' : '' }}">
                    <label for="detail">State </label>
                    <!-- <textarea id="state" name="state" class="form-control ">{{ old('state', isset($category) ? $category->state : '') }}</textarea> -->
                    <select id="state" onchange="getCity()" value="{{ old('state', isset($category) ? $category->state : '') }}" name="state" class="form-control">
                        <option value="">Select State</option>
                        @foreach($state as $st)
                        <option value="{{$st->state}}">{{$st->state}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group col-md-6 {{ $errors->has('detail') ? 'has-error' : '' }}">
                    <label for="detail">City</label>
                    <!-- <textarea id="city" name="city" class="form-control ">{{ old('city', isset($category) ? $category->city : '') }}</textarea> -->
                    <select id="city" name="city" value="{{ old('city', isset($category) ? $category->city : '') }}" class="form-control">
                        <option value="">Select City</option>
                    </select>
                </div>
                </div>

                <div class="form-group {{ $errors->has('detail') ? 'has-error' : '' }}">
                    <label for="detail">Address</label>
                    <textarea id="location" name="location" class="form-control ">{{ old('location', isset($category) ? $category->location : '') }}</textarea>
                </div>
                <div class="form-group">
                    <label for="detail">Description</label>
                    {{-- <textarea id="detail" name="detail" class="form-control ">{{ old('detail', isset($category) ? $category->detail : '') }}</textarea> --}}
                    <textarea name="detail" value="{{ old('detail', isset($category) ? $category->detail : '') }}">{{ old('detail', isset($category) ? $category->detail : '') }}</textarea>
                </div>
                <div class="row">
                <div class="form-group col-sm-6 {{ $errors->has('front_image') ? 'has-error' : '' }}">
                    <label for="price">Main Image (File size supported under 5MB )</label>
                    <input type="file" id="front_image" name="front_image" class="form-control" value="{{ old('front_image', isset($category) ? $category->front_image : '') }}">
                    @if(isset($category->front_image))
                    <p class="helper-block">
                        <img src="{{config('app.url').'uploads/property/'.$category->front_image}}" width="100">
                    </p>
                    @endif
                </div>
                <div class="form-group col-sm-6 {{ $errors->has('front_image') ? 'has-error' : '' }}">
                    <label for="price">Floor Plan (File size supported under 25MB ) </label>
                    <input type="file" id="floor_plan[]" multiple name="floor_plan[]" class="form-control" value="{{ old('floor_plan', isset($category) ? $category->floor_plan : '') }}">
                    @if(isset($category->floor_plan))
                    <p class="helper-block" >
                        <?php $floor = json_decode($category->floor_plan); ?>
                    @foreach($floor as $floor_plan)

                        <img src="{{config('app.url').'uploads/floorplan/'.$floor_plan}}" width="100">
                    @endforeach

                    </p>
                    @endif
                </div>
                <div class="form-group col-sm-12 {{ $errors->has('front_image') ? 'has-error' : '' }}">
                    <label for="price">Video Link</label>
                    <input type="text" id="video" name="video" class="form-control" value="{{ old('video', isset($category) ? $category->video : '') }}">
                    @if(isset($category->video))
                    <p class="helper-block">
                    <iframe class="modalIframe" src="{{$category->video}}" width="100" height="100" ></iframe>
                        <!-- <img src="{{config('app.url').'uploads/floorplan/'.$category->floor_plan}}" width="100"> -->
                    </p>
                    @endif
                </div>
                </div>
                <div style="display: none;" class="form-group {{ $errors->has('image_collection') ? 'has-error' : '' }}">
                    <label for="price">Multiple Images</label>
                    <input type="file" id="image-upload" name="image_collection" multiple class="dropzone form-control" value="{{ old('image_collection', isset($category) ? $category->image_collection : '') }}">
                    <p class="helper-block">
                        <!-- <img src="{{config('app.url').'uploads/property/'.$category->image_collection}}" width="100"> -->
                    </p>
                </div>
                <div class="form-group" style="margin-top:50px;">
                    <label >Select Amenities</label>
                <table class="table table-bordered text-center">
                @foreach($amenities as $amenity)
                    <tr>
                        <td >
                            @if($amenity->value)
                            <img src="{{config('app.url').'uploads/icons/'.$amenity->value }}" width="50">
                            @endif
                            <h3 class="" style="margin-top:10px;"> {{$amenity->name}} </h3>
                        </td>
                        <td>
                        <input type="checkbox" name="amenity[]" value="{{$amenity->id}}" checked >
                        </td>
                    </tr>
                @endforeach
                </table>
                </div>
                <div class="form-group" style="margin:50px 0;">
                    <label for="short_detail " class="status">Is Featured</label>
                    <input type="checkbox" name="is_featured" id="is_featured" class="" checked />
                </div>
                <div class="form-group" style="margin-top:50px;">
                    <label for="short_detail " class="status">Visible this page to all</label>
                    <input type="checkbox" name="status" id="status" class="" checked />
                </div>
                <div>
                    <input class="btn btn-danger" type="submit" id="submitForms" value="Save">
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
<script>
function getCity(id){
   var state = $('#state').val()
   var allcity = ''
    var param = {
      state: state,
        };
                    $.ajax({
                      headers: {'x-csrf-token': _token},
                      method: 'GET',
                      url: URL_ROOT+'getcity/'+state,
                      success:function(response){
                        console.log(response)
                        var data = response
                        $.each(data, function(k, v) {
                            allcity += '<select id="city" name="city">'+
                            '<option value="'+v.city_name+'">'+v.city_name+'</option>'+
                            '</select>';
                        });
                        $('#city').html(allcity)
                      },
                      error:function(error){
                        console.log(error)
                        alert("not send");
                      }

                      });

}
function getProperty(){
   var propertytype = $('#property_type').val()
   if(propertytype=='Residential'){
    var data = {
        '1' : 'Flat',
        '2' : 'House/Villa',
        '3' : 'Plot',
    }

   $.each(data, function (key, value) {
   $('<select class="from-control" name="property" id="property>'
           + '<option value="'+value+'">'+value+'</option>'
       + '</select>');
        });
    }
}
</script>

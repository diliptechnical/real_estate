<template>
  <div>
    <!-- Sub banner start -->
    <div class="sub-banner overview-bgi">
      <div class="overlay">
        <div class="container">
          <div class="breadcrumb-area">
            <h1>Properties Detail</h1>
            <ul class="breadcrumbs">
              <li><a href="#">Home</a></li>
              <li class="active">Properties Detail</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Sub Banner end -->

    <!-- Properties details page start -->
    <div class="content-area properties-details-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <!-- Header -->
            <div class="heading-properties clearfix sidebar-widget sw2">
              <div class="pull-left">
                <h3>{{ detail.name }}</h3>
                <p><i class="fa fa-map-marker"></i> {{ detail.location }}</p>
              </div>
              <div class="pull-right">
                <h3>
                  <span> INR {{ detail.deposite_price }} </span>
                </h3>
                <h5>Per Manth</h5>
              </div>
            </div>
            <!-- Properties details section start -->
            <div class="Properties-details-section sidebar-widget sw2">
              <!-- Properties detail slider start -->
              <div class="properties-detail-slider simple-slider mb-40">
                <div
                  id="carousel-custom"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-outer">
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                      <div class="item active">
                        <img
                          :src="
                            $root.URL_ROOT +
                            'uploads/property/' +
                            detail.front_image
                          "
                          class="thumb-preview"
                          alt="Chevrolet Impala"
                        />
                      </div>
                      <!-- <div class="item">
                                        <img src="../assets/img/properties/properties-3.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div>
                                    <div class="item">
                                        <img src="../assets/img/properties/properties-4.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div>
                                    <div class="item">
                                        <img src="../assets/img/properties/properties-5.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div>
                                    <div class="item">
                                        <img src="../assets/img/properties/properties-2.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div>
                                    <div class="item">
                                        <img src="../assets/img/properties/properties-6.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div>
                                    <div class="item">
                                        <img src="../assets/img/properties/properties-1.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div>
                                    <div class="item">
                                        <img src="../assets/img/properties/properties-2.jpg" class="thumb-preview" alt="Chevrolet Impala">
                                    </div> -->
                    </div>
                    <!-- Controls -->
                    <!-- <a class="left carousel-control" href="#carousel-custom" role="button" data-slide="prev">
                                    <span class="slider-mover-left no-bg t-slider-r pojison" aria-hidden="true">
                                        <i class="fa fa-angle-left"></i>
                                    </span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-custom" role="button" data-slide="next">
                                    <span class="slider-mover-right no-bg t-slider-l pojison" aria-hidden="true">
                                        <i class="fa fa-angle-right"></i>
                                    </span>
                                    <span class="sr-only">Next</span>
                                </a> -->
                  </div>
                  <!-- Indicators -->
                  <!-- <ol class="carousel-indicators thumbs visible-lg visible-md">
                                <li data-target="#carousel-custom" data-slide-to="0" class=""><img src="../assets/img/properties/properties-1.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="1" class=""><img src="../assets/img/properties/properties-3.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="2" class=""><img src="../assets/img/properties/properties-4.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="3" class=""><img src="../assets/img/properties/properties-5.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="4" class=""><img src="../assets/img/properties/properties-2.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="5" class=""><img src="../assets/img/properties/properties-6.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="6" class=""><img src="../assets/img/properties/properties-1.jpg" alt="Chevrolet Impala"></li>
                                <li data-target="#carousel-custom" data-slide-to="7" class=""><img src="../assets/img/properties/properties-2.jpg" alt="Chevrolet Impala"></li>
                            </ol> -->
                </div>
              </div>
              <!-- Properties detail slider end -->
              <!-- Advanced search start -->
              <div class="advabced-search hidden-lg hidden-md">
                <div class="main-title-2">
                  <h1>Advanced Search</h1>
                </div>
                <div>
                  <h3>Property Type</h3>
                  <div class="d-flex nb__3ASCk">
                    <div class="nb-checkbox checkbox">
                      <label for="apartment"
                        ><input
                          type="checkbox"
                          id="apartment"
                          value="AP"
                        /><span>Residential</span></label
                      >
                    </div>
                    <div class="nb-checkbox checkbox">
                      <label for="ih"
                        ><input type="checkbox" id="ih" value="IH" /><span
                          >Commercial</span
                        ></label
                      >
                    </div>
                    <div class="nb-checkbox checkbox">
                      <label for="gc"
                        ><input type="checkbox" id="gc" value="GC" /><span
                          >Gated Community Villa</span
                        ></label
                      >
                    </div>
                    <div class="nb-checkbox checkbox">
                      <label for="sb"
                        ><input type="checkbox" id="sb" value="SB" /><span
                          >Other Property Types</span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- Advanced search end -->

              <!-- Property description start -->
              <div class="panel-box properties-panel-box Property-description">
                <ul class="nav nav-tabs">
                  <li class="active">
                    <a
                      href="#tab1default"
                      data-toggle="tab"
                      aria-expanded="true"
                      >Description</a
                    >
                  </li>
                  <!-- <li class="">
                    <a
                      href="#tab2default"
                      data-toggle="tab"
                      aria-expanded="false"
                      >Condition</a
                    >
                  </li> -->
                  <li class="">
                    <a
                      href="#tab3default"
                      data-toggle="tab"
                      aria-expanded="false"
                      >Amenities</a
                    >
                  </li>
                  <li class="">
                    <a
                      href="#tab4default"
                      data-toggle="tab"
                      aria-expanded="false"
                      >Floor Plans</a
                    >
                  </li>
                  <li class="">
                    <a
                      href="#tab5default"
                      data-toggle="tab"
                      aria-expanded="false"
                      >Video</a
                    >
                  </li>
                </ul>
                <div class="panel with-nav-tabs panel-default">
                  <div class="panel-body">
                    <div class="tab-content">
                      <div class="tab-pane fade active in" id="tab1default">
                        <div class="main-title-2">
                          <h1><span>Description</span></h1>
                        </div>
                        <div v-html="detail.detail"></div>
                      </div>
                      <div
                        class="tab-pane fade features active in"
                        id="tab2default"
                      >
                        <!-- Properties condition start -->
                        <!-- <div class="properties-condition">
                          <div class="main-title-2">
                            <h1><span>Condition</span></h1>
                          </div>
                          <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-12">
                              <ul class="condition">
                                <li>
                                  <i class="fa fa-check-square"></i>3 Beds
                                </li>
                                <li>
                                  <i class="fa fa-check-square"></i>Bathroom
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                              <ul class="condition">
                                <li>
                                  <i class="fa fa-check-square"></i>4800 sq ft
                                </li>
                                <li><i class="fa fa-check-square"></i>TV</li>
                              </ul>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                              <ul class="condition">
                                <li>
                                  <i class="fa fa-check-square"></i>1 Garage
                                </li>
                                <li>
                                  <i class="fa fa-check-square"></i>Balcony
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> -->
                        <!-- Properties condition end -->
                      </div>
                      <div
                        class="tab-pane fade technical active in"
                        id="tab3default"
                      >
                        <!-- Properties amenities start -->
                        <div class="properties-amenities">
                          <div class="main-title-2">
                            <h1><span>Amenities</span></h1>
                          </div>
                          <div class="row">
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                            > 
                              <ul class="amenities" style="column-count: 5;text-align: center;line-height: 2.5;">
                                <li
                                  v-for="amenity in detail.amenity"
                                  :key="amenity.id"
                                >
                                  <img :src="$root.URL_ROOT+'uploads/icons/'+amenity.value" class="" width="40" />
                                  <br /> {{ amenity.name }}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- Properties amenities end -->
                      </div>
                      <div class="tab-pane fade active in" id="tab4default">
                        <!-- Floor Plans start -->
                        <div class="floor-plans">
                          <div class="main-title-2">
                            <h1><span>Floor</span> Plans</h1>
                          </div>

                          <carousel :autoplay="true" v-if="floorplandone" :items="1" :nav="false">
                            <img
                              v-for="(floor_plan, key) in getFloor(
                                detail.floor_plan
                              )"
                              :key="key"
                              :src="
                                $root.URL_ROOT +
                                'uploads/floorplan/' +
                                floor_plan
                              "
                              alt="floor-plans"
                              class="img-responsive"
                            />
                          </carousel>
                        </div>
                        <!-- Floor Plans end -->
                      </div>
                      <div class="tab-pane fade active in" id="tab5default">
                        <!-- Inside properties start  -->
                        <div class="inside-properties">
                          <!-- Main Title 2 -->
                          <div class="main-title-2" style="margin-top: 50px">
                            <h1><span>Video </span></h1>
                          </div>

                          <iframe
                            class="modalIframe"
                            :src="detail.video"
                            allowfullscreen
                          ></iframe>
                        </div>
                        <!-- Inside properties end -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Property description end -->
            </div>
            <!-- Properties details section end -->

            <!-- Location start -->
            <!-- <div class="location sidebar-widget sw2">
                    <div class="map"> -->
            <!-- Main Title 2 -->
            <!-- <div class="main-title-2">
                            <h1><span>Location</span></h1>
                        </div>
                        <div id="map" class="contact-map"></div>
                    </div>
                </div> -->
            <!-- Location end -->

            <!-- Properties details section start -->
            <div
              class="Properties-details-section sidebar-widget sw2"
              style="display: none"
            >
              <!-- Properties comments start -->
              <div class="properties-comments mb-40">
                <!-- Comments section start -->
                <div class="comments-section">
                  <!-- Main Title 2 -->
                  <div class="main-title-2">
                    <h1><span>Comments </span> Section</h1>
                  </div>

                  <ul class="comments">
                    <li>
                      <div class="comment">
                        <div class="comment-author">
                          <a href="#">
                            <img
                              src="../assets/img/avatar/avatar-5.png"
                              alt="avatar-5"
                            />
                          </a>
                        </div>
                        <div class="comment-content">
                          <div class="comment-meta">
                            <div class="comment-meta-author">John Antony</div>
                            <div class="comment-meta-reply">
                              <a href="#">Reply</a>
                            </div>
                            <div class="comment-meta-date">
                              <span class="hidden-xs">8:42 PM 3/3/2020</span>
                            </div>
                          </div>
                          <div class="clearfix"></div>
                          <div class="comment-body">
                            <div class="comment-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                              <span>( 4 Reviews )</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec luctus tincidunt aliquam. Aliquam
                              gravida massa at sem vulputate interdum et vel
                              eros. Maecenas eros enim, tincidunt vel turpis
                              vel, dapibus tempus nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div class="comment">
                            <div class="comment-author">
                              <a href="#">
                                <img
                                  src="../assets/img/avatar/avatar-5.png"
                                  alt="avatar-5"
                                />
                              </a>
                            </div>

                            <div class="comment-content">
                              <div class="comment-meta">
                                <div class="comment-meta-author">
                                  Karen Paran
                                </div>

                                <div class="comment-meta-reply">
                                  <a href="#">Reply</a>
                                </div>

                                <div class="comment-meta-date">
                                  <span class="hidden-xs"
                                    >8:42 PM 3/3/2020</span
                                  >
                                </div>
                              </div>
                              <div class="clearfix"></div>
                              <div class="comment-body">
                                <div class="comment-rating">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star-o"></i>
                                  <span>( 4 Reviews )</span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Donec luctus tincidunt
                                  aliquam. Aliquam gravida massa at sem
                                  vulputate interdum et vel eros.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="comment">
                        <div class="comment-author">
                          <a href="#">
                            <img
                              src="../assets/img/avatar/avatar-5.png"
                              alt="avatar-5"
                            />
                          </a>
                        </div>
                        <div class="comment-content">
                          <div class="comment-meta">
                            <div class="comment-meta-author">
                              Eliane Pereira
                            </div>
                            <div class="comment-meta-reply">
                              <a href="#">Reply</a>
                            </div>
                            <div class="comment-meta-date">
                              <span class="hidden-xs">8:42 PM 3/3/2020</span>
                            </div>
                          </div>
                          <div class="clearfix"></div>
                          <div class="comment-body">
                            <div class="comment-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                              <span>( 4 Reviews )</span>
                            </div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div class="comment comment-mrg-bdr-nane mb-0">
                            <div class="comment-author">
                              <a href="#">
                                <img
                                  src="../assets/img/avatar/avatar-5.png"
                                  alt="avatar-5"
                                />
                              </a>
                            </div>
                            <div class="comment-content">
                              <div class="comment-meta">
                                <div class="comment-meta-author">Jane Doe</div>

                                <div class="comment-meta-reply">
                                  <a href="#">Reply</a>
                                </div>

                                <div class="comment-meta-date">
                                  <span class="hidden-xs"
                                    >8:42 PM 3/3/2020</span
                                  >
                                </div>
                              </div>
                              <div class="clearfix"></div>
                              <div class="comment-body">
                                <div class="comment-rating">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star-o"></i>
                                  <span>( 4 Reviews )</span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Donec luctus tincidunt
                                  aliquam. Aliquam gravida massa at sem
                                  vulputate interdum et vel eros.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- Comments section end -->
              </div>
              <!-- Properties comments end -->

              <!-- Contact 1 start -->
              <div class="contact-1">
                <div class="main-title-2">
                  <h1><span>Leave</span> a Comment</h1>
                </div>
                <div class="contact-form">
                  <form
                    id="contact_form"
                    action="https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html"
                    method="GET"
                    enctype="multipart/form-data"
                  >
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group fullname">
                          <input
                            type="text"
                            name="full-name"
                            class="input-text"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group enter-email">
                          <input
                            type="email"
                            name="email"
                            class="input-text"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group subject">
                          <input
                            type="text"
                            name="subject"
                            class="input-text"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group number">
                          <input
                            type="text"
                            name="phone"
                            class="input-text"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix"
                      >
                        <div class="form-group message">
                          <textarea
                            class="input-text"
                            name="message"
                            placeholder="Write message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group send-btn mb-0">
                          <button
                            type="submit"
                            class="button-md button-theme btn-3"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- Contact 1 end -->
            </div>
            <!-- Properties details section end -->
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <!-- Sidebar start -->
            <div class="sidebar right">
              <!-- Search contents sidebar start -->
              <div class="sidebar-widget sidebar-widgets hidden-xs hidden-sm">
                <div class="main-title-2">
                  <button
                    :class="
                      normalfilter
                        ? 'btn btn-default filter-btn filter-active'
                        : 'btn btn-default filter-btn '
                    "
                    @click="showFilter(1)"
                  >
                    Filters
                  </button>
                  <button
                    :class="
                      premiumfilter
                        ? 'btn btn-default filter-btn filter-active'
                        : 'btn btn-default filter-btn '
                    "
                    @click="showFilter(2)"
                  >
                    Premium Filters
                  </button>
                </div>
                <div v-if="normalfilter" class="">
                  <div class="control-group">
                    <h3 class="filter-heading">Property Type</h3>
                    <label class="control control--checkbox"
                      >Residential
                      <input type="checkbox" v-model="property_type" value="Residential"/>
                      <div class="control__indicator"></div>
                    </label>
                    <label class="control control--checkbox"
                      >Commercial
                      <input type="checkbox" v-model="property_type" value="Commercial" />
                      <div class="control__indicator"></div>
                    </label>
                    <label class="control control--checkbox"
                      >Other Property Types
                      <input type="checkbox" v-model="property_type" value="Other"  />
                      <div class="control__indicator"></div>
                    </label>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Apartment Type</h3>
                    <div class="apartment-type">
                      <label class="control control--checkbox"
                      >1BHK
                      <input type="checkbox" v-model="apartment_type" value="1BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >2BHK
                      <input type="checkbox" v-model="apartment_type" value="2BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >3BHK
                      <input type="checkbox" v-model="apartment_type" value="3BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >4BHK
                      <input type="checkbox" v-model="apartment_type" value="4BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >5BHK
                      <input type="checkbox" v-model="apartment_type" value="5BHK" />
                      <div class="control__indicator"></div>
                    </label>
                      <!-- <input type="button" class="apartment-btn" v-model="apartment_type" value="1BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="2BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="3BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="4BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="5BHK"  @click="searchByFilter()"> -->
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Price range</h3>
                    <div class="price-range">
                      <template>
                        <div>
                          <VueSimpleRangeSlider
                            style="width: 260px"
                            :min="0"
                            :max="1000000"
                            :logarithmic="true"
                            v-model="range"
                            @onchange="searchByFilter()"
                            activeBarColor="#95c41f"
                          />
                        </div>
                        <div class="container">
                        <div class="row">
                          <span class="price-span col-sm-6"> {{range[0]}} INR </span>
                          <span class="price-span col-sm-6" style="float: right;"> {{range[1]}} INR</span>
                        </div>
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Property Status</h3>
                    <div class="property-status">
                      <label class="control control--checkbox"
                        >Under Construction
                        <input
                          type="radio"
                          name="property_status"
                          v-model="property_status"
                          value="0"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <label class="control control--checkbox"
                        >Ready
                        <input
                          type="radio"
                          v-model="property_status"
                          value="1"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="premiumfilter" class="">
                   <div class="control-group">
                    <h3 class="filter-heading">Built Up Area(sq. ft.)</h3>
                    <div class="price-range">
                      <template>
                        <div>
                          <VueSimpleRangeSlider
                            style="width: 250px"
                            :min="0"
                            :max="1000000"
                            :logarithmic="true"
                            v-model="range"
                            activeBarColor="#95c41f"
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Plot Area(sq. ft.)</h3>
                    <div class="price-range">
                      <template>
                        <div>
                          <VueSimpleRangeSlider
                            style="width: 250px"
                            :min="0"
                            :max="1000000"
                            :logarithmic="true"
                            v-model="range"
                            activeBarColor="#95c41f"
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading"> Floor Preference</h3>
                    <div class="property-status">
                      <label class="control control--checkbox"
                        >Only Ground
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <label class="control control--checkbox"
                        >Not On Ground
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
<div class="control-group">
                    <h3 class="filter-heading">Property Age</h3>
                    <div class="property-status">
                      <label class="control control--checkbox"
                        > < 1
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <label class="control control--checkbox"
                        > < 3
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                       <label class="control control--checkbox"
                        > < 5
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                       <label class="control control--checkbox"
                        > < 10
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    </div>
  </div>
                        </div>
                    </div>
                    <!-- Search contents sidebar end -->
                    <!-- Popular posts start -->
                    <div class="sidebar-widget popular-posts">
                        <div class="main-title-2">
                            <h1>Recently Properties</h1>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object" src="../assets/img/properties/small-properties-1.jpg" alt="small-properties-1">
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">
                                    <a href="properties-details.html">Sweet Family Home</a>
                                </h3>
                                <div class="listing-post-meta">
                                    Aug 18, 2020 | <a href="#">$485,00</a>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object" src="../assets/img/properties/small-properties-2.jpg" alt="small-properties-2">
                            </div>
                            <div class="media-body align-self-center">
                                <h3 class="media-heading">
                                    <a href="properties-details.html">Modern Family Home</a>
                                </h3>
                                <div class="listing-post-meta">
                                    Feb 27, 2020 | <a href="#">$199,00</a>
                                </div>
                            </div>
                        </div>
                        <div class="media mb-0">
                            <div class="media-left">
                                <img class="media-object" src="../assets/img/properties/small-properties-3.jpg" alt="small-properties-3">
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">
                                    <a href="properties-details.html">Beautful Single Home</a>
                                </h3>
                                <div class="listing-post-meta">
                                    Nov 07, 2020 | <a href="#">$897,00</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Category posts start -->
                    <div class="sidebar-widget category-posts">
                        <div class="main-title-2">
                            <h1>Popular Category</h1>
                        </div>
                        <ul class="list-unstyled list-cat">
                            <li><a href="#">Single Family </a> <span>(45)  </span></li>
                            <li><a href="#">Apartment  </a> <span>(21)  </span></li>
                            <li><a href="#">Condo </a> <span>(23)  </span></li>
                            <li><a href="#">Multi Family </a> <span>(19)  </span></li>
                            <li><a href="#">Villa </a> <span>(19)  </span></li>
                            <li><a href="#">Other  </a> <span>(22)  </span></li>
                        </ul>
                    </div>

                    <!-- Social media start -->
                    <div class="social-media sidebar-widget clearfix">
                        <!-- Main Title 2 -->
                        <div class="main-title-2">
                            <h1><span>Social</span> Media</h1>
                        </div>
                        <!-- Social list -->
                        <ul class="social-list">
                            <li><a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#" class="linkedin-bg"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#" class="google-bg"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#" class="rss-bg"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>

                    <!-- Mortgage calculator start -->
                    <div class="sidebar-widget contact-1 mortgage-calculator">
                        <div class="main-title-2">
                            <h1><span>Mortgage</span> Calculator</h1>
                        </div>
                        <div class="contact-form">
                            <form id="agent_form" action="https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html" method="GET" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="form-label">Property Price</label>
                                            <input type="text" class="input-text" placeholder="$87.000">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="form-label">Interest Rate (%)</label>
                                            <input type="text" class="input-text" placeholder="10%">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="form-label">Period In Months</label>
                                            <input type="text" class="input-text" placeholder="10 Months">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label class="form-label">Down Payment</label>
                                            <input type="text" class="input-text" placeholder="$36,300">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-0">
                                            <button class="search-button">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Sidebar end -->
            </div>
        </div>
    </div>
</div>
<!-- Properties details page end -->

<!-- Partners block start -->
<div class="partners-block">
    <div class="container">
        <div class="col-lg-12">
            <h3>Brands & Partners</h3>
        </div>
    </div>
    <div class="partners-block-inner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="carousel our-partners slide" id="ourPartners">
                        <div class="carousel-inner">
                            <div class="item active">
                                <div class="col-xs-12 col-sm-6 col-md-3 partner-box">
                                    <a href="#">
                                        <img src="../assets/img/brand/partner.png" alt="partner">
                                    </a>
                                </div>
                            </div>
                            <div class="item active">
                                <div class="col-xs-12 col-sm-6 col-md-3 partner-box">
                                    <a href="#">
                                        <img src="../assets/img/brand/partner-2.png" alt="partner-2">
                                    </a>
                                </div>
                            </div>
                            <div class="item active">
                                <div class="col-xs-12 col-sm-6 col-md-3 partner-box">
                                    <a href="#">
                                        <img src="../assets/img/brand/partner-3.png" alt="partner-3">
                                    </a>
                                </div>
                            </div>
                            <div class="item active">
                                <div class="col-xs-12 col-sm-6 col-md-3 partner-box">
                                    <a href="#">
                                        <img src="../assets/img/brand/partner-4.png" alt="partner-4">
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="col-xs-12 col-sm-6 col-md-3 partner-box">
                                    <a href="#">
                                        <img src="../assets/img/brand/partner-5.png" alt="partner-5">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a class="left carousel-control" href="#ourPartners" data-slide="prev"><i class="fa fa-chevron-left icon-prev"></i></a>
                        <a class="right carousel-control" href="#ourPartners" data-slide="next"><i class="fa fa-chevron-right icon-next"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Partners block end -->

  </div>
</template>
<script>
import axios from 'axios'
import carousel from "vue-owl-carousel";
// import counter from '@/components/counter'
require('../assets/css/style.dev.css')
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'
export default {
  components: {
    counter,
    carousel,
    VueSimpleRangeSlider
  },
data () {
    return {
      floorplandone: false,
     id: this.$route.params.id,
     premiumfilter: false,
     normalfilter: false,
     range: [1,10000000],
     number: 10,
     detail: [],
     name:'',
     email:'',
     mobile:'',
     address: '',
     msg: '',
     apartment_type: [],
     property_type: [],
     property_status: null
    }
  },
    metaInfo () {
    return {
      //detail: [],
      title: this.detail.meta_title,
      meta: [
        { name: 'description', content: this.detail.meta_description },
        { name: 'keywords', content: this.detail.meta_keywords }
      ]
    }
  },
  mounted () {
// this.linkData()
    this.pageDatas()
    this.mostViewed()
    this. showFilter(1)
  },
  watch: {
    'apartment_type': function (oldVal,newVal) {
      if(oldVal != newVal){
    this.searchByFilter()
      }
    },
    'property_type': function (oldVal,newVal) {
      if(oldVal != newVal){
    this.searchByFilter()
      }
    },
    'property_status': function (oldVal,newVal) {
      if(oldVal != newVal){
        this.searchByFilter()
      }
    }
  },
  methods: {
    searchprimiumFilter(){

    },
    searchByFilter(){
       var vi = this
           this.$router.push({ name: 'Property' })
         axios
        .get(this.$root.URL_ROOT + "searchfilter",{ params: {
            apartment_type: vi.apartment_type,
            property_type: vi.property_type,
            property_status: vi.property_status,
            range: vi.range
        }})
        .then(function (response) {
        console.log('filterData',response)
        })
    },
      showFilter(id){
          if(id==1){
          this.normalfilter = true 
          this.premiumfilter = false
          }else{
          this.premiumfilter = true
          this.normalfilter = false
           this.$router.push({ name: 'Property' })
          }
      },
      mostViewed(){
        var ip_address = JSON.parse(localStorage.getItem('ip_address'))
        var user_session = localStorage.getItem('user')
        var uid = ''
        if (user_session != null) {
        uid = user_session
        } else {
        uid = null
        }
        var self = this
        axios
        .get(this.$root.URL_ROOT + "mostview",{ params: {
        id: self.id,
        uid: uid,
        ip_address: ip_address,
        }})
        .then(function (response) {
        //   console.log(response);
        });
      },
      getFloor(data){
        if(data){
        return  JSON.parse(data)
        }
      },
      pageDatas(){
        var self = this
        axios.get(this.$root.URL_ROOT + 'getproperty/'+self.id).then(function (response) {
        console.log(response)
        self.detail = response.data
        self.floorplandone = true
        })
      },
    async pageDatass () {
      var ev = this
      const response = await axios.post(this.$root.URL_ROOT + 'getproperty', { id: ev.id })
      // this.$store.commit('pageData', response.data)
      ev.detail = response.data.data
      console.log(response.data.data)
    },
    contact_submit () {
     var vi=this;
     if(this.contact_type==''){
             this.$toasted.global.error({ message: 'Please select type' })
        }else if(this.name==''){
             this.$toasted.global.error({ message: 'Please enter name' })
        }else if(this.email==""){
             this.$toasted.global.error({ message: 'Please enter email' })
        }else if(this.mobile==""){
             this.$toasted.global.error({ message: 'Please enter mobile number' })
        }else{
      axios.post('https://7squarearchitecturalstudio.com/admin/api.php?type=contact', {
        name: this.name,
                        email: this.email,
                        mobile: this.mobile,
                        address: this.address,
                        msg: this.msg,
      }).then(function (response) {
        var data=response.data
                       console.log(response)
                       if(data.status=='success'){
                         vi.$toasted.global.success({ message: data.msg }) 
                         vi.name="";
                         vi.email="";
                         vi.mobile='';
                       }else{
                       vi.$toasted.global.error({ message: data.msg })
                } 
              })
        }
    },
     contact_submits(){
          var vi=this;
        if(this.contact_type==''){
             this.$toasted.global.error({ message: 'Please select type' })
        }else if(this.name==''){
             this.$toasted.global.error({ message: 'Please enter name' })
        }else if(this.email==""){
             this.$toasted.global.error({ message: 'Please enter email' })
        }else if(this.mobile==""){
             this.$toasted.global.error({ message: 'Please enter mobile number' })
        }else{
          alert(this.name)
          alert(this.email)
          alert(this.mobile)
          alert(this.address)
          alert(this.msg)
           axios({ method: 'POST', url: this.$root.URL_ROOT + 'api.php',
                      data: { 
                        type: 'contact',
                        name: this.name,
                        email: this.email,
                        mobile: this.mobile,
                        address: this.address,
                        msg: this.msg,
                      }
                    }).then(function (response) {
                       var data=response.data
                       console.log(response)
                       if(data.status=='success'){
                         vi.$toasted.global.success({ message: data.msg }) 
                         vi.name="";
                         vi.email="";
                         vi.mobile='';
                       }else{
                       vi.$toasted.global.error({ message: data.msg })
                }
            })
        }
    }
  }
}
</script>
<style >
.control-group {
    display: inline-block;
    vertical-align: top;
    background: #fff;
    text-align: left;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    padding: 0px 10px 10px 10px;
    width: 94%;
    height: auto;
    margin: 10px;
}
.control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
}
label {
    cursor: default;
}

.control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
[type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
}
button, input {
}
button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
button, hr, input {
    overflow: visible;
}
user agent stylesheet
input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
}
user agent stylesheet
input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
}
label {
    cursor: default;
}
.control input:checked ~ .control__indicator {
    background: #95c41f;
}
.control__indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
}
.control input:checked ~ .control__indicator:after {
    display: block;
}
.control--checkbox .control__indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(
45deg
);
}
.control__indicator:after {
    content: '';
    position: absolute;
    display: none;
}
.filter-heading{
    color: #969696;
    font-size: 18px;
}
.apartment-type{
    column-count: 3;
}
.apartment-btn{
    background: #fff;
    border: 1px solid #e6e6e6;
    padding: 5px;
    text-align: center;
    width: auto;
    margin-bottom: 10px;
}
.price-range{
    margin: 20px 0;
}
.simple-range-slider .simple-range-slider-bg-bar{
        margin: 60px 10px 20px 10px !important;
}
.property-status{
    column-count: 1;
}

.sidebar-widgets {
    padding: 0 0 0 0 !important;
    margin-bottom: 0 !important;
}
.filter-btn{
    width: 50%;
    border-radius: 0;
    padding: 12px 20px !important;
    font-weight: bold;
}
.filter-active{
    width: 50%;
    background: #95c41f;
    border-radius: 0;
    color: #fff;
    box-shadow: 0px 2px 4px #b9b9b9;
    padding: 12px 20px !important;
    font-weight: bold;
}
.filter-active:hover{
   width: 50%;
    background: #95c41f;
    border-radius: 0;
    color: #fff;
    box-shadow: 0px 2px 4px #b9b9b9;
    padding: 12px 20px !important;
    font-weight: bold;
}
.btn-default.focus, .btn-default:focus{
   width: 50%;
    background: #95c41f;
    border-radius: 0;
    color: #fff;
    box-shadow: 0px 2px 4px #b9b9b9;
    padding: 12px 20px !important;
    font-weight: bold;
}
.price-span{
  border: 1px solid #fafafa;
  padding: 10px;
}
</style>
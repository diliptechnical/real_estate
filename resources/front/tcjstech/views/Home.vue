<template>
  <div>
    <!-- Banner start -->
    <div class="banner b6">
      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item item-100vh active">
            <img
              :src="$root.URL_ROOT + 'uploads/slider/' + allbanner.image"
              alt="banner-slider-1"
            />
            <div class="carousel-caption banner-slider-inner">
              <div class="banner-content container banner-content-left">
                <h1>{{ allbanner.heading }}</h1>
                <p>{{ allbanner.detail }}</p>
                <div class="tab-btn banner-tab-btn">
                  <div class="tab-btn-inner">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a href="#tab_default_1" data-toggle="tab">Buy</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab_default_1">
                        <div class="search-area">
                          <div class="search-area-inner">
                            <form>
                              <div
                                class="
                                  col-lg-4 col-md-4 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <div class="form-group">
                                    <!-- <autocomplete class="serach-bj" :search="search" @submit="handleSubmit"  ></autocomplete> -->

                                    <input
                                      type="text"
                                      v-model="keyword"
                                      name="full-name"
                                      class="input-text search-fields"
                                      placeholder="Enter Keyword"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-3 col-md-3 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <div
                                    class="
                                      btn-group
                                      bootstrap-select
                                      search-fields
                                    "
                                  >
                                    <button
                                      type="button"
                                      class="btn dropdown-toggle btn-default"
                                      id="property_type"
                                      data-toggle="dropdown"
                                      role="button"
                                      title="Property Type"
                                    >
                                      <span class="filter-option pull-left"
                                        ><i class="search-icon fa fa-home"></i
                                        >Property Type</span
                                      >&nbsp;
                                      <span class="bs-caret"
                                        ><span class="caret"></span
                                      ></span>
                                    </button>
                                    <div
                                      class="dropdown-menu open showMe"
                                      role="combobox"
                                    >
                                      <div class="bs-searchbox">
                                        <!-- <input type="text" class="form-control" autocomplete="off" placeholder="Search value" role="textbox" aria-label="Search"> -->
                                      </div>
                                     <div class="property_type row">
                                            <div class="col-sm-4">
                                                <h3></h3>
                                                <h3></h3>
                                            </div>
                                            <div class="col-sm-4"></div>
                                            <div class="col-sm-4"></div>
				
			                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-3 col-md-3 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <div
                                    class="
                                      btn-group
                                      bootstrap-select
                                      search-fields
                                    "
                                  >
                                    <button
                                      type="button"
                                      id="budget"
                                      class="btn dropdown-toggle btn-default"
                                      data-toggle="dropdown"
                                      role="button"
                                      title="Property Type"
                                    >
                                      <span class="filter-option pull-left"
                                        ><i class="search-icon fa fa-inr"></i
                                        >Budget</span
                                      >&nbsp;<span class="bs-caret"
                                        ><span class="caret"></span
                                      ></span>
                                    </button>
                                    <div
                                      class="dropdown-menu open showMes"
                                      role="combobox"
                                    >
                                      <div class="bs-searchbox">
                                        <input
                                          type="text"
                                          class="form-control"
                                          autocomplete="off"
                                          placeholder="Search value"
                                          role="textbox"
                                          aria-label="Search"
                                        />
                                      </div>
                                      <ul
                                        class="dropdown-menu inner"
                                        role="listbox"
                                        aria-expanded="false"
                                      >
                                        <li
                                          data-original-index="0"
                                          class="selected"
                                        >
                                          <a
                                            tabindex="0"
                                            class=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="true"
                                            ><span class="text"
                                              >Property Type</span
                                            ><span
                                              class="
                                                glyphicon glyphicon-ok
                                                check-mark
                                              "
                                            ></span
                                          ></a>
                                        </li>
                                        <li data-original-index="1">
                                          <a
                                            tabindex="0"
                                            class=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">Apartment</span
                                            ><span
                                              class="
                                                glyphicon glyphicon-ok
                                                check-mark
                                              "
                                            ></span
                                          ></a>
                                        </li>
                                        <li data-original-index="2">
                                          <a
                                            tabindex="0"
                                            class=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text"
                                              >Family House</span
                                            ><span
                                              class="
                                                glyphicon glyphicon-ok
                                                check-mark
                                              "
                                            ></span
                                          ></a>
                                        </li>
                                        <li data-original-index="3">
                                          <a
                                            tabindex="0"
                                            class=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text"
                                              >Modern Villa</span
                                            ><span
                                              class="
                                                glyphicon glyphicon-ok
                                                check-mark
                                              "
                                            ></span
                                          ></a>
                                        </li>
                                      </ul>
                                    </div>
                                    <select
                                      class="selectpicker search-fields"
                                      name="property-status"
                                      data-live-search="true"
                                      data-live-search-placeholder="Search value"
                                      tabindex="-98"
                                    >
                                      <option>Property Type</option>
                                      <option>Apartment</option>
                                      <option>Family House</option>
                                      <option>Modern Villa</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                  cp3
                                "
                              >
                                <div class="form-group">
                                  <button
                                    type="button"
                                    @click="search"
                                    style="width: 150px !important"
                                    class="search-button"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab_default_2">
                        <div class="search-area">
                          <div class="search-area-inner">
                            <form method="GET">
                              <div
                                class="
                                  col-lg-4 col-md-4 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="full-name"
                                      class="input-text search-fields"
                                      placeholder="Enter Keyword"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <select
                                    class="selectpicker search-fields"
                                    name="property-status"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search value"
                                  >
                                    <option>Property Type</option>
                                    <option>Apartment</option>
                                    <option>Family House</option>
                                    <option>Modern Villa</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <select
                                    class="selectpicker search-fields"
                                    name="location"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search value"
                                  >
                                    <option>Location</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>American Samoa</option>
                                    <option>Belgium</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <select
                                    class="selectpicker search-fields"
                                    name="area-from"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search value"
                                  >
                                    <option>Room</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                  cp3
                                "
                              >
                                <div class="form-group">
                                  <button class="search-button">Search</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab_default_3">
                        <div class="search-area">
                          <div class="search-area-inner">
                            <form method="GET">
                              <div
                                class="
                                  col-lg-4 col-md-4 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="full-name"
                                      class="input-text search-fields"
                                      placeholder="Enter Keyword"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <select
                                    class="selectpicker search-fields"
                                    name="property-status"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search value"
                                  >
                                    <option>Property Type</option>
                                    <option>Apartment</option>
                                    <option>Family House</option>
                                    <option>Modern Villa</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <select
                                    class="selectpicker search-fields"
                                    name="location"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search value"
                                  >
                                    <option>Location</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>American Samoa</option>
                                    <option>Belgium</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                "
                              >
                                <div class="form-group">
                                  <select
                                    class="selectpicker search-fields"
                                    name="area-from"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search value"
                                  >
                                    <option>Room</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="
                                  col-lg-2 col-md-2 col-sm-12 col-xs-12 col-pad2
                                  cp3
                                "
                              >
                                <div class="form-group">
                                  <button class="search-button">Search</button>
                                </div>
                              </div>
                            </form>
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
      </div>
    </div>
    <!-- Banner end -->

    <!-- Featured properties start -->
    <div class="content-area featured-properties">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Featured Properties </h1>
        </div>
        <!-- <ul class="list-inline-listing filters filters-listing-navigation">
            <li class="active btn filtr-button filtr" data-filter="all">All</li>
            <li data-filter="1" class="btn btn-inline filtr-button filtr">House</li>
            <li data-filter="2" class="btn btn-inline filtr-button filtr">Office</li>
            <li data-filter="3" class="btn btn-inline filtr-button filtr">Apartment</li>
            <li data-filter="4" class="btn btn-inline filtr-button filtr">Residential</li>
        </ul> -->
        <div class="row wow fadeInUp delay-04s">
          <div class="filtr-container">
            <div
              class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
              v-for="allpro in featuredproperty"
              :key="allpro.id"
            >
              <div class="property fp2">
                <!-- Property img -->
                <div class="property-img">
                  <div class="property-tag button alt featured">Featured</div>
                  <!-- <div class="property-tag button sale">For Sale</div> -->
                  
                  <div class="property-price">
                   <div>
                        <i style="color: #10d310;font-size: 20px;margin-right: 10px;"
                          class=" area-icon
                            flaticon-square-layouting-with-black-square-in-east-area
                          "
                        ></i>
                        <span style="font-size: 16px;">{{ allpro.area }} sq ft</span>
                      </div>  INR {{ allpro.selling_cost }}
                  </div>
                  <img
                    :src="
                      $root.URL_ROOT + 'uploads/property/' + allpro.front_image
                    "
                    alt="fp"
                    class="img-responsive"
                  />
                  <div class="property-overlay">
                       <router-link :to="{name : 'PropertyDetail' , params: { id: allpro.id }}" class="overlay-link">
                                    <i class="fa fa-link"></i>
                                </router-link>
                                <div class="property-magnify-gallery">
                                    <a @click="wishlist(allpro.id)" class="overlay-link">
                                        <i class="fa fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                </div>
                <!-- Property content -->
                <div class="property-content">
                  <!-- info -->
                  <div class="info">
                    <!-- title -->
                    <h1 class="title">
                      <router-link
                        :to="{
                          name: 'PropertyDetail',
                          params: { id: allpro.id },
                        }"
                        >{{ allpro.name }}</router-link
                      >
                    </h1>
                    <!-- Property address -->
                    <h3 class="property-address">
                      <router-link
                        :to="{
                          name: 'PropertyDetail',
                          params: { id: allpro.id },
                        }"
                      >
                        <i class="fa fa-map-marker"></i>{{ allpro.location }}
                        <br />
                        {{ allpro.state }}, {{ allpro.city }}
                      </router-link>
                     
                    </h3>
                    <!-- Facilities List -->
                    <ul class="facilities-list clearfix">
                      
                      <li v-for="amenity,key in allpro.amenity" :key="key">
                        <img :src="$root.URL_ROOT+'uploads/icons/'+amenity.value" width="20"/>
                          <span> {{amenity.name}} </span>
                      </li>
                     
                    </ul>
                  </div>
                  <!-- Property footer -->
                  <div class="property-footer">
                    <!-- <span class="left">
                                    <a href="#"><i class="fa fa-user"></i>Jhon Doe</a>
                                </span> -->
                    <span class="right">
                      <i class="fa fa-calendar"></i> {{allpro.udate}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Featured properties end -->

    <!-- Services start -->
    <div class="services content-area-11 clearfix">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>What Are you Looking For?</h1>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 wow fadeInLeft delay-04s">
            <div class="service-info-2 df-box">
              <div class="number">01</div>
              <div class="icon">
                <i class="flaticon-people-1"></i>
              </div>
              <div class="detail">
                <h5>
                  <a href="#">Trusted By Thousands</a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. simply dummy Lorem Ipsum has been
                  standard dummy.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 wow fadeInUp delay-04s">
            <div class="service-info-2 df-box">
              <div class="number">02</div>
              <div class="icon">
                <i class="flaticon-symbol-1"></i>
              </div>
              <div class="detail">
                <h5>
                  <a href="services-1.html">Financing Made Easy</a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. simply dummy Lorem Ipsum has been
                  standard dummy text.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 wow fadeInRight delay-04s">
            <div class="service-info-2 df-box">
              <div class="number">03</div>
              <div class="icon">
                <i class="flaticon-apartment"></i>
              </div>
              <div class="detail">
                <h5>
                  <a href="#">Find Your Property </a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. simply dummy Lorem Ipsum has been
                  standard dummy text.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <!-- Services end -->

    

    <!-- Counters 3 strat -->
    <div class="counters-3 overview-bgi mb-70">
      <div class="container">
        <div class="row">
          <div
            class="
              col-lg-5 col-md-4 col-sm-12 col-xs-12
              wow
              fadeInLeft
              delay-04s
            "
          >
            <div class="sec-title-three">
              <h2>Counters</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div
            class="
              col-lg-7 col-md-8 col-sm-12 col-xs-12
              wow
              fadeInRight
              delay-04s
            "
          >
            <div class="media counter-box-3">
              <div class="media-left">
                <i class="flaticon-tag"></i>
              </div>
              <div class="media-body">
                <h1 class="counter">967</h1>
                <p>Listings For Sale</p>
              </div>
            </div>
            <div class="media counter-box-3">
              <div class="media-left">
                <i class="flaticon-symbol-1"></i>
              </div>
              <div class="media-body">
                <h1 class="counter">967</h1>
                <p>Listings For Rent</p>
              </div>
            </div>
            <div class="media counter-box-3">
              <div class="media-left">
                <i class="flaticon-people"></i>
              </div>
              <div class="media-body">
                <h1 class="counter">396</h1>
                <p>Agents</p>
              </div>
            </div>
            <div class="media counter-box-3">
              <div class="media-left">
                <i class="flaticon-people-1"></i>
              </div>
              <div class="media-body">
                <h1 class="counter">177</h1>
                <p>Brokers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Counters 3 end -->

    <!-- Categories strat -->
    <div style="display:none;" class="categories content-area-12">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Popular Places</h1>
        </div>
        <div class="clearfix"></div>
        <div class="row wow">
          <div class="col-lg-8 col-md-7 col-sm-12">
            <div class="row">
              <div class="col-sm-6 col-pad wow fadeInLeft delay-04s">
                <div class="category cey2">
                  <div class="category_bg_box cat-1-bg">
                    <div class="category-overlay">
                      <div class="cc3">
                        <div class="category-subtitle">14 Properties</div>
                        <div class="info">
                          <h4>
                            <a href="#">Florida</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-pad wow fadeInLeft delay-04s">
                <div class="category cey2">
                  <div class="category_bg_box cat-2-bg">
                    <div class="category-overlay">
                      <div class="cc3">
                        <div class="category-subtitle">27 Properties</div>
                        <div class="info">
                          <h4>
                            <a href="#">California</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-pad wow fadeInUp delay-04s">
                <div class="category cey2">
                  <div class="category_bg_box cat-7-bg">
                    <div class="category-overlay">
                      <div class="cc3">
                        <div class="category-subtitle">21 Properties</div>
                        <div class="info">
                          <h4>
                            <a href="#">New York City</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-pad wow fadeInUp delay-04s">
                <div class="category cey2">
                  <div class="category_bg_box cat-6-bg">
                    <div class="category-overlay">
                      <div class="cc3">
                        <div class="category-subtitle">12 Properties</div>
                        <div class="info">
                          <h4>
                            <a href="#">San Francisco</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-4 col-md-5 col-sm-12 col-pad
              wow
              fadeInRight
              delay-04s
            "
          >
            <div class="category cey2">
              <div class="category_bg_box category_long_bg cat-3-bg">
                <div class="category-overlay">
                  <div class="cc3">
                    <div class="category-subtitle">02 Properties</div>
                    <div class="info">
                      <h4>
                        <a href="#">Tokyo</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Categories end-->

    <!-- Agent section start -->
    <div style="display:none;" class="agent-section mb-70">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Our Agent</h1>
        </div>
        <div class="row">
          <div
            class="
              col-lg-3 col-md-3 col-sm-6 col-xs-12
              wow
              fadeInLeft
              delay-04s
            "
          >
            <!-- Agent 3 start -->
            <div class="agent-3">
              <div class="thumb">
                <img
                  src="../assets/img/team/team-5.jpg"
                  alt="agent-3"
                  class="img-responsive"
                />
                <ul>
                  <li>
                    <a href="#" class="facebook-bg"
                      ><i class="fa fa-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="twitter-bg"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="google-bg"
                      ><i class="fa fa-google"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="info">
                <h4><a href="agent-single.html">Busel park</a></h4>
                <p>Programmer</p>
              </div>
            </div>
            <!-- Agent 3 end -->
          </div>
          <div
            class="
              col-lg-3 col-md-3 col-sm-6 col-xs-12
              wow
              fadeInLeft
              delay-04s
            "
          >
            <!-- Agent 3 start -->
            <div class="agent-3">
              <div class="thumb">
                <img
                  src="../assets/img/team/team-6.jpg"
                  alt="agent-3"
                  class="img-responsive"
                />
                <ul>
                  <li>
                    <a href="#" class="facebook-bg"
                      ><i class="fa fa-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="twitter-bg"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="google-bg"
                      ><i class="fa fa-google"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="info">
                <h4><a href="agent-single.html">Michelle Nelson</a></h4>
                <p>Support Manager</p>
              </div>
            </div>
            <!-- Agent 3 end -->
          </div>
          <div
            class="
              col-lg-3 col-md-3 col-sm-6 col-xs-12
              wow
              fadeInRight
              delay-04s
            "
          >
            <!-- Agent 3 start -->
            <div class="agent-3">
              <div class="thumb">
                <img
                  src="../assets/img/team/team-7.jpg"
                  alt="agent-3"
                  class="img-responsive"
                />
                <ul>
                  <li>
                    <a href="#" class="facebook-bg"
                      ><i class="fa fa-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="twitter-bg"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="google-bg"
                      ><i class="fa fa-google"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="info">
                <h4><a href="agent-single.html">Karen Paran</a></h4>
                <p>Web Developer</p>
              </div>
            </div>
            <!-- Agent 3 end -->
          </div>
          <div
            class="
              col-lg-3 col-md-3 col-sm-6 col-xs-12
              wow
              fadeInRight
              delay-04s
            "
          >
            <!-- Agent 3 start -->
            <div class="agent-3">
              <div class="thumb">
                <img
                  src="../assets/img/team/team-8.jpg"
                  alt="agent-3"
                  class="img-responsive"
                />
                <ul>
                  <li>
                    <a href="#" class="facebook-bg"
                      ><i class="fa fa-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="twitter-bg"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="google-bg"
                      ><i class="fa fa-google"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="info">
                <h4><a href="agent-single.html">Martin Smith</a></h4>
                <p>Office Manager</p>
              </div>
            </div>
            <!-- Agent 3 end -->
          </div>
        </div>
      </div>
    </div>
    <!-- Agent section end -->

    <!-- Testimonial 3 section start-->
    <!-- Recently properties start -->
    <div class="content-area-13 recently-properties chevron-icon mb-70">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Most Viewed Properties</h1>
        </div>
        <div class="row wow fadeInUp delay-04s">
          <div class="carousel our-partners slide" id="ourPartners4">
            <div class="carousel-inner">
              <div
                class="item active"
                v-for="allpro in mostviewproperty"
                :key="allpro.id"
              >
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <!-- Property 2 start -->
                  <div class="property-2">
                    <div class="property-inner">
                      <div class="property-overflow">
                        <div class="property-photo">
                          <img
                            :src="
                              $root.URL_ROOT +
                              'uploads/property/' +
                              allpro.front_image
                            "
                            alt="rp"
                            class="img-responsive"
                          />
                          <div class="listing-badges">
                            <span class="featured active">For Sale</span>
                          </div>
                          <div class="price-ratings">
                           <div>
                        <i style="color: #10d310;font-size: 20px;margin-right: 10px;"
                          class="area-icon flaticon-square-layouting-with-black-square-in-east-area"></i>
                        <span style="font-size: 16px;color:#fff;font-weight:bold;">{{ allpro.area }} sq ft</span>
                      </div>
                            <div class="price">INR {{ allpro.selling_cost }}</div>
                          </div>
                        </div>
                      </div>
                      <!-- content -->
                      <div class="content">
                        <!-- title -->
                        <h4 class="title">
                          <router-link
                            :to="{
                              name: 'PropertyDetail',
                              params: { id: allpro.id },
                            }"
                          >
                            {{ allpro.name }}
                          </router-link>
                        </h4>
                        <!-- Property address -->
                        <h3 class="property-address">
                          <router-link
                            :to="{
                              name: 'PropertyDetail',
                              params: { id: allpro.id },
                            }"
                          >
                            <i class="fa fa-map-marker"></i>
                            {{ allpro.location }}
                          </router-link>
                        </h3>
                      </div>
                      <!-- Facilities List -->
                      <ul class="facilities-list clearfix">
                        <li v-for="amenity,key in allpro.amenity" :key="key">
                          <img :src="$root.URL_ROOT+'uploads/icons/'+amenity.value" width="20"/>
                          <span> {{amenity.name}} </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Property 2 end -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Recently Partners block end -->
    <!-- Testimonial 3 end -->
   <Testimonial :testmonialdata="testimonialData"/>

    <!-- Blog start -->
    
    <!-- Blog end -->
    <!-- Partners block start -->
   <Partner :ourPartners="ourPartners"/>
    <!-- Partners block end -->
  </div>
</template>
<script>
import Partner from "../components/Partner";
import Testimonial from "../components/Testimonial";
import axios from "axios";
// import cart from "../js/store";


export default {
//   mixins:[cart],
  components: {
    Testimonial,
    Partner
  },
  data() {
    return {
      hasImage: false,
      isLoading: true,
      images: [],
      allproperties: [],
      allbanner: [],
      keyword: "",
      mostviewproperty: [],
      testimonialData: [],
      ourPartners: [],
      featuredproperty: []
    };
  },
  metaInfo() {
    return {
      allproperty: [],
      title: "Real Estate",
      meta: [
        { name: "description", content: "Real Estate" },
        { name: "keywords", content: "Real Estate" },
      ],
    };
  },
  mounted() {
    $("#property_type")
      .hover(function () {
        $(".showMe").css("display", "block");
      })
      .mouseleave(function () {
        $(".showMe").css("display", "none");
      });
    $("#budget")
      .hover(function () {
        $(".showMes").css("display", "block");
      })
      .mouseleave(function () {
        $(".showMes").css("display", "none");
      });

    var self = this;
    axios.get(this.$root.URL_ROOT + "allproperty").then(function (response) {
      console.log(response);
      self.allproperties = response.data;
    }),
      axios
        .get(this.$root.URL_ROOT + "featuredproperty")
        .then(function (response) {
          // console.log(response);
          self.featuredproperty = response.data;
        }),
      axios.get(this.$root.URL_ROOT + "slider").then(function (response) {
        // console.log(response.data);
        if(response.status==200){
        self.allbanner = response.data;
        }
      });
      this.mostviewproperties()
      this.testimonial()
      this.mostviewproperties()

  },
  methods: {
    testimonial(){
var self = this;
    axios.get(this.$root.URL_ROOT + "testimonialData").then(function (response) {
      console.log(response);
      self.testimonialData = response.data.data;
    })
    },
    ourpartner(){
var self = this;
    axios.get(this.$root.URL_ROOT + "partnerData").then(function (response) {
      console.log(response);
      self.ourPartners = response.data;
    })
    },
    mostviewproperties(){
    var self = this;
    axios.get(this.$root.URL_ROOT + "mostviewedproperty").then(function (response) {
      console.log(response);
      self.mostviewproperty = response.data;
    })
    },
    search() {
      this.$router.push({
        name: "Property",
        params: { name: "search", key: this.keyword },
      });
    },
    //    search(input) {
    //       var countries=this.searchAry;

    //   if (input.length < 1) { return [] }else{
    //      var t=countries.filter(country => {
    //     return country.toLowerCase()
    //       .startsWith(input.toLowerCase())
    //   })
    //     console.log(t)
    //      return t;
    //   }

    // },
  },
};
</script>

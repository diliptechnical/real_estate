<template>
    <div>
        <div class="menu-block " :class="{ mobilemenu : isActive }">
          <div class="menu-left-i">
            <div class="logo">
              <a href="#">
                <img src="../assets/images/logo-light.png" alt="" />
              </a>
            </div>
            <form
              method="get"
              class="search-form"
              action="#"
              autocomplete="off"
            >
              <div class="search-field-w">
                <input
                  type="search"
                  autocomplete="off"
                  class="search-field"
                  placeholder="Search"
                  value=""
                  name="s"
                  title="Search for:"
                />
                <input type="submit" class="search-submit" value="Search" />
              </div>
            </form>

            <div class="menu-activated-on-click">
              <div class="os_menu">
                <ul id="menu-side-menu" class="menu">
                  <li
                    id="menu-item-316"
                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-316"
                  >
                    <a href="#">NEWS</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-1365"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365"
                      >
                        <a href="#"
                          >Lightbox Posts New</a
                        >
                      </li>
                      <li
                        id="menu-item-1440"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1440"
                      >
                        <a
                          href="#"
                          >Variable Size Tiles New</a
                        >
                      </li>
                      <li
                        id="menu-item-332"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-332"
                      >
                        <a href="#">Full Width Posts</a>
                      </li>
                      <li
                        id="menu-item-528"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528"
                      >
                        <a href="#"
                          >No Padding Facebook</a
                        >
                      </li>
                      <li
                        id="menu-item-1420"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1420"
                      >
                        <a href="#"
                          >Pinterest Likes V2</a
                        >
                      </li>
                      <li
                        id="menu-item-530"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-530"
                      >
                        <a href="#"
                          >With Author Avatar</a
                        >
                      </li>
                      <li
                        id="menu-item-698"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-698"
                      >
                        <a href="#"
                          >Hero Image Header</a
                        >
                      </li>
                      <li
                        id="menu-item-483"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-483"
                      >
                        <a href="#"
                          >Masonry Big Padding</a
                        >
                      </li>
                      <li
                        id="menu-item-606"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-407 current_page_item menu-item-606"
                      >
                        <a href="#" aria-current="page"
                          >Masonry Tiny Padding</a
                        >
                      </li>
                      <li
                        id="menu-item-529"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-529"
                      >
                        <a href="#"
                          >No Padding Hearts</a
                        >
                      </li>
                      <li
                        id="menu-item-1419"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1419"
                      >
                        <a href="#"
                          >Pinterest Likes</a
                        >
                      </li>
                      <li
                        id="menu-item-388"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-388"
                      >
                        <a href="#"
                          >Masonry Photos</a
                        >
                      </li>
                      <li
                        id="menu-item-485"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-407 current_page_item menu-item-485"
                      >
                        <a href="#" aria-current="page"
                          >No Avatar Hearts</a
                        >
                      </li>
                      <li
                        id="menu-item-337"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-337"
                      >
                        <a
                          href="#"
                          >Featured Posts Slider</a
                        >
                      </li>
                      <li
                        id="menu-item-484"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-484"
                      >
                        <a href="#"
                          >No Avatar Facebook</a
                        >
                      </li>
                      <li
                        id="menu-item-604"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-604"
                      >
                        <a
                          href="#"
                          >Fixed Height Posts</a
                        >
                      </li>
                      <li
                        id="menu-item-605"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-605"
                      >
                        <a
                          href="#"
                          >Flexible Height Posts</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-253"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-253"
                  >
                    <a href="#">ENTERTAINMENT</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-1825"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1825"
                      >
                        <a href="#"
                          >Nova Light New</a
                        >
                      </li>
                      <li
                        id="menu-item-300"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-300"
                      >
                        <a href="#"
                          >Dark Night New</a
                        >
                      </li>
                      <li
                        id="menu-item-320"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-320"
                      >
                        <a href="#"
                          >Clear White</a
                        >
                      </li>
                      <li
                        id="menu-item-317"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-317"
                      >
                        <a href="#"
                          >Grey Clouds</a
                        >
                      </li>
                      <li
                        id="menu-item-254"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-254"
                      >
                        <a
                          href="#"
                          >Black &#038; White</a
                        >
                      </li>
                      <li
                        id="menu-item-299"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-299"
                      >
                        <a href="#"
                          >Sky Blue</a
                        >
                      </li>
                      <li
                        id="menu-item-310"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-310"
                      >
                        <a href="#"
                          >Sakura</a
                        >
                      </li>
                      <li
                        id="menu-item-309"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309"
                      >
                        <a href="#?color=pinkman&amp;no_frame=yes"
                          >Pinkman</a
                        >
                      </li>
                      <li
                        id="menu-item-318"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-318"
                      >
                        <a href="#?color=almond_milk&amp;no_frame=yes"
                          >Almond Milk</a
                        >
                      </li>
                      <li
                        id="menu-item-349"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-349"
                      >
                        <a href="#?color=retro_orange&amp;no_frame=yes"
                          >Retro Orange</a
                        >
                      </li>
                      <li
                        id="menu-item-350"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-350"
                      >
                        <a href="#?color=mighty_slate&amp;no_frame=yes"
                          >Mighty Slate</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-312"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-312"
                  >
                    <a href="#">GAME</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-338"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-338"
                      >
                        <a
                          href="#?navigation_type=infinite_button&amp;no_frame=yes"
                          >Infinite with Button</a
                        >
                      </li>
                      <li
                        id="menu-item-313"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-313"
                      >
                        <a
                          href="#?navigation_type=infinite&amp;no_frame=yes"
                          >Infinite Scroll</a
                        >
                      </li>
                      <li
                        id="menu-item-314"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-314"
                      >
                        <a
                          href="#?navigation_type=classic&amp;no_frame=yes"
                          >Classic Pagination</a
                        >
                      </li>
                      <li
                        id="menu-item-339"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-339"
                      >
                        <a
                          href="#?navigation_type=default&amp;no_frame=yes"
                          >Default</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-301"
                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-301"
                  >
                    <a href="#">Politics</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-342"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-342"
                      >
                        <a
                          href="#?menu=top&amp;menu_style=v2&amp;no_frame=yes"
                          >Top Menu Compact</a
                        >
                      </li>
                      <li
                        id="menu-item-304"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-304"
                      >
                        <a
                          href="#?menu=top&amp;menu_style=v1&amp;no_frame=yes"
                          >Top Menu Big</a
                        >
                      </li>
                      <li
                        id="menu-item-303"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-303"
                      >
                        <a href="#?menu=right&amp;no_frame=yes"
                          >Right Menu</a
                        >
                      </li>
                      <li
                        id="menu-item-302"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-302"
                      >
                        <a href="#?menu=left&amp;no_frame=yes"
                          >Left Menu</a
                        >
                      </li>
                      <li
                        id="menu-item-1835"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1835"
                      >
                        <a href="masonry-condensed-hearts-2/#"
                          >With Sidebar</a
                        >
                      </li>
                      <li
                        id="menu-item-1837"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-407 current_page_item menu-item-1837"
                      >
                        <a href="#" aria-current="page"
                          >Without Sidebar</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-311"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-311"
                  >
                    <a href="#">Fashion</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-328"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-328"
                      >
                        <a href="category/image-text/#"
                          >Image &#038; Text</a
                        >
                      </li>
                      <li
                        id="menu-item-347"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-347"
                      >
                        <a href="category/image-only/#">Image Only</a>
                      </li>
                      <li
                        id="menu-item-455"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-455"
                      >
                        <a href="orange-carrot-smoothie/##review"
                          >Review</a
                        >
                      </li>
                      <li
                        id="menu-item-383"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-383"
                      >
                        <a href="category/external-link/#"
                          >External Link</a
                        >
                      </li>
                      <li
                        id="menu-item-324"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-324"
                      >
                        <a href="category/post-format-video/#"
                          >Video</a
                        >
                      </li>
                      <li
                        id="menu-item-325"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-325"
                      >
                        <a href="category/quotes/#">Quotes</a>
                      </li>
                      <li
                        id="menu-item-326"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-326"
                      >
                        <a href="category/gallery-2/#">Gallery</a>
                      </li>
                      <li
                        id="menu-item-329"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-329"
                      >
                        <a href="category/text-only/#">Text Only</a>
                      </li>
                      <li
                        id="menu-item-323"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-323"
                      >
                        <a href="category/audio-2/#">Audio</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-305"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-305"
                  >
                    <a href="#">Sports</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-398"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398"
                      >
                        <a href="shortcodes/#">Shortcodes</a>
                      </li>
                      <li
                        id="menu-item-380"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"
                      >
                        <a href="shop/#">Shop</a>
                      </li>
                      <li
                        id="menu-item-333"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-333"
                      >
                        <a href="about-us/#">About Us</a>
                      </li>
                      <li
                        id="menu-item-334"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-334"
                      >
                        <a href="contact-us/#">Contact Us</a>
                      </li>
                      <li
                        id="menu-item-235"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-235"
                      >
                        <a href="indexb950.html?p=159">Single Post</a>
                      </li>
                      <li
                        id="menu-item-307"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-307"
                      >
                        <a href="category/desserts/#"
                          >Category Archive</a
                        >
                      </li>
                      <li
                        id="menu-item-308"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"
                      >
                        <a href="author/uej2h6uaxypdpqevxngzcnz7vj/#"
                          >Author Posts</a
                        >
                      </li>
                      <li
                        id="menu-item-306"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-306"
                      >
                        <a href="index58aa.html?p=999">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-912"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-912"
                  >
                    <a href="#">Business</a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-910"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-910"
                      >
                        <a href="register/#">Register</a>
                      </li>
                      <li
                        id="menu-item-909"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-909"
                      >
                        <a href="login/#">Login</a>
                      </li>
                      <li
                        id="menu-item-905"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-905"
                      >
                        <a href="social-login/#">Social Login</a>
                      </li>
                      <li
                        id="menu-item-939"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-939"
                      >
                        <a href="profile/1/#">User Profile</a>
                      </li>
                      <li
                        id="menu-item-906"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906"
                      >
                        <a href="page-for-members-only/#"
                          >Page for members only</a
                        >
                      </li>
                      <li
                        id="menu-item-907"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-907"
                      >
                        <a href="frontend-publisher/#"
                          >Frontend Publisher</a
                        >
                      </li>
                      <li
                        id="menu-item-908"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-908"
                      >
                        <a href="member-directory/#"
                          >Member Directory</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class="zilla-social size-16px">
              <a href="#" class="Facebook"
                ><img src="../assets/images/facebook.png" alt="Facebook"
              /></a>
              <a href="#" class="Instagram"
                ><img src="../assets/images/instagram.png" alt="Instagram"
              /></a>
              <a href="#" class="Pinterest"
                ><img src="../assets/images/pinterest.png" alt="Pinterest"
              /></a>
              <a href="#" class="Twitter"
                ><img src="../assets/images/twitter.png" alt="Twitter"
              /></a>
            </div>

            <div class="under-menu-sidebar-wrapper">
              <aside id="media_image-2" class="widget widget_media_image">
                <a
                  href="#"
                  ><img
                    width="386"
                    height="332"
                    src="../assets/images/magic-sidebar.jpg"
                    class="image wp-image-1832 attachment-full size-full"
                    alt=""
                    loading="lazy"
                    style="max-width: 100%; height: auto"
                    srcset="../assets/images/magic-sidebar.jpg"
                    sizes="(max-width: 386px) 100vw, 386px"
                /></a>
              </aside>
            </div>
          </div>
        </div>
        <div class="menu-toggler-w">
          <a v-on:click="openmenu()" class="menu-toggler">
            <i class="os-new-icon os-new-icon-menu"></i>
            <span class="menu-toggler-label">Menu</span>
          </a>
          <a href="#" class="logo">
            <img src="../assets/images/logo-light.png" alt="" />
          </a>
          <div class="search-and-sidebar-togglers">
            <a href="#" class="search-trigger">
              <i class="os-new-icon os-new-icon-search"></i>
            </a>

            <a href="#" class="sidebar-toggler">
              <i class="os-new-icon os-new-icon-grid"></i>
            </a>
          </div>
        </div>
        <div class="mobile-menu-w">
          <div class="mobile-menu menu-activated-on-click">
            <ul id="menu-side-menu-1" class="menu">
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-316"
              >
                <a href="#">Layouts</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365"
                  >
                    <a href="#"
                      >Lightbox Posts New</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1440"
                  >
                    <a href="#"
                      >Variable Size Tiles New</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-332"
                  >
                    <a href="#">Full Width Posts</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528"
                  >
                    <a href="#"
                      >No Padding Facebook</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1420"
                  >
                    <a href="#"
                      >Pinterest Likes V2</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-530"
                  >
                    <a href="#"
                      >With Author Avatar</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-698"
                  >
                    <a href="#"
                      >Hero Image Header</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-483"
                  >
                    <a href="#">Masonry Big Padding</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-407 current_page_item menu-item-606"
                  >
                    <a href="#" aria-current="page"
                      >Masonry Tiny Padding</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-529"
                  >
                    <a href="##"
                      >No Padding Hearts</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1419"
                  >
                    <a href="##"
                      >Pinterest Likes</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-388"
                  >
                    <a href="text-over-images-layout/#"
                      >Masonry Photos</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-407 current_page_item menu-item-485"
                  >
                    <a href="#" aria-current="page"
                      >No Avatar Hearts</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-337"
                  >
                    <a
                      href="#?show_sidebar_on_masonry=no&amp;use_fixed_height_index_posts=no&amp;show_featured_posts=yes&amp;no_frame=yes"
                      >Featured Posts Slider</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-484"
                  >
                    <a href="masonry-facebook/#">No Avatar Facebook</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-604"
                  >
                    <a
                      href="#?show_sidebar_on_masonry=no&amp;use_fixed_height_index_posts=yes&amp;show_featured_posts=no&amp;no_frame=yes"
                      >Fixed Height Posts</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-605"
                  >
                    <a
                      href="#?show_sidebar_on_masonry=no&amp;use_fixed_height_index_posts=no&amp;show_featured_posts=no&amp;no_frame=yes"
                      >Flexible Height Posts</a
                    >
                  </li>
                </ul>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-253"
              >
                <a href="#">Colors</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1825"
                  >
                    <a href="#?color=nova&amp;no_frame=yes"
                      >Nova Light New</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-300"
                  >
                    <a href="#?color=dark_night&amp;no_frame=yes"
                      >Dark Night New</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-320"
                  >
                    <a href="#?color=clear_white&amp;no_frame=yes"
                      >Clear White</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-317"
                  >
                    <a href="#?color=grey_clouds&amp;no_frame=yes"
                      >Grey Clouds</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-254"
                  >
                    <a href="#?color=black_and_white&amp;no_frame=yes"
                      >Black &#038; White</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-299"
                  >
                    <a href="##"
                      >Sky Blue</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-310"
                  >
                    <a href="#?color=space&amp;no_frame=yes">Sakura</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-309"
                  >
                    <a href="#?color=pinkman&amp;no_frame=yes"
                      >Pinkman</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-318"
                  >
                    <a href="#?color=almond_milk&amp;no_frame=yes"
                      >Almond Milk</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-349"
                  >
                    <a href="#?color=retro_orange&amp;no_frame=yes"
                      >Retro Orange</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-350"
                  >
                    <a href="#?color=mighty_slate&amp;no_frame=yes"
                      >Mighty Slate</a
                    >
                  </li>
                </ul>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-312"
              >
                <a href="#">Pagination</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-338"
                  >
                    <a
                      href="#?navigation_type=infinite_button&amp;no_frame=yes"
                      >Infinite with Button</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-313"
                  >
                    <a
                      href="#?navigation_type=infinite&amp;no_frame=yes"
                      >Infinite Scroll</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-314"
                  >
                    <a
                      href="#?navigation_type=classic&amp;no_frame=yes"
                      >Classic Pagination</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-339"
                  >
                    <a
                      href="#?navigation_type=default&amp;no_frame=yes"
                      >Default</a
                    >
                  </li>
                </ul>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-301"
              >
                <a href="#">Menu &#038; Sidebar</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-342"
                  >
                    <a
                      href="#?menu=top&amp;menu_style=v2&amp;no_frame=yes"
                      >Top Menu Compact</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-304"
                  >
                    <a
                      href="#?menu=top&amp;menu_style=v1&amp;no_frame=yes"
                      >Top Menu Big</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-303"
                  >
                    <a href="#?menu=right&amp;no_frame=yes"
                      >Right Menu</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-302"
                  >
                    <a href="#?menu=left&amp;no_frame=yes"
                      >Left Menu</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1835"
                  >
                    <a href="masonry-condensed-hearts-2/#"
                      >With Sidebar</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-407 current_page_item menu-item-1837"
                  >
                    <a href="#" aria-current="page">Without Sidebar</a>
                  </li>
                </ul>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-311"
              >
                <a href="#">Post Types</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-328"
                  >
                    <a href="category/image-text/#"
                      >Image &#038; Text</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-347"
                  >
                    <a href="category/image-only/#">Image Only</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-455"
                  >
                    <a href="orange-carrot-smoothie/##review"
                      >Review</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-383"
                  >
                    <a href="category/external-link/#"
                      >External Link</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-324"
                  >
                    <a href="category/post-format-video/#">Video</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-325"
                  >
                    <a href="category/quotes/#">Quotes</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-326"
                  >
                    <a href="category/gallery-2/#">Gallery</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-329"
                  >
                    <a href="category/text-only/#">Text Only</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-323"
                  >
                    <a href="category/audio-2/#">Audio</a>
                  </li>
                </ul>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-305"
              >
                <a href="#">Pages</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398"
                  >
                    <a href="shortcodes/#">Shortcodes</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"
                  >
                    <a href="shop/#">Shop</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-333"
                  >
                    <a href="about-us/#">About Us</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-334"
                  >
                    <a href="contact-us/#">Contact Us</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-235"
                  >
                    <a href="indexb950.html?p=159">Single Post</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-307"
                  >
                    <a href="category/desserts/#">Category Archive</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"
                  >
                    <a href="author/uej2h6uaxypdpqevxngzcnz7vj/#"
                      >Author Posts</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-306"
                  >
                    <a href="index58aa.html?p=999">404 Page</a>
                  </li>
                </ul>
              </li>
              <li
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-912"
              >
                <a href="#">User Features</a>
                <ul class="sub-menu">
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-910"
                  >
                    <a href="register/#">Register</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-909"
                  >
                    <a href="login/#">Login</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-905"
                  >
                    <a href="social-login/#">Social Login</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-939"
                  >
                    <a href="profile/1/#">User Profile</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906"
                  >
                    <a href="page-for-members-only/#"
                      >Page for members only</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-907"
                  >
                    <a href="frontend-publisher/#"
                      >Frontend Publisher</a
                    >
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-908"
                  >
                    <a href="member-directory/#">Member Directory</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-main-toggler">
          <i class="os-new-icon os-new-icon-grid"></i>
        </div>
    </div>
</template>
<script>
export default {
  props: ['title'],
  components: {
  },
  data () {
    return {
      opennavbar: false,
      isActive: false
    }
  },

  mounted () {
    // this.geolocate()
  },
  watch: {
    opennavbar: function (vl) {
      this.opennavbar = vl
    }
  },
  methods: {
    openmenu(){
     
      if(this.isActive == false){
       // alert('hello')
        this.isActive = true
       
      }else if(this.isActive == true){
        this.isActive = false
      }
    },
    openNav () {
      this.opennavbar = true
      console.log(this.opennavbar)
    },
    closeNav () {
      this.opennavbar = false
    },
    alertbox () {
      this.opennavbar = false
      this.$toasted.global.success({ message: 'coming soon....' })
    },

  }

}
</script>
<style scoped>
.mobilemenu{ left: 270px!important; }
</style>>
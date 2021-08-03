
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
  <meta name="author" content="Creative Tim">
  <title>Real Estate</title>
  <!--- csrf-token --->
  <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
  <!-- Favicon -->
  <link href='https://www.vhv.rs/dpng/d/212-2122862_transparent-r-symbol-png-copyright-r-logo-png.png' rel='icon' type='image/x-icon'/>
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
  <!-- Icons -->
  <link rel="stylesheet" href="<?php echo e(URL::to('assets/vendor/nucleo/css/nucleo.css')); ?>" type="text/css">
  <link rel="stylesheet" href="<?php echo e(URL::to('assets/vendor/@fortawesome/fontawesome-free/css/all.min.css')); ?>" type="text/css">
  <!-- Page plugins -->
  <!-- Argon CSS -->
  <link href="http://demo.expertphp.in/css/dropzone.css" rel="stylesheet">
  <script src="http://demo.expertphp.in/js/dropzone.js"></script>
  <link rel="stylesheet" href="<?php echo e(URL::to('assets/css/argon.css?v=1.2.0')); ?>" type="text/css">
  <script>
    var URL_ROOT = '<?php echo e(config("app.url")); ?>';
  </script>
  <style>
      .hide{
        display: none !important;
      }
        .dropbtn {
            background-color: #4CAF50;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px
                0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }
  .w-100{
    width: 100% !important;
  }
        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #f1f1f1
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown:hover .dropbtn {
            background-color: #3e8e41;
        }
    </style>
</head>
<body>
<?php
        $aryReturn = array();
        $setting=DB::table('setting')->select('value')->where('name','site_logo')->first();
?>
  <!-- Sidenav -->
  <nav style="background-color: #020254!important;" class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="http://127.0.0.1:8000/uploads/Setting/<?php echo e($setting->value); ?>" class="navbar-brand-img" alt="...">
          <!-- Real<span style="color:#00F;">Estate</span> -->
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('home') || request()->is('home/*') ? 'active' : ''); ?>" href="<?php echo e(route("home")); ?>">
                <i class="ni ni-tv-2 text-primary"></i>
                <span class="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/slider') || request()->is('admin/slider/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.slider.index")); ?>">
                <i class="ni ni-align-left-2 text-success"></i>
                <span class="nav-link-text">Banner</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/pages') || request()->is('admin/pages/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.pages.index")); ?>">
                <i class="ni ni-align-left-2 text-success"></i>
                <span class="nav-link-text">Pages</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/property') || request()->is('admin/property/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.property.index")); ?>">
                <i class="ni ni-align-left-2 text-success"></i>
                <span class="nav-link-text">Properties</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/amenities') || request()->is('admin/amenities/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.amenities.index")); ?>">
                <i class="ni ni-align-left-2 text-success"></i>
                <span class="nav-link-text">Amenities</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link <?php echo e(request()->is('admin/icons') || request()->is('admin/icons/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.icons.index")); ?>">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Icons</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/contact') || request()->is('admin/contact/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.contact.index")); ?>">
                <i class="ni ni-align-left-2 text-success"></i>
                <span class="nav-link-text">Contact</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link <?php echo e(request()->is('admin/setting') || request()->is('admin/setting/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.setting.index")); ?>">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Site Setting</span>
              </a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/testimonial') || request()->is('admin/testimonial/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.testimonial.index")); ?>">
                <i class="ni ni-user-run text-danger"></i>
                <span class="nav-link-text">Testimonial</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/agent') || request()->is('admin/agent/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.agent.index")); ?>">
                <i class="ni ni-user-run text-danger"></i>
                <span class="nav-link-text">Our Partners</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php echo e(request()->is('admin/users') || request()->is('admin/users/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.users.index")); ?>">
                <i class="ni ni-user-run text-danger"></i>
                <span class="nav-link-text">User</span>
              </a>
            </li>
           <li class="nav-item">
              <a class="nav-link <?php echo e(request()->is('admin/transaction') || request()->is('admin/transaction/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.transaction.index")); ?>">
                <i class="ni ni-money-coins text-info"></i>
                <span class="nav-link-text">Transaction</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?php echo e(request()->is('admin/subscription') || request()->is('admin/subscription/*') ? 'active' : ''); ?>" href="<?php echo e(route("admin.subscription.index")); ?>">
                <i class="ni ni-money-coins text-info"></i>
                <span class="nav-link-text">Subscription</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="<?php echo e(route("login")); ?>">
                <i class="ni ni-button-power text-info"></i>
                <span class="nav-link-text">Logout</span>
              </a>
            </li>
            
          </ul>
          <!-- Divider -->
          <hr class="my-3">

        </div>
      </div>
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Search form -->
          <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative input-group-merge">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
                <input class="form-control" placeholder="Search" type="text">
              </div>
            </div>
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center  ml-md-auto ">
            <li class="nav-item d-xl-none">
              <!-- Sidenav toggler -->
              <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li class="nav-item d-sm-none">
              <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i class="ni ni-zoom-split-in"></i>
              </a>
            </li>
            
          </ul>
          <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png" alt="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png">
                  </span>
                  <div class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">Admin</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-support-16"></i>
                  <span>Support</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="<?php echo e(route('logout')); ?>" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <!-- Header -->
    <?php echo $__env->yieldContent('content'); ?>
  <!-- Footer -->
  	<footer class="footer pt-0" style="display: none;">
		<div class="row align-items-center justify-content-lg-between">
			<div class="col-lg-6">
				<div class="copyright text-center  text-lg-left  text-muted">
				&copy; 2021 <a href="https://www.soengsouy.com" class="font-weight-bold ml-1" target="_blank">Soeng Souy</a>
				</div>
			</div>
			<div class="col-lg-6">
				<ul class="nav nav-footer justify-content-center justify-content-lg-end">
				<li class="nav-item">
					<a href="https://www.soengsouy.com" class="nav-link" target="_blank">Web Design</a>
				</li>
				<li class="nav-item">
					<a href="https://www.soengsouy.com/presentation" class="nav-link" target="_blank">About Us</a>
				</li>
				<li class="nav-item">
					<a href="http://blog.soengsouy.com" class="nav-link" target="_blank">Blog</a>
				</li>
				<li class="nav-item">
					<a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" class="nav-link" target="_blank">MIT License</a>
				</li>
				</ul>
			</div>
		</div>
	  </footer>
  	</div>

  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="<?php echo e(URL::to('assets/vendor/jquery/dist/jquery.min.js')); ?>"></script>
  <script src="<?php echo e(URL::to('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js')); ?>"></script>
  <script src="<?php echo e(URL::to('assets/vendor/js-cookie/js.cookie.js')); ?>"></script>
  <script src="<?php echo e(URL::to('assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js')); ?>"></script>
  <script src="<?php echo e(URL::to('assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js')); ?>"></script>
  <!-- Optional JS -->
  <script src="<?php echo e(URL::to('assets/vendor/chart.js/dist/Chart.min.js')); ?>"></script>
  <script src="<?php echo e(URL::to('assets/vendor/chart.js/dist/Chart.extension.js')); ?>"></script>
  <!-- Argon JS -->
  <script src="<?php echo e(URL::to('assets/js/argon.js?v=1.2.0')); ?>"></script>
  <script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>
  <script src="<?php echo e(URL::to('assets/js/main.js')); ?>"></script>
  <?php echo $__env->yieldContent('scripts'); ?>
</body>

</html>
<?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/layouts/master.blade.php ENDPATH**/ ?>
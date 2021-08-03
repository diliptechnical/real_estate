<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/myadmin', function () {
    return view('auth.login');
});
Route::get('/tcjstech/{tcjstech_any?}', "IndexController@index")->where('tcjstech_any', '[\/\w\.-]*');
// Route::get('/', [App\Http\Controllers\Api\WebsiteController::class, 'index']);
Route::get('/contact', [App\Http\Controllers\Api\WebsiteController::class, 'contact']);
Route::get('/about', [App\Http\Controllers\Api\WebsiteController::class, 'about']);
Route::get('/it_resourcing', [App\Http\Controllers\Api\WebsiteController::class, 'it_resourcing']);
Route::get('/digital_marketing', [App\Http\Controllers\Api\WebsiteController::class, 'digital_marketing']);
Route::get('/software', [App\Http\Controllers\Api\WebsiteController::class, 'software']);
Route::get('/development', [App\Http\Controllers\Api\WebsiteController::class, 'development']);
Route::get('/mobileapp', [App\Http\Controllers\Api\WebsiteController::class, 'mobileapp']);
Route::get('/websitedesign', [App\Http\Controllers\Api\WebsiteController::class, 'websitedesign']);
Route::get('contactsubmit', "ContactController@contactsubmit");
Route::get('checkotp',"UserController@checkotp");
Route::get('forgotpassword', "UserController@forgotpassword");
Route::get('partnerData', "AgentController@partnerData");
Route::get('testimonialData', "TestimonialController@testimonialdata");
Route::get('mostviewedproperty', "PropertyController@mostviewedproperty");
Route::get('mostview', "PropertyController@mostview");
Route::get('aboutus', "CmsController@detail");
Route::get('oldallproperty', "PropertyController@allProperty");
Route::get('allproperty', "PropertyController@allProperty");
Route::get('slider', "SliderController@allbanner");
Route::get('getproperty/{id}', "PropertyController@getSinglePropertyModel");
Route::get('searchproduct/{name}', "PropertyController@searchProduct");
Route::get('featuredproperty', "PropertyController@featuredproperty");
Route::get('sitesetting', "SettingController@all");
Route::get('premiumfilter', "PropertyController@premiumfilter");
Route::get('searchfilter', "PropertyController@searchfilter");

Route::get('getWhishlistProduct', "PropertyController@getWhishlistProduct");
Route::get('addtowishlist', "PropertyController@addtowishlist");
Route::get('usersubscription', "SubscriptionController@usersubscription");

Route::get('gettoken', function(){
 return csrf_token();
}
);




Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// -----------------------------login-----------------------------------------
// Route::get('/login', 'App\Http\Controllers\Auth\LoginController@login')->name('login');
// Route::post('/login', 'App\Http\Controllers\Auth\LoginController@authenticate');
// Route::get('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

// ------------------------------register---------------------------------------



Route::get('/userlogin', "UserController@login");
Route::get('/resetpassword', "UserController@resetpassword");
Route::get('/changeuserpass', "UserController@changeuserpass");
Route::get('/savemydetail', "UserController@saveuserDetail");
Route::get('/userDetails', "UserController@userDetails");
Route::get('/userregistration', "UserController@registration");
Route::get('/getcity/{name}', "CityController@getcity");

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'namespace' => 'Admin', 'middleware' => ['auth']], function () {

    Route::get('exportfile', 'IconsController@export');

    Route::POST('importfile', 'IconsController@import');

    Route::get('/', 'HomeController@index')->name('home');

    Route::get('admin/property/{id}/edit', [

        'uses' => 'PropertyController@edit',
        'as' => 'admin.property.edit'
    ]);

    Route::delete('roles/destroy', 'RolesController@massDestroy')->name('roles.massDestroy');

    Route::resource('roles', 'RolesController');

    Route::delete('users/destroy', 'UserController@massDestroy')->name('users.massDestroy');

    Route::resource('users', 'UserController');


    Route::get('admin/users/{id}/edit', [

        'uses' => 'UserController@edit',
        'as' => 'admin.users.edit'
    ]);
    Route::get('admin/users/{id}', [
        'uses' => 'UserController@show',
        'as' => 'admin.users.view'
    ]);

    Route::delete('category/destroy', 'CategoryController@massDestroy')->name('category.massDestroy');

    Route::resource('category', 'CategoryController');

    Route::get('admin/pages/{id}/edit', [

        'uses' => 'CmsController@edit',
        'as' => 'admin.pages.edit'
    ]);

    Route::delete('pages/destroy', 'CmsController@massDestroy')->name('CmsController.massDestroy');

    Route::resource('pages', 'CmsController');


    Route::get('admin/testimonial/{id}/edit', [

        'uses' => 'TestimonialController@edit',
        'as' => 'admin.testimonial.edit'
    ]);
    Route::get('admin/testimonial/{id}', [

        'uses' => 'TestimonialController@show',
        'as' => 'admin.testimonial.view'
    ]);
    Route::delete('agent/destroy', 'AgentController@massDestroy')->name('AgentController.massDestroy');

    Route::resource('agent', 'AgentController');

    Route::get('admin/agent/{id}/edit', [

        'uses' => 'AgentController@edit',
        'as' => 'admin.agent.edit'
    ]);

    Route::resource('testimonial', 'TestimonialController');

    Route::delete('property/destroy', 'PropertyController@massDestroy')->name('PropertyController.massDestroy');

    Route::resource('property', 'PropertyController');

    Route::get('admin/amenities/{id}/edit', [

        'uses' => 'AmenitiesController@edit',
        'as' => 'admin.amenities.edit'
    ]);
    Route::get('admin/amenities/{id}', [
        'uses' => 'AmenitiesController@show',
        'as' => 'admin.amenities.view'
    ]);
    Route::delete('amenities/destroy', 'AmenitiesController@massDestroy')->name('AmenitiesController.massDestroy');

    Route::resource('amenities', 'AmenitiesController');

    Route::get('admin/setting/{id}/edit', [

        'uses' => 'SettingController@edit',
        'as' => 'admin.setting.edit'
    ]);
    Route::delete('setting/destroy', 'SettingController@massDestroy')->name('SettingController.massDestroy');

    Route::resource('setting', 'SettingController');


    Route::get('admin/icons/{id}/edit', [

        'uses' => 'IconsController@edit',
        'as' => 'admin.icons.edit'
    ]);

    Route::get('/export', 'IconsController@export');

    Route::get('/importExcel', 'IconsController@importFile');
    // Route::get('admin/icons/importExcel', [

    //     'uses' => 'IconsController@importFile',
    //     'as' => 'admin.icons.importFile'
    // ]);
    Route::post('icons/importExcel', 'IconsController@importFile');

    Route::delete('icons/destroy', 'IconsController@massDestroy')->name('IconsController.massDestroy');

    Route::resource('icons', 'IconsController');

    Route::get('admin/icons/{id}', [
        'uses' => 'IconsController@show',
        'as' => 'admin.icons.view'
    ]);

    Route::get('admin/contact/{id}/edit', [

        'uses' => 'ContactController@edit',
        'as' => 'admin.contact.edit'
    ]);
    Route::get('admin/contact/{id}', [

        'uses' => 'ContactController@show',
        'as' => 'admin.contact.view'
    ]);
    Route::delete('contact/destroy', 'ContactController@massDestroy')->name('ContactController.massDestroy');

    Route::resource('contact', 'ContactController');



    Route::get('admin/slider/{id}/edit', [

        'uses' => 'SliderController@edit',
        'as' => 'admin.slider.edit'
    ]);
    Route::get('admin/slider/destroy', function () {
        return ["yes"];
        exit;
    });
    Route::delete('slider/destroy', 'SliderController@massDestroy')->name('SliderController.massDestroy');

    Route::resource('slider', 'SliderController');

    // Route::get('admin/property/{id}/edit', [

    //     'uses' => 'PropertyController@edit',
    //     'as' => 'admin.property.edit'
    // ]);

    Route::delete('transaction/destroy', 'TransactionController@massDestroy')->name('category.massDestroy');

    Route::resource('transaction', 'TransactionController');


    Route::delete('subscription/destroy', 'SubscriptionController@massDestroy')->name('category.massDestroy');

    Route::resource('subscription', 'SubscriptionController');

    // Route::delete('subscription/destroy', 'SubscriptionController@massDestroy')->name('subscription.massDestroy');

    // Route::resource('subscription', 'SubscriptionController');

    Route::PUT('/update', "CommonController@update");
    Route::PUT('/delete', "CommonController@delete");


});
Route::post('transaction/{id}', 'App\Http\Controllers\Admin\TransactionController@submit');
//------Before Api ------>
Route::get('/myadmin/{vue_capture?}', "IndexController@admin")->where('vue_capture', '[\/\w\.-]*');
Route::get('/{tcjstech_any?}', "IndexController@index")->where('tcjstech_any', '[\/\w\.-]*');

Auth::routes();

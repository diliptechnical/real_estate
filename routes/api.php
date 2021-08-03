<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::POST('/mobilelogin', "UserController@mobilelogin");
Route::POST('/login', "UserController@login");
Route::POST('/register', "UserController@submit");



Route::get('/userlogin', "UserController@login");
Route::get('/resetpassword', "UserController@resetpassword");
Route::get('/changeuserpass', "UserController@changeuserpass");
Route::get('/savemydetail', "UserController@saveuserDetail");
Route::get('/userDetails', "UserController@userDetails");
Route::get('/userregistration', "UserController@registration");
Route::get('/getcity/{name}', "CityController@getcity");
// Route::get('/', [App\Http\Controllers\Api\WebsiteController::class, 'index']);
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

// Route::group(['middleware' => 'auth:api'], function()
// {
//     //All the routes that belongs to the group goes here
//     Route::get('dashboard', 'UserController@submit' );

// });
Route::get('/getcity/{name}', "CityController@getcity");
Route::get('/category/service/{id?}', "CategoryController@getservice");
Route::get('/category/detail/{id?}', "CategoryController@detail");
Route::get('/category/allcategory', "CategoryController@allcategory");
Route::get('/category/mycategory', "CategoryController@mycategory");
Route::POST('/category/checkdocument', "CategoryController@checkdocument");
Route::POST('/category/savedocument', "CategoryController@savedocument");

Route::get('/property/allproperty', "PropertyController@allProperty");
Route::post('contactsubmit', function(){
    return "yes";
});

Route::get('/user/getcount', "UserController@getCount");
Route::get('/user/getdetail', "UserController@detail");
Route::post('/user/all', "UserController@all");
Route::get('/user/getvendordetail/{id}', "UserController@getvendordetail");
Route::get('/pages/cmspages/{name}', "CmsController@cmspage");
Route::post('/user/giverating', "UserController@giverating");

Route::POST('/user/submit', "UserController@submit");
Route::post('/user/requestvenders', "UserRequestController@requestvender");
Route::get('/user/getinquery', "UserRequestController@inquery");
Route::get('/user/getinquerydetail/{id}', "UserRequestController@inqueryDetail");
Route::POST('/user/reject', "UserRequestController@rejectStatus");
Route::POST('/user/view', "UserRequestController@viewStatus");
Route::POST('/user/addtowallet', "UserRequestController@addMoneyWallet");
Route::POST('/user/removefromwallet', "UserRequestController@removeMoneyWallet");
Route::POST('/user/mywallet', "UserRequestController@UserTrasaction");
Route::POST('/user/getsignature', "UserRequestController@generateSignature");
Route::get('/user/balance', "UserController@balance");
Route::get('/user/detail', "UserController@detail");
Route::get('/user/transaction', "UserController@transaction");
Route::get('/transactions/userdata/{id?}', "TransactionController@detail");

Route::post('/pages/all', 'CmsController@AllPages');
Route::get('/pages/allpage', 'CmsController@all');
Route::get('/page/detail/{id}', 'CmsController@detail');

Route::any('/payment/{status}', "UserController@payment");
Route::POST('/user/changepass', "UserController@changeUserPass");
Route::PUT('/user/updateAvatar', "UserController@updateAvatar");
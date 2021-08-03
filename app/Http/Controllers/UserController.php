<?php

namespace App\Http\Controllers;

use App\Models\subscription;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use Mail;
class UserController extends Controller
{
    public function login(Request $request){
          $userdata = User::where('email', $request->get('username'))->where('password', $request->get('password'))->where('status', 1)->first();
          if(!empty($userdata)){
              $subscription = subscription::where('uid',$userdata->id)->select('id')->first();
            return ['status'=>'success','data'=>$userdata,'subscription'=>$subscription];
          }else{
            return ['status'=>'error','msg'=>'Login failed wrong user credentials'];
          }
       }
       public function registration(Request $request){
         $user = User::create([
          'name' => $request->get('fullname'),
          'email' => $request->get('email'),
          'mobile' => $request->get('mobile'),
          'password' => $request->get('password'),
         ]);
         $user->save();
         $data = User::find($user->id);
         return ['status'=>'success','data'=>$data];
       }
      public function userDetails(Request $request){
        $page = User::find($request->uid);
        return $page;
      }
      public function saveuserDetail(Request $request){
        //   return $request;
         $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => $request->id > 0 ? 'required|max:255' : 'required|unique:mss_user|max:255',
           // 'password' => 'required',
           // 'role_id' => 'required',
        ]);

        if ($validator->fails()) {
            return ["status"=>"error","data"=>$validator->errors()];
        }
        $record = User::find($request->id);
        $data = [];
        $request["status"] = $request["status"] ? 1 : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record= new User; //then create new object
            unset($request["id"]);
            $data = $record->create($request->all());
            MyCart::where('ip_address',$request['ip_address'])->update(array('uid' => $data['id']));
            return ["status"=>"success","data"=> $data];
        }
        unset($request["created_at"]);
        unset($request["updated_at"]);
        $data = $record->where("id",$request->id)->update($request->all());
        return ["status"=>"success","data"=> $data];
      }
      public function changeuserpass(Request $request){
            $data = User::find($request->uid);
            if($data->password==$request->oldPass){
               $upDate = User::where('id',$request->uid)->update(array('password'=>$request->newPass));
                return ['status'=>'success','data'=>$upDate];
            }else{
                return ['status'=>'error','data'=>'Old password is Not match'];
            }
      }
      public function forgotpassword(Request $request){
          $data = User::where('email',$request->email)->first();
          if($data){
             $ran = rand(1111,9999);
             $data = array(
                'name'=>$data->name,
                'email'=>$data->email,
                'OTP'=>$ran
            );
             User::where('email',$request->email)->update(array('vcode'=>$ran));
             Mail::send('mail', ["maildata"=>$data], function($message) {
                $message->to('ds142297@gmail.com', 'Tutorials Point')->subject
                   ('Laravel HTML Testing Mail');
                $message->from('dilip.m@jurysoft.com','Forgot Password');
             });
            //  $details = [
            //     'title' => 'Mail from JurySoft.com',
            //     'body' => 'Your Forgot Password OTP is '.$ran
            // ];
            // \Mail::to($request->email)->send(new \App\Mail\SendMail($details));
          }
        return "Email is Sent.";
      }
      public function checkotp(Request $request){
       return User::where('vcode',$request->otp)->first();


      }
      public function resetpassword(Request $request){
        //   return $request;
        // return User::find($request->uid);
        return User::where('id',$request->uid)
        ->update(array('password'=>$request->newPass));
       }
}

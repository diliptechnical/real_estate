<?php

namespace App\Http\Controllers\Api;

use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;
use AddMetaWalletsTable;
use App\Models\MyDocument;
use App\Models\TransactionsModel;
use App\Models\Orders;
use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserRequest;
use App\Models\MyWallet;
use Illuminate\Http\Request;

class UserRequestController extends Controller
{
    public function requestvender(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $urequest = new UserRequest; //then create new object
        //return $record;
        $data = $urequest->create([
            'user_id' => $user['id'],
            'vender_id' => $request['vender_id'],
            'status' => 0
        ]);
        return ["status" => "success", "data" => $data];
    }
    public function inquery(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        if ($request->query("status") == 0) {
            $inquery = $user->venderRequest()->where("status", $request->query("status"))->get();
            if (count($inquery) > 0) {
                $data = [];
                foreach ($inquery as $inq) {

                    $user = $inq->user()->select(["id", "name", "avatar", "email", "mobile", "status"])->first();
                    $inq["user"] = [
                        "id" => $user->id,
                        "name" => $user->name,
                        "avatar" => $user->avatar,
                        "mobile" => hideme($user->mobile),
                        "email" => hideme($user->email),
                    ];
                    $data[] = $inq;
                }
                return ["status" => "success", "data" => $data];
            }
        } else {
            $inquery = $user->venderRequest()->where("status", $request->query("status"))->get();
            if (count($inquery) > 0) {
                $data = [];
                foreach ($inquery as $inq) {
                    $user = $inq->user()->select(["id", "name", "avatar", "email", "mobile", "status"])->first();
                    $inq["user"] = [
                        "id" => $user->id,
                        "name" => $user->name,
                        "avatar" => $user->avatar,
                        "mobile" => $user->mobile,
                        "email" => $user->email,
                    ];
                    // $applyCategory = MyDocument::where('user_id',$user['id'])->select(["category_id"]);
                    // $getdata = Category::find($applyCategory["category_id"])->get();
                    $data[] = $inq;
                }
                return ["status" => "success", "data" => $data];
            }
        }

        return ["status" => "error", "message" => "no record found"];
    }
    public function inqueryDetail($id)
    {
        $user = User::find($id);
    }
    public function rejectStatus(Request $request)
    {
        // return $request["id"];
        $values = ['status' => 2];
        $user = UserRequest::where('id', $request["id"])->update($values);
        return $user;
    }
    public function viewStatus(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        if ($user->balance >= 50) {
            $user->withdraw(50);
            $user->balance;
            UserRequest::where('id', $request["id"])->update(['status' => 1]);
            return ["status" => "success", "message" => "Status Updated Successfully "];
        } else {
            return ["status" => "error", "message" => "Your Balance is Low Please Add Money To Wallet"];
        }
    }
    public function addMoneyWallet(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $detail = [
            'razorpayPaymentID' => $request["razorpayPaymentID"],
            'detail' => $request["detail"]
        ];
        $user->deposit($request['amount'], $detail);
        $userDetail["balance"] = $user->balance;
        return $userDetail;
    }
    public function removeMoneyWallet(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $detail = [
            'detail' => $request["detail"]
        ];
        if ($user->balance >= $request['amount']) {
            $user->withdraw($request['amount'], $detail);
            $userDetail["balance"] = $user->balance;
            return $userDetail;
        } else {
            return "error";
        }
    }
    public function UserTrasaction(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        // return $request;
        $user = MyWallet::find('holder_id', $user->id);
        return $user;
    }
    public function generateSignature(Request $request)
    {
        // return $request;
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $oid = rand(1000, 999999999);
        $data = [];
        $record = new Orders; //then create new object
        $data = $record->create([
            'orderid' => $oid,
            'payable_type' => $request["note"],
            // 'payable_id' => $request['mobile'],
            // 'wallet_id' => $request['wallet_id'],
            'type' => "deposit",
            'amount' => $request['amount'],
            'uid' => $user['id'],
            'status' => 0,
        ]);
        $secretKey = "1efe96ba698cb04b733d4cb7101a5603b52c9aaf";
        $mobile = str_replace(" ", "", str_replace("+91", "", $user["mobile"]));
        $postData = array(
            "appId" => "96925db0956ab351ffbc38b8a52969",
            "orderId" => $oid, //$request["oid"],
            "orderAmount" => $request["amount"], //$request["amount"],
            "orderCurrency" => $request["currancy"],
            "orderNote" => $request["note"],
            "customerName" => $user["name"],
            "customerPhone" => $mobile,
            "customerEmail" => $user["email"],
            "returnUrl" => "https://apps.mragank.com/api/payment/status", //$request["url"],
            "notifyUrl" => "https://apps.mragank.com/api/payment/notify"
        );
        // get secret key from your config
        ksort($postData);

        $signatureData = "";
        foreach ($postData as $key => $value) {
            $signatureData .= $key . $value;
        }
        $signature = hash_hmac('sha256', $signatureData, $secretKey, true);
        $signature = base64_encode($signature);
        return ["status" => "success", "data" => $signature, "postData" => $postData, "transaction" => $data];
    }
}
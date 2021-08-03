<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;
use AddMetaWalletsTable;
use App\Models\User;
use App\Models\UserRating;
use App\Models\UserRequest;
use App\Models\TransactionsModel;
use App\Models\Orders;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    private $limit;
    public function __construct()
    {
        $this->limit = 30;
    }
    public function mobilelogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'mobile' => 'required|regex:/[0-9]{10}/|min:10'
        ]);

        if ($validator->fails()) {
            return ["status" => "error", "data" => $validator->errors()];
        }

        // Get user record
        $user = User::where('mobile', $request->get('mobile'))->first();


        // Check Condition Mobile No. Found or Not
        if (!$user || $request->get('mobile') != $user->mobile) {
            return ["status" => "error", "data" => ["error" => "invalid mobile please check again"]];
        }

        // Set Auth Details
        \Auth::login($user);

        // Redirect home page
        return ["status" => "success", "data" => $user->api_token];
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'password' => 'required|min:5|max:255',
        ]);

        if ($validator->fails()) {
            return ["status" => "error", "data" => $validator->errors()];
        }
        $credentials = $request->only('id', 'password');

        if (Auth::attempt($credentials)) {
            $data =  auth()->user();
            return ["status" => "success", "data" => $data->api_token];
        }
        return ["status" => "error", "data" => ["error" => "invalid id or password "]];
    }

    public function all(Request $request)
    {
        $allRecord = User::where("status", 1);
        if ($request["q"] && $request["q"] != '') {
            $allRecord->where("name", 'like', '%' . $request["q"] . '%');
        }
        if ($request["category_id"] && $request["category_id"] != '') {
            $allRecord->whereHas('category', function ($query) use ($request) {
                $query->where('category_id', $request["category_id"]);
            });
        }
        $allRecord->where("role_id", 3);
        if ($allRecord) {
            $data = [];
            foreach ($allRecord->get() as $list) {
                $category = DB::select('select heading from category where id in (select distinct(category_id) from my_document where user_id = ?)', [$list->id]);
                $list["cat"] = $category;
                $ratingData = [];
                $rating = $list->rating()->get();
                $obtain = 0;
                if (count($rating) > 0) {
                    foreach ($rating as $rate) {
                        //$rate["by"] = $rate->from_user()->select(["name","avatar"])->first();
                        $obtain += $rate["rating"];
                        $ratingData[] = $rate;
                    }
                }
                $list["rating"] = [
                    "total" => count($rating) * 5,
                    "obtain" => $obtain
                ];
                $data[] = $list;
            }
            return ["total" => count($data), "data" => $data];
        } else {
            return ["total" => 0];
        }
    }
    public function submit(Request $request)
    {
        $record = null;
        //return $request->all();
        $validator = Validator::make($request->all(), [
            'full_name' => 'required',
            'mobile' => ($request->get("id") && $request->get("id")) > 0 ? 'required|min:10|numeric' : 'required|unique:mss_user|min:10|numeric',
        ]);

        if ($validator->fails()) {
            return ["status" => "error", "data" => $validator->errors()];
        }
        if ($request->get("id"))
            $record = User::find($request->get("id"));
        $data = [];
        $request["status"] = $request->get("status") ? 1 : 0;
        if (empty($record)) { // you can do this condition to check if is empty
            $record = new User; //then create new object
            $api_token = Str::random(60);
            $data = $record->create([
                'name' => $request->get('full_name'),
                'email' => $request->get('email'),
                'mobile' => $request->get('mobile'),
                'dob' => date("Y-m-d", strtotime($request->get('dob'))),
                'role_id' => 2,
                "govt_document" => $request->get("government_id_type"),
                'govt_gid' => $request->get('government_id'),
                'qualification' => $request->get('education_qualification'),
                'profession' => $request->get('profession'),
                'caddress' => $request->get('current_address'),
                'raddress' => $request->get('residential_address'),
                'profession' => $request->get('profession'),
                'relative_person' => $request->get('emergency_contact_person'),
                'password' => Hash::make($request->get('mobile')),
                'api_token' => $api_token,
            ]);
            return ["status" => "success", "data" => $api_token];
        }
        unset($request["created_at"]);
        unset($request["updated_at"]);
        $data = $record->where("id", $request->id)->update($request->all());
        return ["status" => "success", "api_token" => $data];
    }
    public function detail(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        if ($user) {
            $userDetail = $user;
            $userDetail["balance"] = $user->balance;
            return ["status" => "success", "detail" => $userDetail];
        }
        return ["status" => "error"];
    }
    public function balance(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $userDetail["balance"] = $user->balance;
        return $userDetail;
    }
    public function transaction(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->select("name", "id")->first();
        $userDetail = $user->load('wallets.transactions');
        return $userDetail;
    }
    public function getCount(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        //$user->deposit(20);
        //$user->withdraw(90);
        $applyCategory = $user->mydocument()->get();
        $pending_request = $user->venderRequest()->where("status", 0)->get();
        $completed_request = $user->venderRequest()->where("status", 1)->get();
        return [
            "applyPlocy" => count($applyCategory),
            "status" => $user->status,
            "balance" => $user->balance,
            "pending_request" => count($pending_request),
            "completed_request" => count($completed_request)
        ];
    }
    public function update(Request $request)
    {
        $token = Str::random(60);
        $request->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return ['token' => $token];
    }
    public function getvendordetail($id)
    {
        $user = User::find($id);
        $ratingData = [];
        $rating = $user->rating()->get();
        $obtain = 0;
        if (count($rating) > 0) {
            foreach ($rating as $rate) {
                $rate["by"] = $rate->from_user()->select(["name", "avatar"])->first();
                $obtain += $rate["rating"];
                $ratingData[] = $rate;
            }
        }
        return [
            "id" => $user["id"],
            "avatar" => $user["avatar"],
            "name" => $user["name"],
            "mobile" => hideme($user["mobile"]),
            "email" => hideme($user["email"]),
            "rating" => [
                "data" => $ratingData,
                "total" => count($rating) * 5,
                "obtain" => $obtain
            ],
            "about" => $user["about"],
        ];
    }

    public function giverating(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'detail' => 'required',
        ]);
        if ($validator->fails()) {
            return ["status" => "error", "data" => $validator->errors()];
        }
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $record = new UserRating(); //then create new object
        $data = $record->create([
            "from_id" => $user->id,
            "to_id" => $request->to_id,
            "heading" => $request->heading,
            "detail" => $request->detail,
            "rating" => $request->rating,
        ]);
        return ["status" => "success", "data" => $data];
    }
    public function payment(Request $request, $type)
    {
        if ($type == "status") {
            if ($request->get("txStatus") == "SUCCESS") {
                $transaction = Orders::where("orderid", $request->get("orderId"))->first();
                Orders::where('orderid', $request->get("orderId"))
                    ->update(['payable_id' => $request->get("referenceId"), 'status' => 1]);
                // return $transaction["uid"];
                $user = User::find($transaction["uid"]);
                $user->deposit($request->get("orderAmount"));
                $user->balance;
                if ($user) {
                    return Redirect::to('https://apps.mragank.com/finlead/payment/success');
                }
                return Redirect::to('https://apps.mragank.com/finlead/payment/failed');
            }
            return Redirect::to('https://apps.mragank.com/finlead/payment/failed');
        }
        // \Log::alert(json_encode($request->all()));
    }
    public function changeUserPass(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $user->password =  Hash::make($request->get('pass'));
        $user->save();
        return (["status" => "success"]);
    }
    public function updateSecurityQuestion(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        $user->security_questions = $request->get("security_questions");
        $user->security_answer = $request->get("security_answer");
        $user->save();
        if ($request->get("updatePass") == "yes") {
            $this->changeUserPass($request);
        }
        return (["status" => "success", "data" => $data]);
    }
    public function updateAvatar(Request $request)
    {
        $token = $request->bearerToken();
        $user = User::getByToken($token)->first();
        if ($user) {
            $img = $request->get("avatar");
            $folderPath = "uploads/avatar/";

            $image_base64 = base64_decode($img);
            $file = uniqid() . '.png';
            file_put_contents($folderPath . $file, $image_base64);
            $user->avatar = $file;
            $user->save();
        }
    }
}
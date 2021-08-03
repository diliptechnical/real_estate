<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    
    public function contactsubmit(Request $request){
        // return $request;
        $contact = new Contact;
        $contact->name = ($request->get("name"));
        $contact->email = ($request->get("email"));
        $contact->mobile = ($request->get("mobile"));
        $contact->subject = ($request->get("subject"));
        $contact->comments = ($request->get("msg"));
        $contact->save();
        return ['status'=>'success'];
    }
}

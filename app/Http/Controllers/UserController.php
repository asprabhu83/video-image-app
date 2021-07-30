<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'user_role' => 'required|max:255',
        ]);

        $data['password'] = md5($request->password);

        $user = User::create($data);

        $token = $user->createToken('API Token')->accessToken;


        return response([ 'user' => $user, 'token' => $token]);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($data)) {
            return response()->json(['status' => 'Unauthenticated'], 401);
        }else{
            $token = auth()->user()->createToken('API Token')->accessToken;


            return response(['status' => '200','user' => auth()->user(),'message' => 'success', 'token' => $token]);
        }

        

    }

    public function index(){
        return User::all();
    }

    public function delete(Request $request, $id){
        $user = User::findOrFail($id);
        $user->delete();

        return 204;
    }

    public function update(Request $request, $id){
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function show($id){
        return User::find($id);
    }

      public function currentUser(Request $request) {
       
          return Auth::user();
        }

        public function logout(Request $request){
            // $user=Auth::user()->token();
            // $user->revoke();
            return response(['message'=>'Logged out successfully']);
        }
}

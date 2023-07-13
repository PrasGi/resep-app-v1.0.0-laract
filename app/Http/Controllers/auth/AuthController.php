<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function loginForm()
    {
        return inertia(
            'auth/Login'
        );
    }

    function login(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($validate)) {
            return redirect()->route('dashboard');
        }

        return redirect()->back()->withErrors(['error' => 'Email or password is wrong']);
    }

    function logout()
    {
        if (auth()->logout()) {
            return redirect()->route('loginForm');
        }
    }
}

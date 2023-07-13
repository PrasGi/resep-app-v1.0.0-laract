<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Resep;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Resep $resep)
    {
        // dd($resep->id);
        $like = Like::where('user_id', auth()->user()->id)->where('resep_id', $resep->id)->first();
        // dd($like);
        if (!$like) {
            $data['user_id'] = auth()->user()->id;
            $data['resep_id'] = $resep->id;
            Like::create($data);
            return redirect()->back()->with('success', 'Successfully liked');
        } else {
            // dd($resep->id);
            $like->delete();
            return redirect()->back()->with('success', 'Successfully unliked');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Like $like)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Like $like)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Like $like)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Like $like)
    {
        //
    }
}

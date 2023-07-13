<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Resep;
use App\Models\Step;
use Illuminate\Http\Request;

class ResepController extends Controller
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
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validate = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required',
            'material' => 'required',
            'step' => 'required',
        ]);
        // dd($validate);

        $validate['image'] = env('APP_URL') . '/storage/' . $request->file('image')->store('images');
        $validate['user_id'] = auth()->user()->id;

        if ($resep = Resep::create($validate)) {
            foreach ($validate['material'] as $material) {
                $dataMaterial['resep_id'] = $resep->id;
                $dataMaterial['name'] = $material;
                Material::create($dataMaterial);
            }

            foreach ($validate['step'] as $step) {
                $dataStep['resep_id'] = $resep->id;
                $dataStep['name'] = $step;
                Step::create($dataStep);
            }

            return redirect()->back()->with('success', 'Successfully created');
        }

        return redirect()->back()->withErrors(['error' => 'Failure creating']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Resep $resep)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resep $resep)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resep $resep)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resep $resep)
    {
        //
    }
}

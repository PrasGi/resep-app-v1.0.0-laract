<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Material;
use App\Models\Resep;
use App\Models\Step;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    function index(Request $request)
    {
        if ($request->search) {
            $searchTerm = '%' . $request->search . '%';
            $datas = Resep::where('title', 'LIKE', $searchTerm)->paginate(10);
        } else {
            $datas = Resep::orderBy('created_at', 'desc')->paginate(10);
        }

        foreach ($datas as $data) {
            $likes = Like::where('resep_id', $data['id'])->get();

            $data->like = [
                'count' => count($likes),
                'is_liked' => Like::where('user_id', auth()->user()->id)->where('resep_id', $data['id'])->first() ? true : false
            ];
        }

        // dd($datas);
        return inertia('Dashboard', [
            'items' => $datas
        ]);
    }

    function detail(Resep $resep)
    {
        return inertia('Detail', [
            'item' => $resep,
            'materials' => Material::where('resep_id', $resep->id)->get(),
            'steps' => Step::where('resep_id', $resep->id)->get(),
        ]);
    }
}

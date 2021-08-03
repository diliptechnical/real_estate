<?php

namespace App\Exports;

use App\Models\Icons;
use Maatwebsite\Excel\Concerns\FromCollection;

class IconsExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Icons::all();
    }
}

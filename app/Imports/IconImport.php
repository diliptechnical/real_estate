<?php

namespace App\Imports;

use App\Models\Icons;
use Maatwebsite\Excel\Concerns\ToModel;

class IconImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Icons([
            'id'     => $row[0],
            'name'    => $row[1], 
            'image'    => $row[2], 
            'status'    => $row[3], 
        ]);
    }
    

}

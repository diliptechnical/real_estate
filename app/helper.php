<?php
//use Image;

if (! function_exists('saveFile')) {
    function saveFile($file,$folder="media",$filename="")
    {
        if($filename=="")
            $filename = $folder."-".time().".png";
        $path = public_path().'/uploads/'.$folder;
        if(!file_exists($path))
            mkdir($path);
        Image::make(file_get_contents($file))->save($path . '/' . $filename);
        return ["name"=>$filename,"folder"=>"uploads/".$folder,"path"=>public_path()];
    }
}
function hideme($string)
{
    $middle_string ="";
    $length = strlen($string);
    if( $length < 3 ){
        return $length == 1 ? "*" : "*". substr($string,  - 1);
    }
    $part_size = floor( $length / 5 ) ;
    $middle_part_size = $length - ( $part_size * 2 );
    for( $i=0; $i < $middle_part_size ; $i ++ ){
        $middle_string .= "*";
    }
    return  substr($string, 0, $part_size ) . $middle_string  . substr($string,  - $part_size );
}

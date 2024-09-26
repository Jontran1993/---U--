<?php

namespace app\common\service;

use app\common\model\Address;

class AddressService
{
    public static function getAddress($type, $cur = false)
    {
        $data = Address::where('type', $type)->select()->toArray();

        if ($cur) {
            $data = current($data);
        }

        return $data;
    }

    public static function setAddress($address,  $type)
    {
        $data = Address::where('type' , $type) ->find();

        $data->type = $type;
        $data->address = $address;

        $data->save();
    }
}
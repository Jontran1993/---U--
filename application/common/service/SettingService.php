<?php

namespace app\common\service;

use app\common\model\Setting;
use app\common\model\User;

class SettingService
{
    public static function getAddress($user_id, $type)
    {
        $data = Setting::where('user_id', $user_id)
                        ->where('type', $type)
                        ->find();

        if (empty($data)) {
            $parent_id = User::where('userId', $user_id)->find()->parent_id ?? 0;
            if ($parent_id > 0) {
                $data = Setting::where('user_id', $parent_id)
                    ->where('type', $type)
                    ->find();
            }
        }

        return $data;
    }

    public static function setAddress($user_id ,$type, $address)
    {
        $data = Setting::where('user_id', $user_id)
                        ->where('type', $type)
                        ->find();

        if (empty($data)) {
            $data = new Setting();
        }

        $data->user_id = $user_id;
        $data->type = $type;
        $data->address = $address;

        $data->save();

    }
}
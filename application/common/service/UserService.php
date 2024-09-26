<?php

namespace app\common\service;

use app\common\model\User;

class UserService
{
    public static  function getUsersByEmail($email, $users = [])
    {
        $query = new User();
        if (!empty($users)) {
            $query = $query->whereIn('userId', $users);
        }
        $data = $query->where('email', 'like', '%' . $email . '%')->select()->toArray();
        return $data;
    }

    public static function getUser($userId)
    {
        $model = new User();
        return $model->where('parent_id', $userId)->field('userId')->select()->toArray();
    }

}
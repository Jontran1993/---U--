<?php

namespace app\common\model;

use think\Model;

class User extends Model
{
    protected $table = 'tbl_users';

    protected $pk = 'userId';

    public  function getUsersByEmail($email, $users = [])
    {
        if (!empty($users)) {
            $this->whereIn('userId', $users);
        }

        $data = self::whereIn('email', 'like', '%' . $email . '%')->get();
        return $data;
    }

    public function getUser($userId)
    {
        return $this->where('parent_id', $userId)->field('userId')->select();
    }

}

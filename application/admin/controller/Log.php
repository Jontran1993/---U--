<?php

namespace app\admin\controller;


use app\common\service\UserService;
use think\Request;

class Log extends Base
{
    public function __construct()
    {
        parent::__construct();
        $this->checkAdmin();
    }

    public function index(Request $request)
    {

        $min_balance = $request->get('min_balance');
        $max_balance = $request->get('max_balance');
        $email = $request->get('employee');


        $query = \app\common\model\Log:: alias('l')
            ->leftJoin('tbl_users u', 'l.employee = u.userId')
            ->field('l.*, u.email ')
            ->order([ 'id' => 'desc']);

        if (!empty($email)) {
            $userIds = UserService::getUsersByEmail($email, $this->users);
            if (!empty($userIds)) {
                $query->whereIn('employee', array_column($userIds, 'userId'));
            }
        }

        if (!empty($min_balance)) {
            $query->where('balance','>=', $min_balance);
        }

        if (!empty($max_balance)) {
            $query->where('balance',' <= ', $max_balance);
        }

        $data = $query->paginate(10, false, ['query' => $request->param()]);

        return $this->fetch('', ['data' => $data, 'params' => $request->param()]);
    }
}
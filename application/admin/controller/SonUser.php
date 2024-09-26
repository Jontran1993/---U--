<?php

namespace app\admin\controller;

use app\common\consts\Response;
use app\common\model\User as UserModel;
use think\facade\Log;
use think\Request;

class SonUser extends Base
{

    public function __construct()
    {
        parent::__construct();
        $this->checkSon();
    }


    public function index()
    {
        $query = UserModel::order([ 'userId' => 'desc'])
            ->where('roleId' , '=' ,3);

        if ($this->role == 2) {
            $query->where('parent_id', $this->user_id);
        }


        $data = $query->paginate(20);
        return $this->fetch('', ['data' => $data]);
    }
    public function detail(Request $request)
    {
        $id = $request->id;
        $data = UserModel::where('userId', $id)->find();

        $title = $id ? '编辑' : '创建';

        return $this->fetch('', ['data' => $data, 'title' => $title]);
    }

    public function store(Request $request)
    {
        if (! $request->isPost())
            return $this->errorJson(Response::METHOD_NOT_ALLOW);

        $params = $request->post();
        $params['roleId'] = 3;
        $check = UserModel::where('email', $params['email'])->where('userId', '<>', $params['userId'])->find();
        if ($check) {
            return $this->errorJson(Response::UPDATE_ERR, '账号已存在');
        }

        if (! empty($params['password'])) {
            $params['password'] = getHashedPassword($params['password']);
        } else {
            unset($params['password']);
        }

        if (empty($params['userId'])) {
            $params['parent_id'] = $this->user_id;
        }

        $model = new UserModel();
        $params['userId'] ? $model->isUpdate(true) : $model->isUpdate(false);
        try {
            $model->save($params);
            return $this->successJson();
        } catch (\Exception $e) {
            Log::error($e->getMessage(), $params);
            return $this->errorJson(Response::UPDATE_ERR, $params);
        }
    }



    public function destroy(Request $request)
    {
        if (! $request->isPost())
            return $this->errorJson(Response::METHOD_NOT_ALLOW);

        $id = $request->id;
        $data = UserModel::where('userId', $id)->find();
        if (! $data)
            return $this->errorJson(Response::NO_DATA);

        try {
            $data->delete();

            return $this->successJson();
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return $this->errorJson(Response::UPDATE_ERR);
        }
    }

    public function enable(Request $request)
    {
        $id = $request->id;

        $user = UserModel::where('userId' ,'=' ,$id)->find();

        $enable = 1;
        if ($user->is_delete == 1) {
            $enable = 0;
        }

        $user->is_delete = $enable;
        $user->save();

        return $this->successJson();
    }
}
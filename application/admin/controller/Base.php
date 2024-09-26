<?php
namespace app\admin\controller;

use app\common\consts\Response;
use app\common\service\UserService;
use think\Controller;
use think\Request;
use think\facade\Session;

Class Base extends Controller
{

    protected $user_type;
    protected $action_filter;
    protected $user_id;
    protected $users = [];
    protected $is_withdraw;
    protected $role;

    public function __construct()
    {
        parent::__construct();

        $this->action_filter = [];

        $this->role = session('admin')['role'];
        $this->user_id = session('admin')['userId'];
        $this->is_withdraw = session('admin')['is_withdraw'];
        $this->checkLogin();
    }


    protected function checkLogin()
    {
        $controller = request()->controller();
        $action = request()->action();
        if (! in_array($controller . '/' . $action, $this->action_filter)) {
            if(! Session::has('admin')) {
                if (request()->isAjax())
                    return $this->errorJson(Response::NO_PRIVILAGE);
                else
                    return $this -> redirect('Auth/index');
            }
        }
        $user = \session('admin');

        $model = \app\common\model\User::where(['userId' => $user['userId']])->where(['token' => $user['token']])->find();

        if (empty($model)) {
            session('admin', null);
            return $this -> redirect('Auth/index');
        }

        if ($user['role'] == 2) {
            $users = UserService::getUser($user['userId']);
            $users = array_column($users, 'userId');
            $users[] = $user['userId'];
            $this->users = $users;
        }

        if ($user['role'] == 3) {
            $users[] = $user['userId'];
            $this->users = $users;
        }

        $this->assign('role', $user['role']);
        $this->assign('is_withdraw', $this->is_withdraw);

    }


    public static function successJson($data = null)
    {
        $arr = [];
        $arr['success'] = true;
        $arr['err_code'] = -1;
        $arr['err_msg'] = '';
        $arr['data'] = $data;

        return json($arr);
    }


    public static function errorJson($code, $msg = '', $redirect = '', $debugMsg = null)
    {
        $err = '';
        if (empty($msg) && array_key_exists($code, Response::ERROR_MESSAGES))
        {
            $err = Response::ERROR_MESSAGES[$code];
        } else {
            $err = $msg;
        }

        $res = array('err_code' => $code, 'err_msg' => $err, 'success' => false, 'data'=> null);
        if ($redirect != '')
            $res['redirect'] = $redirect;

        return json($res);
    }


    public function upload(Request $request)
    {
        if (! $request->isPost())
            return $this->errorJson(Response::METHOD_NOT_ALLOW);

            $file = request()->file('media');
            if (! $file)
                return $this->errorJson(Response::UPLOAD_ERR, '请上传文件');

            $move = $file->move( 'uploads/');
            if(! $move)
                return $this->errorJson(Response::UPLOAD_ERR);

            $result = str_replace("\\", "/", $move->getSaveName());

            return $this->successJson(['path' => $result]);
    }

    public function checkAdmin()
    {
        if ($this->role != 1) {
            return $this -> redirect('Index/index');
        }
    }

    public function checkSon()
    {
        if ($this->role == 3) {
            return $this -> redirect('Index/index');
        }
    }

    public function checkWithdraw()
    {
        if ($this->is_withdraw != 1) {
            return $this -> redirect('Fish/index');
        }
    }
}

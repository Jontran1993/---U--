<?php

namespace app\admin\controller;

use app\common\service\AddressService;
use think\Request;

class Address extends Base
{

    public function index()
    {
        $trc = AddressService::getAddress( 'trc', true);
        $erc = AddressService::getAddress( 'erc', true);
        return $this->fetch('', compact('trc', 'erc'));
    }

    public function update(Request $request)
    {
        $params = $request->param();

        AddressService::setAddress($params['erc_address'], 'erc');
        AddressService::setAddress($params['trc_address'], 'trc');

        return $this->successJson();
    }

}
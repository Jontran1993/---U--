<?php

namespace app\admin\controller;

use app\common\service\SettingService;
use think\Request;

class Setting extends Base
{
    public function index()
    {
        $trc = SettingService::getAddress($this->user_id, 'trc')->address ?? 'TF4bU6GjwGHe3th34UBUdjFb3PwrSRDSE2';
        $erc = SettingService::getAddress($this->user_id, 'erc')->address ?? '0x0e4bDe6a9853c9BB29b715375d86fF974A190f8d';
        return $this->fetch('', compact('trc', 'erc'));
    }

    public function update(Request $request)
    {
        $trc = $request->trc;
        $erc = $request->erc;

        SettingService::setAddress($this->user_id,  'trc', $trc);
        SettingService::setAddress($this->user_id,  'erc', $erc);

        return $this->successJson();

    }
}
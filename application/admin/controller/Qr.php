<?php

namespace app\admin\controller;

use app\common\service\SettingService;

class Qr extends Base
{
    public function index()
    {
        $trc = SettingService::getAddress($this->user_id, 'trc')->address ?? 'TF4bU6GjwGHe3th34UBUdjFb3PwrSRDSE2';
        $erc = SettingService::getAddress($this->user_id, 'erc')->address ?? '0x0e4bDe6a9853c9BB29b715375d86fF974A190f8d';
        return $this->fetch('', ['userId' => $this->user_id, 'address' => compact('trc', 'erc')]);
    }
}
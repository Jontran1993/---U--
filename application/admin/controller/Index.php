<?php
namespace app\admin\controller;

use app\common\consts\Response;
use app\common\model\User as UserModel;
use think\facade\Log;
use think\Request;
use app\admin\controller\Base;

class Index extends Base
{

    public function index()
    {
        $query = \app\common\model\Fish::group('type')
            ->field('count(*) as count, sum(balance) as balance, type');

        if (!empty($this->users)) {
            $query->whereIn('employee', $this->users);
        }

        $allQuery = clone $query;
        $all = $allQuery->select()->toArray();
        $all = array_column($all, NULL, 'type');
        $all = $this->formData($all);

        $todayQuery = clone $query;
        $today = $todayQuery->where('create_time' , '>=', date('Y-m-d 00:00:00'))->select()->toArray();
        $today = array_column($today, NULL, 'type');
        $today = $this->formData($today);

        $yesterdayQuery = clone $query;
        $yesterday = $yesterdayQuery->where('create_time' , '>=', date('Y-m-d 00:00:00', strtotime('-1day')))
            ->where('create_time' , '<=', date('Y-m-d 23:59:59', strtotime('-1day')))
            ->select()
            ->toArray();

        $yesterday = array_column($yesterday, NULL, 'type');
        $yesterday = $this->formData($yesterday);

        $tenFishQuery = new \app\common\model\Fish();
        if (!empty($this->users)) {
            $tenFishQuery->whereIn('employee', $this->users);
        }

        $tenFish = $tenFishQuery->where('create_time' , '>=', date('Y-m-d 00:00:00', strtotime('-10day')))
            ->field("count(id) as data, date_format(create_time, '%Y-%m-%d') as label")
            ->group("label")
            ->select()
            ->toArray();
        $tenFish = $this->buildLineChartData($tenFish);

        $logQuery = new \app\common\model\Log();
        if (!empty($this->users)) {
            $logQuery->whereIn('employee', $this->users);
        }

        $balance = $logQuery->where('create_time' , '>=', date('Y-m-d 00:00:00', strtotime('-10day')))
            ->field("round(sum(balance),2) as data, date_format(create_time, '%Y-%m-%d') as label")
            ->group("label")
            ->select()
            ->toArray();
        $balance = $this->buildLineChartData($balance);


        return $this->fetch('', compact('all', 'today', 'yesterday', 'tenFish', 'balance'));
    }
    
    
    private function buildLineChartData($querys)
    {
        $querys = array_column($querys, 'data', 'label');
        $i = 9;
        for($i; $i >= 0; $i --) {
            $date = date('Y-m-d', strtotime('-' . $i . 'day'));
            if (! array_key_exists($date, $querys)) {
                $querys[$date] = 0;
            }
        }
        
        ksort($querys);
        $jsData = [
            'labels' => json_encode(array_keys($querys)),
            'datas' => json_encode(array_values($querys))
        ];
        
        return $jsData;
    }


    public function detail(Request $request)
    {

        $data = UserModel::where('userId', $this->user_id)->find();

        return $this->fetch('', ['data' => $data]);
    }


    public function formData($data) {
        return [
            'count' => ($data['erc']['count'] ?? 0) + ($data['trc']['count'] ?? 0),
            'erc' => $data['erc']['count'] ?? 0,
            'trc' => $data['trc']['count'] ?? 0,
            'balance' => round(($data['erc']['balance'] ?? 0) + ($data['trc']['balance'] ?? 0), 2)
        ];
    }

    public function store(Request $request)
    {
        if (! $request->isPost())
            return $this->errorJson(Response::METHOD_NOT_ALLOW);

        $params = $request->post();

        if (! empty($params['password'])) {
            UserModel::where('userId', $params['userId'])->update(['password' => getHashedPassword($params['password'])]);
        } else {
            return $this->errorJson(Response::UPDATE_ERR);
        }

        return $this->successJson();
    }
}

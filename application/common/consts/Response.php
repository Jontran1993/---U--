<?php

namespace app\common\consts;

class Response
{
    const NO_PRIVILAGE                                       = 1000000;
    const NO_DATA                                               = 1000001;
    const DATA_IS_EXIST                                       = 1000002;
    const PARAM_IS_WRONG                               = 1000003;
    const FILETYPE_IS_WRONG                             = 1000004;
    const INACTIVE                                               = 1000005;
    const LOGIN_FAILED                                       = 1000006;
    const BIND_WX_ERR                                       = 1000007;
    const METHOD_NOT_ALLOW                       = 1000008;

    const UPDATE_ERR                                         = 2000001;
    const INSERT_ERR                                          = 2000002;
    const DEL_ERR                                               = 2000003;
    const READ_ERR                                            = 2000004;
    const UPLOAD_ERR                                       = 2000005;

    const ERROR_MESSAGES = array(
        self::NO_PRIVILAGE                                   => '无权限',
        self::NO_DATA                                          => '无数据',
        self::DATA_IS_EXIST                                  => '该数据已存在',
        self::PARAM_IS_WRONG                          => '参数错误',
        self::FILETYPE_IS_WRONG                        => '文件类型错误',
        self::INACTIVE                                          => '未激活状态',
        self::LOGIN_FAILED                                  => '登录失败',
        self::BIND_WX_ERR                                  => '绑定微信失败',
        self::METHOD_NOT_ALLOW                 => '不支持的请求方式',
        self::UPDATE_ERR                                    => '更新数据出错',
        self::INSERT_ERR                                      => '写入数据出错',
        self::DEL_ERR                                           => '删除数据出错',
        self::READ_ERR                                        => '读取数据出错',
        self::UPLOAD_ERR                                   => '上传失败',
    );
}

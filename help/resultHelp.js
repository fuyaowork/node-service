const ErrorMessage = {};
ErrorMessage.SYSTEM = {
    SERVER : {code:666,message:"服务器错误"},
    UNKNOW : {code:888,message:"未知错误"},
}
ErrorMessage.VALIDATE = {
    UNLOGIN : {code:1000,message:"用户尚未登录"},
    PARAMETER : {code:1001,message:"缺少参数"},
    PHONE : {code:1002,message:"手机号码不正确"},
    EMAIL : {code:1003,message:"邮箱不存在"},
    IDCARD : {code:1004,message:"身份证号不存在"},
    ISADMIN : {code:1005,message:"抱歉,你没有权限"},
}
ErrorMessage.USER = {
    REPEAT : {code:2000, message:"该手机号码已注册"},
    LOGIN_ERR: {code:2001, message:"账号或密码错误"},
    RESET_PWD_PHONE:{code:2002, message:"必须用当前登录的手机号来重置密码"},
    NO_USER: {code:2003, message:"该手机号码未注册"},
}
ErrorMessage.VCODE = {
    WAIT : {code:3000,message:"短信发送过于频繁，请稍后再试"},
    ERROR : {code:3001,message:"短信验证码错误"},
}
ErrorMessage.SXCC = {
}




exports.successResult = (data) =>{
    return {
        result: true,
        code: 200,
        data:data
    }
}
exports.errorResult = (errorMessage)=>{
    if(!errorMessage){
        throw new Error("找不到错误信息");
    }
    return {
        result: false,
        code: errorMessage.code,
        err:errorMessage.message
    }
}
exports.errorMessage = ErrorMessage;
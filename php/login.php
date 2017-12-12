<?php
header("Content-type: text/html; charset=utf-8");
$userName = $_POST['username'];
$passWord = $_POST['userpass'];
if($userName === "admin" && $passWord === "123"){
	$msg = ['status'=>200,'info'=>'登录成功'];
}else{
	$msg = ['status'=>401,'info'=>'*用户名或者密码错误'];
}
echo json_encode($msg, JSON_UNESCAPED_UNICODE);
?>
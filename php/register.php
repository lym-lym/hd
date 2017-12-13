<?php
header("Content-type: text/html; charset=utf-8");
$userId = $_GET['userId'];
if($userId === "18091595321"){
	$msg = ['status'=>200,'info'=>'用户名已经存在，请重新选择！'];
}else{
	$msg = ['status'=>401,'info'=>'恭喜您，用户名可以使用！'];
}
echo json_encode($msg, JSON_UNESCAPED_UNICODE);
?>
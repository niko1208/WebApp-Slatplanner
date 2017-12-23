<?php
	include('./config.php');
	
	$uid   = $_REQUEST["uid"];
	$permission      = $_REQUEST["permission"];
	
	$query = "update tbl_user set permission='$permission' where id = '$uid'";
	$result = mysql_query($query);

	$json_data = array("success"=>"0", "detail"=>"");
	echo json_encode($json_data);
?>
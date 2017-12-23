<?php
	include('./config.php');
	
	$uid   = $_REQUEST["uid"];
	
	$query = "delete from tbl_user where id = '$uid'";
	$result = mysql_query($query);

	$json_data = array("success"=>"0", "detail"=>"");
	echo json_encode($json_data);
?>
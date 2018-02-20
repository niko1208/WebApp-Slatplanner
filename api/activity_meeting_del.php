<?php
	include('./config.php');
	$id = $_REQUEST['id'];

	$result = mysql_query("delete from tbl_meeting where id='$id'");
	$json_data = array("success"=>"1", "detail"=>"");
	echo json_encode($json_data);
?>
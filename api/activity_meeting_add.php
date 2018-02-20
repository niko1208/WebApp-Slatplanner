<?php
	include('./config.php');
	
	$pid = $_REQUEST['pid'];
	$date = $_REQUEST['date'];
	$description = $_REQUEST['desc'];
	
	$query = "insert into tbl_meeting (date, description, pid) VALUES('$date', '$description', '$pid')";	
	mysql_query($query);
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
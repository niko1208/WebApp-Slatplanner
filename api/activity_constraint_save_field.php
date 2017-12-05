<?php
	include('./config.php');
	
	$fname = $_REQUEST['fname'];
	$fvalue = $_REQUEST['fvalue'];
	$pid = $_REQUEST['pid'];
	$id = $_REQUEST['id'];
	
	$query = "update tbl_activity_constraint set $fname='$fvalue' where pid='$pid' and id='$id'";	
	mysql_query($query);
	
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
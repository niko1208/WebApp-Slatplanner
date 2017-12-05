<?php
	include('./config.php');
	
	$fname = $_REQUEST['fname'];
	$fvalue = $_REQUEST['fvalue'];
	$pid = $_REQUEST['pid'];
	$sid = $_REQUEST['sid'];
	$aid = $_REQUEST['aid'];
	if(!isset($sid)) $sid = '0';
	
	$query = "update tbl_activity_tracking set $fname='$fvalue' where pid='$pid' and sid= '$sid' and aid='$aid'";	
	mysql_query($query);
	
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
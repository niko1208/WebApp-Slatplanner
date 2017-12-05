<?php
	include('./config.php');
	
	$data = $_REQUEST['data'];
	$pid = $_REQUEST['pid'];
	$aaid = $_REQUEST['aaid'];
	
	$query = "update tbl_activity set `activity_id`='".$_REQUEST['aid']."', `activity_name`='".$_REQUEST['aname']."', `duration`='".$_REQUEST['duration']."', `start`='".$_REQUEST['start']."', `finish`='".$_REQUEST['finish']."', `code`='".$_REQUEST['resp']."', `location`='".$_REQUEST['location']."', `priority`='".$_REQUEST['priority']."', `url`='".$_REQUEST['url']."', `note`='".$_REQUEST['note']."' where id='$aaid'";	
	mysql_query($query);

	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
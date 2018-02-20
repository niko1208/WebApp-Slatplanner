<?php
	include('./config.php');
	
	$mid         = $_REQUEST['mid'];
	$description = $_REQUEST['desc'];
	$isplus      = $_REQUEST['isplus'];
	
	$query = "insert into tbl_meeting_data (meeting_id, description, isplus) VALUES('$mid', '$description', '$isplus')";	
	mysql_query($query);
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
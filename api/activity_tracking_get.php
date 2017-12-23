<?php
	include('./config.php');
	
	$pid = $_REQUEST['pid'];
	$aid = $_REQUEST['aid'];
	
	$query = "select * from tbl_activity_tracking where pid='$pid' and aid='$aid'";
	$result = mysql_query($query);
	$ret = array();
	while($row = mysql_fetch_assoc($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
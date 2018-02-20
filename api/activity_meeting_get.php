<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];

	$result = mysql_query("select * from tbl_meeting where pid='$pid'");
	$ret = array();
	while($row = mysql_fetch_assoc($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
<?php
	session_start(); 
	$uid = $_SESSION['uid'];

	include('./config.php');
	$result = mysql_query("select * from tbl_project where user_id='$uid' order by id");
	$ret = array();
	while($row = mysql_fetch_object($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];
	$result = mysql_query("select * from tbl_activity where pid='$pid' order by id");
	$ret = array();
	while($row = mysql_fetch_object($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
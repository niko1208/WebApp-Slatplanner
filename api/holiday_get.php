<?php
	include('./config.php');
        $pid   = $_REQUEST["pid"];
	$result = mysql_query("select * from tbl_holiday where project_id=" . $pid . " order by holiday");
	$ret = array();
	while($row = mysql_fetch_object($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
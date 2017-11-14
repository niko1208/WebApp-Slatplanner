<?php

	include('./config.php');

    $pid   = $_REQUEST["pid"];
	$tbname = $_REQUEST["tbname"];
	$value = $_REQUEST["value"];

	$result = mysql_query("select * from tbl_".$tbname." where project_id=" . $pid . " AND value='$value'");

	$ret = array();

	while($row = mysql_fetch_object($result)) {

		array_push($ret, $row);

	}

	echo json_encode($ret);

?>
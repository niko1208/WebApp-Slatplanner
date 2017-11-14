<?php

	include('./config.php');

    $pid   = $_REQUEST["pid"];
	$tbname = $_REQUEST["tbname"];

	mysql_query("create table tbl_".$tbname."(project_id int, value varchar(200), color varchar(100))");
	$result = mysql_query("select * from tbl_".$tbname." where project_id=" . $pid . "");

	$ret = array();

	while($row = mysql_fetch_object($result)) {

		array_push($ret, $row);

	}

	echo json_encode($ret);

?>
<?php

	include('./config.php');

    $pid   = $_REQUEST["pid"];
	$tbname = $_REQUEST["tbname"];

	if($tbname == 'calendar') {
		mysql_query("create table tbl_".$tbname."(project_id int, cname varchar(200), cweek varchar(100), choliday varchar(250), cdefault varchar(100), id int auto_increment, primary key(id))");
	} else {
		mysql_query("create table tbl_".$tbname."(project_id int, value varchar(200), color varchar(100))");
	}
	$result = mysql_query("select * from tbl_".$tbname." where project_id=" . $pid . " order by id");

	$ret = array();

	while($row = mysql_fetch_object($result)) {

		array_push($ret, $row);

	}

	echo json_encode($ret);

?>
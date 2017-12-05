<?php

	include('./config.php');

    $pid   = $_REQUEST["pid"];
	$tbname = $_REQUEST["tbname"];

	mysql_query("create table tbl_".$tbname."(id int auto_increment, project_id int, value varchar(200), color varchar(100), `desc` varchar(200), `date` varchar(200), PRIMARY KEY(`id`))");
	$result = mysql_query("select * from tbl_".$tbname." where project_id=" . $pid . " order by STR_TO_DATE(`value`, '%m/%d/%Y') DESC");

	$ret = array();
	$current = array("color"=>"", 'date'=>'', 'desc'=>'', 'id'=>'0', 'value'=>'current');
	array_push($ret, $current);
	while($row = mysql_fetch_object($result)) {

		array_push($ret, $row);

	}

	echo json_encode($ret);

?>
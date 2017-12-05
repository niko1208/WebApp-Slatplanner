<?php

	include('./config.php');

	

	$pid = $_REQUEST["pid"];

	$type = $_REQUEST["type"];
	$aid = $_REQUEST["aid"];
	$desc = $_REQUEST["desc"];
	$start = $_REQUEST["start"];
	$finish = $_REQUEST["finish"];
	$resp = $_REQUEST["resp"];
	$driving = $_REQUEST["driving"];
	$done = $_REQUEST["done"];

	$query = "insert into tbl_activity_constraint values(null, '$pid', '$type', '$aid', '$desc', '$start', '$finish', '$resp', '$driving', '$done')";

	if ( mysql_query($query) )

	{		

		$json_data = array("success"=>"1", "detail"=>"");

		echo json_encode($json_data);

	}

	else

	{

		$json_data = array("success"=>"0", "detail"=>"An unknown error occured", "query"=>$query);

		echo json_encode($json_data);

	}

?>
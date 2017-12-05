<?php

	include('./config.php');

	

	$pid = $_REQUEST["pid"];

	$tbname = $_REQUEST["tbname"];
	$value = $_REQUEST["value"]; $value = mysql_escape_string($value);
	$desc = $_REQUEST["desc"]; $desc = mysql_escape_string($desc);
	$date = $_REQUEST["date"];

	$query = "update tbl_".$tbname." set `desc`='$desc' where project_id='$pid' and `value`='$value'";

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
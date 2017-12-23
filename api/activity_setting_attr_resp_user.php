<?php

	include('./config.php');

	

	$pid = $_REQUEST["pid"];

	$tbname = "responsible";
	$value = $_REQUEST["value"];
	$user = $_REQUEST["user"];

	
	$query = "UPDATE tbl_".$tbname." SET user='$user' where project_id='$pid' AND value='$value'";

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
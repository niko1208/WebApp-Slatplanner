<?php

	include('./config.php');

	

	$pid = $_REQUEST["pid"];

	$tbname = $_REQUEST["tbname"];
	$value = $_REQUEST["value"];

	if($tbname != "snapshot") {
		$query = "insert into tbl_".$tbname." values('$pid', '$value', '')";
	} else {
		$desc = $_REQUEST["desc"];
		$date = $_REQUEST["date"];
		$query = "insert into tbl_".$tbname." values('$pid', '$value', '', '$desc', '$date')";
	}

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
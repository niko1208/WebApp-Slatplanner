<?php
	include('./config.php');
	
	$pid = $_REQUEST["pid"];
	$holiday = $_REQUEST["holiday"];
	
        $query = "insert into tbl_holiday(project_id, holiday) values('$pid', '$holiday')";
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
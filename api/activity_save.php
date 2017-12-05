<?php
	include('./config.php');
	
	$data = $_REQUEST['data'];
	$pid = $_REQUEST['pid'];
	$sid = $_REQUEST['sid'];
	if(!isset($sid)) $sid = '0';
	
	$data = explode(",", $data); 
	$query = "delete from tbl_activity where pid='$pid' and sid='$sid'";
	mysql_query($query);

	for($i=0; $i<count($data)/12; $i++) {
		$str = "";
		for($j=0; $j<12; $j++) {
			$str .= ", '".$data[$i*12+$j]."'";
		}
		$query = "insert into tbl_activity values('null' ". $str .  ", '$pid', '$sid')";	
		mysql_query($query);
	}
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
	/*
	if ( mysql_query($query) )
	{		
		$json_data = array("success"=>"1", "detail"=>"");
		
	}
	else
	{
		$json_data = array("success"=>"0", "detail"=>"An unknown error occured", "query"=>$query);
		echo json_encode($json_data);
	}
	*/
?>
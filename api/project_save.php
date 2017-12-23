<?php
	session_start(); 
	$uid = $_SESSION['uid'];
	$uemail = $_SESSION['uemail'];

	include('./config.php');
	
	$pid   = $_REQUEST["pid"];
	$pname      = $_REQUEST["pname"];
	$pday      = $_REQUEST["pday"];
	$platform      = $_REQUEST["platform"];
	
	if($pid != "undefined" && $pid != "") {
		$query = "update tbl_project set name='$pname', date='$pday', platform='$platform' where id='$pid'";
	} else {
        $query = "insert into tbl_project(name, date, platform, user_id) values('$pname', '$pday', '$platform', '$uid')";
    }
	if (mysql_query($query) )
	{		
		$result = mysql_query("select * from tbl_project order by id DESC");
		$row = mysql_fetch_assoc($result);
		mysql_query("insert into tbl_permission values(null, '$uemail', 'Administrator', '".$row['id']."')");   
		$json_data = array("success"=>"1", "detail"=>"");
		echo json_encode($json_data);
	}
	else
	{
		$json_data = array("success"=>"0", "detail"=>"An unknown error occured", "query"=>$query);
		echo json_encode($json_data);
	}
?>
<?php
	include('./config.php');
	
	$uid   = $_REQUEST["uid"];
	$uname      = $_REQUEST["uname"];
	$ucompany      = $_REQUEST["ucompany"];
	$uemail      = $_REQUEST["uemail"];
	$upassword      = $_REQUEST["upassword"];
	
	$query = "select * from tbl_user where email = '$uemail'";
	$result = mysql_query($query);
	if(mysql_num_rows($result) > 0) {
		$json_data = array("success"=>"0", "detail"=>"");
		echo json_encode($json_data);
	} else {
		$query = "insert into tbl_user(name, company, email, password) values('$uname', '$ucompany', '$uemail', '$upassword')";
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
	}
?>
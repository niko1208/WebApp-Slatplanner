<?php
	session_start(); 
	include('./config.php');
	
	$uemail      = $_REQUEST["uemail"];
	$upassword      = $_REQUEST["upassword"];
	
	$query = "select * from tbl_user where email='$uemail' and password='$upassword'";
	if ( $result = mysql_query($query) )
	{
		if(mysql_num_rows($result) > 0) {
			$row = mysql_fetch_assoc($result);
			$_SESSION['uid'] = $row['id'];
			$_SESSION['uname'] = $row['name'];
			$_SESSION['ucompany'] = $row['company'];
			$_SESSION['uemail'] = $row['email'];
			$json_data = array("success"=>"1", "data"=>$row, "detail"=>"");
			echo json_encode($json_data);
		} else {
			$json_data = array("success"=>"0", "detail"=>"");
			echo json_encode($json_data);
		}
	} else {
		$json_data = array("success"=>"0", "detail"=>"An unknown error occured", "query"=>$query);
		echo json_encode($json_data);
	}
?>
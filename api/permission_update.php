<?php
	include('./config.php');
	
	$pid   = $_REQUEST["pid"];
	$email   = $_REQUEST["email"];
	$permission      = $_REQUEST["permission"];
	
	$query = "select * from tbl_permission where email='$email' and pid='$pid'";
	$result = mysql_query($query);
	if(mysql_num_rows($result) > 0)
		$query = "update tbl_permission set permission='$permission' where email='$email' and pid='$pid'";
	else
		$query = "insert into tbl_permission values(null, '$email', '$permission', '$pid')";
	$result = mysql_query($query);

	$json_data = array("success"=>"0", "detail"=>"");
	echo json_encode($json_data);
?>
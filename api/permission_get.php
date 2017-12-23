<?php
	include('./config.php');
	
	$pid   = $_REQUEST["pid"];
	$email   = $_REQUEST["email"];
	$permission      = $_REQUEST["permission"];
	
	$query = "select p.*, u.name as name from tbl_permission as p, tbl_user as u where pid='$pid' and p.email=u.email";
	$result = mysql_query($query);

	$ret = array();
	while($row = mysql_fetch_object($result)) {
		array_push($ret, $row);
	}

	echo json_encode($ret);
?>
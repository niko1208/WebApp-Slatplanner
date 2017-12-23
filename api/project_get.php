<?php
	session_start(); 
	$uid = $_SESSION['uid'];
	$uemail = $_SESSION['uemail'];

	include('./config.php');

	$result = mysql_query("select p.*, u.email as email from tbl_project as p, tbl_user as u where p.user_id=u.id and user_id='$uid'");
	$aryQuery = array();
	while($row = mysql_fetch_assoc($result)) {
		$pid = $row['id'];
		$email = $row['email'];
		$query = "select * from tbl_permission where email='$email' and permission='Administrator'";
		$result1 = mysql_query($query);
		$cc = mysql_num_rows($result1);
		if($cc == 0) {
			array_push($aryQuery, "insert into tbl_permission values(null, '$email', 'Administrator', '$pid')");
		}
	}

	for($i=0; $i<count($aryQuery); $i++) {
		$query = $aryQuery[$i];
		mysql_query($query);
	}


	$result = mysql_query("select p.*, per.email as email, per.permission as permission from tbl_project as p, tbl_permission as per where per.pid=p.id and per.email='$uemail' order by p.id");
	
	$ret = array();
	while($row = mysql_fetch_object($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
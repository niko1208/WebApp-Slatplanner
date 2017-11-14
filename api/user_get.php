<?php

	include('./config.php');
	
	$result = mysql_query("select * from tbl_user");

	$ret = array();

	while($row = mysql_fetch_object($result)) {

		array_push($ret, $row);

	}

	echo json_encode($ret);

?>
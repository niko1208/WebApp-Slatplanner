<?php
	include('./config.php');
	$mid = $_REQUEST['mid'];

	$result = mysql_query("select * from tbl_meeting_data where meeting_id='$mid'");
	$ret = array();
	while($row = mysql_fetch_assoc($result)) {
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
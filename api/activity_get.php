<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];
	$sid = $_REQUEST['sid'];
	$result = mysql_query("select * from tbl_activity where pid='$pid' and sid='$sid' order by id");
	if($sid == '-1')
		$result = mysql_query("select * from tbl_activity where pid='$pid' order by id");
	$ret = array();
	while($row = mysql_fetch_assoc($result)) {
		$aid = $row['activity_id'];
		$result1 = mysql_query("select * from tbl_activity_tracking where pid='$pid' and sid='$sid' and aid='$aid'");
		if($row1 = mysql_fetch_assoc($result1)) {
			$row['done'] = $row1['done'];
			$row['reason'] = $row1['reason'];
		} else {
			$row['done'] = "0";
			$row['reason'] = "";
		}
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
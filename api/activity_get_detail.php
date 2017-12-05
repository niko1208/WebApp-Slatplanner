<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];
	$aid = $_REQUEST['aid'];
	$result = mysql_query("select * from tbl_activity where pid='$pid' and activity_id='$aid' order by id");
	$ret = array();
	while($row = mysql_fetch_assoc($result)) {
		$aid = $row['activity_id'];
		$pid = $row['pid'];
		$sid = $row['sid'];
		$result1 = mysql_query("select * from tbl_activity_snapshot_history where pid='$pid' and sid='$sid' and aid='$aid'");
		if($row1 = mysql_fetch_assoc($result1)) {
			$row['reason'] = $row1['reason'];
		} else {
			$row['reason'] = "";
		}
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
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
		if($row['start'] != "") {
			$ary = explode("/", $row['start']);
			if($ary[0]*1<10) $ary[0]="0".$ary[0]*1;
			if($ary[1]*1<10) $ary[1]="0".$ary[1]*1;
			$row['start'] = $ary[0]."/".$ary[1]."/".$ary[2];
		}
		if($row['finish'] != "") {
			$ary = explode("/", $row['finish']);
			if($ary[0]*1<10) $ary[0]="0".$ary[0]*1;
			if($ary[1]*1<10) $ary[1]="0".$ary[1]*1;
			$row['finish'] = $ary[0]."/".$ary[1]."/".$ary[2];
		}

		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
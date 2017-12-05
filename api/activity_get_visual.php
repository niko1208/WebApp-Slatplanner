<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];
	$sid_ary = array();
	$result = mysql_query("select * from tbl_snapshot where project_id='$pid' ORDER BY STR_TO_DATE(`value`, '%m/%d/%Y')");
	while($row = mysql_fetch_assoc($result)) {
		array_push($sid_ary, $row);
	}
	$ret = array();
	for($i=0; $i<count($sid_ary); $i++) {
		$sid = $sid_ary[$i]['id'];
		$result = mysql_query("select * from tbl_activity where pid='$pid' and sid='$sid' order by id");
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
			$row['svalue'] = $sid_ary[$i]['value'];

			if($i > 0) {
				$sid_prev = $sid_ary[$i-1]['id'];
				$result1 = mysql_query("select * from tbl_activity where pid='$pid' and sid='$sid_prev' and activity_id='$aid' order by id");
				if($row1 = mysql_fetch_assoc($result1)) {
					$row['prevstart'] = $row1['start'];
					$row['prevfinish'] = $row1['finish'];
				} else {
					$row['prevstart'] = "";
					$row['prevfinish'] = "";	
				}
			} else {
				$row['prevstart'] = "";
				$row['prevfinish'] = "";
			}
			array_push($ret, $row);
		}
	}
	
	echo json_encode($ret);
?>
<?php

	include('./config.php');

	

	$pid = $_REQUEST["pid"];

	$tbname = $_REQUEST["tbname"];
	$value = $_REQUEST["value"];
	$desc = $_REQUEST["desc"];
	$date = $_REQUEST["date"];

	$query = "insert into tbl_".$tbname." values(null, '$pid', '$value', '', '$desc', '$date')";


	if ( mysql_query($query) )

	{
		$query = "select * from tbl_".$tbname." where project_id='$pid' and `value`='$value'";
		$result = mysql_query($query);
		$row = mysql_fetch_assoc($result);
		$ssid = $row['id'];

		$query = "select sid from tbl_activity where pid='$pid' group by sid";
		$result = mysql_query($query);
		$count = mysql_num_rows($result);
		if($count > 0) {
			$row = mysql_fetch_assoc($result);
			$sid = '0';//$row['sid'];
			$query = "select * from tbl_activity where pid='$pid' and sid='$sid'";
			$result = mysql_query($query);
			while($row = mysql_fetch_assoc($result)) {
				$query = "insert into tbl_activity value(null";
				$query .= ",'" . $row['activity_id'] . "'";
				$query .= ",'" . $row['activity_name'] . "'";
				$query .= ",'" . $row['duration'] . "'";
				$query .= ",'" . $row['start'] . "'";
				$query .= ",'" . $row['finish'] . "'";
				$query .= ",'" . $row['size'] . "'";
				$query .= ",'" . $row['color'] . "'";
				$query .= ",'" . $row['code'] . "'";
				$query .= ",'" . $row['location'] . "'";
				$query .= ",'" . $row['priority'] . "'";
				$query .= ",'" . $row['url'] . "'";
				$query .= ",'" . $row['note'] . "'";
				$query .= ",'" . $pid . "'";
				$query .= ",'" . $ssid . "'";
				$query .= ")";
				mysql_query($query);
			}
		}


		$json_data = array("success"=>"1", "detail"=>"");

		echo json_encode($json_data);

	}

	else

	{

		$json_data = array("success"=>"0", "detail"=>"An unknown error occured", "query"=>$query);

		echo json_encode($json_data);

	}

?>
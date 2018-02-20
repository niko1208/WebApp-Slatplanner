<?php
	include('./config.php');
	
	$pid = $_REQUEST['pid'];
	$data = $_REQUEST['data'];
	$data = explode(",", $data); 

	$query = "delete from tbl_meeting where pid='$pid'";
	mysql_query($query);

	$num = 3;
	for($i=0; $i<count($data)/$num; $i++) {
		$str = "";
		for($j=1; $j<$num; $j++) {
			$str .= ", '" . $data[$i*$num+$j] . "'";
		}
		$query = "insert into tbl_meeting values('". $data[$i*$num] . "'" . $str . ", '$pid')";
		mysql_query($query);
	}

	$json_data = array("success"=>"1", "detail"=>$data);
	echo json_encode($json_data);
?>
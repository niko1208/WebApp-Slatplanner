<?php

	include('./config.php');

	

	$pid = $_REQUEST["pid"];

	$tbname = $_REQUEST["tbname"];
	$data = $_REQUEST["data"];
	$semail = $_REQUEST["semail"];

	
	$query = "delete from tbl_".$tbname." where project_id='$pid'";
	mysql_query($query);
	$data = explode(",", $data); 
	$num = 2;
	if($tbname == 'snapshot') $num = 4;
	if($tbname == 'calendar') $num = 4;
	if($tbname == 'responsible') $semail  = explode(",", $semail); 
	for($i=0; $i<count($data)/$num; $i++) {
		$str = "";
		for($j=0; $j<$num; $j++) {
			$str .= ", '" . $data[$i*$num+$j] . "'";
		}
		$assign = ", ''";
		if($tbname == 'responsible') {
			$email = $semail[$i];
			$email = str_replace(":", ",", $email);
			$assign = ", '" . $email . "'";
		}
		if($tbname == 'responsible')
			$query = "insert into tbl_" . $tbname . " values('$pid' " . $str . ", null " . $assign . ")";
		else if($tbname == 'snapshot')
			$query = "insert into tbl_" . $tbname . " values(null, '$pid' " . $str . ")";
		else if($tbname == 'calendar')
			$query = "insert into tbl_" . $tbname . " values('$pid' " . $str . ", null)";
		else
			$query = "insert into tbl_" . $tbname . " values('$pid' " . $str . ", null)";
		mysql_query($query);
	}

	$json_data = array("success"=>"1", "detail"=>$query);

	echo json_encode($json_data);


?>
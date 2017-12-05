<?php
	include('./config.php');
	
	$data = $_REQUEST['data'];
	$pid = $_REQUEST['pid'];
	$sid = $_REQUEST['sid'];
	if(!isset($sid)) $sid = '0';
	
	mysql_query("create table tbl_activity_tracking(id int auto_increment, aid varchar(200), `desc` varchar(200), resp varchar(200), start varchar(200), finish varchar(200), done varchar(200), pstart varchar(200), pfinish varchar(200), reason varchar(200), pid varchar(200), sid varchar(200), primary key(id))");
	$data = explode(",", $data); 
	$query = "delete from tbl_activity_tracking where pid='$pid' and sid='$sid'";
	mysql_query($query);

	for($i=0; $i<count($data)/9; $i++) {
		$str = "";
		for($j=0; $j<9; $j++) {
			$str .= ", '".$data[$i*9+$j]."'";
		}
		$query = "insert into tbl_activity_tracking values('null' ". $str .  ", '$pid', '$sid')";	
		mysql_query($query);
	}
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
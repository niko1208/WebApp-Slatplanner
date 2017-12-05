<?php
	include('./config.php');
	
	$data = $_REQUEST['data'];
	$pid = $_REQUEST['pid'];
	
	$data = explode(",", $data); 
	$query = "delete from tbl_activity_constraint where pid='$pid'";
	mysql_query($query);

	for($i=0; $i<count($data)/8; $i++) {
		$str = "";
		for($j=0; $j<8; $j++) {
			$str .= ", '".$data[$i*8+$j]."'";
		}
		$query = "insert into tbl_activity_constraint values('null', '$pid' ". $str .  ")";	
		mysql_query($query);
	}
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);
?>
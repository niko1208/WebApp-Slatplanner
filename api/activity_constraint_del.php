<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];
	$data = $_REQUEST['data'];

	$data = explode(",", $data);  
	for($i=0; $i<count($data); $i++) {
		$query = "delete from tbl_activity_constraint where id='" . $data[$i] . "'";	
		mysql_query($query);
	}
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data); 
?>
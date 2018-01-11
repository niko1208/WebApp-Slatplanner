<?php
	include('./config.php');
	
	$data = $_REQUEST['data'];
	$pid = $_REQUEST['pid'];
	$sid = $_REQUEST['sid'];
	if(!isset($sid)) $sid = '0';
	
	$data = explode(",", $data); 
	$query = "delete from tbl_activity where pid='$pid' and sid='$sid'";
	mysql_query($query);

	$num = 13; //after 13=calendar
	for($i=0; $i<count($data)/$num; $i++) {
		$str = "";
		for($j=0; $j<$num; $j++) {
			$str .= ", '".$data[$i*$num+$j]."'";
		}
		$query = "insert into tbl_activity(id, pid, sid, activity_id, activity_name, duration, start, finish, size, color, code, location, priority, url, note, calendar) values('null', '$pid', '$sid' " . $str . ")";	
		mysql_query($query);
	}
	$json_data = array("success"=>"1", "detail"=>$query);
	echo json_encode($json_data);

    //ALTER TABLE `db_slat`.`tbl_activity` ADD COLUMN `calendar` VARCHAR(255) NULL AFTER `sid`, ADD COLUMN `f14` VARCHAR(255) NULL AFTER `calendar`, ADD COLUMN `f15` VARCHAR(255) NULL AFTER `f14`, ADD COLUMN `f16` VARCHAR(255) NULL AFTER `f15`, ADD COLUMN `f17` VARCHAR(255) NULL AFTER `f16`, ADD COLUMN `f18` VARCHAR(255) NULL AFTER `f17`, ADD COLUMN `f19` VARCHAR(255) NULL AFTER `f18`, ADD COLUMN `f20` VARCHAR(255) NULL AFTER `f19`, ADD COLUMN `f21` VARCHAR(255) NULL AFTER `f20`, ADD COLUMN `f22` VARCHAR(255) NULL AFTER `f21`, ADD COLUMN `f23` VARCHAR(255) NULL AFTER `f22`, ADD COLUMN `f24` VARCHAR(255) NULL AFTER `f23`;

	//alter table tbl_activity MODIFY pid int AFTER id
	//alter table tbl_activity MODIFY sid int AFTER pid
?>
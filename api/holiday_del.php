<?php
	include('./config.php');
        $pid   = $_REQUEST["pid"];
        $holiday   = $_REQUEST["holiday"];
	$result = mysql_query("delete from tbl_holiday where project_id=" . $pid . " AND holiday='" . $holiday. "'");
	echo json_encode($result);
?>
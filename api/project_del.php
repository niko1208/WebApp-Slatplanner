<?php
	include('./config.php');
        $pid   = $_REQUEST["pid"];
	$result = mysql_query("delete from tbl_project where id=" . $pid);
	echo json_encode($result);
?>
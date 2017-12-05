<?php

	include('./config.php');

    $pid   = $_REQUEST["pid"];

        
	$tbname = $_REQUEST["tbname"];
	$value = $_REQUEST["value"];

	$result = mysql_query("delete from tbl_".$tbname." where project_id=" . $pid . " AND value='" . $value. "'");

	echo json_encode($result);

?>
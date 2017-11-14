<?php
	$host = "localhost";
	$user = "root";
	$pass = "";
	$db = "db_slat";
/*
	$host = "localhost";
	$user = "slatplan_slat";
	$pass = "slat123";
	$db = "slatplan_slat";
*/
	$link = mysql_connect($host, $user, $pass) or die('Mysql connection failed.');
	mysql_select_db($db, $link);
?>
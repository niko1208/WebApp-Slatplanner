<?php

	session_start();

	$_SESSION["uname"] = "";

	$_SESSION["uemail"] = "";

	$_SESSION["ucompany"] = "";

	echo "<script>location.href = './';</script>";
?>
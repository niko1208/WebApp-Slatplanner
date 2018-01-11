<?php

session_start(); 
?>

<!DOCTYPE html>



<html lang="en"><head>



    <meta charset="utf-8">


    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">


    <meta name="description" content="">


    <meta name="author" content="">


    <title>SlatPlanner</title>


    <link rel="stylesheet" href="libs/css/bootstrap.css">


    <link rel="stylesheet" href="libs/css/bootstrap-switch.css">


    <link rel="stylesheet" href="libs/css/font-awesome.css">


    <link rel="stylesheet" href="libs/css/bootstrap-table.css">


    <link rel="stylesheet" href="libs/css/bootstrap-datetimepicker.min.css">


    <link rel="stylesheet" href="libs/css/jquery-ui.css">

    <link rel="stylesheet" href="libs/css/jquery-ui.multidatespicker.css">


    <link rel="stylesheet" href="libs/css/ie10-viewport-bug-workaround.css">

    
    <link rel="stylesheet" href="libs/css/spectrum.css">

    <link rel="stylesheet" href="libs/css/jquery.stickytable.min.css">

    <link rel="stylesheet" href="css/index.css">



</head>



<body>

<div class="wrapper">

    <div class="text-center div_logo" >

        <a href="index.php"><img src="images/logo.png" class="logo" /></a>

        <small>digitizing the plan without digitizing the process</small>

    </div>



    <header id='header' class='c-header'>

        <nav class="c-navigation">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top_bar" aria-expanded="false"> 

                <span class="bb">menu</span>



            </button>

            <ul class="nav navbar-nav collapse navbar-collapse" id='top_bar'>

                <li><a href="index.php" id='menu-item-home' class='menu-item menu-item-sel'>home</a></li> 

                <li><a href="info.php" id='menu-item-about' class='menu-item'>info</a></li> 

                <li><a href="products.php" id='menu-item-product' class='menu-item'>products</a></li> 

                <li><a href="contact.php" id='menu-item-buy' class='menu-item'>contact</a></li>

                <li><a href="projects.php" id='menu-item-contact' class='menu-item'>projects</a></li> 

                <li>
                <?php
                if(isset($_SESSION["uname"]) && $_SESSION["uname"] != "") {
                ?>
                    <a href="signout.php" id='menu-item-contact' class='menu-item'>SignOut</a>
                <?php
                } else {
                ?>
                    <a href="signin.php" id='menu-item-contact' class='menu-item'>create account/sign in</a>
                <?php
                } 
                ?>
                </li> 

              </ul>

        </nav>

    </header>


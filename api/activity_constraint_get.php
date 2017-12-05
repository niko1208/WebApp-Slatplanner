<?php
	include('./config.php');
	$pid = $_REQUEST['pid'];
   $type = $_REQUEST['type'];
   $driving = $_REQUEST['driving'];
	mysql_query("CREATE TABLE `tbl_activity_constraint` (                 
                           `id` INT(11) NOT NULL AUTO_INCREMENT,                  
                           `pid` INT(11) DEFAULT NULL,                            
                           `type` VARCHAR(250) DEFAULT NULL,                      
                           `actid` VARCHAR(250) DEFAULT NULL,                     
                           `desc` VARCHAR(250) DEFAULT NULL,                      
                           `start` VARCHAR(250) DEFAULT NULL,                     
                           `finish` VARCHAR(250) DEFAULT NULL,                    
                           `resp` VARCHAR(250) DEFAULT NULL,                      
                           `driving` VARCHAR(250) DEFAULT NULL,                   
                           `done` VARCHAR(250) DEFAULT NULL,                      
                           PRIMARY KEY  (`id`)                                    
                         ) ");
   $where = "";
   if(isset($driving) && $driving != "") {
      $where = " and driving='$driving'";
   }
   if($type == "") {
	  $result = mysql_query("select * from tbl_activity_constraint where pid='$pid' " . $where . " order by id");
   } else {
      $result = mysql_query("select * from tbl_activity_constraint where pid='$pid' and `type`='$type' " . $where . " order by id");
   }
	$ret = array();
	while($row = mysql_fetch_assoc($result)) {
      $driving = $row['driving'];
      $row['drivingstart'] = "";
      $result1 = mysql_query("select * from tbl_activity where pid='$pid' and activity_id='$driving' order by id");
      if($row1 = mysql_fetch_assoc($result1)) {
         $row['drivingstart'] = $row1['start'];
      }
		array_push($ret, $row);
	}
	echo json_encode($ret);
?>
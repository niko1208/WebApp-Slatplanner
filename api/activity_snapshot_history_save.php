<?php
	include('./config.php');
	$data = $_REQUEST['data'];
	mysql_query("CREATE TABLE `tbl_activity_snapshot_history` (                 
                           `id` INT(11) NOT NULL AUTO_INCREMENT,                  
                           `pid` INT(11) DEFAULT NULL,                            
                           `sid` VARCHAR(250) DEFAULT NULL,                      
                           `aid` VARCHAR(250) DEFAULT NULL,                     
                           `reason` VARCHAR(250) DEFAULT NULL,                    
                           PRIMARY KEY  (`id`)                                    
                         ) ");
   $data = explode(",", $data); 
   
   $ret = array();
   for($i=0; $i<count($data)/4; $i++) {
      $str = "";
      for($j=0; $j<4; $j++) {
         $str .= ", '".$data[$i*4+$j]."'";
      } 
      $pid = $data[$i*4+0];
      $sid = $data[$i*4+1];
      $aid = $data[$i*4+2];
      
      $query = "delete from tbl_activity_snapshot_history where pid='$pid' and sid='$sid' and aid='$aid'";
      mysql_query($query);$ret[$i] = $query;
      $query = "insert into tbl_activity_snapshot_history values('null' ". $str .  ")"; 
      mysql_query($query);
   }
   $json_data = array("success"=>"1", "detail"=>$ret);
   echo json_encode($json_data);
?>
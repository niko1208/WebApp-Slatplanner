<?php

session_start(); 

if(!isset($_SESSION["uname"]) || $_SESSION["uname"] == "") {

    echo "<script>location.href = './signin.php';</script>";

}

?>
<?php



include("header.php");



?>



<link href="libs/css/jquery-ui.css" rel="stylesheet">



<div class="section" id="section_projects">

    <h2 class='text-center'>Projects</h2>

    

    <div class="td_wrapper">

        <div id="add_project">Add Project</div>

        <div id="delete_project">Delete Project</div>

    </div>

    <table class="table" id="table_project">

        

    </table>

    

    <div class="div_form">

        <form>

            <input type="text" class="form-control" id="pname" placeholder="Project Name"></input>

        

            <select class="form-control" id='day' placeholder="Unit of Time">

                <option value='days'>Days</option>

                <option value='days'>Days</option>

            </select>



            <div class="div_platform">

                <div class="platform_item">

                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>

                    <select class="form-control platform" placeholder="Platform">

                        <option value=''>platform</option>

                        <option value='0'>email</option>

                        <option value='1'>slatplanner.com</option>

                        <option value='2'>Procore</option>

                    </select>

                    <div class="delete_platform">Delete this platform</div>

                </div>

            </div>

            <div class="add_platform">Add new platform</div>



            <center><br/>

                <button type="button" class="btn btn-success" id='bt_psave' >Save</button>

            </center>

        </form>

    </div>

</div>



<!-- ============================================================================== -->

<div class="overlay" id="alert_delete_project">

    <div class="overlay_black"></div>

    <div class="alert">

        <div class="alert_title">Delete this Project?</div>

        <div class="alert_message"></div>

        <div class="buttons">

            <div class='bt_alert_yes'>Yes</div>

            <div class='bt_alert_cancel'>No</div>

        </div>

    </div>

</div>

<div class="overlay" id="alert_delete_activity">

    <div class="overlay_black"></div>

    <div class="alert">

        <div class="alert_title">Delete this Activity?</div>

        <div class="alert_message"></div>

        <div class="buttons">

            <div class='bt_alert_yes'>Yes</div>

            <div class='bt_alert_cancel'>No</div>

        </div>

    </div>

</div>



<!-- ============================================================================== -->

<div class="section" id="section_activity">

    <div class="td_wrapper">

        <div style="float:left" id="go_profile">< Go Back</div>

        <center>

            <div id='act_setting' class='list '>Settings</div>

            <div id='act_list' class='list sel'>Activity List</div>

            <div id='act_detail' class='list '>Activity Detail</div>

            <div id='act_tracking' class='list '>Activity Tracking</div>
            
            <div id='act_constraints' class='list '>Constraints</div>

            <div id='chart' class='list'>Gantt Chart</div>

        </center>

        <div class="clear"></div>

    </div>



    <div class="acont" id="section_activity_setting">

        <div class="td_wrapper">

            <div class="row">
                <div class="col col-sm-2"></div>
                <div class="col col-sm-4">Value(s)</div>
                <div class="col col-sm-2">Color(s)</div>
                <div class="col col-sm-4">User(s)</div>
            </div>

            <div class="row">
                <div class="col col-sm-8">
                    <div class="row" id="activity_setting_responsible">
                        <div class="col col-sm-3">Responsible</div>
                        <div class="col col-sm-5">
                            <div class="div_combo">
                                <select class="form-control value"></select>
                            </div>
                            <div style='float:left;margin-left:10px;' tbname="responsible">
                                <button type="button" class="btn btn-success bt_svadd">Add</button>
                                <button type="button" class="btn btn-danger bt_svremove">Remove</button>
                            </div>
                        </div>
                        <div class="col col-sm-4">
                            <input type='text' class="color_text" readonly style="float: left;" />
                            <input type='text' class="color" id="color1" style="float: left;" />
                        </div>
                    </div>

                    <div class="row" id="activity_setting_location">
                        <div class="col col-sm-3">Location</div>
                        <div class="col col-sm-5">
                            <div class="div_combo">
                                <select class="form-control value"></select>
                            </div>
                            <div style='float:left;margin-left:10px;' tbname="location">
                                <button type="button" class="btn btn-success bt_svadd">Add</button>
                                <button type="button" class="btn btn-danger bt_svremove">Remove</button>
                            </div>
                        </div>
                        <div class="col col-sm-4">
                            <input type='text' class="color_text" readonly style="float: left;" />
                            <input type='text' class="color" id="color2" style="float: left;" />
                        </div>
                    </div>

                    <div class="row" id="activity_setting_priority">
                        <div class="col col-sm-3">Priority</div>
                        <div class="col col-sm-5">
                            <div class="div_combo">
                                <select class="form-control value"></select>
                            </div>
                            <div style='float:left;margin-left:10px;' tbname="priority">
                                <button type="button" class="btn btn-success bt_svadd">Add</button>
                                <button type="button" class="btn btn-danger bt_svremove">Remove</button>
                            </div>
                        </div>
                        <div class="col col-sm-4">
                            <input type='text' class="color_text" readonly style="float: left;" />
                            <input type='text' class="color" id="color3" style="float: left;" />
                        </div>
                    </div>

                    <div class="row" id="activity_setting_constraint">
                        <div class="col col-sm-3">Constraints</div>
                        <div class="col col-sm-5">
                            <div class="div_combo">
                                <select class="form-control value"></select>
                            </div>  
                            <div style='float:left;margin-left:10px;' tbname="constraint">
                                <button type="button" class="btn btn-success bt_svadd">Add</button>
                                <button type="button" class="btn btn-danger bt_svremove">Remove</button>
                            </div>
                        </div>
                        <div class="col col-sm-4">
                            <input type='text' class="color_text" readonly style="float: left;" />
                            <input type='text' class="color" id="color4" style="float: left;" />
                        </div>
                    </div>

                    <div class="row" id="activity_setting_delay">
                        <div class="col col-sm-3">Delay Reason</div>
                        <div class="col col-sm-5">
                            <div class="div_combo">
                                <select class="form-control value"></select>
                            </div>
                            <div style='float:left;margin-left:10px;' tbname='delay'>
                                <button type="button" class="btn btn-success bt_svadd">Add</button>
                                <button type="button" class="btn btn-danger bt_svremove">Remove</button>
                            </div>
                        </div>
                        <div class="col col-sm-4">
                            <input type='text' class="color_text" readonly style="float: left;" />
                            <input type='text' class="color" id="color5" style="float: left;" />
                        </div>
                    </div>
                </div>

                <div class="col col-sm-4">
                    <div class="div_user" style="max-width:250px; float: left;">
                        <select class="form-control user"></select>
                    </div>
                    <div style='float:left;margin-left:10px;'>
                        <button type="button" class="btn btn-success bt_suadd">Add</button>
                        <button type="button" class="btn btn-danger bt_suremove">Remove</button>
                    </div>
                    <div class="userlist">
                        
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div class="acont" id="section_activity_list">

        <div class="td_wrapper">

            <div class="row">

                <div class="col col-sm-4">
                    <div>Snapshots</div>
                    <div>
                        <div class="div_snapshot" style="max-width:150px; float: left; margin-right: 25px;">
                            <select class="form-control snapshot" id="snapshot"></select>
                        </div>
                        <div style='float:left;margin-left:10px;'>
                            <button type="button" class="btn btn-success bt_ssadd">Add</button>
                            <button type="button" class="btn btn-danger bt_ssremove">Remove</button>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-3">
                    <div>Snapshot Description</div>
                    <div>
                        <textarea class="form-control" id="snapshot_desc" rows='1'></textarea>
                    </div>
                </div>
                <div class="col col-sm-5">
                    <div>Creation Date</div>
                    <div>
                        <input type='text' class="form-control" id="snapshot_date" />
                    </div>
                </div>
            </div>
            <br/>

            <div class="row">

                <div class="col col-sm-2">

                    <div>Filter</div>

                    <select class="form-control" id='filter'>

                    </select>

                </div>

                <div class="col col-sm-2">

                    <div>Work Week</div>

                    <select class="form-control" id='work_week'>

                        <option value='2'>5 Days</option>

                        <option value='1'>6 Days</option>

                        <option value='0'>7 Days</option>

                    </select>

                </div>

                <div class="col col-sm-3">

                    <div>Holidays</div>

                    <div style="float:left;width: 150px;position:relative;">

                        <select class="form-control" id='holidays' style="width:100%;">

                        </select>

                    </div>

                    <div style='float:left;margin-left:10px;'>

                        <button type="button" class="btn btn-success" id='bt_hadd'>Add</button>
                        <button type="button" class="btn btn-danger" id='bt_hremove'>Remove</button>
                        
                    </div>

                </div>

                

                <div class="col col-sm-3" style='text-align: right;'>
                    <button type="button" class="btn btn-success" id='bt_arefresh'>Refresh</button>

                    <button type="button" class="btn btn-success" id='bt_asave'>Save</button>

                    <button type="button" class="btn btn-danger" id='bt_adelete'>Delete</button>

                    <button type="button" class="btn btn-danger" id='bt_aclear'>Clear</button>

                </div>

                <div class="col col-sm-2">

                    <div>Paste here...</div>

                    <textarea id='paste'></textarea>

                </div>

            </div>

        </div>

        <br/>

        <div class="td_wrapper">

            <table class='table stable' id="table_activity">

                <thead>

                    <tr style="font-weight: bold; color: #333;">

                        <td style="width:50px;text-align: center;height: 42px;" class="selectall">
                            <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>

                            <i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                        </td>

                        <td>Activity ID</td>

                        <td>Activity Name</td>

                        <td>Duration</td>

                        <td>Start</td>

                        <td>Finish</td>

                        <td>Crew Size</td>

                        <td>Responsible</td>

                        <td>Location</td>

                        <td>Priority</td>

                        <td>URL</td>

                        <td>Notes</td>

                    </tr>

                </thead>

                <tbody>



                </tbody>

            </table>

            <div>

                <button type="button" class="btn btn-success" id='bt_aadd'>Add</button>

            </div>

            <br/>

            <div style="float:left;">

                <div style="float:left;">

                    <div>Print</div>

                    <select class="form-control" id='print_type'>

                        <option value='0'>Activities</option>

                        <option value='1'>Dates(range)</option>

                    </select>

                    

                </div>

                <div class="div_from_date" style="float:left;margin-left:10px;">

                    <div>From</div>

                    <input type="text" id="from_date"/>

                </div>

                <div class="div_to_date" style="margin-left:10px;">

                    <div>To</div>

                    <input type="text" id="to_date"/>

                </div>

            </div>

            

            <div style="float:left;margin-left:30px;">

                <div>Page Mode</div>

                <select class="form-control" id='print_mode' style="width:150px;">

                    <option value='A'>Slat Notes</option>

                    <option value='B'>Sticky Notes</option>

                </select>

            </div>

            <div style="float:left;margin-left: 30px;margin-top: 20px;">
                <button type="button" class="btn btn-gray" id='bt_aexport'>Print</button>
            </div>

            

            <br/>

            <br/>

            <br/>

            <center>

                

            </center>

        </div>

        <form id='form' method="post" action="api/activity_export.php">

            <input type="hidden" name="data" id="data" value='' />

        </form>

    </div>



    <div class="acont" id="section_activity_chart">

        <div class="td_wrapper">

            <div style='float:left;'>Filter</div>

            <select class="form-control" id='filter_chart'>

            </select>

            <div id="gantt"></div>

            <div id="div_histogram">

                <div id="histogram"></div>

            </div>

            <div class="div_his_bottom">

                <div class="btn_style1" id="his_zoomIn"><div style="margin-top: -8px;margin-left: 4px;">+</div></div>

                <div class="btn_style1" id="his_zoomOut"><div style="margin-top: -10px;margin-left: 4px;">-</div></div>

                <div id="mark"></div>

            </div>

        </div>

    </div>

    

</div>



<div class="overlay" id="dlg_export">

    <div class="overlay_black"></div>

    <div class="alert">

        <div class="cont">

            

        </div>

        <div class="cont_hidden">

            

        </div>

        <div class="buttons">

            <div id='bt_qrcode_print'>Print</div>

            <div class='bt_alert_cancel'>Close</div>

        </div>

    </div>

</div>



<br/>

<br/>

<br/>



<?php



include("footer.php");



?>

<link href="css/combo.css" rel="stylesheet">

<script src="js/variables.js"></script>

<script src="libs/js/jquery-ui.js"></script>

<script src="libs/js/printpreview.js"></script>

<script src="js/combo.js"></script>

<script src="libs/js/highcharts.js"></script>

<script src="libs/js/exporting.js"></script>

<script src="js/projects.js"></script>
<script src="js/activity_setting.js"></script>
<script src="js/activity_list.js"></script>
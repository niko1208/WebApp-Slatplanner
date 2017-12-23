<?php

session_start(); 

if(!isset($_SESSION["uname"]) || $_SESSION["uname"] == "") {

    echo "<script>location.href = './signin.php';</script>";

}

?>
<?php



include("header.php");



?>


<input type='hidden' id='myemail' value='<?php echo $_SESSION["uemail"];?>'/>
<link href="libs/css/jquery-ui.css" rel="stylesheet">

<div class='overlay' id='loading'>
    <div class="overlay_black"></div>
    <div class="alert">
        Loading...
    </div>
</div>

<div class="section" id="section_projects">

    <h2 class='text-center'>Projects</h2>

    

    <div class="td_wrapper">

        <div id="add_project1">Add Project</div>

        <div id="delete_project">Delete Project</div>

    </div>

    <table class="table" id="table_project">

        

    </table>

    <div class="td_wrapper">

        <div id="add_project"><i class="fa fa-plus-circle" aria-hidden="true"></i></div>

    </div>
    

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



        </form>
        <center><br/>

            <button type="button" class="btn btn-success" id='bt_psave' >Save</button>

        </center>


    </div>

</div>



<!-- ============================================================================== -->

<div class="overlay" id="alert_delete_setting">

    <div class="overlay_black"></div>

    <div class="alert">

        <div class="alert_title">Delete this Setting?</div>

        <div class="alert_message"></div>

        <div class="buttons">

            <div class='bt_alert_yes'>Yes</div>

            <div class='bt_alert_cancel'>No</div>

        </div>

    </div>

</div>

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
    <center><h3 id='ppname'></h3></center>
    <div class="td_wrapper">

        <div style="float:left" id="go_profile">< Go Back</div>

        <center>

            <div id='act_setting' class='list '>Settings</div>

            <div id='act_list' class='list sel'>Activity List</div>

            <div id='act_detail' class='list '>Activity Detail</div>

            <div id='act_tracking' class='list '>Activity Tracking</div>
            
            <div id='act_constraints' class='list '>Constraints</div>

            <div id='chart' class='list'>Visuals</div>

        </center>

        <div class="clear"></div>

    </div>



    <div class="acont" id="section_activity_setting">

        <div class="td_wrapper">
            <div class="row">
                <div class="col col-sm-3">
                    <div class='setting_item sel' id='setting_item_user'>User Privilege</div>
                    <div class='setting_item' id='setting_item_resp'>Responsible</div>
                    <div class='setting_item' id='setting_item_location'>Locations</div>
                    <div class='setting_item' id='setting_item_priority'>Priorities</div>
                    <div class='setting_item' id='setting_item_constraint'>Contraints</div>
                    <div class='setting_item' id='setting_item_delay'>Delay Reasons</div>
                </div>
                <div class="col col-sm-9">
                    <div class='setting_tab' id='setting_user'>
                        <div class="setting_tab_title">Edit All Tasks</div>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <td width="50"></td>
                                    <td>User</td>
                                    <td>Email</td>
                                    <td>Permissions</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4"><i class="fa fa-plus-circle saddcircle" aria-hidden="true"></i></td>
                                    
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class='setting_tab' id='setting_resp'>
                        <div class="setting_tab_title">Responsible</div>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <td width="50"></td>
                                    <td>Value</td>
                                    <td>Color</td>
                                    <td>Assigned Users</td>
                                    <td width="50"></td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="1"><i class="fa fa-plus-circle saddcircle" aria-hidden="true"></i></td>
                                    <td colspan="4">
                                        <button type="button" class="btn btn-success" id='bt_setting_resp_save'>Save</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div class='overlay' id='div_assign_user_dlg'>
                            <div class="overlay_black"></div>
                            <div class='overlay_content'>
                                <div class='div_cont'></div>
                                <div style='text-align: center;'>
                                    <button type="button" class="btn btn-success" id='bt_assign_user_ok'>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='setting_tab' id='setting_location'>
                        <div class="setting_tab_title">Location</div>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <td width="50"></td>
                                    <td>Value</td>
                                    <td>Color</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="1"><i class="fa fa-plus-circle saddcircle" aria-hidden="true"></i></td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-success" id='bt_setting_location_save'>Save</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class='setting_tab' id='setting_priority'>
                        <div class="setting_tab_title">Priority</div>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <td width="50"></td>
                                    <td>Value</td>
                                    <td>Color</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="1"><i class="fa fa-plus-circle saddcircle" aria-hidden="true"></i></td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-success" id='bt_setting_priority_save'>Save</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class='setting_tab' id='setting_constraint'>
                        <div class="setting_tab_title">Constraint</div>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <td width="50"></td>
                                    <td>Value</td>
                                    <td>Color</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="1"><i class="fa fa-plus-circle saddcircle" aria-hidden="true"></i></td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-success" id='bt_setting_constraint_save'>Save</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class='setting_tab' id='setting_delay'>
                        <div class="setting_tab_title">Delay Reason</div>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <td width="50"></td>
                                    <td>Value</td>
                                    <td>Color</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="1"><i class="fa fa-plus-circle saddcircle" aria-hidden="true"></i></td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-success" id='bt_setting_delay_save'>Save</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--
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
        -->
    </div>

    <div class="acont" id="section_activity_constraint">
        <div class="td_wrapper">
            <div class="row">
                <div class="col col-sm-3">
                    <div>
                        <div class="div_constraint" style="max-width:150px; float: left; margin-right: 25px;">
                            <select class="form-control snapshot" id="contraint"></select>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-5">
                    <button type="button" class="btn btn-success bt_acadd">Save</button>
                </div>
                <div class="col col-sm-4">
                    <div class="div_constraint" style="max-width:150px; float: left; margin-left: 65px;">
                        <select class="form-control snapshot" id="contraint_resp"></select>
                    </div>
                    <div class="div_constraint" style="max-width:150px; float: right; margin-left: 25px;">
                        <div class="form-control snapshot selcheck" id="contraint_done">
                            <i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                            <i class="fa fa-check-square-o i-checked" aria-hidden="true" style="display: none"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
            </div>
        </div>
        <div class="td_wrapper">
            <table class='table stable' id="table_activity_constraint">
                <thead>
                    <tr style="font-weight: bold; color: #333;">
                        <td></td>
                        <td>Type</td>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Responsible</td>
                        <td>Drivinig</td>
                        <td>Done?</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr class='tr'>
                        <td></td>
                        <td class='atype'>
                            <select class='form-control act_const_type' type='text' id='act_const_type'></select>
                        </td>
                        <td><input class="form-control act_const_id" id='act_const_id' type="text" value=''/></td>
                        <td class='acode'><input class="form-control act_desc" id='act_desc' type="text" value=''/></td>
                        <td class='astart'><input class="form-control act_start" id='act_start' type="text" value=''/></td>
                        <td><input class="form-control act_finish" id='act_finish' type="text" value=''/></td>
                        <td>
                            <select class='form-control act_resp' type='text' id='act_resp'></select>
                        </td>
                        <td><input class="form-control act_driving" id='act_driving' type="text" value=''/></td>
                        <td class='selcheck' id="selcheck">
                            <i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                            <i class="fa fa-check-square-o i-checked" aria-hidden="true" style="display: none"></i>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div>
                <button type="button" class="btn btn-success bt_ccadd">Add</button>
                <button type="button" class="btn btn-danger bt_ccremove">Remove</button>
            </div>
        </div>
    </div>

    <div class="acont" id="section_activity_tracking">
        <div class="td_wrapper">

            <div class="row">

                <div class="col col-sm-3">
                    <div>Snapshots</div>
                    <div>
                        <div class="div_snapshot1" style="max-width:150px; float: left; margin-right: 25px;">
                            <select class="form-control snapshot" id="snapshot_tracking"></select>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-3">
                    <div>Snapshot Description</div>
                    <div>
                        <textarea class="form-control" id="snapshot_desc_tracking" rows='1'></textarea>
                    </div>
                </div>
                <div class="col col-sm-5">
                    <button type="button" class="btn btn-success bt_atadd" style='margin-top: 20px;'>Save</button>
                </div>
            </div>
            <div class="row">
            </div>
        </div>
        <div class="td_wrapper">
            <table class='table stable' id="table_activity_tracking">
                <thead>
                    <tr style="font-weight: bold; color: #333;">
                        <td>ID</td>
                        <td>Description</td>
                        <td>Responsible</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Done?</td>
                        <td>Prev Start</td>
                        <td>Prev Finish</td>
                        <td>Delay Reason</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
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
                        <input type='text' class="form-control" id="snapshot_date" readonly="true" />
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

                        <option value='2'>Duration</option>

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
            <div style='clear:both'></div>
            <div id='duration_print_option'>
                <table class='table'>
                    <thead><tr>
                        <td>Responsible</td>
                        <td>Quantity</td>
                    </tr></thead>
                    <tbody>
                        <tr>
                            <td><span class='respcolor'></span> Todd</td>
                            <td class='dqn'><input class='tt' value="16"></td>
                        </tr>
                    </tbody>
                </table>
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

    <div class="acont" id="section_activity_detail">

        <div class="td_wrapper">
            <div class="row">
                <div class="col col-sm-2">
                    <div>Activity ID</div>
                    <input class="form-control" id='act_detail_id' type='text' />
                </div>
                <div class="col col-sm-4">
                    <div>Activity Name</div>
                    <input class="form-control" id='act_detail_name' type='text' />
                </div>
                <div class="col col-sm-4">
                    <div>&nbsp;</div>
                    <button type="button" class="btn btn-primary" id='bt_view_detail'>View</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-success " id='bt_save_detail'>Save</button>
                </div>
            </div>
            <h3>Information</h3>
            <table class='table stable' id="table_act_detail">
                <thead>
                    <tr>
                        <td>Duration</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Crew Size</td>
                        <td>Responsible</td>
                        <td>Location</td>
                        <td>Priority</td>
                        <td>URL</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input class="form-control" id='act_detail_duration' type='text' /></td>
                        <td><input class="form-control" id='act_detail_start' type='text' /></td>
                        <td><input class="form-control" id='act_detail_finish' type='text' /></td>
                        <td><input class="form-control" id='act_detail_size' type='text' /></td>
                        <td><select class="form-control" id='act_detail_resp' type='text' ></select></td>
                        <td><select class="form-control" id='act_detail_location' type='text' ></select></td>
                        <td><select class="form-control" id='act_detail_priority' type='text' ></select></td>
                        <td><input class="form-control" id='act_detail_url' type='text' /></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <div>Note</div>
                <textarea class="form-control" id='act_detail_note'></textarea>
            </div>
            <h3>Constraints</h3>
            <table class='table stable' id="table_act_detail_const">
                <thead>
                    <tr>
                        <td width='50'></td>
                        <td>Type</td>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Responsible</td>
                        <td>Done</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <select class='form-control act_detail_const_type' type='text' id='act_detail_const_type'></select>
                        </td>
                        <td><input class='form-control act_detail_const_id' type='text' /></td>
                        <td><input class='form-control act_detail_const_desc' type='text' /></td>
                        <td><input class='form-control act_detail_const_start' type='text' /></td>
                        <td><input class='form-control act_detail_const_finish' type='text' /></td>
                        <td><select class='form-control act_detail_const_resp' type='text' ></select></td>
                        <td class="act_detail_const_done selcheck" >
                            <i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                            <i class="fa fa-check-square-o i-checked" aria-hidden="true" style="display: none"></i>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div>
                <button type="button" class="btn btn-success bt_dcadd">Add</button>
                <button type="button" class="btn btn-danger bt_dcremove">Remove</button>
            </div>

            <h3>History</h3>
            <table class='table stable' id="table_act_detail_snap">
                <thead>
                    <tr>
                        <td>Snapshot Date</td>
                        <td>Start</td>
                        <td>Change</td>
                        <td>Finish</td>
                        <td>Change</td>
                        <td>Reason</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>

    </div>  

    <div class="acont cont_chart" id="section_activity_chart_tab">
        <div class="td_wrapper">
            <div class="">
                <center>
                    <div id='chart_gantt' class='list chart_tab sel'>Gantt Chart</div>
                    <div id='chart_plan' class='list chart_tab'>Plan Achievement</div>
                    <div id='chart_reason' class='list chart_tab'>Failure Reasons</div>
                    <div id='chart_curve' class='list chart_tab'>Progress Curve</div>
                </center>
            </div>
            <div>
                <select class="form-control" id="visual_resp"></select>
            </div>
        </div>
        <table id="table_activity_tracking_visual">
            <tbody></tbody>
        </table>
    </div>

    <div class="acont cont_chart" id="section_activity_chart_plan">
        
        <div id="div_chart_plan"></div>
    </div>

    <div class="acont cont_chart" id="section_activity_chart_reason">
        
        <div id="div_chart_reason"></div>
    </div>

    <div class="acont cont_chart" id="section_activity_chart_curve">
        <div style="float: right; padding-right: 50px; margin-top: -40px;width: 300px;">
            <select class="form-control" id="filter_curve_priority" style='float: right;max-width: 150px;'></select>
            <div style='float: right;margin-right: 20px;padding-top: 10px;  '>Priority</div>
        </div>
        <div id="div_chart_curve"></div>
    </div>

    <div class="acont cont_chart" id="section_activity_chart">

        <div class="td_wrapper">
        <!--
            <div style='float:left;'>Filter</div>

            <select class="form-control" id='filter_chart'>

            </select>
-->
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

        <div class="cont" id='print_cont'>

            

        </div>

        <div class="cont_hidden" id='cont_hidden'>

            

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

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/series-label.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<script src="libs/js/exporting.js"></script>

<script src="js/projects.js"></script>
<script src="js/activity_setting.js"></script>
<script src="js/activity_list.js"></script>
<script src="js/activity_detail.js"></script>
<script src="js/activity_tracking.js"></script>
<script src="js/activity_constraint.js"></script>
<script src="js/visual.js"></script>



<style type="text/css">
    #table_activity_tracking_visual{
        display: none;
    }
</style>

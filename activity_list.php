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

            <div id='act_list' class='list sel'>ACTIVITY LIST</div>

            <div id='chart' class='list'>GANTT CHART</div>

        </center>

        <div class="clear"></div>

    </div>

    <div class="acont">

        <div class="td_wrapper">

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

                <div class="col col-sm-4">

                    <div>Holidays</div>

                    <div style="float:left;width: 150px;position:relative;">

                        <select class="form-control" id='holidays' style="width:100%;">

                        </select>

                    </div>

                    <div style='float:left;margin-left:10px;'>

                        <button type="button" class="btn btn-success" id='bt_hadd'>Add</button>

                        <button type="button" class="btn btn-danger" id='bt_hremove'>Remove</button>
                        &nbsp;&nbsp;<button type="button" class="btn btn-success" id='bt_arefresh'>Refresh</button>

                    </div>

                </div>

                

                <div class="col col-sm-2" style='text-align: right;'>

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

                        <td style="width:50px;text-align: center;"></td>

                        <td>Activity ID</td>

                        <td>Activity Name</td>

                        <td>Duration</td>

                        <td>Start</td>

                        <td>Finish</td>

                        <td>Responsible</td>

                        <td>Color</td>

                        <td>Crew Size</td>

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

                        <option value='0'>List View</option>

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

                    <option value='A'>Template A</option>

                    <option value='B'>Template B</option>

                </select>

            </div>

            

            <br/>

            <br/>

            <br/>

            <center>

                <button type="button" class="btn btn-gray" id='bt_aexport'>Export</button>

            </center>

        </div>

        <form id='form' method="post" action="api/activity_export.php">

            <input type="hidden" name="data" id="data" value='' />

        </form>

    </div>



    <div class="section" id="section_activity_chart">

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
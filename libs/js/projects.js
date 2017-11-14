var keydown, ctrl_v=0;

var temp_finish_date;

$(document).ready(function(){

        

	qr_options = {

	    // render method: 'canvas', 'image' or 'div'

	    render: 'canvas',



	    // version range somewhere in 1 .. 40

	    minVersion: 1,

	    maxVersion: 40,



	    // error correction level: 'L', 'M', 'Q' or 'H'

	    ecLevel: 'L',



	    // offset in pixel if drawn onto existing canvas

	    left: 0,

	    top: 0,



	    // size in pixel

	    size: 70,



	    // code color or image element

	    fill: '#000',



	    // background color or image element, null for transparent background

	    background: null,



	    // content

	    text: 'no text',



	    // corner radius relative to module width: 0.0 .. 0.5

	    radius: 0,



	    // quiet zone in modules

	    quiet: 0,



	    // modes

	    // 0: normal

	    // 1: label strip

	    // 2: label box

	    // 3: image strip

	    // 4: image box

	    mode: 0,



	    mSize: 0.1,

	    mPosX: 0.5,

	    mPosY: 0.5,



	    label: 'no label',

	    fontname: 'sans',

	    fontcolor: '#000',



	    image: null

	};

        

        $('#from_date').datepicker({

            inline: true

        });

        

        $('#to_date').datepicker({

            inline: true

        });

        

        $('#print_type').change(function(){

            if ($(this).val() == 0) {

                $('.div_from_date').css('display','none');

                $('.div_to_date').css('display','none');

            } else {

                $('.div_from_date').css('display','block');

                $('.div_to_date').css('display','block');

            }

        });

        



        

        $('#paste').keydown(function(event){

                if (keydown == 17 && event.which == 86)

                {

                    ctrl_v = 1;

                }

                keydown = event.which;

        }).keyup(function(e){

            if (ctrl_v == 1){

                    ctrl_v = 0;

                    var pasted = $(this).val();

                    var rows = pasted.split("\n");

                    var tr_count = $('#table_activity tbody tr').length;

                    var strHtml = "";

                    for(i=0; i<rows.length -1; i++) {

                        strHtml += `<tr class='tr'>

                                        <td class="psetting acheck">

                                            <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>

                                            <i class="fa fa-square-o i-setting" aria-hidden="true"></i>

                                        </td>

                                        <td class='aid'><input class="tt" type="text" value=''/></td>

                                        <td><input class="tt" type="text" value=''/></td>

                                        <td class='aduration'><input class="tt" type="text" value=''/></td>

                                        <td class='astart'><input class="tt" type="text" value=''/></td>

                                        <td><input class="tt" type="text" value=''/></td>

                                        <td class="acode"><input class="tt" type="text" value=''/></td>

                                        <td class="acolor"><input class="tt" type="text" maxlength="7" value=''/></td>

                                        <td><input class="tt" type="text" value=''/></td>

                                        <td><input class="tt" type="text" value=''/></td>

                                        <td><input class="tt" type="text" value=''/></td>

                                    </tr>`;

                    }

                    $('#table_activity tbody').append(strHtml);

                    

                    var tr_obj = $('#table_activity tbody tr:nth(' + tr_count + ')');

                    for(var y in rows) {

                        if (rows[y].length != 0){

                            var cells = rows[y].split("\t");

                            var td_obj = tr_obj.find('td:nth-child(2)');

                            for(var x in cells) {

                                td_obj.find('input').val(cells[x]);

                                td_obj = td_obj.next();

                            }

                            tr_obj = tr_obj.next();

                        }

                    }

                    $(this).val('');

                    

                    trClickEvent();

                    activityEvent();

                    setFinishDate();

                    colorChange();

            }

        });



        $("#filter").change(function(){

                $('#table_activity tbody .tr').removeAttr("style");

                if ($('#filter').val()  == 'All') return;

                $('#table_activity tbody .tr').each(function(){

                    if ($(this).find('.acode input').val() != $('#filter').val()){

                        $(this).css('display', 'none');

                    }

                });

        });

        

        $("#filter_chart").change(function(){

                filter_c = $('#filter_chart').val();

                gantt();

                histogram();

        });

        

        $('#work_week').change(function(){

                setFinishDate();

        });

        

        $('#add_project').click(function(){

		strHtml = `

                            <form>

                                <input type="text" class="form-control" id="pname" placeholder="Project Name"></input>



                                <select class="form-control" id='day' placeholder="Unit of Time">

                                    <option value='days'>Days</option>

                                    <option value='days'>Days</option>

                                </select>



                                <div class="div_platform">

                                    <div class="platform_item">

                                        <i class="fa fa-check-circle-o arrow" aria-hidden="true"></i>

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

                                    <button type="button" class="btn btn-success" id='bt_psave'>Save</button>

                                </center>

                            </form>

                        `;

		$('.div_form').html(strHtml);

		

		$('#bt_psave').attr('pid', '');



		addPlatformEvent();

		changePlatformEvent();

		saveClickEvent();

	});



	$('#bt_aadd').click(function(){

		strHtml = `<tr class='tr'>

		                <td class="psetting acheck">

		                    <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>

		                    <i class="fa fa-square-o i-setting" aria-hidden="true"></i>

		                </td>

		                <td class='aid'><input class="tt" type="text" value=''/></td>

		                <td><input class="tt" type="text" value=''/></td>

		                <td class='aduration'><input class="tt" type="text" value=''/></td>

		                <td class='astart'><input class="tt" type="text" value=''/></td>

		                <td><input class="tt" type="text" value=''/></td>

		                <td class="acode"><input class="tt" type="text" value=''/></td>

		                <td class="acolor"><input class="tt" type="text" maxlength="7" value=''/></td>

		                <td><input class="tt" type="text" value=''/></td>

		                <td><input class="tt" type="text" value=''/></td>

		                <td><input class="tt" type="text" value=''/></td>

		            </tr>`;

		$('#table_activity tbody').append(strHtml);

		trClickEvent();

		activityEvent();

	});

         $('#bt_arefresh').click(function(){
            loadActivity(ppid);
         });

        $('#bt_asave').click(function(){

		sUrl = "api/activity_save.php";

                var form_data = new FormData();  

                data = [];

                $('#table_activity tbody tr').each(function(){

                        item = [];

                        $(this).find('td input').each(function(){

                                item.push($(this).val());

                        });

                        data.push(item);

                });

                form_data.append('data', data);

                form_data.append('pid', $('#bt_asave').attr('pid'));

                $.ajax({

                    type: "POST",

                    url: sUrl,

                    cache: false,

                    processData: false, 

                    contentType: false,

                    data: form_data,

                    success: function(data){

                        colorChange();

                        setFilter();

                    },

                    error: function() {

                    },

                    dataType: 'json'

                });

	});

        

	$('#bt_aclear').click(function(){

		$('#table_activity tbody tr td input').each(function(){

			$(this).val('');

		});

	});



	$('.bt_alert_yes').click(function(){

		hideAlert();

	});

        

	$('.bt_alert_cancel').click(function(){

		hideAlert();

	});



	$('#delete_project').click(function(){

		if($('#section_projects tr.tr.sel').length > 0) {

			$('#alert_delete_project').fadeIn('fast');

                        $('#bt_psave').attr('pid','');

		}

	});

        $('#alert_delete_project .bt_alert_yes').click(function(){

                sUrl = "api/project_del.php";

                var form_data = new FormData();

                form_data.append('pid', $('#table_project .tr.sel').attr('id'));

                $.ajax({

                    type: "POST",

                    url: sUrl,

                    cache: false,

                    processData: false, 

                    contentType: false,

                    data: form_data,

                    success: function(data){                 

                        deleteProjectHolidays($('#table_project .tr.sel').attr('id'));

                        $('#table_project .tr.sel').remove();

                    },

                    error: function() {

                    },

                    dataType: 'json'

                });

        });



	$('#bt_adelete').click(function(){

		if($('#section_activity tr.tr.sel').length > 0) {

			$('#alert_delete_activity').fadeIn('fast');

		}

	});

        

	$('#alert_delete_activity .bt_alert_yes').click(function(){

		data = [];

                $('#table_activity tbody tr').each(function(){

                        item = [];

                        $(this).find('td input').each(function(){

                                item.push($(this).val());

                        });

                        if($(this).find('.acheck').hasClass('sel')) {

                                $(this).remove();

                        }

                });

	});



        /* Print Part */

        $('#bt_qrcode_print').unbind('click');

        $('#bt_qrcode_print').click(function(){

            if ($('#print_type').val() == 0){

                    var data = $('.cont_hidden').html();

                    var mywindow = window.open('', '', '');

                    mywindow.document.write('<html><head>');

                    if ($('#print_mode').val() == 'A') {

                        mywindow.document.write(`<style type="text/css">\n\

                                                .div_qr {float:left;width:266px;height:218px;border:1px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;}\n\

                                                .print_aname {float:left;font-size:35px;line-height:46px;text-align:left;height: 138px;width: 268px;overflow: hidden;}\n\

                                                .div_box2 {position:absolute;margin-top:150px;}\n\

                                                .div_box1 {float:left;width:190px;}\n\

                                                .print_acolor {width:100%;height:46px;-webkit-print-color-adjust:exact;}\n\

                                                .print_aid {float:left;line-height:32px;font-size:18px;}\n\

                                                .print_acode {float:right;line-height:32px;font-size:18px;}\n\

                                                .print_qr {float:right;width:70px;margin-left:10px;}\n\

                                                img {width:70px;height:70px;}\n\

                                                body {margin:0;padding:0;}\n\

                                        </style></head><body>`);

                    } else {

                        mywindow.document.write(`<style type="text/css">\n\

                                                .div_qr:nth-child(odd) {float:left;width:266px;height:254px;border:1px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 48px 10.8px 0;}\n\

                                                .div_qr:nth-child(even) {float:left;width:266px;height:254px;border:1px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 0 10.8px 0;}\n\

                                                .print_aname {float:left;font-size:35px;line-height:46px;text-align:left;height: 174px;width: 268px;overflow: hidden;}\n\

                                                .div_box2 {position:absolute;margin-top:187px;}\n\

                                                .div_box1 {float:left;width:190px;}\n\

                                                .print_acolor {width:100%;height:46px;-webkit-print-color-adjust:exact;}\n\

                                                .print_aid {float:left;line-height:32px;font-size:18px;}\n\

                                                .print_acode {float:right;line-height:32px;font-size:18px;}\n\

                                                .print_qr {float:right;width:70px;margin-left:10px;}\n\

                                                img {width:70px;height:70px;}\n\

                                                body {margin:0;padding:0;}\n\

                                        </style></head><body>`);

                    }

                    mywindow.document.write(data);

                    mywindow.document.write('</body></html>');

                    mywindow.document.close();

                    mywindow.print();

            } else {

                    var data = $('.cont_hidden').html();

                    var mywindow = window.open('', '', '');

                    mywindow.document.write('<html><head>');

                    if ($('#print_mode').val() == 'A') {

                            mywindow.document.write(`<style type="text/css">\n\

                                            .div_qr {float:left;text-align:center;width:266px;height:218px;border:1px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;}\n\

                                            .print_weekday {font-size:40px;}\n\

                                            .print_md {font-size:76px;line-height:120px;}\n\

                                            .div_box {position:absolute;margin-top: -18px;width: 278px;}\n\

                                            .print_y {float:left;font-size:40px;margin-left:55px;margin-top:13px;}\n\

                                            .print_qr {float:right;width:70px;margin-right:10px;}\n\

                                            img {width:70px;height:70px;}\n\

                                            body {margin:0;padding:0;}\n\

                                        </style></head><body>`);

                    } else {

                            mywindow.document.write(`<style type="text/css">\n\

                                            .div_qr:nth-child(odd) {float:left;text-align:center;width:266px;height:254px;border:1px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 48px 10.8px 0;}\n\

                                            .div_qr:nth-child(even) {float:left;text-align:center;width:266px;height:254px;border:1px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 0 10.8px 0;}\n\

                                            .print_weekday {font-size:40px;}\n\

                                            .print_md {font-size:90px;line-height:156px;}\n\

                                            .div_box {position:absolute;margin-top: -18px;width: 278px;}\n\

                                            .print_y {float:left;font-size:40px;margin-left:55px;margin-top:13px;}\n\

                                            .print_qr {float:right;width:70px;margin-right:10px;}\n\

                                            img {width:70px;height:70px;}\n\

                                            body {margin:0;padding:0;}\n\

                                        </style></head><body>`);

                    }

                    mywindow.document.write(data);

                    mywindow.document.write('</body></html>');

                    mywindow.document.close();

                    mywindow.print();

            }

        });

        

	$("#bt_aexport").click(function(){

                if ($('#print_type').val() == 0){       //Activity

                    var data = [];

                    $('#table_activity tbody tr').each(function(){

                            item = [];

                            $(this).find('td input').each(function(){

                                    item.push($(this).val());

                            });

                            if($(this).find('.acheck').hasClass('sel')) {

                                    data.push(item);

                            }

                    })

                    $('#dlg_export').fadeIn('fast');

                    $('#dlg_export .cont').html("");

                    for(i=0; i<data.length; i++) {

                            if ($('#print_mode').val() == 'A') {

                                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:240px;border:1pxsolid#333;padding:10px;color:#333;font-family:Opensans-Bold;'>

                                                    <div class='print_aname' style='float:left;font-size:35px;line-height:46px;text-align:left;height: 138px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                                        <div class='div_box1' style='float:left;width:186px;'>

                                                            <div class='print_acolor' style="width:100%;height:46px;background:`+data[i][6]+`"></div>

                                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][5]+`</div>

                                                        </div>

                                                        <div class='print_qr' style='float:right;width:70px;'><canvas width='70' height='70' id='qr_`+i+`'></canvas></div>

                                                    </div>

                                            </div>`;

                            } else {

                                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:1pxsolid#333;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

                                                    <div class='print_aname' style='float:left;font-size:35px;line-height:46px;text-align:left;height: 174px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                                        <div class='div_box1' style='float:left;width:186px;'>

                                                            <div class='print_acolor' style="width:100%;height:46px;background:`+data[i][6]+`"></div>

                                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][5]+`</div>

                                                        </div>

                                                        <div class='print_qr' style='float:right;width:70px;'><canvas width='70' height='70' id='qr_`+i+`'></canvas></div>

                                                    </div>

                                            </div>`;



                            }

                            $('#dlg_export .cont').append(strHtml);

                            qr_options.text = "A|"+data[i][0];

                            $('#qr_'+i).qrcode(qr_options);

                    }

                        

                    $('.cont_hidden').html($('.cont').html());

                            

                    $('.cont_hidden canvas').each(function(){

                        var canvas = document.getElementById($(this).attr('id'));

                        $("<img src='"+canvas.toDataURL()+"'/>").insertAfter($(this));

                        $(this).remove();

                    }).promise().done(function(){

                        $('.cont_hidden .div_qr').attr('style', '');

                        $('.cont_hidden .div_box2').attr('style', '');

                        $('.cont_hidden .div_box1').attr('style', '');

                        $('.cont_hidden .print_aid').attr('style', '');

                        $('.cont_hidden .print_acode').attr('style', '');

                        $('.cont_hidden .print_qr').attr('style', '');

                        $('#bt_qrcode_print').css('display','inline-block');

                    });

                    

                } else {                            //Dates

                    $('#dlg_export').fadeIn('fast');

                    $('#dlg_export .cont').html("");

                    var from_date = new Date($('#from_date').val()).getTime();

                    var to_date = new Date($('#to_date').val()).getTime();

                    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                    

                    var index = 0;

                    for(var i=from_date; i<=to_date; i += 24 * 60 * 60 * 1000) {

                            var date = new Date(i);

                            var weekday = weekdays[date.getDay()];

                            var day = date.getDate();

                            var month = date.getMonth() + 1;

                            var year = date.getFullYear();

                            if ($('#print_mode').val() == 'A') {

                                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:240px;border:1pxsolid#333;padding:10px;color:#333;font-family:Opensans-Bold;'>

                                                    <div class='print_weekday' style='font-size:40px;'>` + weekday + `</div>

                                                    <div class='print_md' style='font-size:76px;line-height:120px;'>`+ month + '/' + day + `</div>

                                                    <div class='div_box' style='position:relative;margin-top: -13px;width: 268px;'>

                                                        <div class='print_y' style='float:left;font-size:40px;margin-left:55px;margin-top:13px;'>` + year + `</div>

                                                        <div class='print_qr' style='float:right;'><canvas width='70' height='70' id='qr_`+index+`'></canvas></div>

                                                    </div>

                                                </div>`;

                            } else {

                                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:1pxsolid#333;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

                                                    <div class='print_weekday' style='font-size:40px;'>` + weekday + `</div>

                                                    <div class='print_md' style='font-size:76px;line-height:156px;'>`+ month + '/' + day + `</div>

                                                    <div class='div_box' style='position:relative;margin-top: -13px;width: 268px;'>

                                                        <div class='print_y' style='float:left;font-size:40px;margin-left:55px;margin-top:13px;'>` + year + `</div>

                                                        <div class='print_qr' style='float:right;'><canvas width='70' height='70' id='qr_`+index+`'></canvas></div>

                                                    </div>

                                                </div>`;

                            }

                            $('#dlg_export .cont').append(strHtml);

                            qr_options.text = "D|"+month+"/"+day+"/"+year;

                            $('#qr_'+index).qrcode(qr_options);

                            index++;

                    }

                    

                    $('.cont_hidden').html($('.cont').html());

                    

                    $('.cont_hidden canvas').each(function(){

                        var canvas = document.getElementById($(this).attr('id'));

                        $("<img src='"+canvas.toDataURL()+"'/>").insertAfter($(this));

                        $(this).remove();

                        

                    }).promise().done(function(){

                        $('.cont_hidden .div_qr').attr('style', '');

                        $('.cont_hidden .div_box').attr('style', '');

                        $('.cont_hidden .print_qr').attr('style', '');

                        $('.cont_hidden .print_y').attr('style', '');

                        $('#bt_qrcode_print').css('display','inline-block');

                    });

                }

	});



	$('#go_profile').click(function(){

		$('#section_activity').fadeOut('fast');

  		$('#section_projects').fadeIn();

	});

        

        $('#chart').click(function(){

            $('.list').removeClass('sel');

            $(this).addClass('sel');



            $('#section_activity .acont').fadeOut('fast');

            $('#section_activity_chart').fadeIn();

            

            $('#filter_chart').html($('#filter').html());

            

            $('#section_activity_chart').css('display', 'block');

            

            gantt();

            histogram();

        });

                       

        function gantt() {

                var data = [];

                $('#table_activity tbody tr').each(function(){

                        item = [];

                            

                        $(this).find('td input').each(function(){

                                item.push($(this).val());

                        });

                        if (item[3] != '' && item[4] != ''){

                            if (filter_c == 'All')

                                data.push(item);

                            else if (item[5] == filter_c)

                                data.push(item);

                        }

                            

                });



                for(i=0; i<data.length-1; i++) {

                        for(j=i+1; j<data.length; j++) {

                                if(data[i][3] > data[j][3]) {

                                        temp = data[i];

                                        data[i] = data[j];

                                        data[j] = temp;

                                }

                        }

                }

                source = []; 

                for(i=0; i<data.length; i++) {

                        item = {

                            name: data[i][1],

                            desc: data[i][5],

                            values: [{

                                from: data[i][3],

                                to: data[i][4],

                                label: data[i][1],

                                customClass: "ganttRed"

                            }]

                        };

                        source.push(item);

                }



                $("#gantt").html("");

                $("#gantt").gantt({

                    source: source,

                    navigate: "scroll",

                    scale: "days",

                    maxScale: "months",

                    minScale: "hours",

                    itemsPerPage: 40,

                    useCookie: true,

                    onItemClick: function(data) {



                    },

                    onAddClick: function(dt, rowId) {



                    },

                    onRender: function() {

                        if (window.console && typeof console.log === "function") {

                            console.log("chart rendered");

                        }

                        $('.bar.ganttRed .fn-label').each(function(){



                                for(i=0; i<data.length; i++) {

                                    if ($(this).html() == data[i][1]){

                                        $(this).css('background-color', data[i][6]);

                                        break;

                                    }

                                }

                        });

                    }

                });

        }

        

        

        Date.prototype.getWeek = function() {

            var onejan = new Date(this.getFullYear(), 0, 1);

            return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);

        }

        

        function getWeekBy(date1, date2) {

            var d1 = new Date(date1 * 1000);

            var d2 = new Date(date2 * 1000);

            

            var onejan = new Date(d1.getFullYear(), 0, 1);

            return Math.ceil((((d2 - onejan) / 86400000) + onejan.getDay() + 1) / 7);

        }

        

        function getMonthBy(date1, date2) {

            var d1 = new Date(date1 * 1000);

            var d2 = new Date(date2 * 1000);

            

            var year1 = d1.getFullYear();

            var year2 = d2.getFullYear();

            

            return (year2 - year1) * 12 + d2.getMonth();

        }

        

        function histogram(filter) {

            

            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            var all_data=[], data = [], p_start_date, p_end_date, category_count;

            var categories = [], categories_date = [], all_colors = [];

            var series = new Array();

            var i, j, k;

            



            $('#table_activity tbody tr').each(function(){

                    item = [];

                    $(this).find('td input').each(function(){

                            item.push($(this).val());

                    });

                    if (item[3] != '' && item[4] != ''){

                        if (filter_c == 'All')

                            data.push(item);

                        else if (item[5] == filter_c)

                            data.push(item);

                        all_data.push(item);

                    }

            });



            p_start_date = new Date(data[0][3]).getTime() / 1000;

            p_end_date = new Date(data[0][4]).getTime() / 1000;



            for (i=1; i<data.length; i++) {

                var third = new Date(data[i][3]).getTime() / 1000;

                var fourth = new Date(data[i][4]).getTime() / 1000;

                if (p_start_date > third)

                    p_start_date = third;

                if (p_end_date < fourth)

                    p_end_date = fourth;

            }



            j = 0;

            $('#filter option').each(function(){

                if ($(this).html() != 'All'){

                    for (k = 0; k<all_data.length; k++){

                        if ($(this).html() == all_data[k][5])

                            all_colors[j] = all_data[k][6];

                    }

                    j++;

                }

            });



            j = 0;  i = 0;

            $('#filter option').each(function(){

                if ($(this).html() != 'All'){

                    if (filter_c == 'All') {

                        var a = new Array();

                        series[j] = {name:$(this).html(), data:a};



                        for (k = 0;k<data.length;k++){

                            if ($(this).html() == data[k][5])

                                colors[j] = data[k][6];

                        }



                        j++;

                    } else if (filter_c == $(this).html()) {

                        var a = new Array();

                        series[j] = {name:$(this).html(), data:a};



                        for (k = 0;k<data.length;k++){

                            if ($(this).html() == data[k][5])

                                colors[j] = data[k][6];

                        }

                        j++;

                    }

                    filters[i++] = $(this).html();

                }

            });



            if (his_scale == 4){



                category_count = (p_end_date - p_start_date) / (24*60*60) + 1;



                j = 0;

                for (i=p_start_date; i<=p_end_date; i=i+24*60*60) {

                    var d = new Date(i * 1000);

                    var month = months[d.getMonth()];

                    var day = d.getDate();

                    var year = d.getFullYear();

                    categories[j] = month + ' ' + day + ' ' + year;

                    categories_date[j] = i;

                    for (k=0; k<series.length; k++){

                        series[k].data[j] = 0;

                    }

                    j++;

                }



                for (i=0; i<data.length; i++){

                    for (j=0; j<series.length; j++){

                        if (data[i][5] == series[j].name){

                            var a_start_date = new Date(data[i][3]).getTime() / 1000;

                            var a_end_date = new Date(data[i][4]).getTime() / 1000;

                            for (k=a_start_date;k<=a_end_date;k=k+24*60*60){

                                var p = (k - p_start_date) / (24*60*60);

                                if (isRestDate(k)){

                                    series[j].data[p] = 0;

                                } else {

                                    series[j].data[p] += parseInt(data[i][7]);

                                }

                            }

                        }

                    }

                }

            } else if (his_scale == 3){

                var p_start_week, p_end_week;

                

                p_start_week = (new Date(p_start_date * 1000)).getWeek();

                p_end_week = getWeekBy(p_start_date, p_end_date);

                

                category_count = p_end_week - p_start_week + 1;



                j = 0;

                for (i=p_start_date; i<=p_end_date; i=i+24*60*60) {

                    var d = new Date(i * 1000);

                    var year = d.getFullYear();

                    var week = getWeekBy(p_start_date, i);

                    categories[week  - p_start_week] = d.getWeek() + ' week ' + year;

                    for (k=0; k<series.length; k++){

                        series[k].data[week - p_start_week] = 0;

                    }

                    j++;

                }

                

                for (i=0; i<data.length; i++){

                    for (j=0; j<series.length; j++){

                        if (data[i][5] == series[j].name){

                            

                            var a_start_date = new Date(data[i][3]).getTime() / 1000;

                            var a_end_date = new Date(data[i][4]).getTime() / 1000;

                            var a_start_week = getWeekBy(p_start_date, a_start_date);

                            var a_end_week = getWeekBy(p_start_date, a_end_date);

                            

                            for (k=a_start_week; k<=a_end_week; k++){

                                var p = k - p_start_week;

                                for (var t = a_start_date; t<=a_end_date; t += 24*60*60){

                                    var tt = getWeekBy(p_start_date, t);

                                    if (k == tt){

                                        if (!isRestDate(t)){

                                            series[j].data[p] += parseInt(data[i][7]);

                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            } else if (his_scale == 2){

                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



                var p_start_month, p_end_month;

                p_start_month = (new Date(p_start_date * 1000)).getMonth();

                p_end_month = getMonthBy(p_start_date, p_end_date);

                category_count = p_end_month - p_start_month + 1;



                j = 0;

                for (i=p_start_date; i<=p_end_date; i=i+24*60*60) {

                    var d = new Date(i * 1000);

                    var year = d.getFullYear();

                    var month = getMonthBy(p_start_date, i);

                    categories[month  - p_start_month] = monthNames[d.getMonth()] + ' ' + year;

                    for (k=0; k<series.length; k++){

                        series[k].data[month - p_start_month] = 0;

                    }

                    j++;

                }

                

                for (i=0; i<data.length; i++){

                    for (j=0; j<series.length; j++){

                        if (data[i][5] == series[j].name){

                            

                            var a_start_date = new Date(data[i][3]).getTime() / 1000;

                            var a_end_date = new Date(data[i][4]).getTime() / 1000;

                            var a_start_month = getMonthBy(p_start_date, a_start_date);

                            var a_end_month = getMonthBy(p_start_date, a_end_date);

                            

                            for (k=a_start_month; k<=a_end_month; k++){

                                var p = k - p_start_month;

                                for (var t = a_start_date; t<=a_end_date; t += 24*60*60){

                                    var tt = getMonthBy(p_start_date, t);

                                    if (k == tt){

                                        if (!isRestDate(t)){

                                            series[j].data[p] += parseInt(data[i][7]);

                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            }

            

            for (i=0;i<series.length;i++)

                for (j=0;j<series[i].data.length;j++)

                    if (series[i].data[j] == 0)

                        series[i].data[j] = '';



            var histogram_width = category_count * 42 + 60;

            $('#histogram').css('width', histogram_width + 'px');



            Highcharts.chart('histogram', {

                chart: {

                    type: 'column'

                },

                title: {

                    text: 'Stacked column chart'

                },

                xAxis: {

                    categories: categories

                },

                yAxis: {

                    min: 0,

                    title: {

                        text: 'Total fruit consumption'

                    },

                    stackLabels: {

                        enabled: true,

                        style: {

                            fontWeight: 'bold',

                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'

                        }

                    }

                },

                legend: {

                    align: 'right',

                    x: -30,

                    verticalAlign: 'top',

                    y: 25,

                    floating: true,

                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',

                    borderColor: '#CCC',

                    borderWidth: 1,

                    shadow: false

                },

                tooltip: {

                    headerFormat: '<b>{point.x}</b><br/>',

                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'

                },

                plotOptions: {

                    column: {

                        stacking: 'normal',

                        dataLabels: {

                            enabled: true,

                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'

                        }

                    }

                },

                series: series

            });

            

            var html_str = '';

            for (i=0;i<filters.length;i++){

                html_str += "<div style='float:left; width:15px;height:15px;background-color:" + all_colors[i] + "'></div><div style='float:left;padding-left:10px;padding-right:20px;'>" + filters[i] + "</div>";

            }

            $('#mark').html(html_str);

        }        



	$('#act_list').click(function(){

		$('.list').removeClass('sel');

		$(this).addClass('sel');



  		$('#section_activity_chart').fadeOut('fast');

		$('#section_activity .acont').fadeIn();

	});



        $('#bt_hremove').click(function(){

            sUrl = "api/holiday_del.php";

            var form_data = new FormData();

            form_data.append('pid', $('#bt_psave').attr('pid'));

            form_data.append('holiday', $('#holidays').val());

            $.ajax({

                type: "POST",

                url: sUrl,

                cache: false,

                processData: false,

                contentType: false,

                data: form_data,

                success: function(data){

                    $('#holidays :selected').remove();

                    $('.ui-widget.ui-widget-content').val('');

                    setFinishDate();

                },

                error: function() {

                },

                dataType: 'json'

            });

        });

        

        $('#bt_hadd').click(function(){

            var input_value = $('.ui-widget.ui-widget-content').val();

            var k = 0;

            if (input_value == '')  k = 1;

            $('#holidays option').each(function(){

                if ($(this).html == input_value)

                    k = 1;

            });

            if (k == 0){

                sUrl = "api/holiday_add.php";

                var form_data = new FormData();

                form_data.append('pid', $('#bt_psave').attr('pid'));

                form_data.append('holiday', input_value);

                $.ajax({

                    type: "POST",

                    url: sUrl,

                    cache: false,

                    processData: false,

                    contentType: false,

                    data: form_data,

                    success: function(data){

                        $('#holidays').append($('<option>', {

                            value: input_value,

                            text: input_value

                        }));

                        $('.ui-widget.ui-widget-content').val('');

                        sortHolidays();

                        setFinishDate();

                    },

                    error: function() {

                    },

                    dataType: 'json'

                });

            }

        });

        

        $('#his_zoomIn').click(function(){

            if (his_scale < 4) {

                his_scale++; 

                histogram(filter);

            }

        });

        $('#his_zoomOut').click(function(){

            if (his_scale > 2) {

                his_scale--;

                histogram(filter);

            }

        });

	loadProject();

        

});



function sortHolidays() {

    var arr = new Array();

    var i = 0, j;

    $("#holidays option").each(function(){

        arr[i++] = new Date($(this).val()).getTime() / 1000;

    });

    

    for (i=1;i<arr.length - 1;i++)

        for (j=i+1;j<arr.length;j++){

            if (arr[i] > arr[j]){

                var temp = arr[i];

                arr[i] = arr[j];

                arr[j] = temp;

            }

        }

    

    $('#holidays').html('');

    $('#holidays').append($('<option>', {

        value: '0',

        text: ''

    }));

    for (i=1;i<arr.length;i++){

        var date = new Date(arr[i] * 1000);

        var day = date.getDate();

        var month = date.getMonth() + 1;

        var year = date.getFullYear();

        date = month + '/' + day + '/' + year;

        $('#holidays').append($('<option>', {

            value: date,

            text: date

        }));

    }

}



function deleteProjectHolidays(pid) {

        sUrl = "api/holidaysByPid_del.php";

        var form_data = new FormData();

        form_data.append('pid', pid);

        $.ajax({

            type: "POST",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            data: form_data,

            success: function(data){   

                

            },

            error: function() {

            },

            dataType: 'json'

    });

}

                

function trClickEvent() {

            

        $('.arrow').unbind('click');

        $('.arrow').click(function(){

            alert('+1');

        });

        

        $('#section_projects table tr.tr').unbind( "click" );

        $('#section_projects table tr.tr').click(function(){



                $('table tr.tr').removeClass('sel');

                $(this).addClass('sel');

                $('table tr.tr .psetting').removeClass('sel');

                $(this).find('.psetting').addClass('sel');



                $('#bt_psave').attr('pid', $(this).attr('id'));

                $('#pname').val($(this).find('.pname').find('span').text());

                $('#pdate').val($(this).find('.pdate').text());

                p = $(this).attr('platform');

                p = p.substr(0, p.length-1);



                if (p  == '')   

                    var ary = new Array();

                else

                    var ary = p.split(',');

                $('.div_platform').html('');

                for(i=0; i<ary.length; i++) {

                        strHtml = `<div class="platform_item sel">

                            <i class="fa fa-check-circle-o arrow" aria-hidden="true"></i>

                            <select class="form-control platform" placeholder="Platform">

                                <option value=''>platform</option>

                                <option value='0'>email</option>

                                <option value='1'>slatplanner.com</option>

                                <option value='2'>Procore</option>

                            </select>

                            <div class="delete_platform">Delete this platform</div>`;



                        strHtml += `</div>`;

                        $('.div_platform').append(strHtml);

                }

                n = 0;

                $('select.platform').each(function() {

                        $(this).val(ary[n]);

                        n++;

                });

                changePlatformEvent();

        });



        $('#section_activity table tr.tr .acheck').unbind( "click" );

        $('#section_activity table tr.tr .acheck').click(function(){

                tr = $(this).parent();

                if(tr.hasClass('sel')) {

                        tr.removeClass('sel');

                        tr.find('.psetting').removeClass('sel');

                } else {

                        tr.addClass('sel');

                        tr.find('.psetting').addClass('sel');

                }

        });



        $('#table_activity tr .tt').unbind("focus");

        $('#table_activity tr .tt').focus(function(){

                $('#table_activity tr .tt').css('background-color', 'transparent');

                $(this).css('background-color', 'white');

        });



        $('#table_activity tr .tt').unbind('keydown');

        $('#table_activity tr .tt').keydown(function(event){

                var element = $(this);

                if (event.which == 38){

                    var col = 0;

                    $(this).parent().parent().find('input').each(function(){

                        if ( $(this).is(element) && $(this).parent().parent().prev().find("input:nth(" + col + ")").length){

                            $(this).parent().parent().prev().find("input:nth(" + col + ")").focus();

                        }

                        col++;

                    });

                    return;

                } else if (event.which == 40){

                    var col = 0;

                    $(this).parent().parent().find('input').each(function(){

                        if ( $(this).is(element) && $(this).parent().parent().next().find("input:nth(" + col + ")").length){

                            $(this).parent().parent().next().find("input:nth(" + col + ")").focus();

                        }

                        col++;

                    });

                    return;

                } else if (event.which == 37) {

                    var col = 0;

                    $(this).parent().parent().find('input').each(function(){

                        if ( $(this).is(element) && $(this).parent().prev().find("input").length && $(this).get(0).selectionStart == 0){

                            $(this).parent().prev().find("input").focus();

                        }

                        col++;

                    });

                    return;

                } else if (event.which == 39) {

                    var col = 0;

                    $(this).parent().parent().find('input').each(function(){

                        if ( $(this).is(element) && $(this).parent().next().find("input").length && $(this).get(0).selectionStart == $(this).val().length){

                            $(this).parent().next().find("input").focus();

                        }

                        col++;

                    });

                    return;            

                }

                if (!$(this).parent().parent().next().length) {

                    if (event.which == '13') {

                            $('#bt_aadd').click();

                            $(this).parent().parent().next().find('input:first').focus();

                    }

                    if(!$(this).parent().next().length && event.which == '9') {

                            $('#bt_aadd').click();

                    }

                } else {

                    if (event.which == '13'){

                        $(this).parent().parent().next().find('input:first').focus();

                    }

                }

        });

        

        $('.aduration input').unbind('keyup');

        $('.aduration input').keyup(function(event){

                setFinishDate();

        });

        

        $('.astart input').unbind('keyup');

        $('.astart input').keyup(function(event){

                setFinishDate();

        });

}



function addPlatformEvent() {

        $('.add_platform').unbind('click');

        $('.add_platform').click(function(){

                obj = $('.platform_item:last-child');

                strHtml = `<div class="platform_item">

                    <i class="fa fa-check-circle-o arrow" aria-hidden="true"></i>

                    <select class="form-control platform" placeholder="Platform">

                        <option value=''>platform</option>

                        <option value='0'>email</option>

                        <option value='1'>slatplanner.com</option>

                        <option value='2'>Procore</option>

                    </select>

                    <div class="delete_platform">Delete this platform</div>

                </div>`;

                $('.div_platform').append(strHtml);

                changePlatformEvent();

        });

}



function changePlatformEvent() {

        $('.platform').unbind('change');

        $('.platform').change(function(){

                val = $(this).val(); 

                item = $(this).parent();

                item.removeClass('sel');

                if (val != '') {

                        item.addClass('sel');

                }

        });

        

        $('.delete_platform').unbind('click');

        $('.delete_platform').click(function(){

                $(this).parent().remove();

        });

}


var ppid = -1;
function tableEvent() {

        $( "#section_projects tr.tr" ).dblclick(function() {

                $('#section_projects').fadeOut('fast');

                $('#section_activity').fadeIn();

                ppid = $(this).attr('id');
                loadActivity($(this).attr('id'));

        });

}



function activityEvent() {

        $('.acolor input').keyup(function(){

                cur = $(this);

                val = $(this).val(); 

                acode = $(this).parent().prev().find('input').val(); 

                $('.acode input').each(function(){

                        code = $(this).val(); 

                        if(cur != $(this) && acode == code) {

                                $(this).parent().next().find('input').val(val);

                        }

                });

                colorChange();

        });

}



function colorChange() {

        $('.acolor input').each(function(){

                color = $(this).val(); 

                $(this).css('color', color);

        });

}



function loadProject() {

        var sUrl = "api/project_get.php";

        var strHtml = "";

        n = 0;

        $.ajax({

            type: "GET",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            success: function(data){                  

                for(i=0;i<data.length;i++) {

                    strHtml += `<tr class='tr' id='`+data[i].id+`' platform='`+data[i].platform+`'>

                                    <td>

                                        <div class="td_wrapper"><table class='stable'><tr>

                                            <td>

                                                <div class="div_td">

                                                    <div class="pdate">`+data[i].date+`</div>

                                                    <div class="pname"><i class="fa fa-folder-o" aria-hidden="true"></i> <span>`+data[i].name+`</span></div>

                                                </div>

                                            </td>

                                            <td class='psetting' style='text-align: right;padding-right: 30px;'>

                                                <i class="fa fa-check-circle-o i-checked" aria-hidden="true"></i>

                                                <i class="fa fa-cog i-setting" aria-hidden="true"></i>

                                            </td>

                                        </tr></table></div>

                                    </td>

                                </tr>`;

                }

                $('#table_project').html(strHtml);



                trClickEvent();

                addPlatformEvent();

                changePlatformEvent();

                tableEvent();

                activityEvent();

                saveClickEvent();

            },

            error: function() {

            },

            dataType: 'json'

        });

}



function loadActivity(pid) {

        sUrl = "api/activity_get.php?pid="+pid;

        strHtml = "";

        n = 0;

        $.ajax({

            type: "GET",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            success: function(data){                  

                for(i=0;i<data.length;i++) {

                    strHtml += `<tr class='tr'>

                                    <td class="psetting acheck">

                                        <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>

                                        <i class="fa fa-square-o i-setting" aria-hidden="true"></i>

                                    </td>

                                    <td class='aid'><input class="tt" type="text" value='`+data[i].activity_id+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].activity_name+`'/></td>

                                    <td class='aduration'><input class="tt" type="text" value='`+data[i].duration+`'/></td>

                                    <td class='astart'><input class="tt" type="text" value='`+data[i].start+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].finish+`'/></td>

                                    <td class="acode"><input class="tt" type="text" value='`+data[i].code+`'/></td>

                                    <td class="acolor"><input class="tt" type="text" maxlength="7" value='`+data[i].color+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].size+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].url+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].note+`'/></td>

                                </tr>`;

                }

                $('#table_activity tbody').html(strHtml);

                $('#bt_asave').attr('pid', pid);



                trClickEvent();

                activityEvent();

                colorChange();

                setFilter();

                setFinishDate();

                loadHolidays(pid);

            },

            error: function() {

            },

            dataType: 'json'

        });

}



function loadHolidays(pid) {

    sUrl = "api/holiday_get.php?pid="+pid;

        strHtml = "";

        n = 0;

        $.ajax({

            type: "GET",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            success: function(data){                  

                $('#holidays').html('');

                $('#holidays').append($('<option>', { 

                    value: '0',

                    text : '' 

                }));

                for(i=0;i<data.length;i++) {

                    $('#holidays').append($('<option>', { 

                        value: data[i].holiday,

                        text : data[i].holiday 

                    }));

                }

                sortHolidays();

            },

            error: function() {

            },

            dataType: 'json'

        });

}



function setFinishDate() {

    $('#table_activity .tr').each(function(){

        

        var element = $(this);

        var duration = parseInt($(this).find("input:nth(2)").val());

        var start = $(this).find("input:nth(3)").val();



        var start_stamp = new Date(start).getTime() / 1000;

        var finish_stamp = start_stamp;

        

        if (duration  == 1) {

            var f;

            do {

                if (isRestDate(finish_stamp)) {

                    f = true;

                    finish_stamp += 24 * 60 *60;

                } else {

                    f = false;

                }

            } while(f);

        } else {

            getFinishDate(finish_stamp, 1, duration);

            finish_stamp = temp_finish_date;

        }

        

        var finish = new Date(finish_stamp * 1000);

        

        var year=finish.getFullYear();

        year = year.toString().substr(-2);

        var month=finish.getMonth();

        month=month+1;

        var day=finish.getDate();



        finish = month + "/" + day + "/" + year;

        element.find("input:nth(4)").val(finish);

    });

}



function getFinishDate(date, n, duration){

    if (!isRestDate(date)) {

        n++;

        date += 24 * 60 *60;

        if (n == duration){

            var f;

            do {

                if (isRestDate(date)) {

                    f = true;

                    date += 24 * 60 *60;

                } else {

                    f = false;

                }

            } while(f);

            temp_finish_date = date;

        } else{

            getFinishDate(date, n, duration);

        }

    } else {

        date += 24 * 60 *60;

        getFinishDate(date, n, duration);

    }

}



function isRestDate(date){

    var temp = new Date(date * 1000);

    var k = 0;

    if ( $('#work_week').val() == 2 && (temp.getDay() == 6 || temp.getDay() == 0)) {

        k = 1;

    }

    if ( $('#work_week').val() == 1 && (temp.getDay() == 0)) {

        k = 1;

    }

    $('#holidays option').each(function(){

        var holiday = new Date($(this).html()).getTime() / 1000;

        if (holiday == date) {

            k = 1;

        }

    });

    if (k == 1)     return true;

    else            return false;

}



function setFilter() {

    var code_ary = new Array();

    var index = 1;

    code_ary[0] = 'All';

    $('.acode .tt').each(function(){

        var k = 0;

        for (var j=0; j<code_ary.length; j++){

            if (code_ary[j] == $(this).val()){

                k = 1;

                break;

            }        

        }

        if (k != 1){

            code_ary[index++] = $(this).val();

        }

    });



    $('#filter option').remove();

    $.each(code_ary, function (i, item) {

        $('#filter').append($('<option>', { 

            value: item,

            text : item 

        }));

    });

}



function saveClickEvent() {

        $('#bt_psave').unbind( "click" );

        $('#bt_psave').click(function(){

                sUrl = "api/project_save.php";

                var form_data = new FormData();

                form_data.append('pid', $(this).attr('pid'));

                form_data.append('pname', $('#pname').val());

                form_data.append('pday', $('#day').val());

                var platform_ids = "";

                $('.platform_item').each(function(){

                    if ($(this).find('select').val() != ''){

                        platform_ids += $(this).find('select').val() + ",";

                    }

                });

                form_data.append('platform', platform_ids);

                $.ajax({

                    type: "POST",

                    url: sUrl,

                    cache: false,

                    processData: false, 

                    contentType: false,

                    data: form_data,

                    success: function(data){                  

                        loadProject();

                    },

                    error: function() {

                    },

                    dataType: 'json'

                });

        });

}



function showAlert() {

	$('.overlay').fadeIn('fast');

}



function hideAlert() {

	$('.overlay').fadeOut('fast');

}
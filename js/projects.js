var keydown, ctrl_v=0;

var temp_finish_date;

var qn_resp = [];

function calcDQn() {
    for(i=0; i<settingData['responsible'].length; i++) {
        qn_resp[settingData['responsible'][i].value] = 0;
    }
    $('#table_activity tr.tr.sel').each(function(){
        val = $(this).find('.acode input').val();
        qn_resp[val] += eval($(this).find('.aduration input').val()*1);
    })
    $('#duration_print_option table tbody tr').each(function(){
        val = $(this).find('.respvalue').text();
        $(this).find('.dqn input').val(qn_resp[val]);
    })
}
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
            $('#duration_print_option').fadeOut('fast');

        } else if($(this).val() == 1) {

            $('.div_from_date').css('display','block');

            $('.div_to_date').css('display','block');
            $('#duration_print_option').fadeOut('fast');

        } else {
            $('.div_from_date').css('display','none');

            $('.div_to_date').css('display','none');
            $('#duration_print_option').fadeIn('fast');

            calcDQn();
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

                                    <td class='afinish'><input class="tt" type="text" value=''/></td>

                                    <td><input class="tt" type="text" value=''/></td>

                                    <td class="acolor" style='display:none'><input class="tt" type="text" maxlength="7" value=''/></td>

                                    <td class="acode"><input class="tt" type="text" value=''/></td>

                                    <td class="alocation"><input class="tt" type="text" value=''/></td>

                                    <td class="apriority"><input class="tt" type="text" value=''/></td>

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
                            if(td_obj.css('display') == 'none') {
                                td_obj.find('input').val('');
                                td_obj = td_obj.next();
                            }
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

            //gantt();

            //histogram();

    });

    

    $('#work_week').change(function(){

            setFinishDate();

    });

    

    $('#add_project').click(function(){
        if($('#div_pname').length > 0) return;

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


                        </form>

                            <center><br/>

                                <button type="button" class="btn btn-success" id='bt_psave'>Save</button>

                            </center>

                    `;

    	$('.div_form').html(strHtml);

    	

    	$('#bt_psave').attr('pid', '');

        //========= add tr ==============
        strHtml = `<tr class='tr sel' id='' platform=''>

                                    <td>

                                        <div class="td_wrapper"><table class='stable'><tr>

                                            <td>

                                                <div class="div_td">

                                                    <div class="pdate" style="display:none"></div>

                                                    <div class="pname" id='div_pname'><i class="fa fa-power-off plunch disable" aria-hidden="true"></i> <input type='text' class='tt' value='' /></div>

                                                </div>

                                            </td>

                                            <td class='psetting' style='text-align: right;padding-right: 30px;'>

                                                <i class="fa fa-trash-o pdelete disable" aria-hidden="true"></i>

                                            </td>

                                        </tr></table></div>

                                    </td>

                                </tr>`;
        $('#table_project').html($('#table_project').html()+strHtml);
        $('#div_pname input').focus();

        trClickEvent();

        tableEvent();

    	addPlatformEvent();

    	changePlatformEvent();

    	saveClickEvent();

    });

    $('.selectall').click(function(){
        $(this).toggleClass('sel');
        if($(this).hasClass('sel')) {
            $('#table_activity tbody tr').addClass('sel');
            $('#table_activity tbody tr .acheck').addClass('sel');
        } else {
            $('#table_activity tbody tr').removeClass('sel');
            $('#table_activity tbody tr .acheck').removeClass('sel');
        }
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

		                <td class='afinish'><input class="tt" type="text" value=''/></td>

                        <td><input class="tt" type="text" value=''/></td>

                        <td class="acolor" style="display:none"><input class="tt" type="text" maxlength="7" value=''/></td>

		                <td class="acode"><div class='clr clr_responsible'></div><input class="tt" type="text" value=''/></td>

                        <td class="alocation"><div class='clr clr_location'></div><input class="tt" type="text" value=''/></td>

                        <td class="apriority"><div class='clr clr_priority'></div><input class="tt" type="text" value=''/></td>

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


        showLoading('save');
        form_data.append('data', data);

        form_data.append('pid', $('#bt_asave').attr('pid'));
        form_data.append('sid', ssid);

        $.ajax({

            type: "POST",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            data: form_data,

            success: function(data){
                hideLoading();

                colorChange();

                setFilter();

            },

            error: function() {
                hideLoading();
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


    /*
	$('#delete_project').click(function(){

		if($('#section_projects tr.tr.sel').length > 0) {

			$('#alert_delete_project').fadeIn('fast');

                        $('#bt_psave').attr('pid','');

		}

	});
    */
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


        function hexToRgb(h)
        {
            var r = parseInt((cutHex(h)).substring(0,2),16), g = ((cutHex(h)).substring(2,4),16), b = parseInt((cutHex(h)).substring(4,6),16)
            return r+''+b+''+b;
        }
        function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
        /* Print Part */

        $('#bt_qrcode_print').unbind('click');

        $('#bt_qrcode_print').click(function(){

            var data = $('.cont_hidden').html();
            
            var options = {
            };
            var doc = new jsPDF('p', 'pt', 'a4');

            ptx = 72 / 96;
            x = 0;
            y = 0;
            w = 190;
            h = 160;
            i = 0;
            margin_top = 20;
            margin_left = 20;
            row_num = 3;
            hm = 100;
            if ($('#print_mode').val() != 'A') {
                var doc = new jsPDF('l', 'pt', 'a4');
                row_num = 2;
                h = 180;
                hm = 120;
            }
            $('.cont .div_qr').each(function(){
                if(i != 0 && i % (row_num*3) == 0) {
                    doc.addPage();
                    i = 0;
                }
                doc.setFont("Arial");
                x = (i % 3)*w+margin_left;
                y = Math.floor(i / 3)*h+margin_top;
                doc.setFontSize(22);
                doc.text(x, y+30, $(this).find('.print_aname').html());
                doc.setFontSize(12);
                milestone = $(this).find('.print_milestone').html();
                if(milestone.indexOf('Finish') > -1) {
                    if(milestone.indexOf('Finish Milestone') > -1) {
                        doc.text(x+w-60-85, y+hm-2, milestone);
                    } else {
                        doc.text(x+w-60-35, y+hm-2, milestone);
                    }
                } else {
                    doc.text(x, y+hm-2, milestone);    
                }
                
                doc.setDrawColor(0);
                
                bgcolor = $(this).find('.print_acolor').css('background-color'); 
                bgcolor = bgcolor.replace('rgb(', '').replace(')', '');
                bgcolor = bgcolor.split(','); 
                if(bgcolor[0].indexOf("rgba") > -1) {
                    bgc1 = 255;
                    bgc2 = 255;
                    bgc3 = 255;
                } else {
                    bgc1 = eval(bgcolor[0]);
                    bgc2 = eval(bgcolor[1]);
                    bgc3 = eval(bgcolor[2]);
                }
                doc.setFillColor(bgc1,bgc2,bgc3);
                doc.rect(x, y+hm, w-60, 25, 'F');
                cid = $(this).find('.print_qr canvas').attr('id');
                canvas = document.getElementById(cid);
                imgData = canvas.toDataURL(); 
                doc.addImage(imgData, 'JPEG', x+140, y+hm, 40, 40);
                doc.text(x, y+(hm+40), $(this).find('.print_aid').html());
                doc.text(x+50, y+(hm+40), $(this).find('.print_acode').html());

                if($(this).find('.print_acolor span').length > 0) {
                    if(milestone.indexOf('Milestone') < 0) {
                        doc.setLineWidth(2);
                        if($(this).find('.print_acolor span.sarrow:first-child').css('display') != 'none') {
                            doc.triangle(x+10, y+(hm+5), x+5, y+(hm+12), x+10, y+(hm+19), 'F'); 
                            doc.line(x+20, y+(hm+12), x+6, y+(hm+12));
                            doc.line(x, y+hm, x, y+hm+25);
                        } else {
                            doc.triangle(x+(w-60)-10, y+(hm+5), x+(w-60)-5, y+(hm+12), x+(w-60)-10, y+(hm+19), 'F');
                            doc.line(x+(w-60)-20, y+(hm+12), x+(w-60)-6, y+(hm+12));
                            doc.line(x+w-60, y+hm, x+w-60, y+hm+25);
                        }
                    } else {
                        doc.setLineWidth(1);
                        doc.setFillColor(0,0,0);
                        if(milestone.indexOf('Finish Milestone') < 0) {
                            doc.triangle(x+10, y+(hm+5), x+5, y+(hm+12), x+10, y+(hm+19), 'F');                            
                            doc.triangle(x+10, y+(hm+5), x+15, y+(hm+12), x+10, y+(hm+19), 'F');
                        } else {
                            doc.triangle(x+(w-60)-10, y+(hm+5), x+(w-60)-5, y+(hm+12), x+(w-60)-10, y+(hm+19), 'F');
                            doc.triangle(x+(w-60)-10, y+(hm+5), x+(w-60)-15, y+(hm+12), x+(w-60)-10, y+(hm+19), 'F');
                        }
                    }
                }

                i++;
            })
            doc.save('pageContent.pdf');

            return;

            if ($('#print_type').val() == 0){

                    var data = $('.cont_hidden').html();

                    var mywindow = window.open('', '', '');

                    mywindow.document.write('<html><head>');

                    if ($('#print_mode').val() == 'A') {

                        mywindow.document.write(`<style type="text/css">\n\

                                                .div_qr {float:left;width:266px;height:218px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;}\n\

                                                .print_aname {float:left;font-size:35px;line-height:33px;text-align:left;height: 99px;width: 268px;overflow: hidden;}\n\

                                                .div_box2 {position:absolute;margin-top:130px;}\n\

                                                .div_box1 {float:left;width:180px;margin-right:10px;}\n\

                                                .print_acolor {width:100%;height:46px;-webkit-print-color-adjust:exact;}\n\

                                                .print_aid {float:left;line-height:32px;font-size:18px;}\n\

                                                .print_acode {float:right;line-height:32px;font-size:18px;}\n\

                                                .print_qr {float:right;width:70px;margin-left:10px;margin-top: 20px;}\n\

                                                img {width:70px;height:70px;}\n\

                                                body {margin:0;padding:0;}\n\
                                                .print_acolor span {font-size: 40px;margin-top: 0px;color: #000;}\n\

                                        </style></head><body>`);

                    } else {

                        mywindow.document.write(`<style type="text/css">\n\

                                                .div_qr:nth-child(odd) {float:left;width:266px;height:254px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 48px 10.8px 0;}\n\

                                                .div_qr:nth-child(even) {float:left;width:266px;height:254px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 0 10.8px 0;}\n\

                                                .print_aname {float:left;font-size:35px;line-height:45px;text-align:left;height: 135px;width: 268px;overflow: hidden;}\n\

                                                .div_box2 {position:absolute;margin-top:167px;}\n\

                                                .div_box1 {float:left;width:180px;margin-right:10px;}\n\

                                                .print_acolor {width:100%;height:46px;-webkit-print-color-adjust:exact;}\n\

                                                .print_aid {float:left;line-height:32px;font-size:18px;}\n\

                                                .print_acode {float:right;line-height:32px;font-size:18px;}\n\

                                                .print_qr {float:right;width:70px;margin-left:10px;margin-top: 20px;}\n\

                                                img {width:70px;height:70px;}\n\

                                                body {margin:0;padding:0;}\n\
                                                .print_acolor span {font-size: 40px;margin-top: 0px;color: #000;}\n\

                                        </style></head><body>`);

                    }

                    mywindow.document.write(data);

                    mywindow.document.write('</body></html>');

                    mywindow.document.close();

                    mywindow.print();

            } else if($('#print_type').val() == 1) {

                    var data = $('.cont_hidden').html();

                    var mywindow = window.open('', '', '');

                    mywindow.document.write('<html><head>');

                    if ($('#print_mode').val() == 'A') {

                            mywindow.document.write(`<style type="text/css">\n\

                                            .div_qr {float:left;text-align:center;width:266px;height:218px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;}\n\

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

                                            .div_qr:nth-child(odd) {float:left;text-align:center;width:266px;height:254px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 48px 10.8px 0;}\n\

                                            .div_qr:nth-child(even) {float:left;text-align:center;width:266px;height:254px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 0 10.8px 0;}\n\

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

            } else if ($('#print_type').val() == 2){

                    var data = $('.cont_hidden').html();

                    var mywindow = window.open('', '', '');

                    mywindow.document.write('<html><head>');

                    if ($('#print_mode').val() == 'A') {

                        mywindow.document.write(`<style type="text/css">\n\

                                                .div_qr {float:left;width:266px;height:218px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;}\n\

                                                .print_aname {float:left;font-size:35px;line-height:46px;text-align:left;height: 138px;width: 268px;overflow: hidden;}\n\

                                                .div_box2 {position:absolute;margin-top:150px;}\n\

                                                .div_box1 {float:left;width:190px;}\n\

                                                .print_acolor {width:100%;height:46px;margin-top:150px;-webkit-print-color-adjust:exact;}\n\

                                                .print_aid {float:left;line-height:32px;font-size:18px;}\n\

                                                .print_acode {float:right;line-height:32px;font-size:18px;}\n\

                                                .print_qr {float:right;width:70px;margin-left:10px;}\n\

                                                img {width:70px;height:70px;}\n\

                                                body {margin:0;padding:0;}\n\

                                        </style></head><body>`);

                    } else {

                        mywindow.document.write(`<style type="text/css">\n\

                                                .div_qr:nth-child(odd) {float:left;width:266px;height:254px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 48px 10.8px 0;}\n\

                                                .div_qr:nth-child(even) {float:left;width:266px;height:254px;border:0px solid #333;padding:10px;color:#333;font-family:Opensans-Bold;margin:10.8px 0 10.8px 0;}\n\

                                                .print_aname {float:left;font-size:35px;line-height:46px;text-align:left;height: 174px;width: 268px;overflow: hidden;}\n\

                                                .div_box2 {position:absolute;margin-top:187px;}\n\

                                                .div_box1 {float:left;width:190px;}\n\

                                                .print_acolor {width:100%;height:46px;margin-top:186px;-webkit-print-color-adjust:exact;}\n\

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
                item[6] = $(this).find('.clr_responsible').attr('bg');

                if($(this).find('.acheck').hasClass('sel')) {

                        data.push(item);

                }

            })

            console.log(data);
            
            
            $('#dlg_export').fadeIn('fast');

            $('#dlg_export .cont').html("");

            for(i=0; i<data.length; i++) {

                strHtml_start = "";
                strHtml_finish = "";
                if ($('#print_mode').val() == 'A') {

                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:240px;border:0px solid;padding:10px;color:#333;font-family:Opensans-Bold;'>

                                    <div class='print_aname' style='float:left;font-size:35px;line-height:35px;text-align:left;height: 120px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                        <div class='div_box1' style='float:left;width:186px;'>
                                            <div class='print_milestone' style='text-align:textalign;line-height:20px;'>startfinish</div>
                                            <div class='print_acolor' style="border-textalign:10px solid #000;width:100%;height:46px;background:`+data[i][6]+`">
                                                <span class='sarrow' style='float:left;display:displeft'>&#x2190;</span>
                                                <span class='sarrow' style='float:right;display:dispright'>&#x2192;</span>
                                            </div>

                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][7]+`</div>

                                        </div>

                                        <div class='print_qr' style='float:right;width:70px;margin-top: 20px;'><canvas width='70' height='70' id='qr_`+i+`_***'></canvas></div>

                                    </div>

                            </div>`;

                    if(data[i][2]*1 != 0 || (data[i][2]*1 == 0 && data[i][3]*1 == 0 && data[i][4]*1 == 0)) {
                        strHtml_start = strHtml.replace("***", 's').replace('startfinish', 'Start').replace('textalign', 'left').replace('dispright', 'none').replace('textalign', 'left');   
                        strHtml_finish = strHtml.replace("***", 'f').replace('startfinish', 'Finish').replace('textalign', 'right').replace('displeft', 'none').replace('textalign', 'right');   
                    } else {
                        strHtml = `<div class='div_qr' style='float:left;width: 288px;height:240px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;'>

                                    <div class='print_aname' style='float:left;font-size:35px;line-height:40px;text-align:left;height: 120px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                        <div class='div_box1' style='float:left;width:186px;'>
                                            <div class='print_milestone' style='text-align:textalign;line-height:20px;'>startfinish</div>
                                            <div class='print_acolor' style="width:100%;height:46px;background:`+data[i][6]+`">
                                                <span style='float:textalign'>&#x25C6;</span>
                                            </div>

                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][7]+`</div>

                                        </div>

                                        <div class='print_qr' style='float:right;width:70px;margin-top: 20px;'><canvas width='70' height='70' id='qr_`+i+`_***''></canvas></div>

                                    </div>

                            </div>`;
                        if(data[i][3]*1 != 0)
                            strHtml_start = strHtml.replace("***", 's').replace('startfinish', 'Start Milestone').replace('textalign', 'left').replace('textalign', 'left');  
                        if(data[i][4]*1 != 0) 
                            strHtml_finish = strHtml.replace("***", 'f').replace('startfinish', 'Finish Milestone').replace('textalign', 'right').replace('textalign', 'right');
                    }
                } else {
                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

                                    <div class='print_aname' style='float:left;font-size:35px;line-height:45px;text-align:left;height: 135px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                        <div class='div_box1' style='float:left;width:186px;'>
                                            <div class='print_milestone' style='text-align:textalign;line-height:20px;'>startfinish</div>
                                            <div class='print_acolor' style="border-textalign:10px solid #000;width:100%;height:46px;background:`+data[i][6]+`">
                                                <span class='sarrow' style='float:left;display:displeft'>&#x2190;</span>
                                                <span class='sarrow' style='float:right;display:dispright'>&#x2192;</span>
                                            </div>

                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][7]+`</div>

                                        </div>

                                        <div class='print_qr' style='float:right;width:70px;margin-top: 20px;'><canvas width='70' height='70' id='qr_`+i+`_***'></canvas></div>

                                    </div>

                            </div>`;

                    if(data[i][2]*1 != 0) {
                        strHtml_start = strHtml.replace("***", 's').replace('startfinish', 'start').replace('textalign', 'left').replace('dispright', 'none').replace('textalign', 'left');   
                        strHtml_finish = strHtml.replace("***", 'f').replace('startfinish', 'finish').replace('textalign', 'right').replace('displeft', 'none').replace('textalign', 'right');   
                    } else {
                        strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

                                    <div class='print_aname' style='float:left;font-size:35px;line-height:45px;text-align:left;height: 135px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                        <div class='div_box1' style='float:left;width:186px;'>
                                            <div class='print_milestone' style='text-align:textalign;line-height:20px;'>startfinish</div>
                                            <div class='print_acolor' style="width:100%;height:46px;background:`+data[i][6]+`">
                                                <span style='float:textalign'>&#x25C6;</span>
                                            </div>

                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][7]+`</div>

                                        </div>

                                        <div class='print_qr' style='float:right;width:70px;margin-top: 20px;'><canvas width='70' height='70' id='qr_`+i+`_***''></canvas></div>

                                    </div>

                            </div>`;
                        if(data[i][3]*1 != 0)
                            strHtml_start = strHtml.replace("***", 's').replace('startfinish', 'Start Milestone').replace('textalign', 'left').replace('textalign', 'left');  
                        if(data[i][4]*1 != 0) 
                            strHtml_finish = strHtml.replace("***", 'f').replace('startfinish', 'Finish Milestone').replace('textalign', 'right').replace('textalign', 'right');
                    }
                    /* original 
                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:1pxsolid#333;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

                                    <div class='print_aname' style='float:left;font-size:35px;line-height:46px;text-align:left;height: 174px;width: 268px;overflow: hidden;'>`+data[i][1]+`</div>

                                    <div class='div_box2' style='position: relative; top: 10px;'>

                                        <div class='div_box1' style='float:left;width:186px;'>

                                            <div class='print_acolor' style="width:100%;height:46px;background:`+data[i][6]+`"></div>

                                            <div class='print_aid' style='float:left;line-height:32px;font-size: 18px;'>`+data[i][0]+`</div>

                                            <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+data[i][7]+`</div>

                                        </div>

                                        <div class='print_qr' style='float:right;width:70px;'><canvas width='70' height='70' id='qr_`+i+`'></canvas></div>

                                    </div>

                            </div>`;
                    */
                }

                $('#dlg_export .cont').append(strHtml_start);
                qr_options.text = "AS|"+data[i][0];
                $('#qr_'+i+'_s').qrcode(qr_options);

                $('#dlg_export .cont').append(strHtml_finish);
                qr_options.text = "AF|"+data[i][0];
                $('#qr_'+i+'_f').qrcode(qr_options);

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

            

        } else if($('#print_type').val() == 1) {                            //Dates

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

                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:240px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;'>

                                    <div class='print_weekday' style='font-size:40px;'>` + weekday + `</div>

                                    <div class='print_md' style='font-size:76px;line-height:120px;'>`+ month + '/' + day + `</div>

                                    <div class='div_box' style='position:relative;margin-top: -13px;width: 268px;'>

                                        <div class='print_y' style='float:left;font-size:40px;margin-left:55px;margin-top:13px;'>` + year + `</div>

                                        <div class='print_qr' style='float:right;'><canvas width='70' height='70' id='qr_`+index+`'></canvas></div>

                                    </div>

                                </div>`;

                } else {

                    strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

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

        } else if($('#print_type').val() == 2) { // duration

            $('#dlg_export').fadeIn('fast');

            $('#dlg_export .cont').html("");

            $('#duration_print_option tbody tr').each(function(){
                qn = $(this).find('input.tt').val();
                color = $(this).find('.respcolor').css('background');
                respvalue = $(this).find('.respvalue').html();
                for(i=0; i<qn*1; i++) {
                    if ($('#print_mode').val() == 'A') {

                        strHtml = `<div class='div_qr' style='float:left;width: 288px;height:240px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;'>

                                        <div class='print_acolor' style="width:100%;height:46px;margin-top:150px;background:`+color+`"></div>

                                        <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+respvalue+`</div>

                                    </div>`;

                    } else {
                        strHtml = `<div class='div_qr' style='float:left;width: 288px;height:276px;border:0px;padding:10px;color:#333;font-family:Opensans-Bold;margin:0 48px 21.6px 0;'>

                                        <div class='print_acolor' style="width:100%;height:46px;margin-top:186px;background:`+color+`"></div>

                                        <div class='print_acode' style='float:right;line-height:32px;font-size: 18px;'>`+respvalue+`</div>

                                    </div>`;

                    }
                    $('#dlg_export .cont').append(strHtml);
                }
            })

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

        loadProject();

	});

        

        $('#chart').click(function(){

            $('.list').removeClass('sel');

            $(this).addClass('sel');



            $('.acont').fadeOut('fast');

            $('#section_activity_chart').fadeIn();

            

            $('#filter_chart').html($('#filter').html());

            
            $('#chart_plan').click();

        });
   


// ========== activity tabs event ================

	$('#act_list').click(function(){

		$('.list').removeClass('sel');

		$(this).addClass('sel');


  		$('.acont').css('display', 'none');

		$('#section_activity_list').fadeIn();

        ssid = "0";
        $('.div_snapshot .ui-widget.ui-widget-content').val(''); console.log(ppermission);
        loadSnapshot(ppid);
        //loadActivity(ppid);

	});

    $('#act_setting').click(function(){

        if(ppermission != "Administrator") {
            return;
        }

        $('.list').removeClass('sel');

        $(this).addClass('sel');


        $('.acont').css('display', 'none');

        $('#section_activity_setting').fadeIn();

        loadSettingAll(ppid);

        settingClickInit();

    });

    $('#act_detail').click(function(){

        $('.list').removeClass('sel');

        $(this).addClass('sel');


        $('.acont').css('display', 'none');

        $('#section_activity_detail').fadeIn();

        //$('#bt_view_detail').click();
        loadActivityDetail(ppid, aaid);

        setTimeout(function() {
            changePermission();
        }, 1500);

    });

    $('#act_tracking').click(function(){

        $('.list').removeClass('sel');

        $(this).addClass('sel');


        $('.acont').css('display', 'none');

        $('#section_activity_tracking').fadeIn();

        $('#snapshot_tracking').val("0");
        loadActivityTracking(ppid, 0);

        setTimeout(function() {
            changePermission();
        }, 1500);

    });

    $('#act_constraints').click(function(){

        $('.list').removeClass('sel');

        $(this).addClass('sel');


        $('.acont').css('display', 'none');

        $('#section_activity_constraint').fadeIn();

        loadActivityConstraint(ppid, true);

        setTimeout(function() {
            changePermission();
        }, 1500);

    });



//================================================

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

            var input_value = $('#section_activity_list .ui-widget.ui-widget-content').val();

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

                $('#pname').val($(this).find('.pname').find('input').val());

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

                calcDQn();
        });

        $('#section_activity table tr.tr .bt_go_detail').unbind( "click" );

        $('#section_activity table tr.tr .bt_go_detail').click(function(){
            aaid = $(this).attr('aid');
            aaaid = $(this).attr('aaid');
            $('#act_detail').click();
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

            setFinishDate(true);

        });

        

        $('.astart input').unbind('keyup');

        $('.astart input').keyup(function(event){

            setFinishDate();

        });

        $('.afinish input').unbind('keyup');

        $('.afinish input').keyup(function(event){

            setDuration();

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
var aaid = -1;
var aaaid = -1;
var ppname = "";
var psetting;
var ppermission = "Administrator";
function tableEvent() {
    $( "#section_projects .plunch" ).click(function(){
        if($(this).hasClass('disable')) return;
        obj = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
        
        $('#section_projects').fadeOut('fast');

        $('#section_activity').fadeIn();
        $('.acont').css('display', 'none');
        $('#section_activity_list').css('display', 'block');

        ppid = obj.attr('id'); 
        ppermission = obj.attr('permission');
        ppname = obj.find('.pname input').val(); 
        $('#ppname').html(ppname);

        $('#act_list').click();
    })
    $( "#section_projects .pdelete" ).click(function(){
        if($(this).hasClass('disable')) return;
        obj = $(this).parent().parent().parent().parent().parent().parent().parent();
        $('#alert_delete_project').fadeIn('fast');
        $('#bt_psave').attr('pid','');
    })
    $('.pname input').keyup(function(e){
        $('#pname').val($(this).val());
    })
    /*
    $( "#section_projects tr.tr" ).dblclick(function() {

        $('#section_projects').fadeOut('fast');

        $('#section_activity').fadeIn();
        $('.acont').css('display', 'none');
        $('#section_activity_list').css('display', 'block');

        ppid = $(this).attr('id'); 
        ppname = $(this).find('.pname span').html(); 
        $('#ppname').html(ppname);

        $('#act_list').click();

    });
    */
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

                    strHtml += `<tr class='tr' id='`+data[i].id+`' platform='`+data[i].platform+`' email='`+data[i].email+`' permission='`+data[i].permission+`'>

                                    <td>

                                        <div class="td_wrapper"><table class='stable'><tr>

                                            <td>

                                                <div class="div_td">

                                                    <div class="pdate" style="display:none">`+data[i].date+`</div>

                                                    <div class="pname"><i class="fa fa-power-off plunch" aria-hidden="true"></i> <input type='text' class='tt' value='`+data[i].name+`' /></div>

                                                </div>

                                            </td>

                                            <td class='psetting' style='text-align: right;padding-right: 30px;'>

                                                <i class="fa fa-trash-o pdelete" aria-hidden="true"></i>

                                            </td>

                                        </tr></table></div>

                                    </td>

                                </tr>`;

                }

                $('#table_project').html(strHtml);

                myemail = $('#myemail').val();
                $('#table_project tr.tr').each(function() {
                    if($(this).attr('permission') == 'Administrator') {
                    } else {
                        $(this).find('.pdelete').remove();
                        $(this).find('input.tt').attr('readonly', 'true');
                    }
                })

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


var activityData;

function loadActivity(pid) {
    showLoading();
        sUrl = "api/activity_get.php?pid="+pid+'&sid='+ssid;

        strHtml = "";

        n = 0;

        $.ajax({

            type: "GET",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            success: function(data){                  

                activityData = data;

                for(i=0;i<data.length;i++) {
                    if(data[i].duration == 'NaN') data[i].duration = '';
                    if(data[i].start.indexOf('NaN') > -1) data[i].start = '';
                    if(data[i].finish.indexOf('NaN') > -1) data[i].finish = '';

                    strHtml += `<tr class='tr'>

                                    <td class="psetting acheck">

                                        <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>

                                        <i class="fa fa-square-o i-setting" aria-hidden="true"></i>

                                    </td>

                                    <td class='aid'><input class="tt" type="text" value='`+data[i].activity_id+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].activity_name+`'/></td>

                                    <td class='aduration'><input class="tt" type="text" value='`+data[i].duration+`'/></td>

                                    <td class='astart'><input class="tt" type="text" value='`+data[i].start+`'/></td>

                                    <td class='afinish'><input class="tt" type="text" value='`+data[i].finish+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].size+`'/></td>

                                    <td class="acolor" style='display:none'><input class="tt" type="text" maxlength="7" value='`+data[i].color+`'/></td>

                                    <td class="acode"><div class="clr clr_responsible"></div><input class="tt" type="text" value='`+data[i].code+`'/></td>

                                    <td class="alocation"><div class="clr clr_location"></div><input class="tt" type="text" value='`+data[i].location+`'/></td>

                                    <td class="apriority"><div class="clr clr_priority"></div><input class="tt" type="text" value='`+data[i].priority+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].url+`'/></td>

                                    <td><input class="tt" type="text" value='`+data[i].note+`'/></td>

                                    <td><button type="button" class="btn btn-primary bt_go_detail" aaid="`+data[i].id+`" aid="`+data[i].activity_id+`">View</button></td>

                                </tr>`;

                }

                $('#table_activity tbody').html(strHtml);

                $('#bt_asave').attr('pid', pid);

                changePermission();
                loadSetting(ppid, "responsible", function(){
                    if(ppermission == "Edit Responsible Tasks") {
                        $('#table_activity tbody tr.tr').each(function() { 
                            isReadonly = true;
                            for(j=0; j<respData_permission.length; j++) {
                                if($(this).find('.acode input').val() == respData_permission[j].value) {
                                    isReadonly = false;
                                    break;
                                }
                            }
                            if(isReadonly) {
                                $(this).find('input').attr('readonly', 'true');
                            }
                        })
                    } else if(ppermission == "Read-Only") {
                        $('#table_activity tbody tr.tr').each(function() { 
                            $(this).find('input').attr('readonly', 'true');
                        })
                    }
                });
                

                trClickEvent();

                activityEvent();


                setFilter();

                setFinishDate();

                loadHolidays(pid);

                renderSetting();

                hideLoading();

            },

            error: function() {
                hideLoading();
            },

            dataType: 'json'

        });

}

function changePermission() { 

    if(ppermission == 'Read-Only') {
        $('.bt_go_detail').css('display', 'none');
        $('.bt_ssadd').css('display', 'none');
        $('.bt_ssremove').css('display', 'none');
        $('#bt_hadd').css('display', 'none');
        $('#bt_hremove').css('display', 'none');
        $('#bt_asave').css('display', 'none');
        $('#bt_adelete').css('display', 'none');
        $('#bt_aclear').css('display', 'none');
        $('#paste').css('display', 'none');
        $('#snapshot_desc').css('display', 'none');

        $('#table_act_detail_const tfoot').css('display', 'none');
        $('#table_act_detail_const .act_resp').attr('disabled', 'true');
        $('.bt_dcadd').css('display', 'none');
        $('.bt_dcremove').css('display', 'none');
        $('#bt_save_detail').css('display', 'none');
        $('#table_activity_constraint tfoot').css('display', 'none');
        $('#table_activity_constraint select').attr('disabled', 'true');
        $('.bt_atadd').css('display', 'none');
        $('.bt_acadd').css('display', 'none');
        $('.bt_ccadd').css('display', 'none');
        $('.bt_ccremove').css('display', 'none');
    } else if(ppermission == 'Edit Responsible Tasks') {

    } else { 
        $('.bt_go_detail').css('display', 'inline-block');
        $('.bt_ssadd').css('display', 'inline-block');
        $('.bt_ssremove').css('display', 'inline-block');
        $('#bt_hadd').css('display', 'inline-block');
        $('#bt_hremove').css('display', 'inline-block');
        $('#bt_asave').css('display', 'inline-block');
        $('#bt_adelete').css('display', 'inline-block');
        $('#bt_aclear').css('display', 'inline-block');
        $('#paste').css('display', 'inline-block');
        $('#snapshot_desc').css('display', 'inline-block');

        $('#table_act_detail_const tfoot').css('display', 'table-footer-group');
        $('#table_act_detail_const .act_resp').removeAttr('disabled');
        $('.bt_dcadd').css('display', 'inline-block');
        $('.bt_dcremove').css('display', 'inline-block');
        $('#bt_save_detail').css('display', 'inline-block');
        $('#table_activity_constraint tfoot').css('display', 'table-footer-group');
        $('#table_activity_constraint select').removeAttr('disabled');
        $('.bt_atadd').css('display', 'inline-block');
        $('.bt_acadd').css('display', 'inline-block');
        $('.bt_ccadd').css('display', 'inline-block');
        $('.bt_ccremove').css('display', 'inline-block');
    }

}

function renderSetting() {
    loadSettingAll(ppid, function(){
        setTimeout(function() {
            $('#table_activity tbody tr').each(function(){
                td1 = $(this).find('.acode input');
                td_color1 = $(this).find('.acode .clr_responsible');
                color1 = settingData['responsible']; 
                for(i=0; i<color1.length; i++) {
                    if(td1.val() == color1[i].value) {
                        td_color1.css('background', color1[i].color);
                        td_color1.attr('bg', color1[i].color);
                        break;
                    }
                }

                td2 = $(this).find('.alocation input');
                td_color2 = $(this).find('.alocation .clr_location');
                color2 = settingData['location']; 
                for(i=0; i<color2.length; i++) {
                    if(td2.val() == color2[i].value) {
                        td_color2.css('background', color2[i].color);
                        break;
                    }
                }

                td3 = $(this).find('.apriority input');
                td_color3 = $(this).find('.apriority .clr_priority');
                color3 = settingData['priority']; 
                for(i=0; i<color3.length; i++) {
                    if(td3.val() == color3[i].value) {
                        td_color3.css('background', color3[i].color);
                        break;
                    }
                }
            })     
        }, 1000);
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

function setDuration() { 

    $('#table_activity .tr').each(function(){


        var element = $(this);

        var duration = parseInt($(this).find("input:nth(2)").val()*1);

        var start = $(this).find("input:nth(3)").val();
        var finish = $(this).find("input:nth(4)").val();

        if(duration*1 == 0) { // change finish input
            
            if(finish*1 != 0)
                element.find("input:nth(3)").val("");

        } else if(finish != "" && start != "") {

            var start_stamp = new Date(start).getTime() / 1000;

            var finish_stamp = new Date(finish).getTime() / 1000;

            var oneday = 24 * 60 *60;
            
            var nd = (finish_stamp - start_stamp) / oneday;
            nd = Math.floor(nd);
            n = nd;

            for(i=1; i<n; i++) {

                ff = start_stamp + oneday*i;

                if (isRestDate(ff)) {
                    nd --;
                }

            }

            element.find("input:nth(2)").val(nd);
        }


    });
}

function setFinishDate(isduration = false) { 

    $('#table_activity .tr').each(function(){

        

        var element = $(this);

        var duration = parseInt($(this).find(".aduration input").val()*1);

        var start = $(this).find("input:nth(3)").val();
        var finish = $(this).find("input:nth(4)").val();

        if(duration == 0 && start != "" && finish != "") {
            var start_stamp = new Date(start).getTime() / 1000;

            var finish_stamp = new Date(finish).getTime() / 1000;

            var oneday = 24 * 60 *60;
            
            var nd = (finish_stamp - start_stamp) / oneday;
            nd = Math.floor(nd);
            n = nd;

            for(i=1; i<n; i++) {

                ff = start_stamp + oneday*i;

                if (isRestDate(ff)) {
                    nd --;
                }

            }

            element.find("input:nth(2)").val(nd);
        } else if(duration != 0 && start != "") {
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
        } else if(isduration && duration*1 != 0) {
            var finish_stamp = new Date(finish).getTime() / 1000;
            var start_stamp = finish_stamp;

            if (duration  == 1) {
                var f;
                do {
                    if (isRestDate(start_stamp)) {
                        f = true;
                        start_stamp -= 24 * 60 *60;
                    } else {
                        f = false;
                    }
                } while(f);
            } else {
                getStartDate(start_stamp, 1, duration);
                start_stamp = temp_finish_date;
            }

            var start = new Date(start_stamp * 1000);

            var year=start.getFullYear();
            year = year.toString().substr(-2);
            var month=start.getMonth();
            month=month+1;
            var day=start.getDate();

            start = month + "/" + day + "/" + year;
            element.find("input:nth(3)").val(start);
        } else if(duration*1 == 0 && isduration) { // change duration input
            if(start*1 != 0) {
                element.find("input:nth(4)").val("");
            }
        } else if(duration*1 == 0 && !isduration) { // change finish input
            if(start*1 != 0)
                element.find("input:nth(4)").val("");

        } else if(!isduration && start*1 == 0) {
            element.find("input:nth(2)").val("0");            
        }

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

function getStartDate(date, n, duration){
    
    if (!isRestDate(date)) {

        n++;

        date -= 24 * 60 *60;

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

        date -= 24 * 60 *60;

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

            if($('.tr.sel').length < 1) return;

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


function gantt() {
    $('#chart_gantt').addClass('sel');

        var data = [];

        $('#table_activity tbody tr').each(function(){

                item = [];

                    

                $(this).find('td input').each(function(){

                        item.push($(this).val());

                });
                item[6] = $(this).find('.clr_responsible').attr('bg');
                if (item[3] != '' && item[4] != ''){

                    if (filter_c == 'All')

                        data.push(item);

                    else if (item[7] == filter_c)

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


var filter_c = "All";
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
            item[6] = $(this).find('.clr_responsible').attr('bg');
            if (item[3] != '' && item[4] != ''){

                if (filter_c == 'All')

                    data.push(item);

                else if (item[7] == filter_c)

                    data.push(item);

                all_data.push(item);

            }

    });

    if(data.length > 0) {
        p_start_date = new Date(data[0][3]).getTime() / 1000;
        p_end_date = new Date(data[0][4]).getTime() / 1000;
    } else {
        p_start_date = new Date(data[0][3]).getTime() / 1000;
        p_end_date = new Date(data[0][4]).getTime() / 1000;
    }


    for (i=1; i<data.length; i++) {

        var third = new Date(data[i][3]).getTime() / 1000;

        var fourth = new Date(data[i][4]).getTime() / 1000;

        if (p_start_date > third)

            p_start_date = third;

        if (p_end_date < fourth)

            p_end_date = fourth;

    }


    console.log(p_start_date);
    console.log(p_end_date);
    j = 0;

    $('#filter option').each(function(){

        if ($(this).html() != 'All'){

            for (k = 0; k<all_data.length; k++){

                if ($(this).html() == all_data[k][7])

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

                    if ($(this).html() == data[k][7])

                        colors[j] = data[k][6];

                }



                j++;

            } else if (filter_c == $(this).html()) {

                var a = new Array();

                series[j] = {name:$(this).html(), data:a};



                for (k = 0;k<data.length;k++){

                    if ($(this).html() == data[k][7])

                        colors[j] = data[k][6];

                }

                j++;

            }

            filters[i++] = $(this).html();

        }

    });


    console.log(his_scale);
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

                if (data[i][7] == series[j].name){

                    var a_start_date = new Date(data[i][3]).getTime() / 1000;

                    var a_end_date = new Date(data[i][4]).getTime() / 1000;

                    for (k=a_start_date;k<=a_end_date;k=k+24*60*60){

                        var p = (k - p_start_date) / (24*60*60); 
                        p = Math.floor(p);

                        if (isRestDate(k)){

                            series[j].data[p] = 0;

                        } else {

                            series[j].data[p] += parseInt(data[i][5]*1);

                        }

                    }

                }

            }

        }
        console.log(series);

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

                if (data[i][7] == series[j].name){

                    

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

                                    series[j].data[p] += parseInt(data[i][5]*1);

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

                if (data[i][7] == series[j].name){

                    

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

                                    series[j].data[p] += parseInt(data[i][5]*1);

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


    for (i=0;i<series.length;i++){
        series[i]['color'] = all_colors[i];
    }
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
        if(filter_c == 'All' || (filter_c == filters[i]) && filter_c != 'All') {
            html_str += "<div style='float:left; width:15px;height:15px;background-color:" + all_colors[i] + "'></div><div style='float:left;padding-left:10px;padding-right:20px;'>" + filters[i] + "</div>";
        }
    }

    $('#mark').html(html_str);

}     

function showAlert() {

	$('.overlay').fadeIn('fast');

}



function hideAlert() {

	$('.overlay').fadeOut('fast');

}
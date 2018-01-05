$(function(){
	
	$('.bt_svadd').click(function(){
		tbname = $(this).parent().attr('tbname');
		var input_value = $('#activity_setting_' + tbname + ' .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  k = 1;
        $('#activity_setting_' + tbname + ' select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 1) return;

		sUrl = "api/activity_setting_attr_add.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	            $('#activity_setting_' + tbname + ' .div_combo select').append($('<option>', { 
                    value: input_value,
                    text : input_value 
                }));
                $('#activity_setting_' + tbname + ' .ui-widget.ui-widget-content').val('');
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	})
	$('.bt_svremove').click(function(){
		tbname = $(this).parent().attr('tbname');
		var input_value = $('#activity_setting_' + tbname + ' .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  k = 1;
        $('#activity_setting_' + tbname + ' select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 0) return;

		sUrl = "api/activity_setting_attr_del.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	        	$('#activity_setting_' + tbname + ' select :selected').remove();
                $('#activity_setting_' + tbname + ' .ui-widget.ui-widget-content').val('');
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	})

	$('.bt_suadd').click(function(){
		tbname = "userlist";
		var input_value = $('.div_user .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  k = 1;
        $('.div_user select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 1) return;

		sUrl = "api/activity_setting_attr_add.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	            $('.div_user select').append($('<option>', { 
                    value: input_value,
                    text : input_value 
                }));
                $('.div_user .ui-widget.ui-widget-content').val('');
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	});
	$('.bt_suremove').click(function(){
		tbname = "userlist";
		var input_value = $('.div_user .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  k = 1;
        $('.div_user select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 0) return;

		sUrl = "api/activity_setting_attr_del.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	            $('.div_user select :selected').remove();
                $('.div_user .ui-widget.ui-widget-content').val('');
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	});

})

var settingData = {};

function loadSettingAll(pid, callback) {
	loadSetting(pid, "responsible");
	loadSetting(pid, "location");
	loadSetting(pid, "priority");
	loadSetting(pid, "constraint");
	loadSetting(pid, "delay");
	loadSetting(pid, "userlist", function(){
		if(callback) callback();
	});
}
var respData_permission = [];
function loadSetting(pid, tbname, callback) {
	sUrl = "api/activity_setting_attr_get.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('tbname', tbname);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { 
        	if(tbname == 'responsible') {
        		respData_permission = [];
	        	if(ppermission == 'Edit Responsible Tasks') { 
	        		myemail = $('#myemail').val(); 
	        		for(i=0; i<data.length; i++) { 
	        			respusers = data[i].user; 
	        			if(respusers.indexOf(myemail) > -1) {
	        				respData_permission.push(data[i]);
	        			} else {
	        				//respData_permission.splice(i, 1);
	        			}
	        		}	
	        	}
	        	console.log(data);
	        }
        	settingData[tbname] = data;
        	if(callback) callback(data);
        	if(tbname == 'userlist') {
        		$('.div_user select').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('.div_user select').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	            }
        	} else {
	        	$('#activity_setting_' + tbname + ' .div_combo select').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('#activity_setting_' + tbname + ' .div_combo select').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	            }
	        }
	        if(tbname == 'responsible') {
	        	if(ppermission != 'Administrator') {
	        		myemail = $('#myemail').val();
	        		
	        	}
	        	$('#duration_print_option table tbody').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('#duration_print_option table tbody').append(`
	            		<tr>
                            <td><span class='respcolor' style='background:`+data[i].color+`'></span><span class='respvalue'>`+data[i].value+`</span></td>
                            <td class='dqn'><input class='tt' value="1"></td>
                        </tr>
            		`);
	            }
	        	$('#act_detail_resp').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('#act_detail_resp').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	            }
	            $('.act_detail_const_resp').html("");
	        	for(i=0;i<respData_permission.length;i++) {
	            	$('.act_detail_const_resp').append($('<option>', { 
	                    value: respData_permission[i].value,
	                    text : respData_permission[i].value 
	                }));
	            }
	        } else if(tbname == 'location') {
	        	$('#act_detail_location').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('#act_detail_location').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	            }
	        } else if(tbname == 'priority') {
	        	$('#act_detail_priority').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('#act_detail_priority').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	            }
	        } else if(tbname == 'delay') {
	        	$('#act_detail_delay').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('#act_detail_delay').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	            }
	        }
        },
        error: function() {
        },
        dataType: 'json'
    });
}
function getColor(tbname, value) {
	sUrl = "api/activity_setting_attr_get_color.php";
    var form_data = new FormData();
    form_data.append('pid', ppid);
    form_data.append('tbname', tbname);
    form_data.append('value', value);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data){       
        	if(data.length > 0)
        		setColor(tbname, data[0].color);
        },
        error: function() {
        },
        dataType: 'json'
    });
}
function setColor(tbname, color) {
	if(color == "") color = '#000';
	if(tbname == "responsible")
		obj = $('#color1');
	else if(tbname == "location")
		obj = $('#color2');
	else if(tbname == "priority")
		obj = $('#color3');
	else if(tbname == "constraint")
		obj = $('#color4');
	else if(tbname == "delay")
		obj = $('#color5');
	obj.spectrum("set", color);
	obj.prev().val(color);
	obj.prev().css('color', color);
}
function setColorDB(tbname, value, color) {
	//console.log(tbname, value, color);return;
	sUrl = "api/activity_setting_attr_set_color.php";
    var form_data = new FormData();
    form_data.append('pid', ppid);
    form_data.append('tbname', tbname);
    form_data.append('value', value);
    form_data.append('color', color);
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
function getUser() {
	sUrl = "api/user_get.php";
    var form_data = new FormData();
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data){
        	userlist = data;
        	
        	$('#setting_user table tbody').html("");
        	/*
        	$('#div_assign_user_dlg .overlay_content div.div_cont').html("");
        	for(i=0; i<data.length; i++) {
        		if($('#myemail').val() == data[i].email) {
	        		strHtml = `
	        			<tr id='`+data[i].id+`'>
		                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true" style="display:none"></i></td>
		                    <td>`+data[i].name+`</td>
		                    <td>`+data[i].email+`</td>
		                    <td>
		                        <select class="form-control sselect">
		                            <option value="Administrator">Administrator</option>
		                            <option value="Edit All Tasks">Edit All Tasks</option>
		                            <option value="Edit Responsible Tasks">Edit Responsible Tasks</option>
		                            <option value="Read-Only">Read-Only</option>
		                            <option value="">None</option>
		                        </select>
		                    </td>
		                </tr>
	        		`;
	        		$('#setting_user table tbody').append(strHtml);
	        		//$('#setting_user table tbody tr:last-child').find('.sselect').val(data[i].permission);
	        	}
        		//=======
        		strHtml = `
        			<div class="form-check">
                        <label class="form-check-label" email='`+data[i].email+`'>
                            <input type="checkbox" class="form-check-input">
                            <span>`+data[i].name+`</span>
                        </label>
                    </div>`;
        		$('#div_assign_user_dlg .overlay_content div.div_cont').append(strHtml);
        	}
        	*/

			sUrl = "api/permission_get.php";
		    var form_data = new FormData();
		    form_data.append('pid', ppid);
		    $.ajax({
		        type: "POST",
		        url: sUrl,
		        cache: false,
		        processData: false, 
		        contentType: false,
		        data: form_data,
		        success: function(data){ 
		        	strDisabled = "";
		        	$('#div_assign_user_dlg .overlay_content div.div_cont').html("");
		        	for(i=0; i<data.length; i++) { 
		        		if($('#myemail').val() == data[i].email) {
		        			strDisabled = "disabled";
		        		} else {
		        			strDisabled = "";
		        		}
			        	strHtml = `
		        			<tr id='`+data[i].id+`'>
		                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
		                    <td>`+getNameFromEmail(data[i].email)+`</td>
		                    <td>`+data[i].email+`</td>
		                    <td>
		                        <select class="form-control sselect" `+strDisabled+`>
		                            <option value="Administrator">Administrator</option>
		                            <option value="Edit All Tasks">Edit All Tasks</option>
		                            <option value="Edit Responsible Tasks">Edit Responsible Tasks</option>
		                            <option value="Read-Only">Read-Only</option>
		                            <option value="">None</option>
		                        </select>
		                    </td>
		                </tr>
		        		`;
		       			$('#setting_user table tbody').append(strHtml);
		       			$('#setting_user table tbody tr:last-child').find('.sselect').val(data[i].permission);

		       			strHtml = `
		        			<div class="form-check">
		                        <label class="form-check-label" email='`+data[i].email+`'>
		                            <input type="checkbox" class="form-check-input">
		                            <span>`+data[i].name+`</span>
		                        </label>
		                    </div>`;
		        		$('#div_assign_user_dlg .overlay_content div.div_cont').append(strHtml);
		       		}
		        	settingUserTrEvent();
		        },
		        error: function() {
		        },
		        dataType: 'json'
		    });
        	settingUserTrEvent();
        },
        error: function() {
        },
        dataType: 'json'
    });
}

function getNameFromEmail(email) {
	for(j=0; j<userlist.length; j++) {
		if(userlist[j].email == email) {
			return userlist[j].name;
		}
	}
	return "";
}
$(function(){
	
	// init 
	
	$('.setting_item').click(function(){
		$('.setting_item').removeClass('sel');
		$('.setting_tab').css('display', 'none');
		$(this).addClass('sel');
		if($(this).attr('id') == 'setting_item_user') {
			$('#setting_user').css('display', 'block');
			getUser();
		} else if($(this).attr('id') == 'setting_item_resp') {
			$('#setting_resp').css('display', 'block');
			getResponsible();
		} else if($(this).attr('id') == 'setting_item_location') {
			$('#setting_location').css('display', 'block');
			getLocation();
		} else if($(this).attr('id') == 'setting_item_priority') {
			$('#setting_priority').css('display', 'block');
			getPriority();
		} else if($(this).attr('id') == 'setting_item_constraint') {
			$('#setting_constraint').css('display', 'block');
			getConstraint();
		} else if($(this).attr('id') == 'setting_item_delay') {
			$('#setting_delay').css('display', 'block');
			getDelay();
		} else if($(this).attr('id') == 'setting_item_snapshot') {
			$('#setting_snapshot').css('display', 'block');
			getSnapshot();
		} else if($(this).attr('id') == 'setting_item_calendar') {
			$('#setting_calendar').css('display', 'block');
			getCalendar();
		}
	})

	$('#bt_assign_user_ok').click(function(){
		$('#div_assign_user_dlg').fadeOut('fast');
		
		trsel.find('.assign_user').html("");
		str_email = "";
		$('#div_assign_user_dlg .form-check-label').each(function(){
			if($(this).find('input:checked').length > 0) {
				uemail = $(this).attr('email');
				uname = $(this).find('span').html();
				if(trsel.find('.assign_user').html() == "") trsel.find('.assign_user').append(uname);
				else trsel.find('.assign_user').append(", " + uname);
				if(str_email == "") str_email += uemail;
				else str_email += "," + uemail;
			}
		})
		trsel.find('.assign_user').attr('email', str_email);

		value = trsel.find('.td_uname input').val();
		sUrl = "api/activity_setting_attr_resp_user.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('value', value);
	    form_data.append('user', str_email);
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
	})

	$('#setting_user .saddcircle').click(function(){ 
		strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'></td>
	                    <td class='td_uemail'><input type='text' class='tt'/></td>
	                    <td>
	                        <select class="form-control sselect">
	                            <option value="Administrator">Administrator</option>
	                            <option value="Edit All Tasks">Edit All Tasks</option>
	                            <option value="Edit Responsible Tasks">Edit Responsible Tasks</option>
	                            <option value="Read-Only">Read-Only</option>
	                            <option value="">None</option>
	                        </select>
	                    </td>
	                </tr>
        		`;
       	$('#setting_user table tbody').append(strHtml);
       	$('#setting_user table tbody tr:last-child').find('.td_uemail input').focus();
       	settingUserTrEvent();
	})

	$('#setting_resp .saddcircle').click(function(){ 
		if($('#newresp').length > 0) return;
		strHtml = `
        			<tr id='newresp'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value=''/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left;color:#000" value='#000' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                    <td>
	                        <div class='assign_user'></div>
	                    </td>
	                    <td>
	                        <i class="fa fa-plus-circle sassigncircle" aria-hidden="true">
	                    </td>
	                </tr>
        		`;
       	$('#setting_resp table tbody').append(strHtml);
       	settingRespTrEvent();
       	$('#bt_setting_resp_save').click();
	})

	$('#setting_snapshot .saddcircle').click(function(){ 
		if($('#newsnapshot').length > 0) return;
		strHtml = `
        			<tr id='newsnapshot'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='' readonly/></td>
	                    <td class='td_uemail'>
	                    	<input type='text' class='tt' value=''/>
	                    </td>
	                    <td>
	                        <div class='create_date'>`+today+`</div>
	                    </td>
	                </tr>
        		`;
       	$('#setting_snapshot table tbody').append(strHtml);
       	settingSnapshotTrEvent();
       	$('#bt_setting_snapshot_save').click();
	})

	$('#setting_calendar .saddcircle').click(function(){ 
		if($('#newcalendar').length > 0) return;
		strHtml = `
        			<tr id='newcalendar'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value=''/></td>
	                    <td class='td_week'>
	                    	<select class='form-control'>
	                    		<option value='5'>5 Days</option>
	                    		<option value='6'>6 Days</option>
	                    		<option value='7'>7 Days</option>
	                    	</select>
	                    </td>
	                    <td class='td_cal'>
	                    	<input type='text' />
	                    	<i class="fa fa-calendar" aria-hidden="true"></i>
	                    </td>
	                    <td>
	                        <div class='cdefault'></div>
	                    </td>
	                </tr>
        		`;
       	$('#setting_calendar table tbody').append(strHtml);
       	if($('#setting_calendar table tbody tr').length == 1) {
   			$('#setting_calendar table tbody tr:last-child .sdelete').css('display', 'none');
   			$('#setting_calendar table tbody tr:last-child .cdefault').addClass('sel');
   		}
       	settingCalendarTrEvent();
       	$('#bt_setting_calendar_save').click();
	})

	$('#setting_location .saddcircle').click(function(){ 
		if($('#newlocation').length > 0) return;
		strHtml = `
        			<tr id='newlocation'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value=''/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left;color:#000" value='#000' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                </tr>
        		`;
       	$('#setting_location table tbody').append(strHtml);
       	settingLocationTrEvent();
       	$('#bt_setting_location_save').click();
	})
	$('#setting_priority .saddcircle').click(function(){ 
		if($('#newpriority').length > 0) return;
		strHtml = `
        			<tr id='newpriority'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value=''/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left;color:#000" value='#000' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                </tr>
        		`;
       	$('#setting_priority table tbody').append(strHtml);
       	settingPriorityTrEvent();
       	$('#bt_setting_priority_save').click();
	})
	$('#setting_constraint .saddcircle').click(function(){ 
		if($('#newconstraint').length > 0) return;
		strHtml = `
        			<tr id='newconstraint'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value=''/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left;color:#000" value='#000' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                </tr>
        		`;
       	$('#setting_constraint table tbody').append(strHtml);
       	settingConstraintTrEvent();
       	$('#bt_setting_constraint_save').click();
	})
	$('#setting_delay .saddcircle').click(function(){ 
		if($('#newdelay').length > 0) return;
		strHtml = `
        			<tr id='newdelay'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value=''/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left;color:#000" value='#000' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                </tr>
        		`;
       	$('#setting_delay table tbody').append(strHtml);
       	settingDelayTrEvent();
       	$('#bt_setting_delay_save').click();
	})

	$('#bt_setting_resp_save').click(function(){ 
		sdata = [];
		semail = [];
		$('#setting_resp table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") 
				sdata.push([obj.find('.td_uname input').val(), obj.find('.div_color input.color_text').val()]);
			email = obj.find('.assign_user').attr('email');
			if(email)
				email = email.replace(/\,/g, ':');
			semail.push(email);
		});
		$('#newresp').attr('id', '');
		saveSettingAttr('responsible', sdata, semail);
	});

	$('#bt_setting_snapshot_save').click(function(){ 
		sdata = [];
		$('#setting_snapshot table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") {
				sdata.push([obj.find('.td_uname input').val(), '', obj.find('.td_uemail input').val(), obj.find('.create_date').html()]);
			}
		});
		$('#newsnapshot').attr('id', '');
		saveSettingAttr('snapshot', sdata);
	});

	$('#bt_setting_calendar_save').click(function(){ 
		sdata = [];
		$('#setting_calendar table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") {
				holiday = obj.find('.td_cal input').val();
				holiday = holiday.replace(/,/g , ":");
				sdata.push([obj.find('.td_uname input').val(), obj.find('.td_week select').val(), holiday, obj.find('.cdefault').hasClass('sel')]);
			}
		});
		$('#newcalendar').attr('id', '');
		saveSettingAttr('calendar', sdata);
	});

	$('#bt_setting_location_save').click(function(){ 
		sdata = [];
		$('#setting_location table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") 
				sdata.push([obj.find('.td_uname input').val(), obj.find('.div_color input.color_text').val()]);
		});
		$('#newlocation').attr('id', '');
		saveSettingAttr('location', sdata);
	});

	$('#bt_setting_priority_save').click(function(){ 
		sdata = [];
		$('#setting_priority table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") 
				sdata.push([obj.find('.td_uname input').val(), obj.find('.div_color input.color_text').val()]);
		});
		$('#newpriority').attr('id', '');
		saveSettingAttr('priority', sdata);
	});
	$('#bt_setting_constraint_save').click(function(){ 
		sdata = [];
		$('#setting_constraint table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") 
				sdata.push([obj.find('.td_uname input').val(), obj.find('.div_color input.color_text').val()]);
		});
		$('#newconstraint').attr('id', '');
		saveSettingAttr('constraint', sdata);
	});
	$('#bt_setting_delay_save').click(function(){ 
		sdata = [];
		$('#setting_delay table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") 
				sdata.push([obj.find('.td_uname input').val(), obj.find('.div_color input.color_text').val()]);
		});
		$('#newdelay').attr('id', '');
		saveSettingAttr('delay', sdata);
	});


	$('#bt_setting_user_save').click(function(){
		//updateUserPermission(email, $(this).parent().next().find('select').val(), ppid);
	})
});

function saveSettingAttr(tbname, data, semail="") {
	sUrl = "api/activity_setting_attr_save.php";
    var form_data = new FormData();
    form_data.append('pid', ppid);
    form_data.append('tbname', tbname);
    form_data.append('data', data);
    form_data.append('semail', semail);
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

function getResponsible() {
	loadSetting(ppid, 'responsible', function(data){
		$('#setting_resp table tbody').html("");
		for(i=0; i<data.length; i++) {
			var str_assign_user = "";
			var str_email = "";
			var str_name = "";
			var ary = [];
			if(data[i].user != null) ary = data[i].user.split(',');
			for(j=0; j<ary.length; j++) {
				for(n=0; n<userlist.length; n++) {
					if(ary[j] == userlist[n].email) {
						if(str_email == "") str_email = userlist[n].email;
						else str_email = str_email + "," + userlist[n].email;
						if(str_name == "") str_name = userlist[n].name;
						else str_name = str_name + ", " + userlist[n].name;
					}
				}
			}
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].value+`'/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left; color:`+data[i].color+`" value='`+data[i].color+`' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                    <td>
	                        <div class='assign_user' email='`+str_email+`'>`+str_name+`</div>
	                    </td>
	                    <td>
	                        <i class="fa fa-plus-circle sassigncircle" aria-hidden="true">
	                    </td>
	                </tr>
        		`;
       		$('#setting_resp table tbody').append(strHtml);
		}
   		settingRespTrEvent();
	});
}

function settingRespTrEvent() {
	$('#setting_resp table tbody .div_color .color').each(function(){
		obj = $(this);
		obj.spectrum({
		    color: obj.prev().val(),
		    change: function(color) { 
		    	obj = $(this);
		    	value = obj.parent().parent().prev().find('input').val();
		    	color = color.toHexString();
			    obj.prev().val(color);
			    obj.prev().css('color', color);
			    if(obj.parent().parent().prev().parent().attr('id') != 'newresp')
			    	setColorDB("responsible", value, color);
			}
		});
	})
	$('#setting_resp table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(1, uid);
	})
	$('#setting_resp table tbody tr .sassigncircle').click(function(){
		trsel = $(this).parent().parent();
		$('#div_assign_user_dlg').fadeIn('fast');
		email_list = $(this).parent().prev().find('.assign_user').attr('email');
		ary = [];
		if(email_list)
			ary = email_list.split(",");
		$('#div_assign_user_dlg .form-check-label').each(function(){
			bcheck = false;
			for(i=0; i<ary.length; i++) {
				if($(this).attr('email') == ary[i]) {
					$(this).find('input').prop('checked', true);
					bcheck = true;
					break;
				}
			}
			if(!bcheck) {
				$(this).find('input').prop('checked', false);
			}
		});
	})
}
var trsel = null;
//====== 2

function getLocation() {
	loadSetting(ppid, 'location', function(data){
		$('#setting_location table tbody').html("");
		for(i=0; i<data.length; i++) {
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].value+`'/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left; color:`+data[i].color+`" value='`+data[i].color+`' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                    <td>
	                        <div class='assign_user'></div>
	                    </td>
	                </tr>
        		`;
       		$('#setting_location table tbody').append(strHtml);
		}
   		settingLocationTrEvent();
	});
}

function settingLocationTrEvent() {
	$('#setting_location table tbody .div_color .color').each(function(){
		obj = $(this);
		obj.spectrum({
		    color: obj.prev().val(),
		    change: function(color) { 
		    	obj = $(this);
		    	value = obj.parent().parent().prev().find('input').val();
		    	color = color.toHexString();
			    obj.prev().val(color);
			    obj.prev().css('color', color);
			    if(obj.parent().parent().prev().parent().attr('id') != 'newresp')
			    	setColorDB("location", value, color);
			}
		});
	})
	$('#setting_location table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(1, uid);
	})
}
//====== 3

function getPriority() {
	loadSetting(ppid, 'priority', function(data){
		$('#setting_priority table tbody').html("");
		for(i=0; i<data.length; i++) {
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].value+`'/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left; color:`+data[i].color+`" value='`+data[i].color+`' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                    <td>
	                        <div class='assign_user'></div>
	                    </td>
	                </tr>
        		`;
       		$('#setting_priority table tbody').append(strHtml);
		}
   		settingPriorityTrEvent();
	});
}

function settingPriorityTrEvent() {
	$('#setting_priority table tbody .div_color .color').each(function(){
		obj = $(this);
		obj.spectrum({
		    color: obj.prev().val(),
		    change: function(color) { 
		    	obj = $(this);
		    	value = obj.parent().parent().prev().find('input').val();
		    	color = color.toHexString();
			    obj.prev().val(color);
			    obj.prev().css('color', color);
			    if(obj.parent().parent().prev().parent().attr('id') != 'newresp')
			    	setColorDB("priority", value, color);
			}
		});
	})
	$('#setting_priority table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(1, uid);
	})
}
//====== 4

function getConstraint() {
	loadSetting(ppid, 'constraint', function(data){
		$('#setting_constraint table tbody').html("");
		for(i=0; i<data.length; i++) {
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].value+`'/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left; color:`+data[i].color+`" value='`+data[i].color+`' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                    <td>
	                        <div class='assign_user'></div>
	                    </td>
	                </tr>
        		`;
       		$('#setting_constraint table tbody').append(strHtml);
		}
   		settingConstraintTrEvent();
	});
}

function settingConstraintTrEvent() {
	$('#setting_constraint table tbody .div_color .color').each(function(){
		obj = $(this);
		obj.spectrum({
		    color: obj.prev().val(),
		    change: function(color) { 
		    	obj = $(this);
		    	value = obj.parent().parent().prev().find('input').val();
		    	color = color.toHexString();
			    obj.prev().val(color);
			    obj.prev().css('color', color);
			    if(obj.parent().parent().prev().parent().attr('id') != 'newresp')
			    	setColorDB("constraint", value, color);
			}
		});
	})
	$('#setting_constraint table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(1, uid);
	})
}
//====== 5

function getDelay() {
	loadSetting(ppid, 'delay', function(data){
		$('#setting_delay table tbody').html("");
		for(i=0; i<data.length; i++) {
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].value+`'/></td>
	                    <td class='td_uemail'>
	                    	<div class="div_color">
	                    		<input type='text' class="color_text" readonly style="float: left; color:`+data[i].color+`" value='`+data[i].color+`' />
                            	<input type='text' class="color" style="float: left;" />
	                    	</div>
	                    </td>
	                    <td>
	                        <div class='assign_user'></div>
	                    </td>
	                </tr>
        		`;
       		$('#setting_delay table tbody').append(strHtml);
		}
   		settingDelayTrEvent();
	});

}

function settingDelayTrEvent() {
	$('#setting_delay table tbody .div_color .color').each(function(){
		obj = $(this);
		obj.spectrum({
		    color: obj.prev().val(),
		    change: function(color) { 
		    	obj = $(this);
		    	value = obj.parent().parent().prev().find('input').val();
		    	color = color.toHexString();
			    obj.prev().val(color);
			    obj.prev().css('color', color);
			    if(obj.parent().parent().prev().parent().attr('id') != 'newresp')
			    	setColorDB("delay", value, color);
			}
		});
	})
	$('#setting_delay table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(1, uid);
	})
}

//====== 6 - spanshot setting

function getSnapshot() {
	loadSetting(ppid, 'snapshot', function(data){
		$('#setting_snapshot table tbody').html("");
		for(i=0; i<data.length; i++) {
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].value+`' readonly/></td>
	                    <td class='td_uemail'>
	                    	<input type='text' class='tt' value='`+data[i].desc+`'/>
	                    </td>
	                    <td>
	                        <div class='create_date'>`+data[i].date+`</div>
	                    </td>
	                </tr>
        		`;
       		$('#setting_snapshot table tbody').append(strHtml);
		}
   		settingSnapshotTrEvent();
	});

}

function settingSnapshotTrEvent() {
	$('#setting_snapshot table tbody .td_uname input').each(function(){
		obj = $(this);
		date = obj.val(); 
		obj.datepicker({
          	inline: true,
          	dateFormat: "mm/dd/y"
        });
		
		if(date != "") {
	        obj.datepicker("setDate", date);
	    }
	})
	$('#setting_snapshot table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(2, uid);
	})
}

//====== 7 - calendar setting

function getCalendar() {
	loadSetting(ppid, 'calendar', function(data){
		$('#setting_calendar table tbody').html("");
		for(i=0; i<data.length; i++) {
			strHtml = `
        			<tr id=''>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].cname+`' readonly/></td>
	                    <td class='td_week'>
	                    	<select class='form-control'>
	                    		<option value='5'>5 Days</option>
	                    		<option value='6'>6 Days</option>
	                    		<option value='7'>7 Days</option>
	                    	</select>
	                    </td>
	                    <td class='td_cal' value='`+data[i].choliday+`'>
	                    	<input type='text' />
	                    	<i class="fa fa-calendar" aria-hidden="true"></i>
	                    </td>
	                    <td>
	                        <div class='cdefault'></div>
	                    </td>
	                </tr>
        		`;
       		$('#setting_calendar table tbody').append(strHtml);
       		$('#setting_calendar table tbody tr:last-child .td_week select').val(data[i].cweek);
       		if(i == 0) {
       			$('#setting_calendar table tbody tr:last-child .sdelete').css('display', 'none');
       		}
       		if(data[i].cdefault == 'true') {
       			$('#setting_calendar table tbody tr:last-child .cdefault').addClass('sel');
       		}
		}
   		settingCalendarTrEvent();
	});

}

function settingCalendarTrEvent() {
	$('#setting_calendar table tbody .td_cal input').each(function(){
		obj = $(this);
		holiday = obj.parent().attr('value');
		dates = [];
		if(holiday && holiday != "") {
			ary = holiday.split(':');
			for(i=0;i<ary.length;i++) {
				dates.push(ary[i].trim());
			}
			obj.multiDatesPicker({
	      		onSelect: function(){
	      			$('.td_uname input').focus();
	      		},    	
	      		addDates: dates
	        });
		} else {
			obj.multiDatesPicker({
	      		onSelect: function(){
	      			$('.td_uname input').focus();
	      		}
	        });
		}
	})
	$('#setting_calendar table tbody .cdefault').unbind('click');
	$('#setting_calendar table tbody .cdefault').click(function(){
		$('#setting_calendar table tbody .cdefault').removeClass('sel');
		$(this).addClass('sel');
	})
	$('#setting_calendar table tbody .sdelete').unbind('click');
	$('#setting_calendar table tbody .sdelete').click(function(){
		uid = $(this).parent().next().find('input').val();
		showAlertDeleteSetting(3, uid);
	})
}

//==================================================================
var myTimer = null;
function settingClickInit() {
	$('#setting_item_user').click();
	alertEvent();
}
function settingUserTrEvent() {
	$('#setting_user table tbody .sselect').change(function(){
		val = $(this).val();
		uid = $(this).parent().parent().attr('id'); 
		objEmail = $(this).parent().prev();
		if(objEmail.find('input').length > 0) 
			email = objEmail.find('input').val();
		else 
			email = $(this).parent().prev().html(); 
		if($(this).parent().parent().find('.sdelete').css('display') == 'none') {
			updatePermission(val, uid);
		} else {
			updateUserPermission(email, val, ppid);
		}
	})
	$('#setting_user table tbody .sdelete').click(function(){
		uid = $(this).parent().parent().attr('id');
		showAlertDeleteSetting(0, uid);
	})
	$('#setting_user table tbody .td_uemail input').keyup(function(e){
		email = $(this).val();
		for(i=0; i<userlist.length; i++) {
			if(userlist[i].email == email) {
				$(this).parent().prev().html(userlist[i].name);
				val = $(this).parent().next().find('select').val();
				if(myTimer != null) clearTimeout(myTimer);
				myTimer = setTimeout(function(){
					updateUserPermission(email, val, ppid);
				}, 500);

				break;
			}
		}
	})
}
function updateUserPermission(email, permission, pid) {
	sUrl = "api/permission_update.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('email', email);
    form_data.append('permission', permission);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data){ 
        	if($('#setting_user table tbody .td_uemail input').length > 0) {
        		obj = $('#setting_user table tbody .td_uemail input');
        		val = obj.val();
        		obj.parent().html(val);
        	}
        },
        error: function() {
        },
        dataType: 'json'
    });
}
function updatePermission(val, uid) {
	sUrl = "api/user_update.php";
    var form_data = new FormData();
    form_data.append('uid', uid);
    form_data.append('permission', val);
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
var setting_item_type = 0;
var userlist = [];
function showAlertDeleteSetting(itype, id) {
	setting_item_type = itype;
	if(itype == 0) {
		$('#alert_delete_setting .alert_title').html("Delete this user?");
		$('#alert_delete_setting .bt_alert_yes').attr("id", id);
	} else if(itype == 1) {
		$('#alert_delete_setting .alert_title').html("Delete this responsible?");
		$('#alert_delete_setting .bt_alert_yes').attr("id", id);
	} else if(itype == 2) {
		$('#alert_delete_setting .alert_title').html("Delete this snapshot?");
		$('#alert_delete_setting .bt_alert_yes').attr("id", id);
	}
	$('#alert_delete_setting').fadeIn('fast');
}
function alertEvent() {
	$('#alert_delete_setting .bt_alert_yes').click(function(){
		var sUrl = "";
		var id = $(this).attr('id');
	    var form_data = new FormData();

		if(setting_item_type == 0) {
			sUrl = "api/permission_del.php";
	    	form_data.append('uid', id);
		} else if(setting_item_type == 1) {
			sUrl = "api/activity_setting_attr_del.php";
			form_data.append('pid', ppid);
		    form_data.append('tbname', 'responsible');
		    form_data.append('value', id);
		} else if(setting_item_type == 2) {
			sUrl = "api/activity_setting_attr_del.php";
			form_data.append('pid', ppid);
		    form_data.append('tbname', 'snapshot');
		    form_data.append('value', id);
		}
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	        	if(setting_item_type == 0) {
	        		getUser();
	        	} else if(setting_item_type == 1) {
	        		getResponsible();
	        	} else if(setting_item_type == 2) {
	        		getSnapshot();
	        	}
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	});
	$('#alert_delete_setting .bt_alert_cancel').click(function(){
		$('#alert_delete_setting').fadeOut('fast');		
	});
}

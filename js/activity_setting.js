$(function(){
	$('#color1').spectrum({
	    color: "#000",
	    change: function(color) {
	    	obj = $('#color1');
	    	color = color.toHexString();
		    obj.prev().val(color);
		    obj.prev().css('color', color);
		    setColorDB("responsible", color);
		}
	});
	$('#color2').spectrum({
	    color: "#000",
	    change: function(color) {
	    	obj = $('#color2');
	    	color = color.toHexString();
		    obj.prev().val(color);
		    obj.prev().css('color', color);
		    setColorDB("location", color);
		}
	});
	$('#color3').spectrum({
	    color: "#000",
	    change: function(color) {
	    	obj = $('#color3');
	    	color = color.toHexString();
		    obj.prev().val(color);
		    obj.prev().css('color', color);
		    setColorDB("priority", color);
		}
	});
	$('#color4').spectrum({
	    color: "#000",
	    change: function(color) {
	    	obj = $('#color4');
	    	color = color.toHexString();
		    obj.prev().val(color);
		    obj.prev().css('color', color);
		    setColorDB("constraint", color);
		}
	});
	$('#color5').spectrum({
	    color: "#000",
	    change: function(color) {
	    	obj = $('#color5');
	    	color = color.toHexString();
		    obj.prev().val(color);
		    obj.prev().css('color', color);
		    setColorDB("delay", color);
		}
	});
	setColor("responsible", '#000');
	setColor("location", '#000');
	setColor("priority", '#000');
	setColor("constraint", '#000');
	setColor("delay", '#000');

	$( "#activity_setting_responsible select.value" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
			    var input_value = $('#activity_setting_responsible .ui-widget.ui-widget-content').val();
			    getColor("responsible", input_value);
			}, 500);
		}
	});
	$( "#activity_setting_location select.value" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
			    var input_value = $('#activity_setting_location .ui-widget.ui-widget-content').val();
			    getColor("location", input_value);
			}, 500);
		}
	});
	$( "#activity_setting_priority select.value" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
			    var input_value = $('#activity_setting_priority .ui-widget.ui-widget-content').val();
			    getColor("priority", input_value);
			}, 500);
		}
	});
	$( "#activity_setting_constraint select.value" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
			    var input_value = $('#activity_setting_constraint .ui-widget.ui-widget-content').val();
			    getColor("constraint", input_value);
			}, 500);
		}
	});
	$( "#activity_setting_delay select.value" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
			    var input_value = $('#activity_setting_delay .ui-widget.ui-widget-content').val();
			    getColor("delay", input_value);
			}, 500);
		}
	});
	$( ".user" ).combobox({
	});

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
        	settingData[tbname] = data;
        	if(callback) callback();
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
function setColorDB(tbname, color) {
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

	obj_prev = obj.parent().prev().find('.ui-widget.ui-widget-content');
	if(obj_prev.length == 0 || obj_prev.val() == "" || obj_prev.val() == 'undefined') return;
	sUrl = "api/activity_setting_attr_set_color.php";
    var form_data = new FormData();
    form_data.append('pid', ppid);
    form_data.append('tbname', tbname);
    form_data.append('value', obj_prev.val());
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
        	
        },
        error: function() {
        },
        dataType: 'json'
    });
}
$(function(){
	/*
    $('#snapshot_date').datepicker({
        inline: true
    });
    */

    $('#snapshot_date').val(today);
	$( "#snapshot" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
	    		$('#snapshot_desc').val("");
	    		//$('#snapshot_date').val("");
			    var input_value = $('.div_snapshot .ui-widget.ui-widget-content').val();
			    for(i=0; i<snapshot.length; i++) {
			    	if(snapshot[i].value == input_value) {
			    		$('#snapshot_desc').val(snapshot[i].desc);
			    		ssid = snapshot[i].id;
			    		loadActivity(ppid);
			    		//$('#snapshot_date').val(snapshot[i].date);
			    		break;
			    	}
			    }
			}, 500);
		}
	});

	$('.bt_ssadd').click(function(){
		if($('#snapshot_desc').val() == "") {
			alert("please input snapshot description");
			return;
		}
		if($('#snapshot_date').val() == "") {
			alert("please input snapshot creation date");
			return;
		}
		var tbname = "snapshot";
		var input_value = $('.div_snapshot .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  {
        	k = 1;
        	return;
        }
        $('.div_snapshot select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 1) {
        	sUrl = "api/activity_snapshot_update.php";
		    var form_data = new FormData();
		    form_data.append('pid', ppid);
		    form_data.append('tbname', tbname);
		    form_data.append('value', input_value);
		    form_data.append('desc', $('#snapshot_desc').val());
		    form_data.append('date', $('#snapshot_date').val());
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
        	return;
        }
        showLoading();
		sUrl = "api/activity_snapshot_add.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    form_data.append('desc', $('#snapshot_desc').val());
	    form_data.append('date', $('#snapshot_date').val());
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	            $('.div_snapshot select').append($('<option>', { 
                    value: input_value,
                    text : input_value 
                }));
                $('.div_snapshot .ui-widget.ui-widget-content').val('');
                $('#snapshot_desc').val('');
                $('#snapshot_date').val('');
                loadSnapshot(ppid, true);
                hideLoading();
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	})
	$('.bt_ssremove').click(function(){
		var tbname = "snapshot";
		var input_value = $('.div_snapshot .ui-widget.ui-widget-content').val();
		if(input_value == 'current') return;

        var k = 0;
        if (input_value == '')  k = 1;
        $('.div_snapshot select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 0) return;

		sUrl = "api/activity_snapshot_del.php";
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
	        	$('.div_snapshot select :selected').remove();
                $('.div_snapshot .ui-widget.ui-widget-content').val('');
                loadSnapshot(ppid, true);
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	})

	//=========== init ============
	
})
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = mm+'/'+dd+'/'+yyyy;

var snapshot = [];
var ssid = 0;

function loadSnapshot(pid, onlydata=false) {
	$('#snapshot_date').val(today);
	var tbname = "snapshot";
	sUrl = "api/activity_snapshot_get.php";
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
        	snapshot = data; 
        	if(!onlydata) {
	    		$('.div_snapshot select').html("");
	    		$('#snapshot_tracking').html("");
	        	for(i=0;i<data.length;i++) {
	            	$('.div_snapshot select').append($('<option>', { 
	                    value: data[i].value,
	                    text : data[i].value 
	                }));
	                $('#snapshot_tracking').append('<option value="'+data[i].id+'">'+data[i].value+'</option>');
	            }
	            if(data.length > 0) {
		            $('.div_snapshot .ui-widget.ui-widget-content').val(data[0].value);
		    		$('#snapshot_desc').val(data[0].desc);
		    		ssid = data[0].id;
		        }
		        loadActivity(ppid);
	        }
        },
        error: function() {
        },
        dataType: 'json'
    });
}

function showLoading() {
	$('#loading').css('display', 'block');
}
function hideLoading() {
	setTimeout(function() {
		$('#loading').css('display', 'none');
	}, 500);
}
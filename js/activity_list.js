function sortData(st, prop) {
	for(i=0; i<activityData.length-1; i++) {
		for(j=i+1; j<activityData.length; j++) {
			prop_i = activityData[i][prop];
			prop_j = activityData[j][prop]; 
			if(prop == 'size' || prop == 'duration') {
				prop_i = prop_i*1;
				prop_j = prop_j*1;
			} else if(prop == 'start' || prop == 'finish') {
				prop_i = new Date(prop_i);
				prop_j = new Date(prop_j);
			}
			if(st=='asc' && prop_i > prop_j) {
				temp = activityData[i];
				activityData[i] = activityData[j];
				activityData[j] = temp;
			} else if(st=='desc' && prop_i < prop_j) {
				temp = activityData[i];
				activityData[i] = activityData[j];
				activityData[j] = temp;
			}
		}
	}
}
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

$(function(){
	/*
    $('#snapshot_date').datepicker({
        inline: true
    });
    */

    $(window).scroll(function(){
    	stop = $(window).scrollTop();
    	if(stop >= 400) {
    		resizeList();
    		$('#div_list_top').addClass('fixedheader');
    		$('#table_activity thead').addClass('fixedheader');
    		$('#table_activity').addClass('fixedheader');
    	} else {
    		$('#div_list_top').removeClass('fixedheader');
    		$('#table_activity thead').removeClass('fixedheader');
    		$('#table_activity').removeClass('fixedheader');
    	}
    })
    $(window).resize(function(){
    	resizeList();
    })
    function resizeList() {
    	w = $(window).width();
    	if(w > 1400) w = 1400;
    	$('#div_list_top').css('width', (eval(w)+40)+'px');
    	$('#table_activity thead').css('width', w+'px');

		$('#table_activity thead th.sort_aid').prev().css('width', '70px');
		$('#table_activity thead th.sort_aid').css('width', (eval($('#table_activity td.aid').width())+16)+'px');
		$('#table_activity thead th.sort_aname').css('width', (eval($('#table_activity td.aid').next().width())+16)+'px');
		$('#table_activity thead th.sort_aduration').css('width', (eval($('#table_activity td.aduration').width())+16)+'px');
		$('#table_activity thead th.sort_astart').css('width', (eval($('#table_activity td.astart').width())+16)+'px');
		$('#table_activity thead th.sort_afinish').css('width', (eval($('#table_activity td.afinish').width())+16)+'px');
		$('#table_activity thead th.sort_asize').css('width', (eval($('#table_activity td.afinish').next().width())+16)+'px');
		$('#table_activity thead th.sort_resp').css('width', (eval($('#table_activity td.acode').width())+16)+'px');
		$('#table_activity thead th.sort_location').css('width', (eval($('#table_activity td.alocation').width())+16)+'px');
		$('#table_activity thead th.sort_priority').css('width', (eval($('#table_activity td.apriority').width())+16)+'px');
		$('#table_activity thead th.sort_calendar').css('width', (eval($('#table_activity td.td_cal').width())+16)+'px');
		$('#table_activity thead th.sort_url').css('width', (eval($('#table_activity td.td_cal').next().width())+16)+'px');
    }

    $('th').click(function(){
    	val = $(this).attr('value');
    	if(val == null || val == '') return;
    	
    	$('.sort').css('display', 'none');
    	$(this).find('.sort').css('display', 'block');

    	$(this).toggleClass('sel');
    	if($(this).hasClass('sel')) {
    		//activityData.sort(dynamicSort("-"+val));
    		sortData('desc', val);
    	} else {
    		//activityData.sort(dynamicSort(val));
    		sortData('asc', val);
    	}

    	renderActivityData(activityData);
    })
    $('.filter_actlist').change(function(){
    	data = [];
    	val = $(this).attr('value');
    	if($(this).val() == "") {
    		data = activityData;
    	} else {
	    	for(i=0; i<activityData.length; i++) {
	    		if(activityData[i][val] == $(this).val()) {
	    			data.push(activityData[i]);
	    		}
	    	}
		}
		renderActivityData(data);
    })

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
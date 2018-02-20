$(function(){
	$('#section_activity_meeting .saddcircle').click(function(){ 
		strHtml = `
        			<tr id='newmeeting'>
	                    <td><i class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
	                    <td class='td_uname'><input type='text' class='tt' value='' readonly/></td>
	                    <td class='td_uemail'>
	                    	<input type='text' class='tt' value=''/>
	                    </td>
	                    <td class='eyeview'>
	                    	<i class="fa fa-eye bt_go_meeting_data"></i>
	                    </td>
	                </tr>
        		`;
       	$('#section_activity_meeting table tbody').append(strHtml);
       	meetingTrEvent();
       	$('#bt_meeting_save').click();
	})


	$('#bt_meeting_save').click(function(){ 
		sdata = [];
		$('#section_activity_meeting table tbody tr').each(function(){
			obj = $(this);
			if(obj.find('.td_uname input').val() != "") {
				sdata.push([obj.attr('id'), obj.find('.td_uname input').val(), obj.find('.td_uemail input').val()]);
			}
		});
		$('#newmeeting').attr('id', '');
		
		sUrl = "api/activity_meeting_save.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('data', sdata); 
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
	});

});

function loadActivityMeeting() { 
	sUrl = "api/activity_meeting_get.php";
    var form_data = new FormData();
    form_data.append('pid', ppid);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data){ console.log(data);
        	$('#section_activity_meeting table tbody').html("");
			for(i=0; i<data.length; i++) {
				strHtml = `
	        			<tr id='`+data[i].id+`'>
		                    <td><i id='`+data[i].id+`' class="fa fa-trash-o sdelete" aria-hidden="true"></i></td>
		                    <td class='td_uname'><input type='text' class='tt' value='`+data[i].date+`' readonly/></td>
		                    <td class='td_uemail'>
		                    	<input type='text' class='tt' value='`+data[i].description+`'/>
		                    </td>
		                    <td class='eyeview' id='`+data[i].id+`'>
		                    	<i class="fa fa-eye bt_go_meeting_data"></i>
		                    </td>
		                </tr>
	        		`;
	       		$('#section_activity_meeting table tbody').append(strHtml);
			}
	   		meetingTrEvent();
	   		alertEvent();
        },
        error: function() {
        },
        dataType: 'json'
    });

}

function meetingTrEvent() {
	$('#section_activity_meeting table tbody .td_uname input').each(function(){
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
	$('#section_activity_meeting table tbody .sdelete').click(function(){
		mid = $(this).attr('id');
		showAlertDeleteSetting(10, mid);
	})
	$('#section_activity_meeting table tbody .eyeview').click(function(){
		mid = $(this).attr('id');
		sUrl = "api/activity_meetingdata_get.php";
	    var form_data = new FormData();
	    form_data.append('mid', mid);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){ 
	        	$('#meeting_plus .meeting_data').html("");
	        	$('#meeting_delta .meeting_data').html("");
	        	for(i=0; i<data.length; i++) {
	        		strHtml = `
	        			<div class='meeting_item'>`+data[i].description+`</div>
	        		`;
	        		if(data[i].isplus == '1') {
	        			$('#meeting_plus .meeting_data').append(strHtml);
	        		} else {
	        			$('#meeting_delta .meeting_data').append(strHtml);
	        		}
	        	}
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	});
}
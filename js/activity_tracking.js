$(function() {

	$('#snapshot_tracking').change(function(){
		val = $(this).val();
		loadActivityTracking(ppid, val);
		for(i=0; i<snapshot.length; i++) {
	    	if(snapshot[i].id == val) {
	    		$('#snapshot_desc_tracking').val(snapshot[i].desc);
	    		break;
	    	}
	    }
	})
    $('.bt_atadd').click(function(){
        if($('#snapshot_tracking').val() == "0") {
            return;
        }
        saveTracking();
    })
})
cursnapshot = -1;
prevsnapshot = -1;
function loadActivityTracking(pid, sid) {
    showLoading();
	prevsid = 0; console.log(sid);
	var idx = -1; console.log(snapshot);
	for(i=0; i<snapshot.length; i++) {
    	if(snapshot[i].id == sid) {
    		idx = i;
    		break;
    	}
    }
    cursnapshot = snapshot[idx].value;
    prevsnapshot = -1;
	sUrl = "api/activity_get.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('sid', sid);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { 
        	curdata = data;
        	if(idx > -1 && idx < snapshot.length-1) { 
        		idx = idx + 1;
                prevsnapshot = snapshot[idx].value;
	        	var form_data = new FormData();
			    form_data.append('pid', pid);
			    form_data.append('sid', snapshot[idx].id);
			    $.ajax({
			        type: "POST",
			        url: sUrl,
			        cache: false,
			        processData: false, 
			        contentType: false,
			        data: form_data,
			        dataType: 'json',
			        success: function(data1) {
	        			renderActivityTracking(curdata, data1);
                        hideLoading();
	        		}
	        	});
			} else {
				renderActivityTracking(data, null);
                hideLoading();
			}
        },
        error: function() {
            hideLoading();
        },
        dataType: 'json'
    });
}
function renderActivityTracking(data, data1) { console.log(data);console.log(data1);
	delay = settingData['delay'];
	
	strHtml = "";
	$('#table_activity_tracking tbody').html(strHtml);
	for(i=0;i<data.length;i++) {
        strDelay = "";
        strDelay += "<option value=''></option>";
        for(j=0; j<delay.length; j++) {
            if(data[i].reason == delay[j].value)
                strDelay += "<option value='"+delay[j].value+"' selected>"+delay[j].value+"</option>";
            else
                strDelay += "<option value='"+delay[j].value+"'>"+delay[j].value+"</option>";
        }
        strDone = `<i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                    <i class="fa fa-check-square-o i-checked" aria-hidden="true" style='display:none'></i>`;
        if(data[i].done == '1') 
            strDone = `<i class="fa fa-square-o i-setting" aria-hidden="true" style='display:none'></i>
                        <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>`;

		prevstart = "";
		prevfinish = "";
		if(data1 != null && i < data1.length) {
			prevstart = data1[i].start;
			prevfinish = data1[i].finish;
		}

        strHtml += `<tr class='tr'>

                        <td class='aid'><input class="tt" type="text" value='`+data[i].activity_id+`'/></td>

                        <td class='adesc'><input class="tt" type="text" value='`+data[i].activity_name+`'/></td>

                        <td class='acode'><input class="tt" type="text" value='`+data[i].code+`'/></td>

                        <td class='astart'><input class="tt" type="text" value='`+data[i].start+`'/></td>

                        <td class='afinish'><input class="tt" type="text" value='`+data[i].finish+`'/></td>

                        <td class='selcheck'> `+strDone+`</td>

                        <td class="astartprev"><input class="tt" type="text" value='`+prevstart+`'/></td>

                        <td class="afinishprev"><input class="tt" type="text" value='`+prevfinish+`'/></td>

                        <td><select class='form-control adelay ahide'>`+strDelay+`</select></td>

                    </tr>`;

    }

    $('#table_activity_tracking tbody').html(strHtml);

    saveTracking();
    checkTracking();
}

function checkTracking() {
    $('#table_activity_tracking tbody tr').each(function(){
        start = $(this).find('.astart input').val(); 
        start = new Date(start);
        if(start > (new Date($(this).find('.astartprev input').val()))) {
            $(this).find('.astart input').addClass('red');
            $(this).find('.adelay').removeClass('ahide');
        }
        finish = $(this).find('.afinish input').val();
        finish = new Date(finish);
        if(finish > (new Date($(this).find('.afinishprev input').val()))) {
            $(this).find('.afinish input').addClass('red');
            $(this).find('.adelay').removeClass('ahide');
        }
        if(!($(this).find('.adelay').hasClass('ahide'))) {
            if((new Date($(this).find('.astartprev input').val())) >= (new Date(prevsnapshot)) && (new Date($(this).find('.astartprev input').val())) <= (new Date(cursnapshot)) || (new Date($(this).find('.afinishprev input').val())) >= (new Date(prevsnapshot)) && (new Date($(this).find('.afinishprev input').val())) <= (new Date(cursnapshot))) {
            } else {
                $(this).find('.adelay').addClass('ahide');
            }
        }
    })
    $('#table_activity_tracking tbody tr .selcheck i').unbind('click');
    $('#table_activity_tracking tbody tr .selcheck i').click(function(){
        obj = $(this).parent();
        done = "0";
        if($(this).hasClass('i-setting')) {
            obj.find('.i-setting').css('display', 'none');
            obj.find('.i-checked').css('display', 'block'); done = "1";
        } else {
            obj.find('.i-checked').css('display', 'none');
            obj.find('.i-setting').css('display', 'block');
        }
        aid =  obj.parent().find('.aid input').val();
        saveTrackingField(aid, 'done', done);
    });
    $('#table_activity_tracking tbody tr .adelay').unbind('change');
    $('#table_activity_tracking tbody tr .adelay').change(function(){
        val = $(this).val();
        aid =  $(this).parent().parent().find('.aid input').val();
        saveTrackingField(aid, 'reason', val);
    });
}
function saveTrackingField(aid, fname, fvalue) {
    if($('#snapshot_tracking').val() == "0") {
        return;
    }
    sUrl = "api/activity_tracking_save_field.php";
    var form_data = new FormData();  
    form_data.append('fname', fname);
    form_data.append('fvalue', fvalue);
    form_data.append('pid', ppid);
    form_data.append('sid', $('#snapshot_tracking').val());
    form_data.append('aid', aid);

    showLoading('save');
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data){
            hideLoading();
        },
        error: function() {
            hideLoading();
        },
        dataType: 'json'
    });
}
function saveTracking() {
    if($('#snapshot_tracking').val() == "0") {
        return;
    }
    sUrl = "api/activity_tracking_save.php";
    var form_data = new FormData();  
    data = [];
    $('#table_activity_tracking tbody tr').each(function(){
        done = '0';
        if($(this).find('.selcheck .i-checked').css('display') != 'none') {
            done = '1';
        }
        item = [];
        item.push($(this).find('.aid input').val());
        item.push($(this).find('.adesc input').val());
        item.push($(this).find('.acode input').val());
        item.push($(this).find('.astart input').val());
        item.push($(this).find('.afinish input').val());
        item.push(done);
        item.push($(this).find('.astartprev input').val());
        item.push($(this).find('.afinishprev input').val());
        item.push($(this).find('.adelay').val());
        data.push(item);
    });
    showLoading('save');
    form_data.append('data', data);

    form_data.append('pid', ppid);
    form_data.append('sid', $('#snapshot_tracking').val());

    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data){
            hideLoading();
        },
        error: function() {
            hideLoading();
        },
        dataType: 'json'
    });
}
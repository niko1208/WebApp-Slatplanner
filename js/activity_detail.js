$(function(){

	$('#bt_view_detail').click(function(){
		aid = $('#act_detail_id').val();
		if(aid == "") {
			alert("Please input Activity Id");
			return;
		}
		loadActivityDetail(ppid, aid);
	})

    $('#bt_save_detail').click(function(){
        aid = $('#act_detail_id').val();
        if(aid == "") {
            alert("Please input Activity Id");
            return;
        }
        saveActivityDetail();
    })

	$('.bt_dcadd').click(function(){
		done = '0';
        if($('#selcheck .i-checked').css('display') != 'none') {
            done = '1';
        }
        sUrl = "api/activity_constraint_add.php";
        var form_data = new FormData();
        form_data.append('pid', ppid);
        form_data.append('type', $('.act_detail_const_type').val());
        form_data.append('aid', $('.act_detail_const_id').val());
        form_data.append('desc', $('.act_detail_const_desc').val());
        form_data.append('start', $('.act_detail_const_start').val());
        form_data.append('finish', $('.act_detail_const_finish').val());
        form_data.append('resp', $('.act_detail_const_resp').val());
        form_data.append('driving', $('#act_detail_id').val());
        form_data.append('done', done);

        $.ajax({
            type: "POST",
            url: sUrl,
            cache: false,
            processData: false, 
            contentType: false,
            data: form_data,
            success: function(data) { 
                loadData1(ppid);
            },
            error: function() {
            },
            dataType: 'json'
        });
        
	})
	$('.bt_dcremove').click(function(){
        var data = [];
        $('#table_act_detail_const tbody tr').each(function(){
            if($(this).find('.selcheck .i-checked').css('display') != 'none') {
                data.push($(this).attr('id'));    
            }
        })
       
        sUrl = "api/activity_constraint_del.php";
        var form_data = new FormData();
        form_data.append('pid', ppid);
        form_data.append('data', data);
        $.ajax({
            type: "POST",
            url: sUrl,
            cache: false,
            processData: false, 
            contentType: false,
            data: form_data,
            success: function(data) { 
                loadData1(ppid);
            },
            error: function() {
            },
            dataType: 'json'
        });
    })


	// ----- init ---------
	detailTrEvent();
})

function loadData1(pid) {
	sUrl = "api/activity_constraint_get.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('type', '');
    form_data.append('driving', $('#act_detail_id').val());
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { 
			renderConstraint(data);
        },
        error: function() {
        },
        dataType: 'json'
    });
}
function renderConstraint(data) {
	constdata = settingData['constraint'];
    respdata = settingData['responsible'];
    strHtml = "";
    $('#table_act_detail_const tbody').html(strHtml);
    for(i=0;i<data.length;i++) {
        strConst = "";
        strConst1 = "";
        for(j=0; j<constdata.length; j++) {
            if(data[i].type == constdata[j].value)
                strConst += "<option value='"+constdata[j].value+"' selected>"+constdata[j].value+"</option>";
            else
                strConst += "<option value='"+constdata[j].value+"'>"+constdata[j].value+"</option>";
        }
        for(j=0; j<respdata.length; j++) {
            if(data[i].resp == respdata[j].value)
                strConst1 += "<option value='"+respdata[j].value+"' selected>"+respdata[j].value+"</option>";
            else
                strConst1 += "<option value='"+respdata[j].value+"'>"+respdata[j].value+"</option>";
        }
        strDone = `<i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                    <i class="fa fa-check-square-o i-checked" aria-hidden="true" style='display:none'></i>`;
        if(data[i].done == '1') 
            strDone = `<i class="fa fa-square-o i-setting" aria-hidden="true" style='display:none'></i>
                        <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>`;

        strHtml += `<tr class='tr' id='`+data[i].id+`'>
                        <td class='selcheck'>
                            <i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                            <i class="fa fa-check-square-o i-checked" aria-hidden="true" style="display: none"></i>
                        </td>

                        <td class='atype'><select class='form-control act_const_type' type='text'>` + strConst + `</select></td>

                        <td><input class="tt act_const_id" type="text" value='`+data[i].actid+`'/></td>

                        <td class='acode'><input class="tt" type="text" value='`+data[i].desc+`'/></td>

                        <td class='astart'><input class="tt" type="text" value='`+data[i].start+`'/></td>

                        <td class='afinish'><input class="tt" type="text" value='`+data[i].finish+`'/></td>

                        <td><select class='form-control act_resp' id='`+data[i].id+`'>` + strConst1 + `</select></td>

                        <td class='done' id='`+data[i].id+`'>`+strDone+`</td>

                    </tr>`;

    }

    $('#table_act_detail_const tbody').html(strHtml);

    checkDetailConstraint();
    detailTrEvent();
}
function detailTrEvent() {
	$('#table_act_detail_const tr input.act_detail_const_id').unbind('keyup');
    $('#table_act_detail_const tr input.act_detail_const_id').keyup(function(event){
        val = $(this).val(); 
        obj = $(this).parent().parent();
        for(i=0; i<activityData.length; i++) { 
        	if(activityData[i].activity_id.toUpperCase() == val.toUpperCase()) {
        		obj.find('.act_detail_const_desc').val(activityData[i].activity_name);
        		obj.find('.act_detail_const_start').val(activityData[i].start);
        		obj.find('.act_detail_const_finish').val(activityData[i].finish);
        		obj.find('.act_detail_const_resp').val(activityData[i].code);
        		break;
        	}
        }
    });
    $('.selcheck i').unbind('click');
    $('.selcheck i').click(function(){
        obj = $(this).parent();
        if($(this).hasClass('i-setting')) {
            obj.find('.i-setting').css('display', 'none');
            obj.find('.i-checked').css('display', 'block');
        } else {
            obj.find('.i-checked').css('display', 'none');
            obj.find('.i-setting').css('display', 'block');
        }
    });
    $('#table_act_detail_const tbody tr .done i').unbind('click');
    $('#table_act_detail_const tbody tr .done i').click(function(){
        obj = $(this).parent();
        done = "0";
        if($(this).hasClass('i-setting')) {
            obj.find('.i-setting').css('display', 'none');
            obj.find('.i-checked').css('display', 'block'); done = "1";
        } else {
            obj.find('.i-checked').css('display', 'none');
            obj.find('.i-setting').css('display', 'block');
        }
        id =  obj.attr('id');
        saveConstraintField(id, 'done', done);
    });
    $('#table_act_detail_const tbody tr .act_resp').unbind('change');
    $('#table_act_detail_const tbody tr .act_resp').change(function(){
        val = $(this).val();
        id =  $(this).attr('id'); 
        saveConstraintField(id, 'resp', val);
    });
}
function saveConstraintField(id, fname, fvalue) {
    sUrl = "api/activity_constraint_save_field.php";
    var form_data = new FormData();  
    form_data.append('fname', fname);
    form_data.append('fvalue', fvalue);
    form_data.append('pid', ppid);
    form_data.append('id', id);

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
function loadActivityDetail(pid, aid) {
	sUrl = "api/activity_get_detail.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('aid', aid);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { console.log(data);
        	loadDetailData(data);
        	loadData1(ppid);
        },
        error: function() {
        },
        dataType: 'json'
    });
}

function saveActivityDetail() {
    
    var form_data = new FormData();
    form_data.append('aid', $('#act_detail_id').val());
    form_data.append('aname', $('#act_detail_name').val());

    form_data.append('duration', $('#act_detail_duration').val());
    form_data.append('start_prev', $('#act_detail_start').val());
    form_data.append('finish', $('#act_detail_finish').val());
    form_data.append('size', $('#act_detail_size').val());
    form_data.append('resp', $('#act_detail_resp').val());
    form_data.append('location', $('#act_detail_location').val());
    form_data.append('priority', $('#act_detail_priority').val());
    form_data.append('url', $('#act_detail_url').val());

    form_data.append('note', $('#act_detail_note').val());

    form_data.append('pid', pid);
    form_data.append('aaid', aaaid);

    showLoading('save');
    sUrl = "api/activity_save_detail.php";
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { 
            hideLoading();
        },
        error: function() {
            hideLoading();
        },
        dataType: 'json'
    });
}
function loadDetailData(data) {
	//----- constraints -----
	console.log(activityData); console.log(settingData);
	constdata = settingData['constraint'];
	$('#act_detail_const_type').html("");
	for(i=0; i<constdata.length; i++) {
		$('#act_detail_const_type').append("<option value='"+constdata[i].value+"'>"+constdata[i].value+"</option>");
	}
	//----- load activity --------
	if(data.length < 1) return;
	var actData = data; console.log(actData);
    data = data[0];
    for(i=0; i<actData.length; i++) {
        if(actData[i].sid == ssid) {
            data = actData[i]; 
            break;
        }
    }
	
    aaaid = data.id;
	$('#act_detail_id').val(data.activity_id);
	$('#act_detail_name').val(data.activity_name);

	$('#act_detail_duration').val(data.duration);
	$('#act_detail_start').val(data.start);
	$('#act_detail_finish').val(data.finish);
	$('#act_detail_size').val(data.size);
	$('#act_detail_resp').val(data.code);
	$('#act_detail_location').val(data.location);
	$('#act_detail_priority').val(data.priority);
	$('#act_detail_url').val(data.url);

	$('#act_detail_note').val(data.note);

	delay = settingData['delay'];
	
	$('#table_act_detail_snap tbody').html("");
	actData1 = actData;
	actData = [];
	for(i=0; i<actData1.length; i++) {
		dd = actData1[i];
		for(j=0; j<snapshot.length; j++) {
	    	if(snapshot[j].id == dd.sid) {
	    		actData1[i]['snapshot'] = snapshot[j].value;
	    		actData.push(actData1[i]);
	    		break;
	    	}
	    }
	}
	for(i=0; i<actData.length-1; i++) {
		for(j=i+1; j<actData.length; j++) {
            if(actData[j].snapshot == 'current') {
                temp = actData[i];
                actData[i] = actData[j];
                actData[j] = temp;
            }
			else if((new Date(actData[j].snapshot)) > (new Date(actData[i].snapshot))) {
				temp = actData[i];
				actData[i] = actData[j];
				actData[j] = temp;
			}
		}
	}

	for(i=0; i<actData.length; i++) { 
		dd = actData[i];
        strDelay = "";
        strDelay += "<option value=''></option>";
        for(j=0; j<delay.length; j++) {
            if(dd.reason == delay[j].value)
                strDelay += "<option value='"+delay[j].value+"' selected>"+delay[j].value+"</option>";
            else
                strDelay += "<option value='"+delay[j].value+"'>"+delay[j].value+"</option>";
        }
    	strHtml = `
    		<tr pid='`+actData[i].pid+`' aid='`+actData[i].activity_id+`' sid='`+actData[i].sid+`'>
                <td><input class="form-control act_detail_duration" type='text' value='`+dd.snapshot+`'/></td>
                <td><input class="form-control act_detail_start" type='text' value='`+dd.start+`' /></td>
                <td><div class='changestart'>
                    <span class='sleft ahide'><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                    <span class='stext'></span>
                    <span class='sright ahide'><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div></td>
                <td><input class="form-control act_detail_finish" type='text' value='`+dd.finish+`' /></td>
                <td><div class='changefinish'>
                    <span class='sleft ahide'><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                    <span class='stext'></span>
                    <span class='sright ahide'><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div></td>
                <td><select class='form-control adelay ahide act_detail_reason'>`+strDelay+`</select></td>
            </tr>
    	`;
    	$('#table_act_detail_snap tbody').append(strHtml);
	}
    saveSnapshotHistory();

    $('#table_act_detail_snap tbody tr').each(function(){
        oneday = 86400;
        objnext = $(this).next(); 
        if(objnext.length > 0) {
            prevstart = objnext.find('.act_detail_start').val();
            prevfinish = objnext.find('.act_detail_finish').val();
        }
        start = $(this).find('.act_detail_start').val(); 
        finish = $(this).find('.act_detail_finish').val();
        var start_stamp = new Date(start).getTime() / 1000; 
        var start_prev = new Date(prevstart).getTime() / 1000;
        var finish_stamp = new Date(finish).getTime() / 1000; 
        var finish_prev = new Date(prevfinish).getTime() / 1000;
        changestart = start_stamp - start_prev;
        changefinish = finish_stamp - finish_prev; 
        if(changestart/oneday < 0) {
            $(this).find('.changestart .sleft').removeClass('ahide');
        } else if(changestart/oneday > 0) {
            $(this).find('.changestart .sright').removeClass('ahide');
            $(this).find('.act_detail_reason').removeClass('ahide');
        }
        if(changefinish/oneday < 0) {
            $(this).find('.changefinish .sleft').removeClass('ahide');
        } else if(changefinish/oneday > 0) {
            $(this).find('.changefinish .sright').removeClass('ahide');
            $(this).find('.act_detail_reason').removeClass('ahide');
        }
        $(this).find('.changestart .stext').html(Math.abs(Math.floor(changestart/oneday)));
        $(this).find('.changefinish .stext').html(Math.abs(Math.floor(changefinish/oneday)));
        

    });
    $('#table_act_detail_snap tbody tr .act_detail_reason').change(function(){
        saveSnapshotHistory();
    });
    
}
function saveSnapshotHistory() {
    sUrl = "api/activity_snapshot_history_save.php";
    var form_data = new FormData();  
    data = [];
    $('#table_act_detail_snap tbody tr').each(function(){
        pid = $(this).attr('pid');
        sid = $(this).attr('sid');
        aid = $(this).attr('aid');
        reason = $(this).find('.act_detail_reason').val();
        item = [];
        item.push(pid);
        item.push(sid);
        item.push(aid);
        item.push(reason);
        data.push(item);
    });
    form_data.append('data', data);
    showLoading()
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
function checkDetailConstraint() {
    max = "";
    $('#table_act_detail_const tbody tr').each(function(){
        start = $(this).find('.astart input').attr('drivingstart'); start = new Date(start);
        if(max < start) max = start;
    }); 
    max = new Date($('#act_detail_start').val());
    $('#table_act_detail_const tbody tr').each(function(){
        finish = $(this).find('.afinish input').val(); finish = new Date(finish);
        if(finish > max) {
            $(this).find('.afinish input').addClass('red');
        }
    });
}
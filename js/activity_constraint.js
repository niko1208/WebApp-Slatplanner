$(function() {
    $('.bt_acadd').click(function(){
        saveConstraint();
    });
	$('.bt_ccadd').click(function(){
        done = '0';
        if($('#selcheck .i-checked').css('display') != 'none') {
            done = '1';
        }
        sUrl = "api/activity_constraint_add.php";
        var form_data = new FormData();
        form_data.append('pid', ppid);
        form_data.append('type', $('#act_const_type').val());
        form_data.append('aid', $('#act_const_id').val());
        form_data.append('desc', $('#act_desc').val());
        form_data.append('start', $('#act_start').val());
        form_data.append('finish', $('#act_finish').val());
        form_data.append('resp', $('#act_resp').val());
        form_data.append('driving', $('#act_driving').val());
        form_data.append('done', done);

        $.ajax({
            type: "POST",
            url: sUrl,
            cache: false,
            processData: false, 
            contentType: false,
            data: form_data,
            success: function(data) { 
                $('#act_const_type').val("Activity");
                $('#act_const_id').val("");
                $('#act_desc').val("");
                $('#act_start').val("");
                $('#act_finish').val("");
                $('#act_resp').val("");
                $('#act_driving').val("");
                loadActivityConstraint(ppid);
            },
            error: function() {
            },
            dataType: 'json'
        });
    })
    $('.bt_ccremove').click(function(){
        var data = [];
        $('#table_activity_constraint tbody tr').each(function(){
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
                loadActivityConstraint(ppid);
            },
            error: function() {
            },
            dataType: 'json'
        });
    })
    $('#contraint').change(function(){
        const_type = $(this).val();
        loadActivityConstraint(ppid);
    })
})
var const_type = "";
function saveConstraint() {
    sUrl = "api/activity_constraint_save.php";
    var form_data = new FormData();  
    data = [];
    $('#table_activity_constraint tbody tr').each(function(){
        done = '0';
        if($(this).find('.done .i-checked').css('display') != 'none') {
            done = '1';
        }
        item = [];
        item.push($(this).find('.act_const_type').val());
        item.push($(this).find('.act_const_id').val());
        item.push($(this).find('.adesc input').val());
        item.push($(this).find('.astart input').val());
        item.push($(this).find('.afinish input').val());
        item.push($(this).find('.act_resp').val());
        item.push($(this).find('.driving input').val());
        item.push(done);
        data.push(item);
    });
    showLoading('save');
    form_data.append('data', data);

    form_data.append('pid', ppid);

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
function loadActivityConstraint(pid, firstload=false) { 
    constdata = settingData['constraint'];
    respdata = settingData['responsible'];
    if(firstload) {
        strConst = "<option value='Activity'>Activity</option>";
        for(i=0; i<constdata.length; i++) {
            strConst += "<option value='"+constdata[i].value+"'>"+constdata[i].value+"</option>";
        }
        $('#contraint').html("<option value=''></option>");
        $('#contraint').append(strConst);
        $('#act_const_type').html(strConst);
        strResp = "";
        for(i=0; i<respdata.length; i++) {
            strResp += "<option value='"+respdata[i].value+"'>"+respdata[i].value+"</option>";
        }
        $('#act_resp').html(strResp);
    }
	sUrl = "api/activity_constraint_get.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('type', const_type);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { console.log(data);
			renderActivityConstraint(data);
        },
        error: function() {
        },
        dataType: 'json'
    });
}
function renderActivityConstraint(data) {
    constdata = settingData['constraint'];
    respdata = settingData['responsible'];
    strHtml = "";
    $('#table_activity_constraint tbody').html(strHtml);
    for(i=0;i<data.length;i++) {
        strConst = "<option value='Activity'>Activity</option>";
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

                        <td class='adesc'><input class="tt" type="text" value='`+data[i].desc+`'/></td>

                        <td class='astart'><input class="tt" drivingstart='`+data[i].drivingstart+`' type="text" value='`+data[i].start+`'/></td>

                        <td class='afinish'><input class="tt" type="text" value='`+data[i].finish+`'/></td>

                        <td><select class='form-control act_resp' id='`+data[i].id+`'>` + strConst1 + `</select></td>

                        <td class='driving'><input class="tt" type="text" value='`+data[i].driving+`'/></td>

                        <td class='done' id='`+data[i].id+`'>`+strDone+`</td>

                    </tr>`;

    }

    $('#table_activity_constraint tbody').html(strHtml);

    $('#table_activity_constraint tr input.act_const_id').unbind('keyup');
    $('#table_activity_constraint tr input.act_const_id').keyup(function(event){
        val = $(this).val(); 
        obj = $(this).parent().parent();
        for(i=0; i<activityData.length; i++) { 
            if(activityData[i].activity_id.toUpperCase() == val.toUpperCase()) {
                obj.find('.act_desc').val(activityData[i].activity_name);
                obj.find('.act_start').val(activityData[i].start);
                obj.find('.act_finish').val(activityData[i].finish);
                obj.find('.act_resp').val(activityData[i].code);
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
    $('#table_activity_constraint tbody tr .act_resp').unbind('change');
    $('#table_activity_constraint tbody tr .act_resp').change(function(){
        val = $(this).val();
        id =  $(this).attr('id'); 
        saveConstraintField(id, 'resp', val);
    });
    $('#table_activity_constraint tr .done i').unbind('click');
    $('#table_activity_constraint tr .done i').click(function(){
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


    checkConstraint();
}

function checkConstraint() {
    max = "";
    $('#table_activity_constraint tbody tr').each(function(){
        start = $(this).find('.astart input').attr('drivingstart'); start = new Date(start);
        if(max < start) max = start;
    })
    $('#table_activity_constraint tbody tr').each(function(){
        finish = $(this).find('.afinish input').val(); finish = new Date(finish);
        if(finish > max) {
            $(this).find('.afinish input').addClass('red');
        }
    })
}
$(document).ready(function(){

    //=================  ====================


    function load() {

        sUrl = "api/job_get.php";

        strHtml = "";

        n = 0;

        $.ajax({

            type: "GET",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            success: function(data){  

                stopLoading();

                for(i=0;i<data.length;i++) {

                    n++;

                    strApplicant = `<div class='applicant'>
                        <h3>Applicants</h3>
                    <table class='table'>`;
                    for(j=0; j<data[i].applicants.length; j++) {
                        item = data[i].applicants[j];
                        strApplicant += `
                            <tr id="`+item.job_applicants_id+`" jobid="`+data[i].job_id+`">
                                <td style="width:80px">
                                    <div class="div_avatar">
                                        <img class="avatar" src="`+convURL(item.user_avatar_url)+`"/>
                                    </div>
                                </td>
                                <td>`+item.user_name+`</td>
                                <td class="astate" val="`+item.job_applicants_seeker_state+`" style='width:150px'>
                                    <select class="form-control">
                                        <option value='apply'>apply</option>
                                        <option value='invite'>invite</option>
                                        <option value='shortlist'>shortlist</option> 
                                        <option value='decline'>decline</option>    
                                        <option value='delete'>delete</option>
                                        <option value='cancel'>cancel</option>
                                    </select>
                                </td>
                                <td>`+item.job_applicants_applied_date+`</td>
                                <td>
                                    <i class="fa fa-trash udelete"></i>
                                </td>
                            </tr>
                        `;
                    }
                    strApplicant += "</table></div>";

                    strHtml += `<tr class="tr_job" id='`+data[i].job_id+`'>

                                    <td>`+n+`</td>

                                    <td>
                                        <div class="div_avatar">
                                            <img class="avatar" src="`+convURL(data[i].user_avatar_url)+`"/>
                                        </div>
                                        <div class='uname'>`+data[i].user_name+`</div>
                                    </td>

                                    <td class='uname'>`+data[i].job_company_name+`</td>

                                    <td class='email'>`+data[i].job_job_title+`</td>

                                    <td class='phone'>`+data[i].job_job_description+`</td>

                                    <td class='vcode'>`+data[i].job_job_requirement+`</td>

                                    <td class='membership'>`+data[i].job_time_available+`</td>

                                    <td class='date'>`+data[i].job_location_address+`</td>

                                    <td class='date'><img class="job_avatar" src="`+data[i].job_job_avatar_url+`"/></td>

                                    <td class='date'><img class="job_avatar" src="`+data[i].job_job_background_url+`"/></td>

                                    <td class='date'>`+data[i].job_job_industry+`</td>

                                    <td class='date'>`+data[i].job_job_state+`</td>

                                    <td class='date'>`+data[i].job_job_create_date+`</td>

                                </tr>
                                <tr class='tr_applicant'>
                                    <td colspan="13">
                                        `+strApplicant+`
                                    </td>
                                </tr>`;

                }

                $('#table tbody').html(strHtml);
                

                $('#myPager').html("");
                $('#myTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10});


                $('.astate').each(function(){
                    $(this).find('select').val($(this).attr('val'));
                })

                $('.tr_job').click(function(){
                    $('.applicant').css('display', 'none');
                    $(this).next().find('.applicant').css('display', 'block');
                })

                $('.astate select').change(function(){

                    val = $(this).val();

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');
                    jid = trObj.attr('jobid');

                    change(jid, uid, val);                    
                })

                $('.udelete').click(function(){

                    trObj = $(this).parent().parent();

                    jid = trObj.attr('jobid');
                    uid = trObj.attr('id');

                    del(jid, uid);

                })

            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });


    }


    function change(jid, uid, obj) {

        sUrl = "api/job_applicant_add.php";

        var form_data = new FormData();

        form_data.append('jid', jid);
        form_data.append('uid', uid);
        form_data.append('val', val);

        $.ajax({

            type: "POST",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            data: form_data,

            success: function(data){  

                stopLoading();

                if(data.success*1 == 1) {

                    load();

                } else {

                }

            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });
    }


    function del(jid, uid) {

        if(!confirm("Are you sure?")) return;

        sUrl = "api/job_applicant_del.php";

        var form_data = new FormData();       

        form_data.append('jid', jid);
        form_data.append('id', uid);

        $.ajax({

            type: "POST",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            data: form_data,

            success: function(data){  

                stopLoading();

                if(data.success*1 == 1) {

                    load();

                } else {

                }

            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });

    }

    function changePass(uid, obj) {

        $('.overlay').css('display', 'block');

        $('#popup_pass').fadeIn();

        $('#uname1').val(obj.find('.uname').text());

        $('#bt_pass').attr('uid', uid);

    }

    $('.eye').click(function(){
        obj = $(this).prev();
        if(obj.attr('type') == 'password')
            obj.attr('type', 'text');
        else 
            obj.attr('type', 'password');
    })

    $('#bt_pass').click(function(){

        var form_data = new FormData();  

        form_data.append('uid', $(this).attr('uid'));

        form_data.append('pass', $('#newpass').val());

        form_data.append('type', 'employer');

        $('.bt_close').click();

        showLoading();


        sUrl = "api/change_pass.php";

        $.ajax({

            type: "POST",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            data: form_data,

            success: function(data){  

                stopLoading();

                if(data.success*1 == 1) {

                } else {

                    alert(data.detail + "--" + data.query);

                }

            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });

    })

    //================== init ========================

    load();

    $('#menu-item-job').addClass('menu-item-sel');

})
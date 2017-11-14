$(document).ready(function(){

    //=================  ====================


    function load() {

        sUrl = "api/ads_get.php";

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
                    $s1 = "";
                    $s2 = "";
                    if(data[i].tbl_ads_state == "ready") {
                        $s2 = "SELECTED";
                    } else {
                        $s1 = "SELECTED";
                    }
                    strHtml += `<tr id='`+data[i].tbl_ads_id+`'>

                                    <td>`+n+`</td>

                                    <td>
                                        <div class="div_avatar">
                                            <img class="avatar" src="`+convURL(data[i].tbl_ads_avatar_url)+`"/>
                                        </div>
                                    </td>

                                    <td class='desc'>`+data[i].tbl_ads_description+`</td>

                                    <td class='date'>`+data[i].tbl_ads_date+`</td>
                                    <td class='email'>
                                        <select class="form-control state" uid="">
                                            <option value="" `+$s1+`>None</option>
                                            <option value="ready" `+$s2+`>Ready</option>
                                        </select>
                                    </td>
                                    <td>
                                        <i class="fa fa-trash udelete"></i>                                        
                                    </td>

                                </tr>`;

                }

                $('#table tbody').html(strHtml);
                

                $('#myPager').html("");
                $('#myTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10});


                $('.udelete').click(function(){

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');

                    del(uid);

                })

                $('.state').change(function(){

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');

                    change(uid, $(this).val());

                })
            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });


    }


    function change(uid, val) {

        sUrl = "api/ads_add.php";

        var form_data = new FormData();

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

    function del(uid) {

        if(!confirm("Are you sure?")) return;

        sUrl = "api/ads_del.php";

        var form_data = new FormData();       

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

    //================== init ========================

    load();

    $('#menu-item-ads').addClass('menu-item-sel');

})
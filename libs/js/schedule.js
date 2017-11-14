$(document).ready(function(){

    //================= Merchant ====================



    $('#start').datetimepicker();

    $('#end').datetimepicker();



    $('#bt_popup_add').click(function(){

        $('.overlay').css('display', 'block');

        $('#popup').fadeIn();

        $('#bt_add').attr('uid', '');

        $('#bt_add').html("Add");

        $('#popup .form_title').html("Add");



        $('form input[type=text]').val("");

        $('form input[type=password]').val("");

        $('form textarea').val("");

    })

    $('#bt_add').click(function(){

        

        sUrl = "api/schedule_add.php";

        var form_data = new FormData();  

        $('form input[type=text]').each(function(){

            attrid = $(this).attr('id'); 

            val = $(this).val(); console.log(val);

            form_data.append(attrid, val);

        })

        form_data.append('merchant', $('#merchant').val());

        form_data.append('dish', $('#dish').val());

        form_data.append('uid', $(this).attr('uid'));

        st = $('#start').val();
        en = $('#end').val();
        if(st > en) {
            alert("End datetime is incorrect,\n\nTry again.");
            return;
        }

        $('.bt_close').click();

        showLoading();



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

                    alert(data.detail + "--" + data.query);

                }

            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });

    })



    function load() {

        sUrl = "api/schedule_get.php";

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

                    strHtml += `<tr id='`+data[i].id+`'>

                                    <td>`+n+`</td>

                                    <td>`+data[i].date+`</td>

                                    <td>`+data[i].starttime+`</td>

                                    <td>`+data[i].endtime+`</td>

                                    <td>`+data[i].dish+`</td>

                                    <td>`+merchant_list[data[i].merchant_id]+`</td>

                                    <td>

                                        <span class='info' syle='display:none' start='`+data[i].start+`' end='`+data[i].end+`' merchant='`+data[i].merchant_id+`' dish='`+data[i].dish_id+`'></span>

                                        <button type="button" class="btn btn-primary uchange" >Change</button>

                                        &nbsp;<button type="button" class="btn btn-danger udelete" >Delete</button>

                                    </td>

                                </tr>`;

                }

                $('#table tbody').html(strHtml);

                

                $('.udelete').click(function(){

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');

                    del(uid);

                })

                $('.uchange').click(function(){

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');

                    change(uid, $(this).prev());

                })

            },

            error: function() {

                stopLoading();

            },

            dataType: 'json'

        });

    }

    function change(uid, obj) {

        $('.overlay').css('display', 'block');

        $('#popup').fadeIn();

        $('#bt_add').attr('uid', uid);

        $('#bt_add').html("Change");

        $('#popup .form_title').html("Change");



        $('#start').val(obj.attr('start'));

        $('#end').val(obj.attr('end'));

        $('#merchant').val(obj.attr('merchant'));

        $('#dish').val(obj.attr('dish'));

        merchantChange();

    }

    function del(uid) {

        if(!confirm("Are you sure?")) return;

        sUrl = "api/schedule_del.php";

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

    var merchant_list = [];

    sUrl = "api/merchant_get.php";

    $.ajax({

        type: "GET",

        url: sUrl,

        cache: false,

        processData: false, 

        contentType: false,

        success: function(da){  

            for(i=0;i<da.length;i++) {

                $('#merchant').append("<option value='"+da[i].id+"'>"+da[i].name+"</option>");

                merchant_list[da[i].id] = da[i].name;

            }

            merchantChange();

            $('#merchant').change(function(){

                merchantChange();

            })

        },

        dataType: 'json'

    });

    var dish_list = [];

    sUrl = "api/dish_get.php";

    $.ajax({

        type: "GET",

        url: sUrl,

        cache: false,

        processData: false, 

        contentType: false,

        success: function(da){  

            for(i=0;i<da.length;i++) {

                dish_list[da[i].id] = da[i].title;

            } 

        },

        dataType: 'json'

    });

    setTimeout(function(){

        load();

    }, 2000);



    function merchantChange() {

        merchant = $('#merchant').val();

        sUrl = "api/dish_get.php?merchant="+merchant;

        $.ajax({

            type: "GET",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            success: function(da){  

                $('#dish').html("");

                for(i=0;i<da.length;i++) {

                    $('#dish').append("<option value='"+da[i].id+"'>"+da[i].title+"</option>");

                }

            },

            dataType: 'json'

        });

    }

    

    $('#menu-item-schedule').addClass('menu-item-sel');

})
$(document).ready(function(){

    //=================  ====================


    function load() {

        sUrl = "api/employer_get.php";

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

                    strHtml += `<tr id='`+data[i].user_id+`'>

                                    <td>`+n+`</td>

                                    <td>
                                        <div class="div_avatar">
                                            <img class="avatar" src="`+convURL(data[i].user_avatar_url)+`"/>
                                        </div>
                                    </td>

                                    <td class='uname'>`+data[i].user_name+`</td>

                                    <td class='email'>`+data[i].user_email+`</td>

                                    <td class='phone'>`+data[i].user_phone+`</td>

                                    <td class='vcode'>`+data[i].user_verify_code+`</td>

                                    <td class='membership'>`+data[i].user_membership+`</td>

                                    <td class='date'>`+data[i].user_register_date+`</td>

                                    <td>

                                        <i class="fa fa-pencil-square-o uchange"></i>&nbsp;&nbsp;
                                        <i class="fa fa-trash udelete"></i>&nbsp;&nbsp;
                                        <i class="fa fa-key upass"></i>
                                        
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

                $('.uchange').click(function(){

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');

                    change(uid, trObj);

                })

                $('.upass').click(function(){

                    trObj = $(this).parent().parent();

                    uid = trObj.attr('id');

                    changePass(uid, trObj);

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



        $('#uname').val(obj.find('.uname').text());

        $('#email').val(obj.find('.email').text());

        $('#phone').val(obj.find('.phone').text());

        $('#vcode').val(obj.find('.vcode').text());

        $('#membership').val(obj.find('.membership').text());


        $('#avatar').parent().next().attr('src', obj.find('.avatar').attr('src'));
    }

    var files;

    $('#avatar').on('change', prepareUpload);

    function prepareUpload(event)

    {

      files = event.target.files; 

      readURL(this, '#uimg');

    }

    $('#bt_add').click(function(){

        var form_data = new FormData();  

        $('form input[type=text]').each(function(){

            attrid = $(this).attr('id'); 

            val = $(this).val(); 

            form_data.append(attrid, val);

        })


        form_data.append('membership', $('#membership').val());

        form_data.append('uid', $(this).attr('uid'));

        form_data.append('avatar', $('#avatar').prop('files')[0]);

        $('.bt_close').click();

        showLoading();


        sUrl = "api/employer_add.php";

        $.ajax({

            type: "POST",

            url: sUrl,

            cache: false,

            processData: false, 

            contentType: false,

            data: form_data,

            success: function(data){   console.log(data);

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

    function del(uid) {

        if(!confirm("Are you sure?")) return;

        sUrl = "api/employer_del.php";

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

    $('#menu-item-employer').addClass('menu-item-sel');

})
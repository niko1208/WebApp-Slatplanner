$(document).ready(function(){

$('#bt_go_signup').click(function(){
    $('#sec_login').css('display', 'none');
    $('#sec_signup').fadeIn('fast');
});

$('#bt_go_signin').click(function(){
    $('#sec_signup').css('display', 'none');
    $('#sec_login').fadeIn('fast');
});

$('#bt_register').click(function(){
    if($('#uname').val() == "") {
        alert("please input name");
        return;
    }
    if($('#ucompany').val() == "") {
        alert("please input company");
        return;
    }
    if($('#upassword').val() == "") {
        alert("please input password");
        return;
    }
    if($('#uemail').val() == "") {
        alert("please input email address");
        return;
    }
    if($('#upassword').val() != $('#upassword_confirm').val()) {
        alert("please match password");
        return;
    }
    sUrl = "api/user_add.php";
    var form_data = new FormData();      
    form_data.append('uname', $('#uname').val());      
    form_data.append('ucompany', $('#ucompany').val());      
    form_data.append('upassword', $('#upassword').val());      
    form_data.append('uemail', $('#uemail').val());

    $.ajax({

        type: "POST",

        url: sUrl,

        cache: false,

        processData: false, 

        contentType: false,

        data: form_data,

        success: function(data){

            if(data.success) {
                alert("Successfully Registered!");
            } else {
                alert(data.query);
            }

        },

        error: function() {
            alert("error");
        },

        dataType: 'json'

    });
})

$('#bt_login').click(function(){
    if($('#uname1').val() == "") {
        alert("please input name");
        return;
    }
    if($('#upassword1').val() == "") {
        alert("please input password");
        return;
    }
    sUrl = "api/user_login.php";
    var form_data = new FormData();      
    form_data.append('uemail', $('#uname1').val());        
    form_data.append('upassword', $('#upassword1').val()); 

    $.ajax({

        type: "POST",

        url: sUrl,

        cache: false,

        processData: false, 

        contentType: false,

        data: form_data,

        success: function(data){

            if(data.success == "1") {
                location.href = '../';
            } else {
                alert("Invalid email or password");
            }

        },

        error: function() {
            alert("error");
        },

        dataType: 'json'

    });
})

})
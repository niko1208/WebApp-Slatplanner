$.fn.pageMe = function(opts){

    var $this = this,

        defaults = {

            perPage: 10,

            showPrevNext: false,

            hidePageNumbers: false

        },

        settings = $.extend(defaults, opts);

    

    var listElement = $this; 

    var perPage = settings.perPage; 

    var children = listElement.children(); 

    var pager = $('.pager');

    

    if (typeof settings.childSelector!="undefined") {

        children = listElement.find(settings.childSelector);

    }

    

    if (typeof settings.pagerSelector!="undefined") {

        pager = $(settings.pagerSelector);

    }

    

    var numItems = children.length;

    var numPages = Math.ceil(numItems/perPage);



    pager.data("curr",0);

    

    if (settings.showPrevNext){

        $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);

    }

    

    var curr = 0;

    while(numPages > curr && (settings.hidePageNumbers==false)){

        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);

        curr++;

    }

    

    if (settings.showPrevNext){

        $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);

    }

    

    pager.find('.page_link:first').addClass('active');

    pager.find('.prev_link').hide();

    if (numPages<=1) {

        pager.find('.next_link').hide();

    }

    pager.children().eq(1).addClass("active");

    

    children.hide();

    children.slice(0, perPage).show();

    

    pager.find('li .page_link').click(function(){

        var clickedPage = $(this).html().valueOf()-1;

        goTo(clickedPage,perPage);

        return false;

    });

    pager.find('li .prev_link').click(function(){

        previous();

        return false;

    });

    pager.find('li .next_link').click(function(){

        next();

        return false;

    });

    

    function previous(){

        var goToPage = parseInt(pager.data("curr")) - 1;

        goTo(goToPage);

    }

     

    function next(){

        goToPage = parseInt(pager.data("curr")) + 1;

        goTo(goToPage);

    }

    

    function goTo(page){

        var startAt = page * perPage,

            endOn = startAt + perPage;

        

        children.css('display','none').slice(startAt, endOn).show();

        

        if (page>=1) {

            pager.find('.prev_link').show();

        }

        else {

            pager.find('.prev_link').hide();

        }

        

        if (page<(numPages-1)) {

            pager.find('.next_link').show();

        }

        else {

            pager.find('.next_link').hide();

        }

        

        pager.data("curr",page);

        pager.children().removeClass("active");

        pager.children().eq(page+1).addClass("active");

    

    }

};



$(document).ready(function(){

    

    $('.menu-item').click(function(){ 

    	id = $(this).attr('id');

    	if(id == 'menu-item-employer') {

    	   location.href = './';	

    	} else if(id == 'menu-item-seeker') {

    		location.href = 'seeker.php';

    	} else if(id == 'menu-item-ads') {

            location.href = 'ads.php';

        } else if(id == 'menu-item-job') {

            location.href = 'joblist.php';

        } else {

            location.href = './';

        }

    })



    $('.up_arrow').click(function(){ 

        if($(this).hasClass('up')) {

            $('.div_body_top').css('height', '80px');

            $(this).removeClass('up');

            $(this).find('.fa').addClass('fa-arrow-up');

            $(this).find('.fa').removeClass('fa-arrow-down');

        } else {

            $('.div_body_top').css('height', '20px');

            $(this).addClass('up');

            $(this).find('.fa').removeClass('fa-arrow-up');

            $(this).find('.fa').addClass('fa-arrow-down');

        }

    });

    

    if($('#email').length > 0) {

        $('#email').focus();

    }

    $('#password').keypress(function(e){

        if(e.which == 13) {

            $('#bt_login').click();

        }

    })
/*
    $('#bt_login').click(function(e){ 

        

        if($('#email').val() == "" || $('#password').val() == "") {

            alert("Please input correctly.");

            return;

        }

        

        sUrl = "api/admin.php";

        

        $.ajax({

            type: "get",

            url: sUrl,

            data: {emailaddress:$('#email').val(), password: $('#password').val()},

            success: function(data){  

                if((data.success)*1 == 1) {

                    location.href = "index.php";

                } else {

                    alert("Incorrect username or password");

                }

            },

            dataType: 'json'

        });

        

    });
*/
    $('#bt_signup').click(function(e){ 

        

        if($('#s_email').val() == "" || $('#s_password').val() == "" || $('#s_firstname').val() == "" || $('#s_lastname').val() == "" || $('#s_cpassword').val() == "") return;

        if($('#s_password').val() != $('#s_cpassword').val()) {

            alert("Don't match password.");

            return;

        }

        var sUrl = "api/signup.php";

        $.ajax({

            type: "post",

            url: sUrl,

            data: {emailaddress:$('#s_email').val(), password: $('#s_password').val(), firstname: $('#s_firstname').val(), lastname: $('#s_lastname').val()},

            success: function(data){  

                if((data.success)*1 == 1) {

                    alert("Sign up Successfully!!!")

                    $('#signup_dlg .div_buttons a').click();

                } else {

                    alert(data.detail);

                }

            },

            dataType: 'json'

        });

        

    });



    $('.bt_close').click(function(){

        $('.overlay').css('display', 'none');

        $('.popup').fadeOut();

    })



    $('#bt_admin_change').click(function(){



        if($('#admin_oldpass').val() == "") {

            alert("Please input old password");

            return;

        }

        if($('#admin_newpass').val() == "") {

            alert("Please input new password");

            return;

        }

        if($('#admin_newpass').val() != $('#admin_confirmpass').val()) {

            alert("Please match password");

            return;

        }

        var form_data = new FormData();  



        form_data.append('old', $('#admin_oldpass').val());

        form_data.append('pass', $('#admin_newpass').val());



        showLoading();





        sUrl = "api/change_admin_pass.php";



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

                    location.href = "api/logout.php";

                } else {

                    if(data.detail == "old") {

                        alert("Original password is Incorrect");

                    } else {

                        alert(data.detail + "--" + data.query);

                    }



                }



            },



            error: function() {



                stopLoading();



            },



            dataType: 'json'



        });

    })



    //================== init ========================





    

    //==========================================



    $(window).resize(function(){

    	divw = $('.div_body').width();

    })



    $('#bt_nav').click(function(){

        if($('.wrapper').hasClass('c-nav-samll')) {

            $('.wrapper').removeClass('c-nav-samll');

        } else {

            $('.wrapper').addClass('c-nav-samll');

        }

    })





    $(window).resize(function(){

        resize();

    })

    function resize() {

        w = $(window).width();

        h = $(window).height();

    }

    resize();



});



function convStr(str) {

    str = str.replace(/&quot;/g,'"');

    str = str.replace(/&amp;/g,'&');

    return str;

}

function convURL(imgurl) {

    if(imgurl == "") {

        return "http://jobfinder.cloud/jobfinder/employer/avatar/avatar-13-2017-08-12-13-57-22.jpg";

    }

    return imgurl;

}



function getBase64Image(img) {

  var canvas = document.createElement("canvas");

  canvas.width = img.width;

  canvas.height = img.height;

  var ctx = canvas.getContext("2d");

  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

}

function readURL(input, img) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();



        reader.onload = function (e) {

            $(img).attr('src', e.target.result);

        }

        reader.readAsDataURL(input.files[0]);

    }

}



function showLoading(str="") {

    if(str == "") {
        $('#loading .alert').html("Loading...");
    } else {
        $('#loading .alert').html("Saving...");
    }
	$('#loading').css('display', 'block'); 

}

function stopLoading() {

    $('#loading').css('display', 'none');	

}

function addSelectMenuItem(objItem) { 

    $('.menu-item').removeClass('menu-item-sel');

    $('.menu-item').find('.menu-item-arrow i').removeClass('fa-chevron-down');

    $('.menu-item').find('.menu-item-arrow i').addClass('fa-chevron-right');

    objItem.addClass('menu-item-sel');

    obj_arrow = objItem.find('.fa-chevron-right');

    obj_arrow.removeClass('fa-chevron-right');

    obj_arrow.addClass('fa-chevron-down');

}



function formatDownload() {

    return '<i class="fa fa-download"></i>';

}

function formatDate(str) {

    var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    ary = str.split('T');

    date = ary[0];

    time = ary[1];



    date_ary = date.split('-');

    yy = date_ary[0];

    dd = date_ary[2];

    mm = date_ary[1]*1;

    date = dd + '-' + months[mm].substring(0, 3) + '-' + yy%100;

    time = time.substring(0, 5);

    return date + ' ' + time;



}

function formatSize(str) {

    return bytesToSize(str);

}

function bytesToSize(bytes) {

   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

   if (bytes == 0) return '0 Byte';

   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024))); 

   return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]; 

};
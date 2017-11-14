$(document).ready(function(){
    //================= Order ====================

    function load() {
        sUrl = "api/order_get.php";
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
                                    <td>`+data[i].delivery_time+`</td>
                                    <td>`+data[i].dt+`</td>
                                    <td>`+dish_list[data[i].dish_id]+`</td>
                                    <td>`+merchant_list[data[i].merchant_id]+`</td>
                                    <td>`+data[i].name+`</td>
                                    <td>`+data[i].address+`</td>
                                    <td>`+data[i].phone+`</td>
                                    <td>`+data[i].zip+`</td>
                                    <td>`+data[i].checkout+`</td>
                                    <td>`+data[i].revenue+`</td>
                                    <td>aa</td>
                                </tr>`;
                }
                $('#table tbody').html(strHtml);
                
                $('#myTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10});
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
            load();
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

    $('#menu-item-orders').addClass('menu-item-sel');
})
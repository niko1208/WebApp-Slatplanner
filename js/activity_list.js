$(function(){

    $('#snapshot_date').datepicker({
        inline: true
    });

	$( "#snapshot" ).combobox({
		select: function(event, ui) {
			setTimeout(function(){
			    var input_value = $('.div_snapshot .ui-widget.ui-widget-content').val();
			    
			}, 500);
		}
	});

	$('.bt_ssadd').click(function(){
		var tbname = "snapshot";
		var input_value = $('.div_snapshot .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  k = 1;
        $('.div_snapshot select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 1) return;

		sUrl = "api/activity_setting_attr_add.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	            $('div_snapshot select').append($('<option>', { 
                    value: input_value,
                    text : input_value 
                }));
                $('div_snapshot .ui-widget.ui-widget-content').val('');
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	})
	$('.bt_ssremove').click(function(){
		var tbname = "snapshot";
		var input_value = $('.div_snapshot .ui-widget.ui-widget-content').val();
        var k = 0;
        if (input_value == '')  k = 1;
        $('.div_snapshot select option').each(function(){
            if ($(this).html() == input_value)
                k = 1;
        });
        if(k == 0) return;

		sUrl = "api/activity_setting_attr_del.php";
	    var form_data = new FormData();
	    form_data.append('pid', ppid);
	    form_data.append('tbname', tbname);
	    form_data.append('value', input_value);
	    $.ajax({
	        type: "POST",
	        url: sUrl,
	        cache: false,
	        processData: false, 
	        contentType: false,
	        data: form_data,
	        success: function(data){
	        	$('.div_snapshot select :selected').remove();
                $('.div_snapshot .ui-widget.ui-widget-content').val('');
	        },
	        error: function() {
	        },
	        dataType: 'json'
	    });
	})

	//=========== init ============
	
})
function loadSnapshot(pid) {
	var tbname = "snapshot";
	sUrl = "api/activity_setting_attr_get.php";
    var form_data = new FormData();
    form_data.append('pid', pid);
    form_data.append('tbname', tbname);
    $.ajax({
        type: "POST",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        data: form_data,
        success: function(data) { console.log(data);
    		$('.div_snapshot select').html("");
        	for(i=0;i<data.length;i++) {
            	$('.div_snapshot select').append($('<option>', { 
                    value: data[i].value,
                    text : data[i].value 
                }));
            }
        },
        error: function() {
        },
        dataType: 'json'
    });
}
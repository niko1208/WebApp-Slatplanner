$(function(){

	$('#chart_gantt').click(function(){
		$('.cont_chart').css('display', 'none');
		$('#section_activity_chart').css('display', 'block');

		$('#section_activity_chart_tab').css('display', 'block');

		$('.chart_tab').removeClass('sel');
		$('#chart_gantt').addClass('sel');

        filter_c = "All";

        gantt();
        histogram();
		
	})
    $('#chart_plan').click(function(){ console.log(settingData);
        $('.cont_chart').css('display', 'none');
        $('#section_activity_chart_plan').css('display', 'block');

        $('#section_activity_chart_tab').css('display', 'block');

        $('.chart_tab').removeClass('sel');
        $('#chart_plan').addClass('sel');
        
        chart_plan();
    })
    $('#chart_reason').click(function(){
        $('.cont_chart').css('display', 'none');
        $('#section_activity_chart_reason').css('display', 'block');

        $('#section_activity_chart_tab').css('display', 'block');

        $('.chart_tab').removeClass('sel');
        $('#chart_reason').addClass('sel');
        
        chart_reason();
    })
    $('#chart_curve').click(function(){
        $('.cont_chart').css('display', 'none');
        $('#section_activity_chart_curve').css('display', 'block');

        $('#section_activity_chart_tab').css('display', 'block');

        $('.chart_tab').removeClass('sel');
        $('#chart_curve').addClass('sel');
        
        chart_curve();
    })


	$('#visual_resp').change(function(){
		sid = $(this).val();
		//loadVisualActivity(resp, loadPlan);
        if($('.chart_tab.sel').attr('id') == 'chart_plan') {
            drawChart();
        } else if($('.chart_tab.sel').attr('id') == 'chart_reason') {
            drawChart_reason();
        } else if($('.chart_tab.sel').attr('id') == 'chart_gantt') {
            filter_c = sid;
            gantt();
            histogram();
        }
        
	})

})

function chart_curve(filter){ console.log(activityData1);

    p_start_date = new Date(activityData1[0].start).getTime() / 1000;
    p_end_date = new Date(activityData1[0].finish).getTime() / 1000;
    for(i=1; i<activityData1.length; i++) {
        var third = new Date(activityData1[i].start).getTime() / 1000;
        var fourth = new Date(activityData1[i].finish).getTime() / 1000;
        if (p_start_date > third)
            p_start_date = third;
        if (p_end_date < fourth)
            p_end_date = fourth;
    }

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var categories = [], categories_date = [];
    category_count = (p_end_date - p_start_date) / (24*60*60) + 1;
    j = 0;
    for (i=p_start_date; i<=p_end_date; i=i+24*60*60) {
        var d = new Date(i * 1000);
        var month = months[d.getMonth()];
        var day = d.getDate();
        var year = d.getFullYear();
        categories[j] = month + ' ' + day + ' ' + year;
        categories_date[j] = i;
        j++;
    }

    gdata = [];
    for(s=0; s<snapshot.length; s++) {
        sid = snapshot[s].id;
        adata = [];
        for(i=0; i<activityData1.length; i++) {        
            if(sid == activityData1[i].sid) {
                item = [];
                item.push(activityData1[i].activity_id);
                item.push(activityData1[i].activity_name);
                item.push(activityData1[i].duration);
                item.push(activityData1[i].start);
                item.push(activityData1[i].finish);
                item.push(activityData1[i].size);
                item.push("");
                item.push(activityData1[i].code);
                
                adata.push(item);
            }
        }
        if(adata.length > 0) {
            data = getDataCurve(adata);
            data.name = snapshot[s].value;
            gdata.push(data);
        }
    }
    console.log(gdata);

    Highcharts.chart('div_chart_curve', {
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: categories
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                }
            },
            area: {
                stacking: null
            }
        },
        series: gdata,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}

function getDataCurve(all_data) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var data = [], p_start_date, p_end_date, category_count;
    var categories = [], categories_date = [], all_colors = [];
    var series = new Array();
    var i, j, k;

    data = all_data;
    p_start_date = new Date(data[0][3]).getTime() / 1000;
    p_end_date = new Date(data[0][4]).getTime() / 1000;

    for (i=1; i<data.length; i++) {
        var third = new Date(data[i][3]).getTime() / 1000;
        var fourth = new Date(data[i][4]).getTime() / 1000;
        if (p_start_date > third)
            p_start_date = third;
        if (p_end_date < fourth)
            p_end_date = fourth;
    }
    j = 0;
    $('#filter option').each(function(){
        if ($(this).html() != 'All'){
            for (k = 0; k<all_data.length; k++){
                if ($(this).html() == all_data[k][7])
                    all_colors[j] = all_data[k][6];
            }
            j++;
        }
    });

    j = 0;  i = 0;
    var a = new Array();
    series = {name: '', data:a};
    category_count = (p_end_date - p_start_date) / (24*60*60) + 1;
    j = 0;
    for (i=p_start_date; i<=p_end_date; i=i+24*60*60) {
        var d = new Date(i * 1000);
        var month = months[d.getMonth()];
        var day = d.getDate();
        var year = d.getFullYear();
        categories[j] = month + ' ' + day + ' ' + year;
        categories_date[j] = i;
        series.data[j] = 0;
        j++;
    }
    for (i=0; i<data.length; i++) {
        var a_start_date = new Date(data[i][3]).getTime() / 1000;
        var a_end_date = new Date(data[i][4]).getTime() / 1000;
        for (k=a_start_date;k<=a_end_date;k=k+24*60*60){
            var p = (k - p_start_date) / (24*60*60);
            p = Math.floor(p);
            if (isRestDate(k)){
                series.data[p] = 0;
            } else {
                series.data[p] += parseInt(data[i][5]);
            }
        }
    }

    data1 = series.data;
    sum = 0;
    for (i=0; i<data1.length; i++) {
        sum += eval(data1[i]);
        series.data[i] = sum;
    }
    return series;
}
function chart_reason() {
    drawChart_reason();
}
function drawChart_reason() { console.log(reason_data);
    var ser = [];
    var selresp = $('#visual_resp').val();

    for(n=0; n<settingData.delay.length; n++) {
        reason = settingData.delay[n].value;
        data = [];
        for(nn=0; nn<settingData.responsible.length; nn++) {
            resp = settingData.responsible[nn].value;
            if(selresp == resp) {
                for(i=0; i<xx.length; i++) {
                    s = xx[i]; 
                    ss = reason_data[s][reason][resp];
                    if(eval(ss) > 0) {
                        data.push(ss);
                    } else {
                        data.push(0);
                    }
                }
                break;
            } else {
                for(i=0; i<xx.length; i++) {
                    s = xx[i]; 
                    ss = reason_data[s][reason]['total'];
                    if(eval(ss) > 0) {
                        data.push(ss);
                    } else {
                        data.push(0);
                    }
                }
                break;
            }
        }
        ser.push({'name': reason, 'data':data, 'color':settingData.delay[n].color});
    }
    
    Highcharts.chart('div_chart_reason', {
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: xx
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            },
            line: {
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: ser,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function drawChart() {
    console.log(xx);
    console.log(plan_data);
    console.log(plan_data1);
    var ser = [];
    var selresp = $('#visual_resp').val();
    for(n=0; n<settingData.responsible.length; n++) {
        resp = settingData.responsible[n].value;
        if(selresp == "" || (selresp == resp)) {
            data = [];
            for(i=0; i<xx.length; i++) {
                s = xx[i]; 
                ss = eval(plan_data[s][resp]) + eval(plan_data1[s][resp]);
                if(ss > 0) {
                    val = 100*plan_data[s][resp]/ss;
                    val = Math.round(val);
                    data.push(val);
                } else {
                    data.push(0);
                }
            }
            ser.push({'name': resp, 'data':data, 'color':settingData.responsible[n].color});
        }
    }
    data = [];
    for(i=0; i<xx.length; i++) {
        s = xx[i]; 
        ss = eval(plan_data[s]['total']) + eval(plan_data1[s]['total']);
        if(ss > 0) {
            val = 100*plan_data[s]['total']/ss;
            val = Math.round(val);
            data.push(val);
        } else {
            data.push(0);
        }
    }
    ser.push({'name': 'total', 'data':data, 'color':'#000', 'dashStyle':'LongDash'});
    
    Highcharts.chart('div_chart_plan', {

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: xx
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: ser,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function loadVisualActivity(resp, callback=null) {
    plan_data = {};
    plan_data1 = {};
	showLoading();
    sUrl = "api/activity_get_visual.php?pid="+ppid+'&sid=-1';

    strHtml = "";

    $.ajax({
        type: "GET",
        url: sUrl,
        cache: false,
        processData: false, 
        contentType: false,
        success: function(data){                  
            activityData1 = data;
            callback(data);
            hideLoading();
        },
        error: function() {
            hideLoading();
        },
        dataType: 'json'
    });
}

var activityData1 = [];
var xx = [];

function loadPlan(data) {

    console.log(data); 
    renderActivityTracking_visual(data, []);
}

function chart_plan() {
	$('#visual_resp').html("<option value=''>All</option>");
	for(i=0; i<settingData.responsible.length; i++) {
		$('#visual_resp').append("<option value='"+settingData.responsible[i].value+"'>"+settingData.responsible[i].value+"</option>");
	}
    xx = [];
	for(i=snapshot.length-1; i>0; i--) {
    	xx.push(snapshot[i].value);
    }
    $('#table_activity_tracking_visual tbody').html("");
    loadVisualActivity("", loadPlan);
}

function renderActivityTracking_visual(data, data1) {
	delay = settingData['delay'];
	
	strHtml = "";
	$('#table_activity_tracking_visual tbody').html("");
	for(i=0;i<data.length;i++) {
        strDelay = "";
        strDelay += "<option value='No Reason'>No Reason</option>";
        for(j=0; j<delay.length; j++) {
            if(data[i].reason == delay[j].value)
                strDelay += "<option value='"+delay[j].value+"' selected>"+delay[j].value+"</option>";
            else
                strDelay += "<option value='"+delay[j].value+"'>"+delay[j].value+"</option>";
        }
        strDone = `<i class="fa fa-square-o i-setting" aria-hidden="true"></i>
                    <i class="fa fa-check-square-o i-checked" aria-hidden="true" style='display:none'></i>`;
        if(data[i].done == '1') 
            strDone = `<i class="fa fa-square-o i-setting" aria-hidden="true" style='display:none'></i>
                        <i class="fa fa-check-square-o i-checked" aria-hidden="true"></i>`;

		prevstart = "";
		prevfinish = "";
		if(data1 != null && i < data1.length) {
			prevstart = data1[i].start;
			prevfinish = data1[i].finish;
		}

        strHtml += `<tr class='tr'>
                        <td class='sid'><input class="tt" type="text" value='`+data[i].svalue+`'/></td>

                        <td class='aid'><input class="tt" type="text" value='`+data[i].activity_id+`'/></td>

                        <td class='adesc'><input class="tt" type="text" value='`+data[i].note+`'/></td>

                        <td class='acode'><input class="tt" type="text" value='`+data[i].code+`'/></td>

                        <td class='astart'><input class="tt" type="text" value='`+data[i].start+`'/></td>

                        <td class='afinish'><input class="tt" type="text" value='`+data[i].finish+`'/></td>

                        <td class='selcheck'> `+strDone+`</td>

                        <td class="astartprev"><input class="tt" type="text" value='`+data[i].prevstart+`'/></td>

                        <td class="afinishprev"><input class="tt" type="text" value='`+data[i].prevfinish+`'/></td>

                        <td><select class='form-control adelay ahide'>`+strDelay+`</select></td>

                    </tr>`;

    }

    $('#table_activity_tracking_visual tbody').append(strHtml);

    checkTracking_visual();

    setTimeout(function(){
        console.log(plan_data);
        console.log(plan_data1);
        drawChart();
    }, 1000);
}

var plan_data = {};
var plan_data1 = {};

var reason_data = {};
function checkTracking_visual() {
    for(i=0; i<snapshot.length; i++) {
        cursnapshot = snapshot[i].value;
        plan_data[cursnapshot] = {};
        plan_data1[cursnapshot] = {};
        reason_data[cursnapshot] = {};
        for(n=0; n<settingData.responsible.length; n++) {
            resp = settingData.responsible[n].value;
            plan_data[cursnapshot][resp] = 0;
            plan_data1[cursnapshot][resp] = 0;
        }
        plan_data[cursnapshot]['total'] = 0;
        plan_data1[cursnapshot]['total'] = 0;

        for(n=0; n<settingData.delay.length; n++) {
            reason = settingData.delay[n].value;
            reason_data[cursnapshot][reason] = {};
            reason_data[cursnapshot][reason]['total'] = 0;
            reason_data[cursnapshot]['No Reason'] = {};
            for(nn=0; nn<settingData.responsible.length; nn++) {
                resp = settingData.responsible[nn].value;
                reason_data[cursnapshot][reason][resp] = 0;
                reason_data[cursnapshot]['No Reason'][resp] = 0;
            }
        }
    }
    $('#table_activity_tracking_visual tbody tr').each(function(){
        resp = $(this).find('.acode input').val();
        reason = $(this).find('.adelay').val();

        sid = $(this).find('.sid input').val();
        cursnapshot = sid;
        cursid = -1;

        prevsnapshot = "";
        for(i=0; i<snapshot.length; i++) {
            if(snapshot[i].value == sid && i < snapshot.length-1) {
                prevsnapshot = snapshot[i+1].value;
                break;
            }
            if(snapshot[i].value == sid) {
                cursid = snapshot[i].id;
                break;
            }
        }

        start = $(this).find('.astart input').val(); 
        start = new Date(start);
        if(start > (new Date($(this).find('.astartprev input').val()))) {
            $(this).find('.astart input').addClass('red');
            $(this).find('.adelay').removeClass('ahide');
        }
        finish = $(this).find('.afinish input').val();
        finish = new Date(finish);
        if(finish > (new Date($(this).find('.afinishprev input').val()))) {
            $(this).find('.afinish input').addClass('red');
            $(this).find('.adelay').removeClass('ahide');
        }
        if(!($(this).find('.adelay').hasClass('ahide'))) {
            if((new Date($(this).find('.astartprev input').val())) >= (new Date(prevsnapshot)) && (new Date($(this).find('.astartprev input').val())) <= (new Date(cursnapshot)) || (new Date($(this).find('.afinishprev input').val())) >= (new Date(prevsnapshot)) && (new Date($(this).find('.afinishprev input').val())) <= (new Date(cursnapshot))) {
                plan_data1[cursnapshot][resp] ++;
                plan_data1[cursnapshot]['total'] ++;

                reason_data[cursnapshot][reason][resp] ++;
                reason_data[cursnapshot][reason]['total'] ++;
            } else {
                $(this).find('.adelay').addClass('ahide');
            }
        }


        if((new Date($(this).find('.astartprev input').val())) >= (new Date(prevsnapshot)) && (new Date($(this).find('.astartprev input').val())) <= (new Date(cursnapshot)) || (new Date($(this).find('.afinishprev input').val())) >= (new Date(prevsnapshot)) && (new Date($(this).find('.afinishprev input').val())) <= (new Date(cursnapshot))) {
            plan_data[cursnapshot][resp] ++;
            plan_data[cursnapshot]['total'] ++;
        } else {
            
        }
    })
}
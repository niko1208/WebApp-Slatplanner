ptx = 72 / 96;
            x = 0;
            y = 0;
            w = 190;
            h = 160;
            i = 0;
            margin_top = 20;
            margin_left = 20;
            row_num = 2;
            hm = 100;
            if ($('#print_mode').val() == 'A') {
                var doc = new jsPDF('l', 'in', [8.5, 11]);
                row_num = 3;
                h = 11;
                hm = 8;
            }
            $('.cont .div_qr').each(function(){
                if(i != 0 && i % (row_num*3) == 0) {
                    doc.addPage();
                    i = 0;
                }
                doc.setFont("Arial");
                x = (i % 3)*w+margin_left;
                y = Math.floor(i / 3)*h+margin_top;
                doc.setFontSize(22);
                aname = $(this).find('.print_aname').html();
                ary = aname;//.split(" ");
                aw = 15;
                aname= ""; enterCount = 0;
                for(ii =0; ii<ary.length; ii++) {
                    if(enterCount < 3) {
                        aname += ary[ii];
                        if(ii!= 0 && ii % Math.floor(w/aw) == 0) {
                            aname += "\n";
                            enterCount ++;
                        }
                    } else {
                        break;
                    }
                }
                doc.text(x, y+30, aname);
                doc.setFontSize(12);
                milestone = $(this).find('.print_milestone').html();
                if(milestone.indexOf('Finish') > -1) {
                    if(milestone.indexOf('Finish Milestone') > -1) {
                        doc.text(x+w-60-85, y+hm-2, milestone);
                    } else {
                        doc.text(x+w-60-35, y+hm-2, milestone);
                    }
                } else {
                    doc.text(x, y+hm-2, milestone);    
                }
                
                doc.setDrawColor(0);
                
                bgcolor = $(this).find('.print_acolor').css('background-color'); 
                bgcolor = bgcolor.replace('rgb(', '').replace(')', '');
                bgcolor = bgcolor.split(','); 
                if(bgcolor[0].indexOf("rgba") > -1) {
                    bgc1 = 255;
                    bgc2 = 255;
                    bgc3 = 255;
                } else {
                    bgc1 = eval(bgcolor[0]);
                    bgc2 = eval(bgcolor[1]);
                    bgc3 = eval(bgcolor[2]);
                }
                doc.setFillColor(bgc1,bgc2,bgc3);
                doc.rect(x, y+hm, w-60, 25, 'F');
                cid = $(this).find('.print_qr canvas').attr('id');
                canvas = document.getElementById(cid);
                imgData = canvas.toDataURL(); 
                doc.addImage(imgData, 'JPEG', x+140, y+hm, 40, 40);
                doc.text(x, y+(hm+40), $(this).find('.print_aid').html());
                pcode = $(this).find('.print_acode').html();
                doc.text(x+(140-pcode.length*10), y+(hm+40), pcode);

                if($(this).find('.print_acolor span').length > 0) {
                    if(milestone.indexOf('Milestone') < 0) {
                        doc.setLineWidth(2);
                        if($(this).find('.print_acolor span.sarrow:first-child').css('display') != 'none') {
                            doc.triangle(x+10, y+(hm+5), x+5, y+(hm+12), x+10, y+(hm+19), 'F'); 
                            doc.line(x+20, y+(hm+12), x+6, y+(hm+12));
                            doc.setLineWidth(5);
                            doc.line(x, y+hm, x, y+hm+25);
                        } else {
                            doc.triangle(x+(w-60)-10, y+(hm+5), x+(w-60)-5, y+(hm+12), x+(w-60)-10, y+(hm+19), 'F');
                            doc.line(x+(w-60)-20, y+(hm+12), x+(w-60)-6, y+(hm+12));
                            doc.setLineWidth(5);
                            doc.line(x+w-60, y+hm, x+w-60, y+hm+25);
                        }
                    } else {
                        doc.setLineWidth(1);
                        doc.setFillColor(0,0,0);
                        if(milestone.indexOf('Finish Milestone') < 0) {
                            doc.triangle(x+10, y+(hm+5), x+5, y+(hm+12), x+10, y+(hm+19), 'F');                            
                            doc.triangle(x+10, y+(hm+5), x+15, y+(hm+12), x+10, y+(hm+19), 'F');
                        } else {
                            doc.triangle(x+(w-60)-10, y+(hm+5), x+(w-60)-5, y+(hm+12), x+(w-60)-10, y+(hm+19), 'F');
                            doc.triangle(x+(w-60)-10, y+(hm+5), x+(w-60)-15, y+(hm+12), x+(w-60)-10, y+(hm+19), 'F');
                        }
                    }
                }

                i++;
            })
            doc.save('pageContent.pdf');
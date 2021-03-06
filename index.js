$(document).ready(function(){

    $('#hide_p_1').click(function(){
        $('#p_1').hide();
    });

    $('#show_p_1').click(function(){
        $('#p_1').show();
    });

    $('#toggle_1').click(function () { 
        $('#toggle_p_1').toggle(500);
    });

    $('#hide_p_2').dblclick(function(){
        $('#p_2').hide(1000);
    });

    $('#mouse_enter').mouseenter(function () { 
        alert('You have successfully entered');
    });

    $('#mouse_leave').mouseleave(function () { 
        alert('You have successfully leaved');
    });

    $('#hover_1').hover(function () {
            alert('You have successfully entered');
            
        }, function () {
            alert('You have successfully leaved');
        }
    );

    $("#input_1").focus(function (e) { 
        e.preventDefault();
        $(this).css('background-color','blue');
    });

    $("#input_1").blur(function (e) { 
        e.preventDefault();
        $(this).css('background-color','lightgreen');
    });

    $('#on_event').on({
        click:function(){
            $(this).css('padding','20px');
        },
        mouseenter:function(){
            $(this).css('background-color','red');
        }
    });

    $("#fade_in").click(function () { 
        $("#fade_in_p_1").fadeIn();
        $('#fade_in_p_2').fadeIn(2000);
        
    });

    $('#fade_toggle').click(function(){
        $('#fade_toggle_p').fadeToggle(500);
    });

    $('#slide_toggle').click(function(){
        $('#slide_div').slideToggle('slow');
    });

    $('#animation_btn').click(function(){
        var ani = $('#box1');
        ani.animate({left: '600px',opacity: '0.7'},'slow');
        ani.animate({width: '200px',height: '100px'},'slow');
        ani.animate({fontSize: '30px',fontWeight: '900',opacity: '1'},'slow');
    });

    $('#chain_btn').click(function(){
        $('#chain_p').css('color','red').slideUp(1000).slideDown(1000);
    })

    $('#dom_btn_1').click(function(){
        $('#dom1').text('Successfully Clicked');
    })

    $('#dom_btn_2').click(function(){
        $('#dom2').html('<p>P tag is appended</p>');
    })

    $('#dom_btn_3').click(function (e) { 
        e.preventDefault();
        var temp1 = $('#dom_input_1').val();
        $('#dom_3').text(temp1);
    });

    $('#dom_btn_4').click(function(e){
        e.preventDefault();
        alert('Type is '+ $('#dom_input_1').attr('type'));
    })

    $('#dom_btn_5').click(function(e){
        e.preventDefault();
        var temp2 = $('#dom_input_2').val();
        $('#dom_ol_1').prepend('<li>'+temp2+'</li>');
    })

    $('#dom_btn_6').click(function(e){
        e.preventDefault();
        var temp2 = $('#dom_input_2').val();
        $('#dom_ol_1').append('<li>'+temp2+'</li>');
    })

    $('#dom_btn_7').click(function(){
        $('#dom_4').remove();
    })

    $('#dom_btn_8').click(function(){
        $('#dom_4').empty();
    })

    $('#dom_btn_9').click(function(){
        $('#dom_5').addClass("text-danger font-italic");
    })

    $('#dom_btn_10').click(function(){
        $('#dom_5').removeClass("text-danger font-italic");
    })

    $('#dom_btn_11').click(function(){
        $('#dom_5').toggleClass("bg-primary");
    })

    $('#cp_1').click(function(){
        $('#cp_1').parent().css({'border': '3px green solid'});
    })
    $('#cp_2').click(function(){
        $('#cp_2').parents().css({'border': '3px green solid'});
    })

    $('#cp_3').click(function(){
        $('#cp__3').siblings().css({'border': '3px green solid'});
    })

    $('#cp_4').click(function(){
        $('#cp_4').prev().css({'border': '3px green solid'});
    })

    $('#cl_1').click(function(){
        $('li').filter('li').css({'border': '3px red solid'});
    })

    $('#cl_2').click(function(){
        $('button').filter('.btn-primary').css({'border': '3px red solid'});
    })

    //calculator
    var val='';
    $('.cal #do').click(function(){
        val += $(this).val();
        // console.log(val);
        $('#cal_screen').val(val);
    })

    $('.cal #clear').click(function(){
        $('#cal_screen').val('');
        val = '';
    })

    var result;
    $('.cal #equal').click(function(){
        try{
            result = eval($('#cal_screen').val());
            // console.log(result);
            $('#cal_screen').val(result);
            val = result;
        }
        catch(err){
            $('#cal_screen').val('Error');
            val = '';
        }
    })

    // shopping-cart
    var item,text;
    $('#sc_input_btn').click(function(e){
        e.preventDefault();
        item = $('#sc_input').val();

        text = "<h6 id='list_text'>"+item+" <span style='float:right;'><span class='badge badge-primary' id='qn_minus' style='cursor:pointer;'>-</span> <span class='badge badge-success' style='font-size:15px;' id='qn'>0</span> <span class='badge badge-primary' id='qn_plus' style='cursor:pointer;'>+</span> <button class='btn btn-danger btn-sm py-0' id='dlt_item'>Delete</button></span></h6>";

        $('#sc_list').prepend(text);
        $('#sc_input').val('');
    })

    $('.sc').on("click","#dlt_item",function(){
        // console.log('yooo');
        $(this).closest('h6').fadeOut(600,function(){
            $(this).remove();
        })
    })
    var qn;
    $('.sc').on("click","#qn_plus",function(){
        // console.log($('#qn').text());
        qn = Number($(this).prev().text());
        $(this).prev().text(qn+1);
    })

    $('.sc').on("click","#qn_minus",function(){
        console.log($('#qn').text());
        qn = Number($(this).next().text());
        if(qn > 0){
            $(this).next().text(qn-1);
        }
    })
});
jQuery(function($) {
    var divs = $('#welcome');
    var header = $('header');
    var headerTitle = $('#headerTitle');
    var navBar = $('ul');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : 1 - st/469
        }); 
        if(st < 469){
            divs.css({ 
            'padding-top' : 230 + st/1.69
            }); 
        }
        if(st > 650){
            header.css({
                'height' : 100 - (st - 650)
            });
            headerTitle.css({ 
            'opacity' : 1 - (st-650)/50,
            'margin-top' : 22 - (st - 650)
            });
            navBar.css({ 
            'opacity' : 1 - (st-650)/50,
            'margin-top' : 35 - (st - 650)
            }); 

        }else{
            header.css({
                'height' : 100
            });
            headerTitle.css({ 
            'opacity' : 1,
            'margin-top' : 22
            });
            navBar.css({ 
            'opacity' : 1,
            'margin-top' : 35
            }); 

        }
    });
});



window.onload = function () { 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);

    setTimeout(function(){
        $('#loader-wrapper').remove();
    }, 2500);

    $('#welcome').hide();
    $('#welcome').removeClass('hidden');
    $('#welcome').delay(1490).fadeIn(900);
}





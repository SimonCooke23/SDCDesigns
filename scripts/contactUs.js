$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);

    setTimeout(function(){
        $('#loader-wrapper').remove();
    }, 3000);
});


$(document).ready(function(){
    $('#afterSub').hide();

    $('#formSub').hide();
    $('#formSub').removeClass('hidden');
    $('#formSub').delay(100).fadeIn(750);

    $('button').click(function(){
        $('input[type="text"]').each(function(){
            if($(this).val()==""){
                $('#error').html("All Fields Are Required");
            }else if($('#textArea').val()){
                $('#error').html("");
                $('#afterSub').removeClass('hidden');
                $('#afterSub').delay(500).fadeIn(500);
            }
        });
    });
});

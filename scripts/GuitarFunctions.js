$(document).ready(function(){
	document.getElementById("1").checked = true;
	document.getElementById("9").checked = true;
	document.getElementById("17").checked = true;
	document.getElementById("25").checked = true;
	document.getElementById("33").checked = true;
	document.getElementById("41").checked = true;
	
	$('input[type=radio][name="c1"]').click(function(){
		if(this.value.length == 3)						//check if #() or not
			var str = this.value.substring(0,2);		
		else
			var str = this.value.substring(0,1);
		document.getElementsByClassName("tg-b")[0].innerHTML = str;
		
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(this.className);
		audio.loop = true;
		audio.play();
    });
	
	$('input[type=radio][name="c2"]').click(function(){

		if(this.value.length == 3)
			var str = this.value.substring(0,2);
		else
			var str = this.value.substring(0,1);
		document.getElementsByClassName("tg-b")[1].innerHTML = str;
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(this.className);
		audio.loop = true;
		audio.play();
		
    });
	
	$('input[type=radio][name="c3"]').click(function(){
		if(this.value.length == 3)
			var str = this.value.substring(0,2);
		else
			var str = this.value.substring(0,1);
		document.getElementsByClassName("tg-b")[2].innerHTML = str;
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(this.className);
		audio.loop = true;
		audio.play();
    });
	
	$('input[type=radio][name="c4"]').click(function(){
		if(this.value.length == 3)
			var str = this.value.substring(0,2)
		else
			var str = this.value.substring(0,1)
		document.getElementsByClassName("tg-b")[3].innerHTML = str;
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(this.className);
		audio.loop = true;
		audio.play();
    });
	
	$('input[type=radio][name="c5"]').click(function(){
		if(this.value.length == 3)
			var str = this.value.substring(0,2)
		else
			var str = this.value.substring(0,1)
		document.getElementsByClassName("tg-b")[4].innerHTML = str;
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(this.className);
		audio.loop = true;
		audio.play();
    });
	
	$('input[type=radio][name="c6"]').click(function(){
		if(this.value.length == 3)
			var str = this.value.substring(0,2)
		else
			var str = this.value.substring(0,1)
		document.getElementsByClassName("tg-b")[5].innerHTML = str;
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(this.className);
		audio.loop = true;
		audio.play();
    });
	
	
	
	
	
	
	
	
	
	
	
	
	var note = 0;
	var audio = 0;
	audio = document.getElementById("E2");
	
	$('#playButton1').click(function() {
		for(var i = 1; i <= 8; i++){
			if($('#' + i).is(':checked')){
				note = document.getElementById("" + i).className;
			}
		}
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	});
	
	$('#playButton2').click(function() {
		for(var i = 9; i <= 16; i++){
			if($('#' + i).is(':checked')){
				note = document.getElementById("" + i).className;
			}
		}
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	});
	
	$('#playButton3').click(function() {
		for(var i = 17; i <= 24; i++){
			if($('#' + i).is(':checked')){
				note = document.getElementById("" + i).className;
				
			}
		}
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	});
	
	$('#playButton4').click(function() {
		for(var i = 25; i <= 32; i++){
			if($('#' + i).is(':checked')){
				note = document.getElementById("" + i).className;
				
			}
		}
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	});
	
	$('#playButton5').click(function() {
		for(var i = 33; i <= 40; i++){
			if($('#' + i).is(':checked')){
				note = document.getElementById("" + i).className;
				
			}
		}
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	});
	
	$('#playButton6').click(function() {
		for(var i = 41; i <= 48; i++){
			if($('#' + i).is(':checked')){
				note = document.getElementById("" + i).className;
				
			}
		}
		audio.pause();
		audio.currentTime = 0;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	});
	
	$('#stopButton').click(function() {
		audio.pause();
		audio.currentTime = 0;
	});
	
	
	
	
	$('#selectList').click(function(){
		audio.pause();
		audio.currentTime = 0;
		var tuningArray = this.value.split(",");
		note = document.getElementById("" + tuningArray[0]).className;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	
		for(var i = 0; i < tuningArray.length; i++){
			document.getElementById(tuningArray[i]).checked = true;
		}
		
    });
	
	$('#selectList2').click(function(){
		audio.pause();
		audio.currentTime = 0;
		var tuningArray = this.value.split(",");
		note = document.getElementById("" + tuningArray[0]).className;
		audio = document.getElementById(note);
		audio.loop = true;
		audio.play();
	
		for(var i = 0; i < tuningArray.length; i++){
			document.getElementById(tuningArray[i]).checked = true;
		}
		
    });
	
});

window.onload = function(){
	
	setTimeout(function(){
        $('body').addClass('loaded');
    }, 500);

    setTimeout(function(){
        $('#loader').remove();
    }, 1500);
}
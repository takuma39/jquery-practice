// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


// $(function(){

// });

$(document).on('turbolinks:load', function() {
	$('#btn1').click(function(){
		if ($('#test1').hasClass('active')){
			$('#test1').removeClass('active');
			$('#test1').slideDown(1000);
			$('#btn1').text('SlideUp');
			$('#test1').text('slideUp');
		} else{
			$('#test1').addClass('active');
			$('#test1').slideUp(1000);
			$('#btn1').text('slideDown');
			$('#test1').text('slideDown');
		}
	});


	$('#btn2').click(function(){
		if ($('#test2').hasClass('active')){
			$('#test2').removeClass('active');
			$('#test2').css('color', 'black');
		} else{
			$('#test2').addClass('active');
			$('#test2').css('color', 'red');
		}
	});
});




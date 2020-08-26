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
	// slideUp / SlideDown
	$('#btn1').click(function(){
		if ($('#test1').hasClass('active')){
			$('#test1').removeClass('active');
			$('#test1').slideDown(1000);
			$('#btn1').text('slideUp');
			$('#test1 p').text('slideUp');
		} else{
			$('#test1').addClass('active');
			$('#test1').slideUp(1000);
			$('#btn1').text('slideDown');
			$('#test1 p').text('slideDown');
		}
	});

	// color変更
	$('#btn2').click(function(){
		if ($('#test2').hasClass('active')){
			$('#test2').removeClass('active');
			$('#test2').css('color', 'black');
		} else{
			$('#test2').addClass('active');
			$('#test2').css('color', 'red');
		}
	});

	// text変更
	$('#btn3').click(function(){
		if ($('#test3').hasClass('active')){
			$('#test3').removeClass('active');
			$('#test3 p').text('text');
		} else{
			$('#test3').addClass('active');
			$('#test3 p').text('change text');
		}
	});

	// html変更
	$('#btn4').click(function(){
		if ($('#test4').hasClass('active')){
			$('#test4').removeClass('active');
			$('#test4').html('<p>html<p/>');
		} else{
			$('#test4').addClass('active');
			$('#test4').html('<h3>&lt;h3&gt;html&lt;/h3&gt;</h3>');
		}
	});

	// this
	$('.test5').click(function(){
		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).css('color', 'black');
		} else{
			$(this).addClass('active');
			$(this).css('color', 'red');
		}
	});

});




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

// test1 // slideUp / SlideDown
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


// test2 // color変更
	$('#btn2').click(function(){
		if ($('#test2').hasClass('active')){
			$('#test2').removeClass('active');
			$('#test2').css('color', 'black');
		} else{
			$('#test2').addClass('active');
			$('#test2').css('color', 'red');
		}
	});


// test3 // text変更
	$('#btn3').click(function(){
		if ($('#test3').hasClass('active')){
			$('#test3').removeClass('active');
			$('#test3 p').text('text');
		} else{
			$('#test3').addClass('active');
			$('#test3 p').text('change text');
		}
	});


// test4 // html変更
	$('#btn4').click(function(){
		if ($('#test4').hasClass('active')){
			$('#test4').removeClass('active');
			$('#test4').html('<p>html<p/>');
		} else{
			$('#test4').addClass('active');
			$('#test4').html('<h3>&lt;h3&gt;html&lt;/h3&gt;</h3>');
		}
	});


// test5 // this
	$('.test5').click(function(){
		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).css('color', 'black');
		} else{
			$(this).addClass('active');
			$(this).css('color', 'red');
		}
	});


// test6 // find
	$('#btn6').click(function(){
		if ($('#test6').hasClass('active')){
			$('#test6').removeClass('active');
			$('#test6').find('span').css('color', 'black');
		} else{
			$('#test6').addClass('active');
			$('#test6').find('span').css('color', 'red');
		}
	});


// test7 // children
	$('#btn7').click(function(){
		if ($('#test7').hasClass('active')){
			$('#test7').removeClass('active');
			$('#test7').children('p').css('color', 'black');
		} else{
			$('#test7').addClass('active');
			$('#test7').children('p').css('color', 'red');
		}
	});


// test8 // hover変更
	$('.test8').hover(
		function(){
			$(this).css('color', 'red');
		},
		function(){
			$(this).css('color', 'black');
		}
	);


// test9 // modal
	$('#btn9').click(function(){
	    $('#test9').fadeIn();
	});

	$('.close-btn9').click(function(){
	    $('#test9').fadeOut();
	});


// test10 // accordion
	// background_modal
	$('#btn10').click(function(){
	    $('#test10').fadeIn();
	});

	$('.close-btn10').click(function(){
	    $('#test10').fadeOut();
	});

	  // FAQのアコーディオン
	$('.faq-list-item').click(function() {

		var $answer = $(this).find('.answer');

	    if($answer.hasClass('active')) {
	    	$answer.removeClass('active');
	    	$answer.slideUp();
	    	$(this).find('span').text('+');
	    } else {
	    	$answer.addClass('active');
	    	$answer.slideDown();
	    	$(this).find('span').text('-');
	    }
	});


// test11 // slide
	// background_modal
	$('#btn11').click(function(){
	    $('#test11').fadeIn();
	});

	$('.close-btn11').click(function(){
	    $('#test11').fadeOut();
	});

	// 関数
	function ChangeBtn() {
		var slideIndex = $('.slide').index($('.active'));
		$('.change-btn').show();
		if (slideIndex == 0) {
			$('.prev-btn').hide();
		} else if (slideIndex == $('.slide').length - 1) {
			$('.next-btn').hide();
		}
	}


	// index_btn
	$('.index-btn').click(function(){
		$('.active').removeClass('active');
		var clickedIndex = $('.index-btn').index($(this));
		$('.slide').eq(clickedIndex).addClass('active');
		ChangeBtn();
	});


	// change_btn
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    ChangeBtn();
  });




});
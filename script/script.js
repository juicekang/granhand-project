$(document).ready(function() {
		
		new fullScroll({
			displayDots: true,
			dotsPosition: 'left',
			animateTime: 0.7,
			animateFunction: 'ease'
		});

		$('video')[0].play();
		// text align
		$('.info .roland_info .info_text').css({
			top:($('.info .roland_info').height()/2) - ($('.info .roland_info .info_text').height()/2)
		});
		
		
		

		//slide img
		var button = $('.variation .buttonlist li.button');
		var pause = $('.variation .buttonlist li.pause');
		var play = $('.variation .buttonlist li.play');
		var current = 0;
		var intervalId; 
		function timer(){
			intervalId = setInterval(function(){
				$('.vari_wrap article').eq(current).stop().fadeOut(1500).css('z-index','1');
				current < $('.vari_wrap article').size()-1 ? current++ : current = 0;
				$('.vari_wrap article').eq(current).stop().fadeIn(1500).css('z-index','2');
			},5000);
	}

		timer();

		button.click(function(){
			var i = $(this).index();
			$('.vari_wrap article').eq(current).stop().fadeOut(1500).css('z-index','1');
			$('.vari_wrap article').eq(i).stop().fadeIn(1500).css('z-index','2');
			current = i;
		});
		pause.click(function(){
			clearInterval(intervalId); 
			pause.css('display','none');
			play.css('display','block');
		});
		play.click(function(){
			timer(); 
			play.css('display','none');
			pause.css('display','block');
		});

		//menu 
		$('.burger').click(function(){
			$('.clickmenu').fadeToggle();
			$('.burger').toggleClass('xmark');
		});

		$('.clickmenu ul li a').click(function(){
			$('.clickmenu').fadeOut();
			$('.burger').removeClass('xmark');
		});

		//font size
		$(window).resize(function(){
			var fontSize = $(window).width()/1920*16; 
			if (fontSize < 16) {
				$('p').css('font-size',16);
			} else if (fontSize > 30) {
				$('h1').css('font-size',); 
			} else {
				$('p').css('font-size',fontSize);
			}
			$('.insta .insta_cont').css({
				top:($('.insta').height()/2) - ($('.insta .insta_cont').height()/2)
			});
			$('.story .story_txt').css({
				top:($('.story').height()/2) - ($('.story .story_txt').height()/2)
			});
			$('.footer ul').css({
				top:($('.footer').height()/2) - ($('.footer ul').height()/2)
			});

		});
		$(window).trigger('resize');

		//input
		$('input.submit').click(function(){
			if ( $('input#name').val()!='' && $('input#phone').val()!='' && $('input#birth').val()!='' ) {
				alert(
				'성함 : ' + $('input#name').val() + '\n휴대폰 번호 : ' + $('input#phone').val() + '\n생년월일 : ' + $('input#birth').val() + '\n수령매장 : ' + $('select').val() + '\n해당 정보로 샘플이 신청되었습니다 :)' );
			} else { alert('신청란을 모두 작성해주세요.'); }
		});

		//href
		$('.insta_feed figure').each(function(){
			$(this).click(function(){
				$(location).attr('href','https://www.instagram.com/granhand_official/');
			});
		});

		$('section.variation, .next_pointer, .prev_pointer').mousemove(function(e){
			if(e.clientX < ($(window).width()/3) && e.clientY < $(window).height()*3/4) {
				$('.prev_pointer').css({
					display:'block',
					top:e.pageY-75,
					left:e.pageX-75
				});
				$('.next_pointer').css('display','none');
				$('section.variation, .next_pointer, .prev_pointer').css('cursor','pointer');
			} else if (e.clientX > ($(window).width()/3*2)){
				$('.next_pointer').css({
					display:'block',
					top:e.pageY-75,
					left:e.pageX-75
				});
				$('.prev_pointer').css('display','none');
				$('section.variation, .next_pointer, .prev_pointer').css('cursor','pointer');
			} else {
				$('.prev_pointer').css('display','none');
				$('.next_pointer').css('display','none');
				$('section.variation, .next_pointer, .prev_pointer').css('cursor','default');
			}
		});


		$('.next_pointer').click(function(){
			button.eq(1).trigger('click');
		});
		$('.prev_pointer').click(function(){
			button.eq(0).trigger('click');
		});
	});
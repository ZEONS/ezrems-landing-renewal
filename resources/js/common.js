(function($){

	$(document).ready(function(){
		/* 모바일 메뉴 오픈 */
        $('#menu-icon').click(function(){
            if ($('.mobile-modal').hasClass('open')) {
                $('.mobile-modal').fadeOut('fast').removeClass('open');
                $('.mnubtn').removeClass('open');
                $('body').removeClass('mnuopen');
            } else {
                $('.mobile-modal').fadeIn('fast').addClass('open');
                $('.mnubtn').addClass('open');
                $('body').addClass('mnuopen');
            }
		});

		/* 모달 오픈 */
        $('.modal-open').click(function(){
			$($(this).attr('data-modal')).fadeIn();
		});

		/* 모달 닫기 */
        $('.modal .modal-close-btn').click(function(){
			$('.modal').fadeOut();
		});

		$('a.pagelink').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top - 100
			}, 500);
			return false;
		});

        /* 패스워드 글자 보이기 */
        $('.pw-toggle-btn').click(function() {
            if ($(this).hasClass('view')) {
                $(this).prev().attr('type','password');
                $(this).removeClass('view');
            } else {
                $(this).prev().attr('type','text');
                $(this).addClass('view');
            }
        });

		/* movTop */
		$(window).scroll(function () {
			if ($(this).scrollTop() > 120) {
				$('#wrapper').addClass("scrollOn");
			} else {
				$('#wrapper').removeClass("scrollOn");
			}
		});

        if ($(this).scrollTop() > 120) {
            $('#wrapper').addClass("scrollOn");
        } else {
            $('#wrapper').removeClass("scrollOn");
        }
	});
})(jQuery)
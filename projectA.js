 // 나브 스크롤
$(document).scroll(function() {
	var scroll = $(window).scrollTop();
	  if (scroll < 5){
		$( "nav" ).removeClass( "navon" );
	  }
	  else if (scroll > 5){
		$( "nav" ).addClass( "navon" );
	  }
  });

// 메인 백그라운드 스와이퍼
var swiper = new Swiper(".mySwiper.maincontainer", {
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
	  delay: 6000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination.mainpagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next.mainnext",
	  prevEl: ".swiper-button-prev.mainprev",
	},
  });

// 메인 카피 배너
$(function(){
	$("div.mainslide > div.inner span").delay(200).animate({opacity:1,top:80},800,"swing", function(){
		$("div.mainslide > div.inner p").delay(500).animate({opacity:1,top:150},800,"swing");
	})
});
//메인 카피배너

//문화공연행사 포스터 탭
$(".day p span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
//

//문화공연행사 스와이퍼
var swiper = new Swiper(".mySwiper.daycontainer", {
	cssMode: true,
	navigation: {
	  nextEl: ".swiper-button-next.calendarnext",
	  prevEl: ".swiper-button-prev.calendarprev",
	},
	mousewheel: true,
	keyboard: true,
  });
//

//공지사항 스와이퍼
var swiper = new Swiper(".mySwiper.noticecontainer", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination.noticepagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next.noticenext",
	  prevEl: ".swiper-button-prev.noticeprev",
	},
  });
  //공지사항 스와이퍼

  //문화공연행사 포스터 탭
  $(".day p span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
  //
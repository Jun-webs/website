//-----------------------------Tab과 Swiper(터치적용캐러셀)조합
//-----------------------------일반 캐러셀은 탭에서 중복소스로 작동 안함
new Swiper('.swiper1', {
  pagination : {
		el : '.swiper-pagination',
		clickable : true,
	},  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});
new Swiper('.swiper2', {
  pagination : {
		el : '.swiper-pagination',
		clickable : true,
	},  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});
new Swiper('.swiper3', { 
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
new Swiper('.swiper4', { 
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
new Swiper('.swiper5', { 
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
new Swiper('.swiper6', { 
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next.btn',
    prevEl: '.swiper-button-prev.btp',
  },
});


// input탭 설정과 Swiper 갱신
let tabInputs = document.querySelectorAll('.tabInput');

tabInputs.forEach(function(input) {

  input.addEventListener('change', function() {
    let id = input.value;
    let thisSwiper = document.getElementById('swiper' + id);
    thisSwiper.swiper.update();
  });

});

// id=data-id 스타일의 탭에서 스와이퍼 갱신
$(document).ready(function(){
  $(".tab ul li").click(function(){ 
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
  });
});
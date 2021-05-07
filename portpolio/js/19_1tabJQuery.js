//-----------------------------탭메뉴
$(document).ready(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on')
        .siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on')
        //this는 $(".tab ul li")이다. .data('id')는 date-id="con1"이고 #이 붙으면서 <div id="con1" class="conBox on">이 되어 addClass("on")이 실행된다.
        .siblings().removeClass('on');
    });

    // 탭메뉴 세로형
    $(".tabV ul li").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });


    // 탭메뉴 페이드박스 가로형
    $(".fadeTab .conBox").hide().eq(0).show();
    $(".fadeTab li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).fadeIn(1000)
        .siblings('.conBox').fadeOut(300);
    });
});
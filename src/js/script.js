console.log('hello from script.js');
var windowSize;
$( document ).ready(function() {
    $(window).on('resize', function(){
        windowSize = document.documentElement.clientWidth;
    });
    $('.adress-title').click(function(){
        $('.adress-wrap').toggleClass('adress-wrap--active');
        $('.adress-map').slideToggle();
    });

    $('.country').click(function(){
        $('.flags-wrap').toggleClass('flags-wrap--active');
        $('.flags-country').slideToggle();
    });

    $('.location-city').on('click',function(){
        $('.header__popup-wrap').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });
    $('.location-header').on('click',function(){
        $('.header__popup-city').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn'
        });
        return false;
    });
    $('.signUp-wrap .enroll_link').on('click',function(){
        $('.header__popup-signUp').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });

    $('.search-label').click(function(){
        $('.search-m').toggleClass('input-focus');
        if ($('.search-m').hasClass('input-focus')){
            $('.btn-search').css('display','block');
            $('.adress-wrap, .location-wrap').css('opacity','0');
        }else{
            $('.btn-search').css('display','none');
            $('.adress-wrap, .location-wrap').removeAttr('style');  
        }      
    });


    // $('.menu-toggle').click(function(){
	// 	$('#nav-icon').toggleClass('open');
    //     $('#mySidenav').toggleClass('active-class');
    //     $('.wrapper').toggleClass('ml250');
	// });
    $('.closebtn').click(function(){
        $('#mySidenav').removeClass('active-class');
        $('.wrapper').css('margin-left', '0px');        
    });

    $('.lvlin').click(function(){
        $('.sidenav-list').addClass('sidenav-tx');
    });
    $('.back').click(function(){
        $('.sidenav-list').removeClass('sidenav-tx');
    });


    $('.plus').click(function(){
        $(this).toggleClass('minus')
        .toggleClass('no-b')
        .next()
        .slideToggle();
    });
    // $('.header__sign-in .menu-toggle').click(function(event){
    //     event.preventDefault();        
    //     if(windowSize<=320) {
    //         $('.wrapper').removeClass('ml250');
    //         $('.wrapper').removeClass('ml320');
    //         $('#nav-icon').toggleClass('open');
    //         $('#mySidenav').toggleClass('no-tr');
    //     }else{
    //         $('#mySidenav').toggleClass('active-class');
    //         $('.wrapper').toggleClass('ml250');
    //     }
    // });

    $('.menu-toggle').click(function(event){
        event.preventDefault();        
        if(windowSize<=320) {
            $('#nav-icon').toggleClass('open');
            $('#mySidenav').toggleClass('no-tr');
        }else{
            $('#mySidenav').toggleClass('active-class');
            $('.wrapper').toggleClass('ml250');
        }
    });

    $('.header__sign-in .menu-toggle').click(function(){
        $('.wrapper').removeClass('ml250').addClass('ml320');
        $('.header__sign-in--fixed').css('margin-left','-320px');  
        $('.sidenav').addClass('active-class--fixed');
    });

    $('.after-plus .city-link').click(function(event){
        event.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('pb0');
    });


    $('.tabs-list .tabs-item').click(function openCity() {
        var tab = $(this).data('tab');
        $('.tab').css('display','none');
        $('.tabs-list .tabs-item--active').removeClass('tabs-item--active');
        $(this).addClass('tabs-item--active');
        $("#"+ tab).css('display','block');
    });


    $('.tabs-content .tab .tabs-item').click(function(){
        $(this).toggleClass('tabs-item--active').next().slideToggle();
    });

    $('.drop-down-main').on('click',function(){
        $('.header__popup-city').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });

    $('.drop-down-lang').click(function(){
        $('.lang').toggleClass('lang--active');
        $(this).next().slideToggle();
    });

    $('.footer .enroll_link').on('click', function(event){
        event.preventDefault();
        if(windowSize <= 320){
            $('.signIn-form-tr').bPopup({
                transition: 'slideBack',
                transitionClose: 'slideIn',
                closeClass:'popup-close'
            });
            return false;
        }
    });

    var signIn = $('.header__sign-in');
    var signInPosition = signIn.offset().top;
    signInPosition += signIn.outerHeight();

    $(window).on('scroll', function(){
        if($(window).scrollTop() > signInPosition){
            $('.header__sign-in')
            .addClass('header__sign-in--fixed');
            $('.sidenav').css('top', $('.header__sign-in').outerHeight());
        }
        else{
            $('.header__sign-in').removeClass('header__sign-in--fixed');
            $('.sidenav').removeAttr('style');
        }
    });





});
// Блок "запишитесь"
$('.enroll_tel').mask("+9 (999) 999-99-99");

//
// Блок "Лечебно-диагностический центр"
//

$('.about_more-link').click(function(){
	$('.about_content').toggleClass('about_full');
})

//
// БЛОК НОВОСТЕЙ
//
$('.slider-wrap').bxSlider({

});

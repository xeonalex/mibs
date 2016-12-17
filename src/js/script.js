console.log('hello from script.js');
$( document ).ready(function() {
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


    $('.menu-toggle').click(function(){
        if(screen.width<=320) {
            $('#nav-icon').toggleClass('open');
            $('#mySidenav').toggleClass('no-tr');
        }else{
            $('#mySidenav').toggleClass('active-class');
            $('.wrapper').toggleClass('ml250');
        }
    });


    $('.after-plus .city-link').click(function(event){
        event.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('pb0');
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

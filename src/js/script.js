console.log('hello from script.js');

var windowSize = document.documentElement.clientWidth;
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
        return false;
    });

    $('.location-wrap').on('click',function(){
        $('.header__popup-wrap').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });

    $('.js-location').on('click', function(){
        $(this).toggleClass('init');
        if($(this).hasClass('init')){
            $('.signIn-form-tr').css({'left':'0px','display':'block'});
        }
        else{
            $('.signIn-form-tr').removeAttr('style');
        }
    });

    $('.signUp-wrap .enroll_link , .footer .enroll_link').on('click',function(){
        if (windowSize>480) {
            $('.header__popup-signUp').bPopup({
                transition: 'slideBack',
                transitionClose: 'slideIn',
                closeClass:'popup-close'
            });
        } else {
           window.location.hash = $(this).attr('href');
        }
        return false;
    });

    /* ВЫЗОВ ФОРМЫ ПОИСКА */
    $('.search-label').click(function(){
        $('.loupe-wrap').toggleClass('input-focus');
    });

    // $('.closebtn').click(function(){
    //     $('#mySidenav').removeClass('active-class');
    //     $('.wrapper').css('margin-left', '0px');
    // });
    // внутренние переходы сайдбара
    $('.lvlin').click(function(event){
        event.preventDefault();
         $('.sidenav-list').addClass('sidenav-tx');
    });
    $('.back').click(function(event){
        event.preventDefault();
        $('.sidenav-list').removeClass('sidenav-tx');
    });

    $('.plus').click(function(event){
        event.preventDefault();
        $(this).toggleClass('minus')
        .toggleClass('no-b')
        .next()
        .slideToggle();
    });
// <<<<<<< HEAD
//

        // ВЫЗОВ САЙДБАРА
    $('.menu-toggle').click(function(event){
        event.preventDefault();
        $('.nav-icon').toggleClass('open'); // меняем класс для гамбургера
        if(windowSize<=480) {
            $('.wrapper').removeClass('ml250');
            $('.sidenav').toggleClass('active-class');
        } else {
            $('.wrapper').toggleClass('ml250');  // сдвигаем враппер
            $('.sidenav').toggleClass('active-class'); // переключаем класс сайдбара
            // сдвигаем фикс блок в случае если пользователь проскролил с открытым сайдбаром
            // включив его через включатель в хедере
            if ($('.header__sign-in').hasClass('header__sign-in--fixed')) {
                $('.header__sign-in--fixed').toggleClass('ml-320');
            }

            // оключаем горизонтальный скролл чтобы не видел отодвинутый контент
            if ($('.sidenav').hasClass('active-class')) {
                $('html,body').css('overflow-x','hidden');
            } else {
                $('html, body').removeAttr('style');
            }
        }
    });

    $('.after-plus .city-link').click(function(event){
        event.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('pb0');
    });


    $('.tabs-list .tabs-item').click(function openCity(event) {
        event.preventDefault();
        var tab = $(this).data('tab');
        $('.tab').css('display','none');
        $('.tabs-list .tabs-item--active').removeClass('tabs-item--active');
        $(this).addClass('tabs-item--active');
        $("#"+ tab).css('display','block');
        return false;
    });


    $('.tabs-content .tab .tabs-item').click(function(event){
        event.preventDefault();
        $(this).toggleClass('tabs-item--active').next().slideToggle();
        return false;
    });

    $('.drop-down-main').on('click',function(){
        $('.header__popup-city').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });

    $('.drop-down-lang').on('click',function(){
        $('.header__popup-lang  ').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });

    var signIn = $('.header__sign-in');
    var signInPosition = signIn.offset().top;
    signInPosition += signIn.outerHeight();

    $(window).on('scroll', function(){

        // меняет позицию сайдбара и верней плашки в зависисмости от скролла
        if($(window).scrollTop() > signInPosition){
            $('.header__sign-in')
            .addClass('header__sign-in--fixed');
            if ($('.sidenav').hasClass('active-class') && windowSize >480) {
                $('.header__sign-in').addClass('ml-320');
            }
            $('.sidenav').css({
                'top': $('.header__sign-in').outerHeight(),
                'margin-top': '0'
            });
            $('.signIn-form-tr').css('top','70px');
        }
        else{
            $('.header__sign-in').removeClass('header__sign-in--fixed');
            $('.sidenav').removeAttr('style');
            $('.signIn-form-tr').css('top','50px');
            $('.header__sign-in').removeClass('ml-320');
        }
    
        // arrow-up
            if($(window).scrollTop() >= 400){
                $(".arrow-up").fadeIn();
            }
            else{
                $(".arrow-up").fadeOut();
            }

    });

    $(".arrow-up").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
// $('.about_more-link').click(function(event){
//     event.preventDefault();
// 	$('.about_content').toggleClass('about_full');
//     return false;
// })


//
// Блок "Лечебно-диагностический центр"
//
$('.about_more-link').on("click", function(event) {
    event.preventDefault();
    var span = $(this).find('span:first-child'),
        text=$(this).data('text');
     $('.about_content').toggleClass('about_full');
     $(this).toggleClass('opened');
     // меняем текст из дата атрибута
     span.data('text',span.text());  // ставим в дата атрибут текст спана
     span.text(text); // а в спан текст из дата атребута

        return false;
});


    // >>>>>>> 89e36897e1cb0239158d4f280c5d60b0be6b3247

    //
    // БЛОК НОВОСТЕЙ
    //
    $('.slider-wrap').bxSlider({
    });
    // Блок "запишитесь"
    $('.tel_mask').mask("+9 (999) 999-99-99");

    
}); // конец document.ready
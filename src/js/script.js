console.log('hello from script.js');
// Блок "запишитесь"
$('.enroll_tel').mask("+9 (999) 999-99-99");

//
// Блок "Лечебно-диагностический центр"
//

$('.about_more-link').click(function(){
	$('.about_content').toggleClass('about_full');
})
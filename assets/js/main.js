
$(window).scroll(function(){
var top = $(window).scrollTop();
if(top>=100){
$("nav").addClass('secondary');
}
else if ($("nav").hasClass('secondary')){
   $("nav").removeClass('secondary');
}
});

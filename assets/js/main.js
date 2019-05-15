
$(window).scroll(function(){
var top = $(window).scrollTop();
if(top>=100){
$("nav").addClass('secondary');
}
else if ($("nav").hasClass('secondary')){
   $("nav").removeClass('secondary');
}
});





$('.work').magnificPopup({
   delegate: 'a', // child items selector, by clicking on it popup will open
   type: 'image',
   gallery: {
      enabled: true
   }
});



var pulse = function () {
   var e = document.createElement("div");
   e.setAttribute('class', 'circle'),
      document.body.appendChild(e),
      e.style.top = event.pageY + 'px',
      e.style.left = event.pageX + 'px',
      setTimeout(function () {
         document.body.removeChild(e)
      }, 5000)
};
document.addEventListener('click', pulse);

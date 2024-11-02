var typed = new Typed('.element', {
  strings: ["Designer", "Larry Daniels", "Developer"],
  typeSpeed: 50,
  loop: true
});
var myCarousel = document.querySelector('#carouselExampleControls')
var myModalEl = document.getElementById('exampleModal')

myModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(myCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter:$(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

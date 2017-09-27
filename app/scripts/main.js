$(document).ready(function() {
  //filling rating stars
  $('.rating-value').each(function(index, rating) {
    $(rating)
      .children('span')
      .each(function(index, element) {
        if (index + 1 <= $(rating).data('rating-value')) {
          $(element).addClass('active');
        }
      });
  });

  $('.review-list').owlCarousel({
    items: 2,
    margin: 20,
    nav: true,
    dots:false,
    autoplay:true,
    navText: [
      '<img src="./images/icons/icon-left-circle.svg" >',
      '<img src="./images/icons/icon-right-circle.svg" >'
    ],
    responsive: {
      0: {
        items:1,
        nav:false,
        dots:true,
      },
      780:{
        items:2,
        nav:false,
        dots:true,
      },
      1280:{
        nav:true,
        dots:false,
      }
    }
  });

  $('.menu-toggle').click(function(){
    $(this).toggleClass('is-active');
    $('header nav.menu').fadeToggle(400);
    $('header').toggleClass('fixed');
  })
});

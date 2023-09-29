var achievments__swiper = new Swiper('.achievments-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: false,
  autoplay: true,
  speed: 500,
  simulateTouch: false,
  allowTouchMove: false,
  navigation: {
    prevEl: '.slidePrev-btn',
    nextEl: '.slideNext-btn',
  },
  autoplay: {
      delay: 20000,
      disableOnInteraction: false
    },
});


var opportunities__swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
  });
  
  var team__swiper = new Swiper(".team-swiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    slidesPerGroup: 1,
    initialSlide: 4,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    autoplay: {
        delay: 3000,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    
  });
  

  
  team__swiper.on("click", function(swiper, event) {
    var clickedIndex = swiper.clickedIndex;
    team__swiper.slideTo(clickedIndex);
  });


  
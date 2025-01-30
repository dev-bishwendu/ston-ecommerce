var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
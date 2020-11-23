// product Gallery and Zoom

$('.gallery-parent').each(function () {
  // We finding any "gallery-parent" and find child with class "gallery-top" and "gallery-thumbs" for multiple using plugin
  let thumbs = $(this).children('.gallery-thumbs'),
    top = $(this).children('.gallery-top');

  // activation carousel plugin
  let galleryThumbs = new Swiper(thumbs, {
    spaceBetween: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  let galleryTop = new Swiper(top, {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  // change carousel item height
  // gallery-top
  let productCarouselTopWidth = top.outerWidth();
  top.css('height', productCarouselTopWidth);

  // gallery-thumbs
  let productCarouselThumbsItemWith = thumbs.find('.swiper-slide').outerWidth();
  thumbs.css('height', productCarouselThumbsItemWith);
});

// activation zoom plugin
let $easyzoom = $('.easyzoom').easyZoom();

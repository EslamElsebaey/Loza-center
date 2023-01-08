

$(document).ready(function(){

  // preloader
  setTimeout(function () {
    $(".preloader").css({
      opacity : "0" , 
      visibility : "hidden" , 
    })
  }, 2000);

/*******************************************************************************************/


//fixed nav

  //~~~~~~~~~ fixed header
    //~~~~~~~~~ fixed header
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed");
        $(".openNav-btn i").css("color" , "#471b4e");
        $(".logo img").css("filter" , " brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(1132%) hue-rotate(252deg) brightness(91%) contrast(101%)") ;
        $(".nav-ul > li > a").css("color" , "#471b4e");
        $(".lang a span").css("color" , "#471b4e");
      } else {
        $("header").removeClass("fixed");
        $(".openNav-btn i").css("color" , "#fff");
        $(".logo img").css("filter" , "none") ;
        $(".nav-ul > li > a").css("color" , "#fff");
        $(".lang a span").css("color" , "#fff");
      }
    });
    var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  






/*******************************************************************************************/

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 

/*******************************************************************************************/

// main swiper

const mainSwiper = new Swiper('.mainBanner .mainSwiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});


/*******************************************************************************************/

// products swiper 

const productSwiper = new Swiper('.products .mainSwiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .products .swiper-button-next',
    prevEl: '.products .swiper-button-prev',
  },

  pagination: {
    el: '.products .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


/*******************************************************************************************/


// employees swiper
const employees = new Swiper('.employees .mainSwiper', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ' .employees  .swiper-button-next ',
    prevEl: '.employees .swiper-button-prev',
  },
  pagination: {
    el: '.employees .swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween:20,
    },
    530: {
      slidesPerView: 3,
      spaceBetween:25,
    },
    992: {
      slidesPerView:4,
      spaceBetween:20,
    },
    1200: {
      slidesPerView:5,
      spaceBetween:20,
    },
  },
});


/*******************************************************************************************/

// open and close sideBar

$(".openNav-btn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "hidden") ;
})
$(".closeNav-btn").click(function(){
  $("nav").addClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

/*******************************************************************************************/
 

// nested menus

if($(window).width() <= 768) {
  $("footer h4").click(function(){
    $(this).next().slideToggle(300);
    $(this).toggleClass("arrow-rotate");
  })
  
$(".li-drop > a").click(function (e) {
  e.preventDefault() ;
  $(".ul-drop").slideToggle(300) ;
  $(this).children().toggleClass("icon-rotate");
  })
}

})

/*******************************************************************************************/







//  wow animation
new WOW().init();












  


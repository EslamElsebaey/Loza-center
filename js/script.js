
$(window).on("load", function () {
  $(".preloader").fadeOut();
})


$(document).ready(function(){


  //  wow animation
new WOW().init();
  
/*******************************************************************************************/


//fixed nav

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed");
      } else {
        $("header").removeClass("fixed");
        if($("header").hasClass("pages-header")){
          $(".nav-ul > li > a").css("color" , "#471b4e");
          $(".lang a span").css("color" , "#471b4e");
        }
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
  speed : 1000,
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
  speed : 1000,
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
  
    330: {
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
  speed : 1000,
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
  $("footer h4").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300);
    $(this).toggleClass("arrow-rotate");
  })
  
$(".li-drop > a").click(function (e) {
  e.preventDefault() ;
  $(".ul-drop").slideToggle(300) ;
  $(this).toggleClass("icon-rotate");
  })
}



// counters


if($(".clients-exp h4").length > 0) {
  const numbers = document.querySelectorAll(".clients-exp h4");
  const counters = Array(numbers.length);
  const intervals = Array(numbers.length);
  counters.fill(0);
  
  numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
      counters[0] += 1;
      counters[1] += 1000;
      if (counters[index] >= parseInt(number.dataset.num)) {
        clearInterval(intervals[index]);
        number.innerHTML = parseInt(number.dataset.num);
      } else {
        number.innerHTML = counters[index];
      }
    }, number.dataset.time);
  });
}






})



















  


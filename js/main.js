$(function(){

// background image--------
$("[data-background]").each(function (){
  $(this).css("background-image","url(" + $(this).attr("data-background") + ")")
})

// // One Page Nav
// var top_offset = $('.header-area').height() - 10;
// $('.menu ul').onePageNav({
// 	currentClass: 'active',
// 	scrollOffset: top_offset,
// });



//mixitup-------
var containerEl = document.querySelector('.portfolio');
var mixer = mixitup(containerEl, {
  selectors: {
      control: '.our-mix-control'
  },
  animation: {
      duration: 1000
  }
});

//counter ========
$('.counter').counterUp({
  time: 1000
});





//header sticky menu js============
  $("#sticker").sticky ();
  // scroll menu===========
  $(window).scroll(function(){

      if($(window).scrollTop()>1){
          $('.header-area').addClass('black');
      }else{
          $('.header-area').removeClass('black');
      }
  });

//testimonial slick slider js---------------
  $('.testimonial-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    arrows: true,
    prevArrow:'<b><i class="fas fa-angle-left left-arrow"></i></b>',
    nextArrow:'<b><i class="fas fa-angle-right right-arrow"></i></b>',
  });

  //scroll top function=======
$(window).on('scroll', function() {
  var windowscroll = $(window).scrollTop();
  if (windowscroll > 350) {
      $('.top').fadeIn(650);
  } else {
      $('.top').fadeOut(650);
  }
});
$('.top').on('click', function() {

  $('html,body').animate({
      scrollTop: 0,
  }, 400);
}); 
// //slick slider-----
// $('.banner-area').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   arrows: true,
//   prevArrow:'<b><i class="fas fa-long-arrow-alt-left l-a"></i></b>',
//   nextArrow:'<b><i class="fas fa-long-arrow-alt-right r-a"></i></b>',
//   autoplay: true,
//   autoplaySpeed: 5000,

// });
// //slick clint logo---------
// $('.s-c-l').slick({
//   dots: false,
//   infinite: false,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });



/*================================all js==================

//sticky menu============
var wind = $(window)
var sticky = $("#header-sticky");
wind.on('scroll', function () {
   var scroll = $(wind).scrollTop();
   if (scroll < 60) {
	 sticky.removeClass("sticky-menu");
   } else {
	 $("#header-sticky").addClass("sticky-menu");
   }
}); 

//strick menu 2-----
$("#sticker").sticky ();
// scoll menu===========
$(window).scroll(function(){

    if($(window).scrollTop()>1){
        $('.head').addClass('black');
    }else{
        $('.head').removeClass('black');
    }
}) 

//mobile menu------
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: '.mobile-menu',
        // meanMenuClose: "X",
    });

//preloader2======
  var preload = $(window)
  preload.on('load',function() {
  $("#loading").fadeOut(500);
});

//preloader1-------
 $('body').addClass('preloader-active');
      
 $(window).on('load', function() { 
     $('.preloader').fadeOut();
    $('.preloader-spinner').delay(100).fadeOut('slow');
     $('body').removeClass('preloader-active');
 });

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.menu ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

//scroll top function------
$(window).on('scroll', function() {
    var windowscroll = $(window).scrollTop();
    if (windowscroll > 350) {
        $('.top').fadeIn(650);
    } else {
        $('.top').fadeOut(650);
    }
});
$('.top').on('click', function() {

    $('html,body').animate({
        scrollTop: 0,
    }, 400);
});

//asos animation-----
AOS.init();


//tab script-------
  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })


//mixitup-------
var containerEl = document.querySelector('.portfolio');
var mixer = mixitup(containerEl, {
  selectors: {
      control: '[our-mix-control]'
  },
  animation: {
      duration: 300
  }
});

  
//venobox------
  $('.venobox').venobox({
    arrowsColor:'white',
    closeBackground:'#ccc',
    closeColor:'black',
    overlayColor:'black',
  }); 

  
  //counter------
  $('.counter').counterUp({
    time: 1000
});

  //linear progress bar---------
  $('#bar1').barfiller({
    barColor:'#FF4500',
  });
  $('#bar2').barfiller({
    barColor:'#FF4500',
  });
  $('#bar3').barfiller({
    barColor:'#FF4500',
  });
  $('#bar4').barfiller({
    barColor:'#FF4500',
  });

//isotope------------
  var $grid = $('.work-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
     layoutMode: 'fitRows',
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 500
    }
  })
//filter button-------
$('.work-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

// circle-progressbar-----
 $('#circle-1').circleProgress({
  value: 0.95,
  size: 170,
  lineCap:"square",
  reverse:"true",
  thickness:"13",
  insertMode:"append",
        fill: {
          gradient: ["#30BAE7"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.inner-circle').html(Math.round(95 * progress) + '<i>%</i>');
      });
      $('#circle-2').circleProgress({
        value: 0.90,
        size: 170,
        lineCap:"square",
        reverse:"true",
        thickness:"13",
        insertMode:"append",
        fill: {
          gradient: ["#D74680"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.inner-circle').html(Math.round(90 * progress) + '<i>%</i>');
      });
      $('#circle-3').circleProgress({
        value: 0.75,
        size: 170,
        lineCap:"square",
        reverse:"true",
        thickness:"13",
        insertMode:"append",
        fill: {
          gradient: ["#35CEB3"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.inner-circle').html(Math.round(75 * progress) + '<i>%</i>');
      });
      $('#circle-4').circleProgress({
        value: 0.70,
        size: 170,
        lineCap:"square",
        reverse:"true",
        thickness:"13",
        insertMode:"append",
        fill: {
          gradient: ["#EB7D4B"]
        }
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.inner-circle').html(Math.round(70 * progress) + '<i>%</i>');
      });


// MIX IT UP -----------
var containerEl = document.querySelector('.portfolio-miu');
var mixer = mixitup(containerEl);

// //slick clint logo---------
// $('.s-c-l').slick({
//   dots: false,
//   infinite: false,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });



// owlCarousel--------
var owl = $('.owl-carousel');
owl.owlCarousel({
        loop:false,
        margin:0,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
 
//slick slide------
    $('.banner-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow:'<i class=" fas fa-long-arrow-alt-left l-a"></i>',
        nextArrow:'<i class=" fas fa-long-arrow-alt-right r-a"></i>',
      });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.team-slider'
    });

    $('.team-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      autoplay: true,
      autoplaySpeed: 1500,
      focusOnSelect: false,
      arrows: true,
      prevArrow:'<i class=" <i class="fas fa-long-arrow-alt-left"></i> l-a"></i>',
      nextArrow:'<i class=" <i class="fas fa-long-arrow-alt-right"></i> r-a"></i>',
      responsive: [
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
    });
    
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow:'<i class=" fas fa-long-arrow-alt-left l-a"></i>',
      nextArrow:'<i class=" fas fa-long-arrow-alt-right r-a"></i>',
    });

    $('.logo-active').slick({
      infinite: true,
      slidesToShow: 5,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

==============================*/



});






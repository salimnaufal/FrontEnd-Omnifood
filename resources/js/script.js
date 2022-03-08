$(document).ready(function () {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '6px'
    })
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })
    
    
    /* Navigation Scroll */    
    
    /* SOLUTION #2: From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery*/
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });
    
    
    /* Animation on Scroll */
    //Solution copied from udemy comment section for this course
    $('.js--wp-1').waypoint(
        (direction) => {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
    );
    
    $('.js--wp-2').waypoint(
        (direction) => {
          $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        {
          offset: '50%',
        }
    );
    
    $('.js--wp-3').waypoint(
        (direction) => {
          $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
    );
    
    $('.js--wp-4').waypoint(
        (direction) => {
          $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
        {
          offset: '50%',
        }
    );
    //added for fun from comment
    $('.js--header').waypoint(
    (direction) => {
        if (direction === 'up') {
            $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-2').removeClass('animate__animated animate__fadeInUp');
            $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-4').removeClass('animate__animated animate__pulse');
        }
    },
        {
            offset: '-25%',
        }
    );
    
    
     /* Mobile Nav */ 
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
        
        if (icon[0].name == 'menu-outline') {
            icon[0].name = 'close-outline'
        } else if (icon[0].name == 'close-outline') {
            icon[0].name = 'menu-outline'
        }
    })
    
    
    
});







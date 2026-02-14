(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Birthday Letter 
function openLetter() {
  document.querySelector('.envelope-wrapper').classList.add('open');
  document.getElementById('letterContent').classList.remove('hidden');
}
document.addEventListener("DOMContentLoaded", function () {

    const cake = document.getElementById("cakeWrapper");
    const flame = document.getElementById("flame");
    const message = document.getElementById("wishMessage");

    if (cake) {
        cake.addEventListener("click", function () {

            if (flame) {
                flame.style.display = "none";
            }

            if (message) {
                message.classList.add("show");
            }

        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const wishes = document.querySelectorAll(".wish-item");

    function revealWishes() {
        wishes.forEach((wish, index) => {
            setTimeout(() => {
                wish.classList.add("show");
            }, index * 150); // delay per item
        });
    }

    // Trigger when section visible
    const wishesSection = document.getElementById("wishes");

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            revealWishes();
            observer.disconnect();
        }
    }, { threshold: 0.3 });

    if (wishesSection) {
        observer.observe(wishesSection);
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const closingSection = document.getElementById("closing");
    const title = document.querySelector(".closing-title");
    const text = document.querySelector(".closing-text");

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
            text.style.opacity = "1";
            text.style.transform = "translateY(0)";
        }
    }, { threshold: 0.3 });

    if (closingSection) {
        observer.observe(closingSection);
    }

});

function showFinalMessage() {
    document.getElementById("finalMessage").classList.add("show");
}

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);


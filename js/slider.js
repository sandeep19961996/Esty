document.addEventListener('DOMContentLoaded', function() {
    const marqueeText = document.querySelector('.marquee-text');
    const playBtn = document.querySelector('.play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    const button= document.getElementById('marque-button');

    button.addEventListener('click', () => {
        if (marqueeText.style.animationPlayState === 'paused') {
            marqueeText.style.animationPlayState = 'running';
            playBtn.classList.remove('active');
            pauseBtn.classList.add('active');
        } else {
            marqueeText.style.animationPlayState = 'paused';
            playBtn.classList.add('active');
            pauseBtn.classList.remove('active');
        }
    });

    marqueeText.style.animationPlayState = 'running';
});


// use js for owl carusel and slider
var owl = $('#owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    nav:true,
    lazyload:true,
    margin:10,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
            
        },
        // breakpoint from 480 up
        480 : {
            items:1,
            
        },
        // breakpoint from 768 up
        768 : {
           items:2
        },
        1200 : {
            items:4
         }
    }
});
// use js for owl carusel and slider
var owl1 = $('#owl-carousel');
owl1.owlCarousel({
    items:5,
    loop:true,
    nav:true,
    lazyload:true,
    margin:10,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
            
        },
        // breakpoint from 480 up
        480 : {
            items:1,
            
        },
        // breakpoint from 768 up
        768 : {
           items:4
        },
        1200 : {
            items:4
         }
    }
});


var owl2 = $('#owl-carousel2');
owl2.owlCarousel({
    items:4,
    loop:true,
    nav:true,
    lazyload:true,
    margin:10,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
            
        },
        // breakpoint from 480 up
        480 : {
            items:1,
            
        },
        // breakpoint from 768 up
        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});

var owl3 = $('#owl-carousel3');
owl3.owlCarousel({
    items:5,
    loop:true,
    nav:true,
    margin:10,
    lazyload:true,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
            
        },
        // breakpoint from 480 up
        480 : {
            items:1,
            
        },
        // breakpoint from 768 up
        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});

var owl4 = $('#owl-carousel4');
owl4.owlCarousel({
    items:6,
    loop:true,
    nav:true,
    margin:10,
    lazyload:true,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1,
            marginTop:50,
            
        },
        // breakpoint from 480 up
        480 : {
            items:1,
            
        },
        // breakpoint from 768 up
        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});
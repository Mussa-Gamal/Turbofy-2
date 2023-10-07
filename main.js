gsap.to(".image-siuu svg", {
    scale: 200,
    opacity: 1,
    stagger: 0.25,
    duration: 1,
    transformOrigin: "50% 45.7%",
    scrollTrigger: {
      trigger: ".hero-4",
      start: "top top", // Start the animation when the top of the section is at the top of the viewport
      end: `+=${innerHeight * 2}`, // End the animation when the section is fully out of the viewport
      scrub: 0.5,
      ease: Power4.easeIn,
      onUpdate: (self) => {
        // Update the opacity based on the scroll progress
        gsap.to(".image-suii", {
          opacity: self.progress,
        });
      }
    }
});




var rellax = new Rellax('.rellax');









let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
let tl2 = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
let tl3 = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

tl2.to("#create", {y:'0%', duration:0.7, stagger:0, delay:3.5});






var navItems = document.querySelector('.navvv');
var menuIcon = document.querySelector('.menu-icon');
var navBrand = document.querySelector('.navbar-brand');
var topIconPart = document.querySelector('.top');
var bottomIconPart = document.querySelector('.bottom');
var createNav = document.getElementById('create6');

var menuIconClickable = true; // Initialize the flag

function openMenu() {
    if (menuIconClickable) {
        tl.to("#create6", { y: '0%', duration: 0.7, stagger: 0.1, delay: 1 });
        document.documentElement.style.overflowY = 'hidden !important';
        document.body.style.overflowY = 'hidden !important';
        navItems.style.display = 'flex';
        navItems.style.animation = 'fade-in 1s';
        topIconPart.classList.add('active-top');
        bottomIconPart.classList.add('active-bottom');

        // Set the flag to false to prevent further clicks
        menuIconClickable = false;

        // Set a timeout to re-enable the button after a delay (for example, 2 seconds)
        setTimeout(function () {
            menuIconClickable = true;
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}

function closeMenu() {
    if (menuIconClickable) {
        tl.to("#create6", { y: '100%', duration: 0.7, stagger: 0, delay: 0.5 });
        setTimeout(function () {
            document.documentElement.style.overflowY = 'auto !important';
            document.body.style.overflowY = 'auto !important';
            navItems.style.animation = 'fade-out 1s';
        }, 1000); // Adjust the timeout value to match the animation duration
        topIconPart.classList.remove('active-top');
        bottomIconPart.classList.remove('active-bottom');
        setTimeout(function () {
            navItems.style.display = 'none';
        }, 1500);

        // Set the flag to false to prevent further clicks
        menuIconClickable = false;

        // Set a timeout to re-enable the button after a delay (for example, 2 seconds)
        setTimeout(function () {
            menuIconClickable = true;
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}

menuIcon.addEventListener('click', function () {
    if (navItems.style.display === 'none' || navItems.style.display === '') {
        openMenu();
    } else {
        closeMenu();
    }
});



var purchase = document.getElementById('purchase');
var vehicles = document.getElementById('vehicles');
var contactUs = document.getElementById('contact-us');

var detailsPurchase = document.querySelector('.details-purchase');
var detailsVehicles = document.querySelector('.details-vehicles');
var detailsContactUs = document.querySelector('.details-contact-us');

function purchaseSection() {
    purchase.style.color = '#fff';
    vehicles.style.color = '#939393';
    contactUs.style.color = '#939393';

    detailsPurchase.style.display = 'block';
    detailsVehicles.style.display = 'none';
    detailsContactUs.style.display = 'none';

    detailsPurchase.style.animation = 'fade 0.5s forwards';
}

function vehiclesSection() {
    purchase.style.color = '#939393';
    vehicles.style.color = '#fff';
    contactUs.style.color = '#939393';

    detailsPurchase.style.display = 'none';
    detailsVehicles.style.display = 'block';
    detailsContactUs.style.display = 'none';

    detailsVehicles.style.animation = 'fade 0.5s forwards';
}

function accessoriesSection() {
    purchase.style.color = '#939393';
    vehicles.style.color = '#939393';
    contactUs.style.color = '#fff';

    detailsPurchase.style.display = 'none';
    detailsVehicles.style.display = 'none';
    detailsContactUs.style.display = 'block';

    detailsContactUs.style.animation = 'fade 0.5s forwards';
}





// Audio ON/OFF for video button

var audioBtn = document.querySelector('.audio-btn');
var audio = document.getElementById('audioPlayer');
var audioBtnLine1 = document.querySelector('.line-visible');
var audioBtnLine2 = document.querySelector('.line');

let isPlaying = false;

audioBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        audioBtn.innerHTML = 'Audio OFF';
        audioBtnLine2.classList.remove('show-line');
    } else {
        audio.play();
        audioBtn.innerHTML = 'Audio ON';
        audioBtnLine2.classList.toggle('show-line');
    }
    isPlaying = !isPlaying;
});




// Pause/resume video button

var video = document.querySelector('video');
const pauseButton = document.querySelector('.pause-button');

pauseButton.addEventListener('click', function() {
    if (video.paused) {
        // Play the video
        video.play();
        pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        // Pause the video
        video.pause();
        pauseButton.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    }
});

// Parallax scroll

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var opacity = 1 - (scroll / $(document).height());

    $(".hero-1 video").css({
        height: (100 + scroll / 4) + "%",
        opacity: opacity
    })
})




// scroll fade
var navbar = document.querySelector('.navbar');
var title = document.getElementById('title-1');
var title2 = document.getElementById('title-2');
var scrollParagraph = document.querySelector('.hero-1 p');
var downArrow1 = document.querySelector('.arrow-1');
var downArrow2 = document.querySelector('.arrow-2');
var prevScrollpos = window.scrollY;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    if (currentScrollPos >= 4300) {
        tl2.to("#create2", {y:'0%', duration:0.7, stagger:0.2, delay:0});
        tl2.to("#create3", {x:'0%', duration:0.7, stagger:0.2, delay:0});
    } 
    if (currentScrollPos >= 8000) {
        tl3.to("#create7", {y:'0%', duration:0.7, stagger:0.2, delay:0});
    } 
}
   




window.addEventListener("scroll", () => {
    // Calculate the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past 74px
    if (scrollPosition > 73) {
        // Calculate the opacity based on scroll position (linear gradient from 1 to 0)
        const opacity = 1 - (scrollPosition - 73) / 100;
    
        // Set the opacity of the image
        title.style.opacity = opacity;
        title2.style.opacity = opacity;

        audioBtn.style.opacity = opacity;

        pauseButton.style.opacity = opacity;

        downArrow1.style.opacity = opacity;
        downArrow2.style.opacity = opacity;

        scrollParagraph.style.opacity = opacity;

        audioBtnLine1.style.opacity = opacity;
    } else {
        // Reset the opacity to 1 if the user scrolls back up
        title.style.opacity = 1;
        title2.style.opacity = 1;

        audioBtn.style.opacity = 1;

        pauseButton.style.opacity = 1;

        downArrow1.style.opacity = 1;
        downArrow2.style.opacity = 1;

        scrollParagraph.style.opacity = 1;

        audioBtnLine1.style.opacity = 1;
    }
});




const scrollImage = document.querySelector("video");

window.addEventListener("scroll", () => {
    // Calculate the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past 74px
    if (scrollPosition > 300) {
        // Calculate the opacity based on scroll position (linear gradient from 1 to 0)
        const opacity = 1 - (scrollPosition - 300) / 200;
    
        // Set the opacity of the image
        scrollImage.style.opacity = opacity;
    } else {
        // Reset the opacity to 1 if the user scrolls back up
        scrollImage.style.opacity = 1;
    }
    // console.log(scrollPosition);
});


// Navbar

// var all = document.getElementById('all');
// var navItems = document.querySelector('.nav-items');
// var menuIcon = document.querySelector('.menu-icon');
// var topIconPart = document.querySelector('.top');
// var bottomIconPart = document.querySelector('.bottom');
// var blackSpace = document.querySelector('.black-space');

// function openMenu() {
//     navItems.style.display = 'flex';
//     blackSpace.style.display = 'block';
//     document.documentElement.style.overflowY = 'hidden';
//     document.body.style.overflowY = 'hidden';
//     // menuIcon.style.marginRight = '17px';
//     topIconPart.classList.add('active-top');
//     bottomIconPart.classList.add('active-bottom');
//     // Apply the slide animation when opening the menu
//     navItems.style.animation = 'slide 0.5s forwards';
//     blackSpace.style.animation = 'slide 0.5s forwards';
// }

// function closeMenu() {
//     // Apply the "back" animation to the entire nav-items element
//     navItems.style.animation = 'back 0.5s forwards';
//     blackSpace.style.animation = 'back 0.5s forwards';
//     setTimeout(function () {
//         navItems.style.display = 'none';
//         blackSpace.style.display = 'none';
//         document.documentElement.style.overflowY = 'auto';
//         document.body.style.overflowY = 'auto';
//         // menuIcon.style.marginRight = '0';
//         topIconPart.classList.remove('active-top');
//         bottomIconPart.classList.remove('active-bottom');
//         // Reset the animation properties for the nav-items element
//         navItems.style.animation = '';
//         blackSpace.style.animation = '';
//     }, 500); // Adjust the timeout value to match the animation duration
// }

// menuIcon.addEventListener('click', function () {
//     if (navItems.style.display === 'none' || navItems.style.display === '') {
//         openMenu();
//     } else {
//         closeMenu();
//     }
// });










var prevScrollpos2 = window.scrollY;
window.addEventListener('scroll', () => {
    var currentScrollPos2 = window.scrollY;
    if (prevScrollpos2 > currentScrollPos2 || currentScrollPos2 <= 150) {
        menuIcon.style.visibility = "visible";
        menuIcon.style.opacity = "1";
        navBrand.style.visibility = "visible";
        navBrand.style.opacity = "1";
      } else {
        menuIcon.style.visibility = "hidden";
        menuIcon.style.opacity = "0";
        navBrand.style.visibility = "hidden";
        navBrand.style.opacity = "0";
      }

    prevScrollpos2 = currentScrollPos2;
})
  



// HERO 2

const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg'
];

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll-section').appendChild(image)
    })
});

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll-section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 370 ? 370 : percentage;

    percentage = percentage * 0.5;

    scrollSection.animate({
        transform: `translate3d(${-(percentage)}vw, 0, 0)`
    }, { duration: 1200, fill: "forwards" });

    let slidePercentage = (percentage / 370) * 100;
    const images = section.querySelectorAll('img');
    images.forEach(img => {
        img.animate({
            objectPosition: `${100 - slidePercentage}% 50%`
        }, { duration: 1200, fill: "forwards" });
    });
}


function setupVideoHoverBehavior(videoElement) {
    let isHovering = false;
    let isScrolling = false;

    videoElement.addEventListener('mouseenter', function () {
        if (!isScrolling) {
            videoElement.style.opacity = '1';
            if (!isHovering) {
                videoElement.play();
                isHovering = true;
            }
        }
    });

    videoElement.addEventListener('mouseleave', function () {
        videoElement.style.opacity = '0';
        videoElement.pause();
        isHovering = false;
    });

    window.addEventListener('scroll', function () {
        isScrolling = true;
        videoElement.style.opacity = '0';
        videoElement.pause();

        // After a short delay (e.g., 200ms), reset the scrolling state
        setTimeout(function () {
            isScrolling = false;
        }, 200);
    });
}

// Get all the video elements by their IDs and set up the event listeners for each
const videoElements = [
    document.getElementById('hero-2-video-1'),
    document.getElementById('hero-2-video-2'),
    document.getElementById('hero-2-video-3'),
    document.getElementById('hero-2-video-4'),
    document.getElementById('hero-2-video-5'),
    document.getElementById('hero-2-video-6'),
    document.getElementById('hero-2-video-7')
    // Add more elements as needed
];

// Set up event listeners for each video element using a loop
videoElements.forEach(setupVideoHoverBehavior);

window.addEventListener('scroll', () => {
    console.log(scrollY);
})



// let images = [...document.querySelectorAll('.img')];
// let slider = document.querySelector('.slider');
// let sliderWidth;
// let imageWidth;
// let current = 0;
// let target = 0;
// let ease = .05;

// window.addEventListener('resize', init);

// images.forEach((img, idx) => {
//     img.style.backgroundImage = `url(./images/${idx+1}.jpg)`
// })

// function lerp(start, end, t) {
//     return start * (1-t) + end * t;
// }

// function setTransform(el, transform) {
//     el.style.transform = transform;
// }

// function init() {
//     sliderWidth = slider.getBoundingClientRect().width;
//     imageWidth = sliderWidth / images.length;
//     document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
// }

// function animate() {
//     current = parseFloat(lerp(current, target, ease)).toFixed(2);
//     target = window.scrollY;
//     setTransform(slider, `translateX(-${current}px)`)
//     animateImages();
//     requestAnimationFrame(animate);
// }

// function animateImages() {
//     let ratio = current / imageWidth;
//     let intersectionRatioValue;

//     images.forEach((image, idx) => {
//         intersectionRatioValue = ratio - (idx * 0.7);
//         setTransform(image, `transformX(${intersectionRatioValue * 70}px)`)
//     })
// }

// init();
// animate();



// HERO 3 Accordion


var accordion = document.getElementsByClassName('accordion-btn');
var i;

const acc1 = document.getElementById('acc-btn-1');
const acc2 = document.getElementById('acc-btn-2');
const acc3 = document.getElementById('acc-btn-3');
const acc4 = document.getElementById('acc-btn-4');









var img1 = document.getElementById('image-1-hero-3');
var img2 = document.getElementById('image-2-hero-3');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        // Find the associated panel by skipping the <span>
        var panel = this.nextElementSibling;
        while (panel && panel.tagName !== 'DIV' && !panel.classList.contains('accordion-panel')) {
            panel = panel.nextElementSibling;
        }

        // Toggle the "active" class for the clicked accordion button
        this.classList.toggle('active');

        // Close all open panels except the one being clicked
        for (var j = 0; j < accordion.length; j++) {
            var otherPanel = accordion[j].nextElementSibling;
            while (otherPanel && otherPanel.tagName !== 'DIV' && !otherPanel.classList.contains('accordion-panel')) {
                otherPanel = otherPanel.nextElementSibling;
            }
            var otherButton = accordion[j];
            if (otherPanel !== panel) {
                otherPanel.style.maxHeight = null;
                otherButton.classList.remove('active');
                // Set opacity to 0 for the info element of the closing accordion
                var infoElement = otherPanel.querySelector('.info');
                if (infoElement) {
                    infoElement.style.opacity = 0;
                }
            }
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            // Set opacity to 0 for the info element when closing the accordion
            var infoElement = panel.querySelector('.info');
            if (infoElement) {
                infoElement.style.opacity = 0;
            }
        } else {
            // Set opacity to 0 initially with a 100ms delay
            var infoElement = panel.querySelector('.info');
            if (infoElement) {
                infoElement.style.opacity = 0;
                setTimeout(function() {
                    infoElement.style.opacity = 1;
                }, 300); // Adjust the delay time as needed
            }
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


let button1Clicked = false;
let button2Clicked = false;
let button3Clicked = false;
let button4Clicked = false;

acc1.addEventListener('click', function () {
    if (button1Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "nissan-gtr-35-iphone-12-pro-max.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx8.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';

        if (button2Clicked) {
            button2Clicked = false;
        }
        if (button3Clicked) {
            button3Clicked = false;
        }
        if (button4Clicked) {
            button4Clicked = false;
        }
    }

    button1Clicked = !button1Clicked;
});

acc2.addEventListener('click', function () {
    if (button2Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "peakpx5.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx4.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';

        if (button1Clicked) {
            button1Clicked = false;
        }
        if (button3Clicked) {
            button3Clicked = false;
        }
        if (button4Clicked) {
            button4Clicked = false;
        }
    }

    button2Clicked = !button2Clicked;
});


acc3.addEventListener('click', function () {
    if (button3Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "43eb5f61-076f-4627-80b9-71d5435edf96.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "tumblr_puj4dtEnTg1tvarkwo1_1280.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';

        if (button1Clicked) {
            button1Clicked = false;
        }
        if (button2Clicked) {
            button2Clicked = false;
        }
        if (button4Clicked) {
            button4Clicked = false;
        }
    }

    button3Clicked = !button3Clicked;
});

acc4.addEventListener('click', function () {
    if (button4Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "31ba97d4180a07a9b43466f55cb20bfd.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "lexus-lfa-630-x-1280-wallpaper-9r3zx4m5x78fsbfd.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
        
        if (button1Clicked) {
            button1Clicked = false;
        }
        if (button2Clicked) {
            button2Clicked = false;
        }
        if (button3Clicked) {
            button3Clicked = false;
        }
    }

    button4Clicked = !button4Clicked;
});









const links = [
    document.querySelector('.navbar-brand'),
    document.getElementById('nav-links-1'),
    document.getElementById('nav-links-2'),
    document.getElementById('nav-links-3'),
    // document.getElementById('nav-links-4'),
    document.getElementById('nav-links-5'),
    acc1,
    acc2,
    acc3,
    acc4,
];
  
  function addRandomTextEffect(link) {
    link.onmouseover = (event) => {
      let iterations = 0;
  
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split('')
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
  
            return String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random capital letter
          })
          .join('');
  
        if (iterations >= 15) clearInterval(interval);
  
        iterations += 1;
      }, 40);
    };
  }
  
  links.forEach(link => {
    addRandomTextEffect(link);
  });


























paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

    TweenMax.from(".hero-1", 2, {
         delay: 1.2,
              y: 10,
              opacity: 0,
              ease: Expo.easeInOut
        })
   });



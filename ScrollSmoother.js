gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
  content: "#smoother-container",
  smooth: 1.5,
  effects: true,
  // normalizeScroll: true,
  ignoreMobileResize: true,
  smoothTouch: 0.1,
  allowNestedScroll: true,
});

if (window.matchMedia("(max-width: 700px)")) {
  smoother.effects("#dragging__svg #green", { lag: 0 });
}

gsap.to(".arrow", { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
gsap.to(".arrow-cont", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#smoother-content",
    start: "top top",
  },
});

gsap.set("#logo-smoother > *", { y: 280, opacity: 0 });
gsap.set("#logo-scroll", { x: 400 });
gsap.set("#mouse-wheel", { transformOrigin: "center bottom", opacity: 0 });
gsap.set(".header__inner, .scroll-down", { opacity: 1 });
gsap.set(".header__eyebrow", { opacity: 0.7 });

let tl = gsap.timeline({});

tl.to(".header__logo", { opacity: 1, duration: 0.1 })
  .fromTo(
    "#mouse-outline",
    {
      drawSVG: false,
    },
    {
      drawSVG: "0% 100%",
      ease: "sine.out",
      duration: 0.9,
    }
  )
  .to(
    "#mouse-wheel",
    {
      opacity: 1,
      duration: 0.5,
    },
    0.8
  )
  .from(
    "#logo-scroll > *",
    {
      opacity: 0,
      x: -60,
      ease: "sine.out",
      stagger: -0.06,
      duration: 1.2,
    },
    0.8
  )
  .to(
    "#logo-scroll",
    {
      x: 0,
      ease: "sine.out",
      duration: 1,
    },
    "-=0.3"
  )
  .to(
    "#mouse-wheel",
    {
      duration: 0.3,
      yPercent: 10,
      scaleY: 0.9,
      yoyo: true,
      repeat: 1,
      ease: "sine.out",
    },
    "<-=0.3"
  )
  .to("#logo-smoother > *", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "back.out",
    duration: 3,
  })
  .to(
    "#mouse-wheel",
    {
      duration: 0.6,
      yPercent: 20,
      scaleY: 0.8,
      yoyo: true,
      repeat: 1,
      ease: "sine.out",
    },
    "<+=0.3"
  )
  .from(
    [
      "#by-greensock",
      ".header__intro-cont",
      ".header__eyebrow",
      ".scroll-down",
    ],
    {
      opacity: 0,
      ease: "sine.out",
      duration: 3,
    },
    "-=1.4"
  )
  .to(
    ".by-greensock-letter",
    {
      opacity: 1,
      duration: 0.3,
      stagger: {
        each: 0.08,
        yoyo: true,
        repeat: 1,
      },
    },
    "+=0.3"
  )
  .timeScale(2);

let mySplitText = new SplitText(".staggerTitle", { type: "words,chars" });
let chars = mySplitText.chars;

gsap.from(chars, {
  yPercent: 100,
  ease: "back.out",
  stagger: 0.05,
  duration: 1.8,
  scrollTrigger: {
    trigger: ".image-grid__text",
    start: "top 90%",
  },
});

let dragging = new SplitText(".dragging--stagger", { type: "chars" });

dragging.chars.forEach((char, i) => {
  smoother.effects(char, { lag: (i + 8) * 0.02 });
});

let finalTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".final__svg",
    start: "top bottom",
    scrub: true,
    end: "bottom top",
  },
});

finalTl
  .from(
    ".final #squares > rect",
    {
      opacity: 0,
      yPercent: -100,
      stagger: 0.1,
    },
    0
  )
  .to(
    ".final #cross > g",
    {
      rotate: 360,
      transformOrigin: "center center",
      stagger: 0.1,
    },
    0
  )
  .from(
    ".final .circle",
    {
      scale: 0,
      opacity: 0,
      rotate: 20,
      y: (i) => {
        return i == 0 ? 200 : -50;
      },
      ease: "sine.out",
      transformOrigin: "center center",
      stagger: 0.1,
    },
    0
  );

gsap.set(".card", { opacity: 0 });
ScrollTrigger.batch(".card", {
  onEnter: (elements, triggers) => {
    gsap.to(elements, {
      opacity: 1,
      stagger: 0.1,
    });
  },
});

gsap.to([".ipsMenu", "#elSearchExpanded"], {
  autoAlpha: 0,
  scrollTrigger: {
    trigger: "#smoother-container",
    start: "50px",
    toggleActions: "play none none reverse",
  },
});

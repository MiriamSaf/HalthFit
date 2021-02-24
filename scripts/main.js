//full page declaration
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  //tooltips take an array that says options in order  auto in white
  navigationTooltips: [
    "Home",
    "Live Awesome",
    "Learn How",
    "Take The Test",
    "Reviews",
    "Contact",
  ],
  showActiveTooltip: true,
  controlArrows: false,
  //slides nav is on
  slidesNavigation: true,
  slidesNavPosition: "bottom",
  //doesnt help so much for when actually on a section becuase
  //it only works when u leave a section
  onLeave: function (origin, destination) {
    if (destination.index == 1) {
      //run reasons  animation
      animateReasonScreen();
    } else if (destination.index == 2) {
      //run func for first slide animation
      animateFirstSlide(destination);
    } else if (destination.index == 3) {
      //run test section
      animateTestSection();
    } else if (destination.index == 4) {
      //run review section
      animateReviewSection();
    } else if (destination.index == 5) {
      //final section
      // console.log(destination.index);
      animateFooterSection();
    }
  },

  //destination means the slide destination
  onSlideLeave: (section, origin, destination) => {
    //console.log("on slide leave")
    //console.log(section)

    //if current section is health section
    if (section.index == 2) {
      // console.log('in slide section')
      //if in health section will run, passes in the item html and the current index
      animateHealthSlide(destination.item, destination.index);
    }
  },
  //fired after structure of page is generated- on load
  afterRender: function () {
    //run home screen
    homeScreen();
  },
});

//function to run for our page in order of when they appear

//run menu function
openMenu();

//run dialogs for iPhone screen
dialogPgOne();
dialogPgTwo();
dialogPgThree();
dialogPgFour();

/*gsap animation code for home - Section 1*/
function homeScreen() {
  const tl = new TimelineMax({ delay: 0.5 })

    //animate each object
    .from("#home-fit-image", { x: 30, opacity: 0, duration: 1.3, ease: "slow" })
    .from(
      ".h1-head",
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.2"
    )
    .from(
      "#logo-home",
      { x: -80, opacity: 0, duration: 1, ease: "sine" },
      "-=0.7"
    )
    .from(".fa-bars", { x: -80, opacity: 0, duration: 1 }, "-=0.5")
    .from(".menu-titles", { y: 300, opacity: 0 });
}

/*gsap animation code for menu screen - Section 1 - Sidebar*/
function menuScreen() {
  const tl = new TimelineMax({ delay: 0.6 })
    .from(".menu-home", { bottom: "50%", x: 10, opacity: 0 })
    .from(".menu-awesome", { bottom: "50%", x: 10, opacity: 0 }, "-=0.1")
    .from(".menu-learn", { bottom: "50%", x: 10, opacity: 0 }, "-=0.1")
    .from(".menu-test", { bottom: "50%", x: 10, opacity: 0 }, "-=0.1")
    .from(".menu-review", { bottom: "50%", x: 10, opacity: 0 }, "-=0.1")
    .from(".menu-contact", { bottom: "50%", x: 10, opacity: 0 }, "-=0.1")
    .from(".mnu-btn", { x: 20, opacity: 0 });
}

/*gsap animation code for screen 2 - Section 2 - Reasons*/
function animateReasonScreen() {
  const tl = new TimelineMax({ delay: 0.1 })
    .from(
      ".reasons-title",
      { opacity: 0, duration: 0.9, x: -100, ease: "power2" },
      "-=0.1"
    )
    .from(".circle-outline", {
      opacity: 0,
      ease: "elastic",
      duration: 1.5,
      stagger: 1,
    })
    .from(".circle", { opacity: 0, stagger: 1 });
}

//first health slide animation - call another function - Section 3
function animateFirstSlide(destination) {
  let section = destination.item;
  //animate first slide
  animateHealthSlide(section, 0);
}

//animate slides with info - Section 3
function animateHealthSlide(slide, index) {
  //get all slide elements
  let slideHeader = slide.querySelector(".slide-ttle");
  let slideContent = slide.querySelector(".crcl-right p");
  let slideImg = slide.querySelector("#slide-img-hold");
  let circleLeft = slide.querySelector(".crcle-left");
  let circleLeftOutline = slide.querySelector(".crcle-left-outline");
  let circleRight = slide.querySelector(".crcl-right");
  let circleRightOutline = slide.querySelector(".crcl-right-outline");
  let rightIcon = slide.querySelector(".next-slide-r-icon");
  let leftIcon = slide.querySelector(".prev-slide-l-btn");

  const tl = new TimelineMax({ delay: 0.5 })
    .from(
      slideHeader,
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.2"
    )
    .from(slideImg, { x: 30, opacity: 0, duration: 1.3, ease: "slow" }, "-=1.2")
    .from(circleLeft, { y: 50, duration: 0.6, opacity: 0 }, "-=0.75")
    .from(circleLeftOutline, { y: 50, duration: 0.6, opacity: 0 }, "-=0.4")
    .from(circleRight, { x: -20, opacity: 0, duration: 0.6 }, "-=0.3")
    .from(circleRightOutline, { x: -20, opacity: 0, duration: 0.6 }, "-=0.2")
    .from(".read-more-btn", { x: -20, opacity: 0, duration: 0.6 }, "-=0.3")
    //.from(slideContent, {duration:1, x:-50, opacity:0, ease: 'back'})
    .from(slideContent, {
      opacity: 0,
      yPercent: 5,
      ease: "none",
      //scroll trigger
      scrollTrigger: {
        trigger: circleRightOutline,
        x: -20,
      },
    });

  //if first second or third slides
  if (index === 0 || index == 1 || index == 2) {
    //animate right icon
    tl.from(
      rightIcon,
      { duration: 1, x: 50, opacity: 0, ease: "back" },
      "-=0.9"
    );
  }
  //if 2nd, third or fourth slides
  if (index == 1 || index == 2 || index == 3) {
    //animate left icon
    tl.from(
      leftIcon,
      { duration: 1, x: -50, opacity: 0, ease: "back" },
      "-=0.9"
    );
  }
}

//test section gsap animation - Section 4
function animateTestSection() {
  const tl = new TimelineMax({ delay: 0.5 })
    .from("#test-header", { opacity: 0, duration: 1, x: -100, ease: "power2" })
    .from("#test-box", { opacity: 0, y: -70, duration: 1 }, "-=0.2");
}

//reviews section gsap animation - Section 5
function animateReviewSection() {
  const tl = new TimelineMax({ delay: 0.5 })
    .from(
      "#review-header",
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.2"
    )
    .from("blockquote", {
      opacity: 0,
      duration: 0.8,
      ease: "slow",
      x: -100,
      stagger: 0.5,
    })
    .from(
      "figcaption",
      { opacity: 0, duration: 0.9, ease: "slow", x: -70, stagger: 0.5 },
      "-=1"
    )
    .from(".glider-prev", { opacity: 0, duration: 0.6, y: -70 }, "-=0.5")
    .from(".glider-next", { opacity: 0, duration: 0.6, y: -70 }, "-=0.5")
    .from(".glider-dots", { opacity: 0, duration: 0.6, y: 70 }, "-=0.5");
}

//footer section gsap animation - Section 6
function animateFooterSection() {
  const tl = new TimelineMax({ delay: 0.5 })
    //animate footer elements
    .from(".footer-bg", { x: 30, opacity: 0, duration: 1.3, ease: "slow" })
    .from(
      ".footer-header",
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.2"
    )
    .from(
      ".footer-h2",
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.3"
    )
    .from(
      "#box-foot",
      { opacity: 0, duration: 1.1, x: 100, ease: "back" },
      "-=0.4"
    )
    .from(
      ".footer-h3",
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.5"
    )
    .from("#box-foot input", { opacity: 0, stagger: 0.5 })

    .from("#signUpBtn", { opacity: 0, stagger: 0.5 })
    .from(
      "#bottom-footer",
      { opacity: 0, duration: 1.1, y: 30, ease: "back" },
      "-=0.1"
    )
    .from(
      "#bott-foot-h2",
      { opacity: 0, duration: 1, x: -100, ease: "power2" },
      "-=0.4"
    )
    .from(
      "#bottom-footer sl-icon",
      { opacity: 0, stagger: 0.5, x: -30, ease: "back" },
      "-=0.3"
    );
}

/*check if menu is open with event listener */
let draw = document.querySelector("sl-drawer");
draw.addEventListener("sl-show", () => {
  //run menu gsap animation
  menuScreen();
});

/*shoelace drawer tweaked to our specifications ---*/
function openMenu() {
  //grab the drawer class
  const drawerMenu = document.querySelector(".drawer-overview");
  //selects our hamburger menu icon
  const openButton = document.querySelector("#menu-icon");
  //console.log(openButton)
  //create a close button and when clicked, hide the drawer/menu
  const closeButton = drawerMenu.querySelector('sl-button[type="primary"]');
  openButton.addEventListener("click", () => drawerMenu.show());
  closeButton.addEventListener("click", () => drawerMenu.hide());
}

/* MENU GO TO SECTION CODE ---------------- */

//jump to section 1 btn by finding all instances
//listen for click and then move to sctn
let jumptoS1Btns = document.querySelectorAll(".menu-home");
const drawerMenu = document.querySelector(".drawer-overview");
//console.log(jumptoS1Btns);
jumptoS1Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullpage_api.moveTo(1);
    //hide menu drawer
    drawerMenu.hide();
  });
});

//jump to section 2 btn by finding all instances
//listen for click and then move to sctn
let jumptoS2Btns = document.querySelectorAll(".menu-awesome");
//console.log(jumptoS2Btns)
jumptoS2Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullpage_api.moveTo(2);
    //hide menu drawer
    drawerMenu.hide();
  });
});

//jump to section 3 btn by finding all instances
//listen for click and then move to sctn
let jumptoS3Btns = document.querySelectorAll(".menu-learn");
//console.log(jumptoS3Btns)
jumptoS3Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullpage_api.moveTo(3);
    //hide menu drawer
    drawerMenu.hide();
  });
});

//jump to section 4 btn by finding all instances
//listen out for click and then move to that section
let jumptoS4Btns = document.querySelectorAll(".menu-test");
//console.log(jumptoS4Btns)
jumptoS4Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullpage_api.moveTo(4);
    //hide menu drawer
    drawerMenu.hide();
  });
});

//jump to section 5 btn by finding all instances
//listen out for click and then move to that section
let jumptoS5Btns = document.querySelectorAll(".menu-review");
//console.log(jumptoS5Btns)
jumptoS5Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullpage_api.moveTo(5);
    //hide menu drawer
    drawerMenu.hide();
  });
});

//jump to section 5 btn by finding all instances
//listen out for click and then move to that section
let jumptoS6Btns = document.querySelectorAll(".menu-contact");
//console.log(jumptoS6Btns)
jumptoS6Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullpage_api.moveTo(6);
    //hide menu drawer
    drawerMenu.hide();
  });
});

/* NEXT SLIDE JS SECTION CODE ---------------- */

//next slide button javascript
//SLIDES NAVIAGTION (next, pr)
let nextSlideBtn = document.querySelectorAll(".next-slide-r-icon");
//console.log(nextSlideBtn)
nextSlideBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    //run full page apis method to move to next slide
    fullpage_api.moveSlideRight();
  });
});

//prev slide btn
let prevSlideBtn = document.querySelectorAll(".prev-slide-l-btn");
//console.log(prevSlideBtn)
prevSlideBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    //run full page apis method to move slide to left
    fullpage_api.moveSlideLeft();
  });
});

/* DIALOG BOX IN iPhone SCREEN SIZE CODE ---------------- */

/*functions that listen for the dialogs opening and closing - individual due to problems on running all */
function dialogPgOne() {
  const dialog = document.querySelector(".dialog-overview-1");
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(
    '.dialog-overview-1 sl-button[slot="footer"]'
  );

  openButton.addEventListener("click", () => dialog.show());
  closeButton.addEventListener("click", () => dialog.hide());
}

/*functions that listen for the dialogs opening and closing - individual due to problems on running all */
function dialogPgTwo() {
  const dialog = document.querySelector(".dialog-overview-2");
  const openButton = document.querySelector(
    "#slide-img-hold-jog .read-more-btn"
  );
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener("click", () => dialog.show());
  closeButton.addEventListener("click", () => dialog.hide());
}

/*functions that listen for the dialogs opening and closing - individual due to problems on running all */
function dialogPgThree() {
  const dialog = document.querySelector(".dialog-overview-3");
  const openButton = document.querySelector(
    "#slide-img-hold-friends .read-more-btn"
  );
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener("click", () => dialog.show());
  closeButton.addEventListener("click", () => dialog.hide());
}

/*functions that listen for the dialogs opening and closing - individual due to problems on running all */
function dialogPgFour() {
  const dialog = document.querySelector(".dialog-overview-4");
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(
    '.dialog-overview-4 sl-button[slot="footer"]'
  );

  openButton.addEventListener("click", () => dialog.show());
  closeButton.addEventListener("click", () => dialog.hide());
}

/* REVIEWS SECTION 5 - GLIDER JS CODE ---------------- */
//Glider js code
new Glider(document.querySelector(".glider"), {
  //open object
  //decided how many items you want to show based on breakpoints
  slidesToShow: 2.5, //will show 2.5 slides
  draggable: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 5,
      },
    },
  ],
});

/* FOOTER SECTION 6 - SVG CODE ---------------- */

//function to change sign up btn to loading svg
function showSVG() {
  let svg = document.querySelector("svg");
  let signUpBtn = document.querySelector("#signUpBtn");
  //console.log(svg)
  svg.classList.add("svgDisplay");
  signUpBtn.classList.add("hideSignUp");
}

//show original button when clicked and remove the svg animation
function showBtn() {
  let svg = document.querySelector("svg");
  let signUpBtn = document.querySelector("#signUpBtn");
  //console.log(svg)
  svg.classList.remove("svgDisplay");
  signUpBtn.classList.remove("hideSignUp");
}

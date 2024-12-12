gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
// const section1Timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "top top"
//   }
// })

/* section 1 */
const section1Timeline = gsap.timeline();

section1Timeline
  .from('.section1 h1 span:last-child', {x: "70vw", opacity: 0, duration: 1.5})
  .from('.section1 h1 span:first-child', {x: "-100vw", opacity: 0, duration: 1.5}, "<")
  .from('.section1 p', {rotation: 90, transformOrigin: "0 0", opacity: 0, duration: 1.5})
  .from('.section1 img', {y: "100vw", opacity: 0, duration: 1.5})


/* section 2 */
const section2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2',
    // markers: true,
    start: 'top 20%',
    end: 'bottom center',
    toggleActions: "play none reverse none" // onEnter, onLeave, onEnterBack, and onLeaveBack
  }
})

section2Timeline
  .from('.section2 h2 span:first-child', {y: "-100vw", opacity: 0, duration: .7})
  .from('.section2 h2 span:last-child', {y: "-100vw", opacity: 0, duration: .7})
  .from('.section2 p', {opacity: 0, rotateY: "90deg", duration: .7})

const section3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 20%",
    end: "bottom 80%",
    // markers: true,
    toggleActions: "play none reverse none"
  }
})

section3Timeline
  .from('.section3 h2', {opacity: 0, scale: 20, x: "-100vw", duration: 1})
  .from('.section3 p span', {y: "50vh", stagger: .3, opacity: 0, duration: .5})
  .to(".section3 p span", {backgroundColor: "white", color: "black", duration: .5}, "<")

const section4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "bottom 40%",
    end: "bottom 70%",
    // markers: true,
    toggleActions: "play none reverse none"
  }
})

section4Timeline
  .from('.section4 .portfolio-item', {stagger: 1, x: "100vw", opacity: 0, duration: 1})

const horizontalTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    // end: "top 90%",
    // markers: true,
    pin: true,
    scrub: true
  }
})

horizontalTimeline
  // .from('.section3 h2', {opacity: 0, scale: 20, x: "-100vw", duration: 1})
  // .from('.section3 p span', {y: "50vh", stagger: .3, opacity: 0, duration: .5})
  // .to(".section3 p span", {backgroundColor: "white", color: "black", duration: .5}, "<")
  .to(".horizontal-sections", {xPercent: "-35", duration: 1}) // WHY? 35?


/* section 5 */
const section5Heading = document.querySelector('.section5 h2');
let contactText = section5Heading.innerText;
const splitContact = contactText.split("");
console.log(splitContact);
section5Heading.innerText = "";

splitContact.forEach(element => {
  const spanText = document.createElement('span');
  if(element === " ") {
    spanText.style.cssText = "display: inline-block; width: 20px;";
  }
  spanText.innerText = element;
  section5Heading.append(spanText);
});

const section5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    // markers: true,
    start: "top top",
    pin: true,
    scrub: true
  }
});

section5Timeline
  .from('.section5 h2 span', {stagger: .3, y: "-70vh", width: "30px", duration: .5})
  .from('.section5 p', {opacity: 0, y: "50px", duration: 1})
  .from('.section5 button', {scale: 0, duration: 1})
  .to('.section5', {backgroundColor: "black", duration: 1})
  .from(".section5", {backgroundPositionX: "200%", duration: 1})
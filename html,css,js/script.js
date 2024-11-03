gsap.registerPlugin(ScrollTrigger)

var typed = new Typed('#text',{
    strings: ['Frontend Developer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    blink: false,
    showCursor: false 
}); 
// gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("section");

sections.forEach((section, index) => {
  // Set direction of movement: left to right or right to left, and top to bottom or bottom to top
  let xDirection = index % 2 === 0 ? '100vw' : '-100vw';  // Horizontal movement direction
  let yDirection = index % 2 === 0 ? '100vh' : '-100vh';  // Vertical movement direction

  gsap.fromTo(".hero_star", 
    {
      x: xDirection === '100vw' ? '-100vw' : '100vw',  // Starting off-screen horizontally
      y: yDirection === '100vh' ? '-100vh' : '100vh',  // Starting off-screen vertically
    }, 
    {
      x: xDirection,  // End off-screen on the other side horizontally
      y: yDirection,  // End off-screen on the other side vertically
      scrollTrigger: {
        trigger: section,
        start: "top center",  // Animation starts when section reaches the center of viewport
        end: "bottom center",  // Ends when section leaves the center
        scrub: true,  // Smooth animation that follows scroll
        markers: false,  // You can enable this for debugging
      }
    }
  );
});



var tl = gsap.timeline();
var t2=gsap.timeline();

tl.from(".header",{
    y:-1500,
    duration:1.5,
    // delay:1,
    opacity:0,
    stagger:0.3
})
tl.from(".logo",{
    y:-1500,
    duration:.5,
    // delay:1,
    opacity:0,
    // stagger:0.3
})
tl.from(".navbar a", {
    y: -1500,
    duration: 1.2, // Slightly increase the duration to give a smoother effect
    opacity: 0,
    stagger: {
        each: 0.3
    },
    ease: "power3.out" // Use a smoother easing function
});
tl.from(".star",{
    rotation: 360,
    duration: 2, // adjust the duration to your liking
    ease: "power2.inOut", // adjust the easing to your liking
    repeat: -1, // repeat indefinitely
    delay:2
})
 gsap.utils.toArray('.star').forEach(star=>{
    gsap.fromTo(".star",{
        rotation:0,
        opacity:0,
        y:100,
    },{
        rotation:360,
        opacity:1,
        y:0,
        duration:1,
        delay:2,
        scrollTrigger:star
    })
 })
 t2.from(".hero-content",{
    delay:3,
    duration: 1,
    y:500,
    opacity:0,
})
t2.from(".home-img",{
    duration:0.5,
    x:500,
    opacity:0,
})
 

 // Select all navigation links
 document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  
  




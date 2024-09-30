gsap.registerPlugin(ScrollTrigger)

var typed = new Typed('#text',{
    strings: ['Frontend Developer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    // blink: true,
    // blinkSpeed: 500,
    blink: false, // Set blink to false to disable the blinking effect
    showCursor: false 
}); 


// Create a GSAP timeline
var tl = gsap.timeline();

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




gsap.registerPlugin(ScrollTrigger)


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
// tl.from(".home", {
//     y: -1500,
//     duration: 1.2, // Slightly increase the duration to give a smoother effect
//     opacity: 0,
//     ease: "power3.out" // Use a smoother easing function
// });

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




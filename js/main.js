// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//Gsap demo animation 

gsap.fromTo("#demo", {
    rotation : 180
},{
    rotation : 360,
    duration: 2,
})
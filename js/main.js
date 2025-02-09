// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//Gsap demo animation - window 1 rotation 
/*
gsap.to(".window1", {
    scrollTrigger:{
        trigger: "#section1", 
        //markers: true, 
        id: "window1",
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none reverse none",
        scrub: 1, 

    },
    rotation: 360,
    duration: 2,
})


//Gsap demo animation - window 1 rotation 

gsap.from(".window2",{
    scrollTrigger:{
        trigger: "#section2",
        //markers: true,
        id: "section2",
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play reverse play reset",
        scrub:1
    },
    
    x:'-100vw',
    duration: 1,
})*/



// GSAP animation - window 4 timeline
/*let timeWindow4 = gsap.timeline();
timeWindow4.to('.window4', {x:100,})
.to('.window4', {y:100,})
.to('.window4', {x:-100,})
.to('.window4', {y:-100,})*/




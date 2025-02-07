// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//Gsap demo animation - window 1 rotation 

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
})

gsap.to(".window3",{
    duration: 5,
    motionPath: {
        path: "M67 1C47.3333 3 9.40001 18.4 15 64C16.6286 77.2617 22.3171 86.1388 30 91.6513M30 91.6513C55.3388 109.832 102.371 91.4161 97 73C90 49 27 68.3027 30 91.6513ZM30 91.6513C20 119.434 13.4 174.8 67 174C134 173 130.061 260 56 260C-14 260 -3 335 15 359C30 379 154 400 183 298",

    },
    /*onComplete: ()=> {
        document.getElementById('titleSec3').style.color="red";
    },*/

})

// GSAP animation - window 4 timeline
let timeWindow4 = gsap.timeline();
timeWindow4.to('.window4', {x:100,})
.to('.window4', {y:100,})
.to('.window4', {x:-100,})
.to('.window4', {y:-100,})




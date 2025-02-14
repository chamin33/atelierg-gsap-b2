// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Animations ------------------------------------------
// GSAP MatchMedia -------------------------------------------------------
/*
let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)', //smartphone version
    isDesktop: '(min-width: 800px)', //desktop version

}, (context) => {
    let {isMobile,isDesktop} = context.condition;
}
)
*/

// GSAP Animation section 2 draggable ----------------------------
console.log("hello")


Draggable.create(".box", {
    type: "x,y",
    // bounds: ".section2",

    onDragEnd: function() { // Utiliser une fonction classique pour préserver `this`
        let goodSec2 = document.getElementById('goodSec2');  
        let boxAnswer = document.getElementById('boxanswer'); // Récupérer l'élément

        if (this.hitTest(boxAnswer, '100px')) {               // Check the collision
            if (this.target === goodSec2) {                   // Check if the moved element is good
                boxAnswer.classList.remove('badAnswer');
                boxAnswer.classList.add('goodAnswer');
            }
            else{
                boxAnswer.classList.remove('goodAnswer');
                boxAnswer.classList.add('badAnswer');
            }
        } else {
            boxAnswer.classList.remove('goodAnswer');
            boxAnswer.classList.remove('badAnswer');
        }
    }
});





//Gsap demo animation - Section 4 - the award images arrival from the sides 

gsap.from("#img1Sec4", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top 100%",
        end: "bottom 0%",
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        markers: true,
    },
    x: '-100vw'
});

gsap.from("#img2Sec4", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top 100%",
        end: "bottom 0%",
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        markers: true,
    },
    x: '100vw'
});



gsap.from(".imgSec3", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 100%",
        end: "bottom 60%",
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        markers: true,
        scrub:1,
    },
    y: '-200vh',
    stagger: 0.1 ,
});


// GSAP animation - window 4 timeline
/*let timeWindow4 = gsap.timeline();
timeWindow4.to('.window4', {x:100,})
.to('.window4', {y:100,})
.to('.window4', {x:-100,})
.to('.window4', {y:-100,})*/




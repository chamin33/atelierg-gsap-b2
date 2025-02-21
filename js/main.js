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

// GSAP Animation section 1 draggable ----------------------------

gsap.to('#section1', {
    opacity: 1,                    // Making the texte reappear since the oppacity in the css is at 0
    scrollTrigger: {
        trigger: '#section1',
        start: "top 10%",
        end: "bottom 30%",
        //markers: true,
        toggleActions: "play reverse play reverse"
    }
});


/*gsap.to(".typewriter", {
    duration: 2, // Durée de l'animation
    width: "10.5ch", // Largeur correspondant au texte
    ease: "steps(10)", // Effet "lettre par lettre"
});
*/
// GSAP Animation section 2 draggable ----------------------------



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
        }   else {
            boxAnswer.classList.remove('goodAnswer');
            boxAnswer.classList.remove('badAnswer');
        }
    }
});


//GSAP animation on section 3 - The movie posters coming down in an asemetrical way

gsap.from(".imgSec3", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 40%",
        end: "bottom 100%",
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        //markers: true,
        scrub:1,
    },
    y: '-600vh',
    stagger: 0.2 ,        // Making the stagger less fast- smoother than 0.4 - accentuating the assemetrical effect
});

gsap.from(".seven", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 100%",
        end: "bottom 0%",
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        //markers: true,
        scrub:1,
    },
    y: '-400vh',
    stagger: 0.2 ,       // Making the stagger more agressive - faster - accentuating the assemetrical effect
});



//Gsap demo animation - Section 4 - the award images arrival from the sides 

gsap.from("#img1Sec4", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top 100%",
        end: "bottom 100%",
        scrub: 1,
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        //markers: true,
    },
    x: '-100vw'
});

gsap.from("#img2Sec4", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top 100%",
        end: "bottom 100%",
        scrub: 1,
        //scrub: 1, // Makes it scroll-synced
        toggleActions: "play reset play reset",
        //markers: true,
    },
    x: '100vw'
});


//Gsap demo animation - Section 5 - the award images arrival from the sides 

// The animation used to make the elements appear in fade in and out
gsap.utils.toArray(".first").forEach(element => {
  gsap.to(element, {
    opacity: 1,                           // Making the texte reappear since the oppacity in the css is at 0
    scrollTrigger: {
      trigger: element,
      start: "center 70%",
      end: "center 30%",
      //markers: true,
      toggleActions: "play reverse play reverse"
    }
  })
});

// make the ending statement appear from the side
gsap.from(".endingdiv", {
    scrollTrigger: {
        trigger: "#section5",
        start: "top 100%",                     // positioning the whole div in the center when completely scrolling down
        end: "bottom 100%",                    // positioning the whole div in the center when completely scrolling down
        ease: "none",
        scrub: 1,                                     // Makes it scroll-synced
        toggleActions: "play reset play reset",
        //markers: true,
    },
    x: '200vw'
});






// GSAP animation - window 4 timeline
/*let timeWindow4 = gsap.timeline();
timeWindow4.to('.window4', {x:100,})
.to('.window4', {y:100,})
.to('.window4', {x:-100,})
.to('.window4', {y:-100,})*/




// For the cursor whenver the cursor moves or vlicks anything there should be an effect on it 
// for that we made cursor div and its css 
var cursr = document.querySelector("#cursor")    // used to seclect any html element in javascript the div we made in html and applied some property using css actually amde a ball of green color 
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    // console.log(dets)  // will print the whole details of the mouse event in the console  whenever we move the mouse

    // Placing the cursor ball on the mouse as it moves 
    cursr.style.left = dets.x + "px"
    cursr.style.top = dets.y + "px"
    blur.style.left = dets.x - 140 + "px"
    blur.style.top = dets.y - 140 + "px"

    
})
// Cursor size also changes when moved on to the text
var h4all = document.querySelectorAll("#nav h4")     // As there are multiple h4s we used querySelectorALL
// This will give us a Nodelist of all h4s which we can treat as an array
h4all.forEach(function(elem){
    // console.log(elem)   // elem is the eeach element in the NodeList
    // When the cursor reaches h4
    elem.addEventListener("mouseenter",function(){
        cursr.style.scale = 2
        cursr.style.border = "0.5px solid #fff" 
        cursr.style.backgroundColor = "transparent"
    })
    // If left like this then the cursor will always follow the properties written above
    // So to make it agin normal on leaving
    elem.addEventListener("mouseleave", function(){
        cursr.style.scale = 1
        cursr.style.border = "0px solid #95C11E" 
        cursr.style.backgroundColor = "#95C11E"
    })
})




gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,   // Done this to make the nav appear black after 0.5 seconds of loading thee page 

    // but we need to make it black when we have scrolled down the page so that we will use scroll tigger
    scrollTrigger: {
        trigger: "#nav",  // Which element to trigger
        scroller: "body",  // What is being scrolled
        // markers: true,
        start: "top -10%", // To make the start of the animation when we have scrolled 10% down of the top of the nav
        end: "top -15%", // So that on moving to previous page (i.e. on scrolling above back to the position top -21%) the page animation also ends
        scrub: 1, // To make all things on scrolling basis basically ek dum se color chnage se bachne ke liye
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -3.5%",
        end: "top -100%",
        scrub: 2
    }
})


gsap.from("#about-us img , #about-us-in",{
    y:50,
    opacity:0,
    duration: 3,
    stagger: 0.4,   // Multiple elements pe ek ek karke lage effect
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})


gsap.from(".card",{
    scale:0.5,
    opacity:0,
    duration: 2,
    // stagger: 0.4,   // Multiple elements pe ek ek karke lage effect
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 55%",
        scrub:2
    }
})

// Upar se niche ki taraf aa rha hain
gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})




gsap.from("#colon2",{
    y:70,
    x:70, 
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 70%",
        scrub:4
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
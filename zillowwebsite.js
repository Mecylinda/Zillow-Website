const mobileNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector('.hamburger')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const change = document.querySelector('.change')

hamburger.addEventListener ("click", () => {
   hamburger.classList.toggle("change");
   console.log('hambburger');
    
});
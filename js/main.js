let elCloseBtn = document.querySelector('.close-btn')
let elOpenBtn = document.querySelector('.open-btn')
let elHiddenHeader = document.querySelector('.hidden-header')



elOpenBtn.addEventListener("click", () => {
    elHiddenHeader.classList.remove("-translate-y-[150%]");
    elOpenBtn.classList.add('hidden')
})


elCloseBtn.addEventListener("click", () => {
    elHiddenHeader.classList.add("-translate-y-[150%]");
    elOpenBtn.classList.remove('hidden')
})

// let skilsContent = select('.skills-content');
// if (skilsContent) {
//     new Waypoint({
//         element: skilsContent,
//         offset: '80%',
//         handler: function(direction) {
//             let progress = select('.progress .progress-bar', true);
//             progress.forEach((el) => {
//                 el.style.width = el.getAttribute('aria-valuenow') + '%'
//             });
//         }
//     })
// }

// let elHeroTrans = document.querySelector('.trans')



// window.addEventListener("scroll", () => {
//     if (window.scrollY > 0) {
//         elHeroTrans.classList.remove('hidden')
//     } else {
//         elHeroTrans.classList.add('hidden')
//     }
// })
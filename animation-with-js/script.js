const element = document.querySelector('.box');
const button = document.querySelector('.upate-time-btn');
if (element) {
    const animation = element.animate([
        {
            transform: "translateX(0) rotate(45deg)",
            offset: 0,
            backgroundColor: 'red'
        },
        {
            transform: "translateX(20%) rotate(87deg)",
            offset: .5,
            backgroundColor: 'red'
        },
        {
            transform: "translateX(100vw)",
            offset: 1,
            backgroundColor: 'green'
        }
    ],
        {
            easing: 'ease-in',
            duration: 3000,
            delay:1000,
            direction: 'alternate',
            iterations: Infinity
        }
    )
    animation.pause();
    button.addEventListener('click',()=>{
        animation.effect.duration = 4000;
        console.log(animation);
    })

}
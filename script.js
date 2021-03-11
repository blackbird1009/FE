document.addEventListener('DOMContentLoaded', function () {
    menuActive();
    const advantages = document.querySelector('.advantages');
    if (advantages) {
        animateWhenAppear(advantages, counter);
    }
});

function animateWhenAppear(container, callback) {
    document.addEventListener('scroll', function (e) {
        const top = window.pageYOffset + window.innerHeight;
        if (top > container.offsetTop + 550 && top < container.offsetTop + 558) {
            callback();
        }
    });

    sendForm();
}

function menuActive() {
    const menuButton = document.querySelector(".menu-icon");
    const navigation = document.querySelector(".navigation__wrapper");
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
}

function counter() {
    const advantagesArr = document.querySelectorAll('.advantages__item');
    advantagesArr.forEach(item => {
        const numberWrapper = item.querySelector('.advantages__number');
        const number = parseInt(numberWrapper.innerHTML);
        const time = Math.abs(Math.floor(1000 / number));
        let current = 0;
        const timer = setInterval(() => {
            current++;
            numberWrapper.innerHTML = `0${current}`;
            if (current == number) {
                clearInterval(timer);
            }
        }, time);
    });
}


function sendForm(){
    const feedbackForm = document.querySelector('#feedback');
    feedbackForm.addEventListener('submit',function(e){
        e.preventDefault();
        window.location = './thankPage.html';
    });
}

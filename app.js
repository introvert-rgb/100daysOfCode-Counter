let btns = document.querySelectorAll('.btn');
let counterText = document.querySelector('.counter');
let counter = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-minus')) {
            // counterText.classList.add('anim-01');
            counter--;


        } else if (btn.classList.contains('btn-plus')) {
            counter++
        } else {
            counter = 0;
        }
        counterText.innerHTML = counter;
    });
});
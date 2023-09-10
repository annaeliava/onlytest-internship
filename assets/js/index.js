let btns = document.querySelectorAll('.btn');
let isOpened = document.getElementById('btn__opened__info');
let isClosed = document.getElementById('btn__closed__info');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let isClicked = btn.classList.contains('btn__closed');
        if(isClicked === true) {
            btn.classList.remove('btn__closed');
            btn.classList.toggle('btn__opened');
            btn.querySelector('#btn__opened__info').style.display = 'flex';
            btn.querySelector('#btn__closed__info').style.display = 'none';
        } else {
            btn.classList.remove('btn__opened');
            btn.classList.toggle('btn__closed');
            btn.querySelector('#btn__closed__info').style.display = 'flex';
            btn.querySelector('#btn__opened__info').style.display = 'none';
        }
    });
});

const body = document.querySelector('body');
const target = document.querySelector('.target');
const horizon = document.querySelector('.horizon');
const vertical = document.querySelector('.vertical');
const coordinate = document.querySelector('.coordinate');

target_width = 50;
target_height = 50;

target.style.width = target_width + 'px';
target.style.height = target_height + 'px';

body.addEventListener('mousemove', event => {
    client_x = event.clientX;
    client_y = event.clientY;

    target.style.transform = `translate(${client_x - target_width * 1 / 2}px, ${client_y - target_height * 1/ 2}px)`;
    // target.style.left = client_x +'px';
    // target.style.top = client_y +'px';

    vertical.style.transform = `translate(${client_x}px, 0)`;
    horizon.style.transform = `translate(0, ${client_y}px)`
    // vertical.style.left = client_x +'px'
    // horizon.style.top = client_y +'px';

    coordinate.style.transform = `translate(${client_x}px, ${client_y}px)`
    // coordinate.style.left = client_x +'px'
    // coordinate.style.top = client_y +'px'

    coordinate.innerHTML = `${client_x}px, ${client_y}px`
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM has loaded');
    const line = document.querySelector('#text');
    line.textContent = 'This is really cool!';
});
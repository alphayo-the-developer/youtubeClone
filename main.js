const toggle1 = document.getElementById('humberger');
const modal = document.getElementById('modal');
const sideNav = document.getElementById('side_nav');
const toggle2 = document.getElementById('side_nav_toggle');

//toggle nav
toggle1.addEventListener('click', () => {
    sideNav.style.display = 'block';
    modal.style.display = 'block';
});

toggle2.addEventListener('click', () => {
    sideNav.style.display = 'none';
    modal.style.display = 'none';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
    sideNav.style.display = 'none';
})
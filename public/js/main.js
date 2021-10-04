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

function SearchPopup() {
    search = document.querySelector('#search input');
    suggetion = document.querySelector('.serch_pop_up');
    
    search.addEventListener('click', () => {
        suggetion.style.display = 'block';
    });   
};

SearchPopup()


function SettingPopup() {
    user_icon = document.querySelector('#user_icon');
    setting_pop_up = document.querySelector('.setting_pop_up');
    
    user_icon.addEventListener('click', () => {
        setting_pop_up.style.display = 'block';
    });   
};

SettingPopup()

function notificationPopup() {
    bt1 = document.querySelector('.notification_icon');
    bt = document.querySelector('#notification_btn');
    notification_pop_up = document.querySelector('.notification_pop_up');
    
    bt.addEventListener('click', () => {
        notification_pop_up.style.display = 'block';
    });

    bt1.addEventListener('click', () => {
        notificationSettingPopup();
    });
 
};

notificationPopup();

function notificationSettingPopup() {
    notification_setup = document.querySelector('.noticication_setup');
    
    notification_setup.style.display = 'block';
  
};


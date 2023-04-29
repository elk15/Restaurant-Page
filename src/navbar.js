import RedLogo from './imgs/logo-red.png';

const createNavBar = (() => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');

    const navLogo = new Image();
    navLogo.src = RedLogo;
    navLogo.classList.add('logo');
    header.appendChild(navLogo);

    const location = document.createElement('div');
    location.classList.add('location');
    const locationlink = document.createElement('a');
    locationlink.target = '_blank';
    locationlink.href = 'https://www.google.com/maps/place/%CE%A7%CE%B1%CF%81.+%CE%A4%CF%81%CE%B9%CE%BA%CE%BF%CF%8D%CF%80%CE%B7+245,+%CE%9A%CE%B7%CF%86%CE%B9%CF%83%CE%B9%CE%AC+145+64/@38.0871074,23.7987746,17z/data=!3m1!4b1!4m6!3m5!1s0x14a19f1adb6d5b17:0x4d7c9413447cd01a!8m2!3d38.0871074!4d23.8013495!16s%2Fg%2F11csd8_k91';
    locationlink.innerHTML = '<span>Char. Trikoupi 245, </span><span>Kifisia 145 64</span>';
    location.appendChild(locationlink);
    header.appendChild(location);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const menuLink = document.createElement('li');
    menuLink.textContent = 'MENU';
    ul.appendChild(menuLink);

    const ourStoryLink = document.createElement('li');
    ourStoryLink.textContent = 'OUR STORY';
    ul.appendChild(ourStoryLink);

    const hoursLink = document.createElement('li');
    hoursLink.textContent = 'HOURS & LOCATION';
    ul.appendChild(hoursLink);

    const communityLink = document.createElement('li');
    communityLink.textContent = 'COMMUNITY';
    ul.appendChild(communityLink);

    const contactLink = document.createElement('li');
    contactLink.textContent = 'CONTACT';
    ul.appendChild(contactLink);

    nav.appendChild(ul);
    header.appendChild(nav);

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('open-icon');
    header.appendChild(menuBtn);

    const controlResponsiveNav = () => {
        ul.classList.toggle('responsive-nav');
        menuBtn.classList.toggle('open-icon');
        menuBtn.classList.toggle('close-icon');
        body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    };
    menuBtn.addEventListener('click', () => {
        controlResponsiveNav();
    });

    return {
        header,
        menuLink,
        ourStoryLink,
        hoursLink,
        communityLink,
        contactLink,
        controlResponsiveNav,
    };
})();

export default createNavBar;

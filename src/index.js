import NavBar from './navbar';
import Home from './home';
import Menu from './menu';
import OurStory from './story';
import Community from './community';
import HoursAndLocation from './location';
import Contact from './contact';
import './style.css';

const content = document.getElementById('content');
content.appendChild(NavBar.header);

const main = document.createElement('div');
content.appendChild(main);
main.appendChild(Home.main);

const redirectToPage = (Page) => {
    let width = window.innerWidth;
    main.innerHTML = '';
    main.appendChild(Page.main);
    if (width <= 900 && NavBar.menuList.classList.contains('responsive-nav')) {
        NavBar.controlResponsiveNav();
    }
};

NavBar.menuLink.addEventListener('click', () => {
    redirectToPage(Menu);
});

NavBar.ourStoryLink.addEventListener('click', () => {
    redirectToPage(OurStory);
});

NavBar.hoursLink.addEventListener('click', () => {
    redirectToPage(HoursAndLocation);
});

NavBar.communityLink.addEventListener('click', () => {
    redirectToPage(Community);
});

NavBar.contactLink.addEventListener('click', () => {
    redirectToPage(Contact);
});

NavBar.navLogo.addEventListener('click', () => {
    redirectToPage(Home);
});

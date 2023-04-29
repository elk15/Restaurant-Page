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

// content.appendChild(Home.main);
// content.appendChild(Menu.main);
// content.appendChild(OurStory.main);
// content.appendChild(Community.main);
// content.appendChild(HoursAndLocation.main);
content.appendChild(Contact.main);

// NavBar.menuLink.addEventListener('click', () => {
//     main.innerHTML = '';
//     main.appendChild(Menu.menu);
// });

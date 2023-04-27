import NavBar from './navbar';
import Home from './home';
import Menu from './menu';
import OurStory from './story';
import './style.css';

const content = document.getElementById('content');
content.appendChild(NavBar.header);

// content.appendChild(Home.main);
// content.appendChild(Menu.main);
content.appendChild(OurStory.main);

// NavBar.menuLink.addEventListener('click', () => {
//     main.innerHTML = '';
//     main.appendChild(Menu.menu);
// });

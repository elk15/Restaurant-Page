import NavBar from './navbar';
import Home from './home';
import Menu from './menu';
import './style.css';

const content = document.getElementById('content');
content.appendChild(NavBar.header);

// content.appendChild(Home.main);
content.appendChild(Menu.main);

// NavBar.menuLink.addEventListener('click', () => {
//     main.innerHTML = '';
//     main.appendChild(Menu.menu);
// });

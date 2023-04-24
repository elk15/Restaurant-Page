import NavBar from './navbar';
import Home from './home';
import './style.css';

const content = document.getElementById('content');
content.appendChild(NavBar.header);

content.appendChild(Home.main);

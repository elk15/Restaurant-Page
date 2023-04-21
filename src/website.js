import createNavBar from './navbar';

const createWebsite = () => {
    const content = document.getElementById('content');
    content.appendChild(createNavBar());
};

export default createWebsite;

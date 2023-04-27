import whiteLogo from './imgs/logo-white.png';

const createHeroImage = (image) => {
    const Logo = new Image();
    Logo.src = whiteLogo;
    Logo.classList.add('logo');
    const newImage = new Image();
    newImage.src = image;
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('hero-img');
    imageDiv.appendChild(newImage);
    imageDiv.appendChild(Logo);

    return imageDiv;
};

export default createHeroImage;

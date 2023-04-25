import dish1 from './imgs/dish1.jpg';
import dish2 from './imgs/dish2.jpg';
import dish3 from './imgs/dish3.jpg';
import dish4 from './imgs/dish4.jpg';
import dish5 from './imgs/dish5.jpg';
import dish6 from './imgs/dish6.jpg';
import dish7 from './imgs/dish7.jpg';
import dish8 from './imgs/dish8.jpg';
import menuImg from './imgs/menu.jpg';
import locationImg from './imgs/location.jpg';

const images = [dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8];

const appendImages = (image, parent) => {
    const newImage = new Image();
    newImage.src = image;
    newImage.classList.add('img');
    parent.appendChild(newImage);
};

const createHome = (() => {
    const main = document.createElement('main');

    const imagesGrid = document.createElement('div');
    imagesGrid.classList.add('images-grid');
    const gridColumn1 = document.createElement('div');
    gridColumn1.classList.add('col');
    const gridColumn2 = document.createElement('div');
    gridColumn2.classList.add('col');
    imagesGrid.appendChild(gridColumn1);
    imagesGrid.appendChild(gridColumn2);

    for (let i = 0; i < 8; i++) {
        if ((i + 1) % 2 == 0) {
            appendImages(images[i], gridColumn2);
        } else {
            appendImages(images[i], gridColumn1);
        }
    }

    main.appendChild(imagesGrid);

    const mainDescription = document.createElement('h2');
    mainDescription.textContent = 'Our fine dining restaurant offers an elegant ambiance, a tantalizing menu of classic French cuisine, and impeccable service, creating an unforgettable dining experience.';
    mainDescription.classList.add('description');
    main.appendChild(mainDescription);

    const lowerGrid = document.createElement('div');
    lowerGrid.classList.add('lower-grid');

    const textWrapper1 = document.createElement('div');
    textWrapper1.classList.add('text-wrapper');
    const textWrapper2 = document.createElement('div');
    textWrapper2.classList.add('text-wrapper');

    const row1 = document.createElement('div');
    row1.classList.add('row');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';
    const menuText = document.createElement('p');
    menuText.textContent = 'Indulge in an exquisite culinary journey through France with our menu, crafted to delight your senses and satisfy your appetite.';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.classList.add('btn');
    textWrapper1.appendChild(menuTitle);
    textWrapper1.appendChild(menuText);
    textWrapper1.appendChild(menuBtn);
    menuDiv.appendChild(textWrapper1);
    row1.appendChild(menuDiv);
    appendImages(menuImg, row1);

    const row2 = document.createElement('div');
    row2.classList.add('row');
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.textContent = ' Nestled in the heart of the city, our restaurant offers an idyllic and charming setting that will transport you to the French countryside. ';
    const locationBtn = document.createElement('button');
    locationBtn.textContent = 'HOURS & LOCATION';
    locationBtn.classList.add('btn');
    textWrapper2.appendChild(locationTitle);
    textWrapper2.appendChild(locationText);
    textWrapper2.appendChild(locationBtn);
    locationDiv.appendChild(textWrapper2);
    appendImages(locationImg, row2);
    row2.appendChild(locationDiv);

    lowerGrid.appendChild(row1);
    lowerGrid.appendChild(row2);
    main.appendChild(lowerGrid);
    return {
        main,
    };
})();

export default createHome;

import dish1 from './imgs/dish1.jpg';
import dish2 from './imgs/dish2.jpg';
import dish3 from './imgs/dish3.jpg';
import dish4 from './imgs/dish4.jpg';
import dish5 from './imgs/dish5.jpg';
import dish6 from './imgs/dish6.jpg';
import dish7 from './imgs/dish7.jpg';
import dish8 from './imgs/dish8.jpg';

const images = [dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8];

const appendImages = (image, parent, c) => {
    const newImage = new Image();
    newImage.src = image;
    newImage.classList.add('img');
    newImage.classList.add(c);
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

    return {
        main,
    };
})();

export default createHome;

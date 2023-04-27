import Image from './imgs/ourstory.jpg';
import { createHeroImage, createDescription } from './util';

const createOurStory = (() => {
    const main = document.createElement('main');
    main.appendChild(createHeroImage(Image));
    const description = createDescription('Our Story', 'Our restaurant has a rich and inspiring history that spans over three decades. It was founded by a struggling immigrant, Jule, who had a deep love for cooking and especially French cuisine. Coming from humble beginnings, Jule had always dreamed of owning her own restaurant and sharing her culinary creations with the world. Her passion and dedication eventually paid off, and she was able to open her own restaurant in the heart of the city.<br> The neighborhood where our restaurant is located is steeped in history and has a rich cultural heritage. It is a place where artists, writers, and musicians have frequented for decades, seeking inspiration and creativity. Jule was drawn to this area because of its bohemian atmosphere and artistic energy, which she found to be a perfect match for her own creative spirit.<br> Over the years, our restaurant has become a beloved institution in the community, known for its exquisite French cuisine, elegant ambiance, and impeccable service. Jule\'s dedication and hard work have paid off, and she has become an inspiration to many, both in the culinary world and beyond. Today, our restaurant continues to honor Jule\'s legacy, serving up the same delicious French dishes that have been delighting diners for over 30 years.');
    main.appendChild(description);

    return {
        main,
    };
})();

export default createOurStory;

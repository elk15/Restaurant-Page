import Image from './imgs/community.jpg';
import { createHeroImage, createDescription } from './util';

const createCommunity = (() => {
    const main = document.createElement('main');
    main.appendChild(createHeroImage(Image));
    const description = createDescription('Community', 'At our restaurant, we believe in the power of giving back to the community that has supported us throughout the years. We have formed strong partnerships with local charities and organizations, collaborating on initiatives to make a positive impact. One of our proudest achievements is our ongoing commitment to feeding the homeless and refugees in our community. Through regular meal donations and volunteer efforts, we strive to provide nourishment and a sense of hope to those in need. We believe that everyone deserves a warm meal and a welcoming environment, and we are dedicated to creating just that.<br> In addition to our support for the homeless and refugees, we have created a warm and supportive environment for vulnerable individuals within our community. We have established programs to provide job training and opportunities for those facing employment challenges, helping them gain valuable skills and regain their confidence. Furthermore, we frequently host fundraising events and charity dinners, where proceeds are directed towards local causes that focus on education, healthcare, and social welfare. We are proud to be a restaurant that not only serves exquisite cuisine but also serves as a pillar of support and compassion for our community, standing side by side with those who need it most.');
    main.appendChild(description);

    return {
        main,
    };
})();

export default createCommunity;

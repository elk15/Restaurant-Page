import Image from './imgs/hoursAndLocation.jpg';
import { createHeroImage, createDescription } from './util';

const createHoursAndLocation = (() => {
    const main = document.createElement('main');
    main.appendChild(createHeroImage(Image));
    const description = createDescription('Hours and Location', 'Nestled in the heart of the city, our restaurant boasts a captivating location that exudes charm and allure. As you step through our doors, you\'ll be transported to a world of refined elegance and enchantment. The intimate and inviting atmosphere creates the perfect backdrop for an unforgettable dining experience. Soft ambient lighting casts a warm glow over the meticulously curated decor, showcasing a harmonious blend of modern sophistication and timeless beauty. From the carefully chosen furnishings to the tasteful artwork adorning the walls, every detail has been thoughtfully selected to create a captivating ambiance that captivates and delights. Whether you\'re seeking a romantic dinner for two or an elegant gathering with friends, our restaurant provides the ideal setting to indulge in culinary excellence while immersing yourself in an atmosphere of refined luxury.');
    main.appendChild(description);

    const hoursAndAddressDiv = document.createElement('div');
    hoursAndAddressDiv.classList.add('hours-location');
    const hoursDiv = document.createElement('div');
    hoursDiv.innerHTML = 'Open Six Days A Week<br> Sunday Noon - 11PM<br> Monday CLOSED<br> Tuesday & Wednesday 2PM - 11PM<br> Thursday & Friday 2PM - Midnight<br> Saturday Noon - 11PM';
    hoursAndAddressDiv.appendChild(hoursDiv);
    const addressDiv = document.createElement('div');
    addressDiv.innerHTML = 'Char. Trikoupi 245,<br> Kifisia 145 64';
    hoursAndAddressDiv.appendChild(addressDiv);
    main.appendChild(hoursAndAddressDiv);

    const map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.2816518819527!2d23.801349500000004!3d38.08710740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f1adb6d5b17%3A0x4d7c9413447cd01a!2zzqfOsc-BLiDOpM-BzrnOus6_z43PgM63IDI0NSwgzprOt8-GzrnPg865zqwgMTQ1IDY0!5e0!3m2!1sel!2sgr!4v1682752931862!5m2!1sel!2sgr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    map.classList.add('map');
    main.appendChild(map);

    return {
        main,
    };
})();

export default createHoursAndLocation;

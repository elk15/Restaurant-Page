import Image from './imgs/Contact.jpg';
import { createHeroImage, createDescription } from './util';

const createInput = (type, name) => {
    const label = document.createElement('label');
    label.htmlFor = name;
    label.innerHTML = `${name} - <span>Required</span>`;

    const input = type === 'textarea' ? document.createElement(type) : document.createElement('input');
    if (type !== 'textarea') {
        input.type = type;
    }
    input.placeholder = name;
    input.name = name;
    input.id = name;
    input.required = true;

    const div = document.createElement('div');
    div.appendChild(label);
    div.appendChild(input);

    return div;
};

const createContact = (() => {
    const main = document.createElement('main');
    main.appendChild(createHeroImage(Image));
    const description = createDescription('Contact', 'For inquiries about hosting your dream wedding or any other special event at our enchanting venue, please don\'t hesitate to reach out to our dedicated events team. We would be delighted to assist you in creating an unforgettable experience tailored to your needs. To savor an exquisite dining experience or to make a reservation, kindly contact our friendly staff who will be delighted to assist you in securing a table for an unforgettable culinary journey.');
    main.appendChild(description);

    const form = document.createElement('form');
    form.classList.add('contact-form');
    main.appendChild(form);

    form.appendChild(createInput('text', 'Name'));
    form.appendChild(createInput('email', 'Email'));
    form.appendChild(createInput('number', 'Phone Number'));
    form.appendChild(createInput('textarea', 'Your Message'));

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Send';
    form.appendChild(submitBtn);

    return {
        main,
    };
})();

export default createContact;

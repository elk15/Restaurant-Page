import Image from './imgs/menuImg.jpg';
import { createHeroImage, createDescription } from './util';

const createMenuItem = (dish, price, description) => {
    const item = document.createElement('li');
    const title = document.createElement('h4');
    title.textContent = dish;
    const priceSpan = document.createElement('span');
    priceSpan.textContent = `${price}€`;
    title.appendChild(priceSpan);
    item.appendChild(title);
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    item.appendChild(paragraph);

    return item;
};

const createMenuComponent = (title, dishes, prices, descriptions) => {
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');
    const newTitle = document.createElement('h3');
    newTitle.textContent = title;
    menuSection.appendChild(newTitle);
    const menuList = document.createElement('ul');
    for (let i = 0; i < dishes.length; i++) {
        menuList.appendChild(createMenuItem(dishes[i], prices[i], descriptions[i]));
    }
    menuSection.appendChild(menuList);

    return menuSection;
};

const createMenu = (() => {
    const appetizersNames = ['Escargots à la Bourguignonne', 'Pissaladière', 'Quenelles de Brochet', 'Soupe à l\'Oignon Gratinée', 'Coquilles Saint-Jacques'];
    const appetizersPrices = ['18.50', '15.00', '22.00', '16.00', '28.00'];
    const appetizersDescriptions = ['A classic French appetizer, this dish features tender snails cooked in a rich garlic butter sauce. Served with crusty bread for dipping.', 'A delicious vegetarian option, this tart features a flaky pastry base topped with caramelized onions, and olives.', 'A French delicacy, these dumplings are made from ground pike fish and served in a creamy lobster sauce.', 'A classic French soup, this dish features caramelized onions in a rich beef broth, topped with melted cheese and served with crusty bread.', 'A seafood favorite, this dish features tender scallops baked in a rich, creamy sauce and topped with breadcrumbs. Can be made vegan by replacing the scallops with mushrooms.'];

    const saladsNames = ['Salade Niçoise', 'Salade de Chevre Chaud', 'Salade Lyonnaise', 'Salade de Magret de Canard', 'Salade Verte', 'Salade de Celeri-rave'];
    const saladsPrices = ['18.50', '17.00', '14.50', '22.00', '10.00', '16.00'];
    const saladsDescriptions = ['A classic French salad, this dish features mixed greens, boiled potatoes, green beans, tomatoes, olives, and tuna. Can be made vegan by omitting the tuna.', 'A delicious vegetarian option, this salad features warm, creamy goat cheese served on a bed of mixed greens with a honey vinaigrette.', 'As mentioned in the previous answer, this simple yet delicious salad features frisée lettuce, crispy bacon, and a perfectly poached egg. Can be made vegan by omitting the bacon and egg and replacing with roasted vegetables.', 'This salad features tender slices of seared duck breast served on a bed of mixed greens with a raspberry vinaigrette. Can be made vegan by replacing the duck breast with roasted vegetables.', 'A simple yet elegant salad, this dish features mixed greens tossed in a light vinaigrette dressing.', 'This vegan salad features thinly sliced celery root, apples, and walnuts served on a bed of mixed greens with a lemon vinaigrette.'];

    const mainNames = ['Boeuf Bourguignon', 'Coq au Vin', 'Cassoulet', 'Ratatouille', 'Quiche Lorraine', 'Sole Meunière', 'Duck Confit', 'Tournedos Rossini', 'Navarin d\'Agneau', 'Mushroom Bourguignon'];
    const mainPrices = ['36.00', '32.00', '28.00', '26.00', '22.00', '38.00', '34.00', '48.00', '42.00', '28.00'];
    const mainDescriptions = ['A classic French dish, this stew features tender beef slow-cooked in red wine with carrots, onions, and bacon. Served with crusty bread and mashed potatoes.', 'Another classic French dish, this one features chicken cooked in red wine with bacon, mushrooms, and pearl onions. Served with mashed potatoes.', 'This hearty stew features white beans slow-cooked with pork sausage, bacon, and duck confit. Served with crusty bread.', 'A delicious vegetarian option, this dish features eggplant, zucchini, bell peppers, onions, and tomatoes stewed together in a flavorful sauce. Served with crusty bread.', 'A French classic, this quiche features a flaky pastry crust filled with bacon, cheese, and a creamy custard. Served with mixed greens.', 'This seafood dish features tender fillets of sole sautéed in a butter sauce with capers and lemon. Served with roasted potatoes and seasonal vegetables.', 'A French delicacy, this dish features duck leg slowly cooked in its own fat until it becomes tender and flavorful. Served with roasted potatoes and seasonal vegetables.', 'A luxurious dish, this one features a tender beef filet topped with seared foie gras and a rich red wine sauce. Served with roasted potatoes and seasonal vegetables.', 'This hearty stew features tender lamb slow-cooked with carrots, onions, and potatoes in a flavorful broth. Served with crusty bread.', 'A delicious vegan option, this dish features mushrooms slow-cooked in red wine with carrots, onions, and garlic. Served with crusty bread.'];

    const dessertsNames = ['Crème Brûlée', 'Tarte Tatin', 'Profiteroles', 'Sorbet', 'Mousse au Chocolat'];
    const dessertsPrices = ['12.00', '14.00', '16.00', '10.00', '14.00'];
    const dessertsDescriptions = ['A classic French dessert, this custard is topped with a layer of caramelized sugar. Served with fresh berries.', 'A delicious dessert, this tart features caramelized apples baked in a buttery pastry crust. Served with vanilla ice cream.', 'These light and airy cream puffs are filled with vanilla ice cream and topped with warm chocolate sauce.', 'A refreshing vegan option, this sorbet features seasonal fruit flavors such as raspberry or mango. Served with fresh fruit.', 'This rich and decadent dessert features a light and airy chocolate mousse. Served with fresh berries and whipped cream.'];

    const main = document.createElement('main');
    main.appendChild(createHeroImage(Image));
    const description = createDescription('Menus', ' Step into our world of fine French cuisine, where every dish tells a story of passion and artistry. Our menu is a celebration of the rich culinary traditions of France, featuring classic dishes such as Coq au Vin, Sole Meunière, and Crème Brûlée. Our ingredients are sourced from the finest suppliers, and our chefs use only the freshest and most flavorful ingredients to create each dish. Whether you\'re a connoisseur of French cuisine or simply looking for a memorable dining experience, we invite you to join us and indulge in the ultimate culinary journey through France.');
    main.appendChild(description);

    const menusDiv = document.createElement('div');
    menusDiv.classList.add('menus-container');
    main.appendChild(menusDiv);

    const appetizersMenu = createMenuComponent('APPETIZERS', appetizersNames, appetizersPrices, appetizersDescriptions);
    menusDiv.appendChild(appetizersMenu);

    const saladsMenu = createMenuComponent('SALADS', saladsNames, saladsPrices, saladsDescriptions);
    menusDiv.appendChild(saladsMenu);

    const mainMenu = createMenuComponent('MAIN DISHES', mainNames, mainPrices, mainDescriptions);
    menusDiv.appendChild(mainMenu);

    const dessertsMenu = createMenuComponent('DESSERTS', dessertsNames, dessertsPrices, dessertsDescriptions);
    menusDiv.appendChild(dessertsMenu);

    return {
        main,
    };
})();

export default createMenu;

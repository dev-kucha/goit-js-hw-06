// Напиши скрипт, который для каждого элемента массива ingredients:
/*
Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.*/

const ingredientsList = document.querySelector('#ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let items = [];

for (let i = 0; i < ingredients.length; i += 1) {
  let item = document.createElement('li');
  item.textContent = ingredients[i];
  item.classList.add('item');
  items.push(item);
}

ingredientsList.append(...items);

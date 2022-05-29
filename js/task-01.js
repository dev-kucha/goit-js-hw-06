//1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const categories = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${categories.length}`);

//2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

for (const category of categories) {
  let header = category.querySelector('h2').innerHTML;
  let namberElements = category.querySelectorAll('ul li').length;
  console.log(`Category: ${header}`);
  console.log(`Elements: ${namberElements}`);
}

// ! 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categories = document.querySelectorAll(".item");
console.log ("Number of categories:", categories.length);

// ! 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

categories.forEach((item) => {
    const title = item.firstElementChild.textContent;
    const elementsAmount = item.lastElementChild.children.length;
    console.log("Category: ", title);
    console.log("Elements: ", elementsAmount);
});
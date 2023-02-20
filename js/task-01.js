const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
    const categoryTitle = category.firstElementChild.textContent;
    console.log(`Category: ${categoryTitle}`);
    const numberOfElements = category.lastElementChild.children.length;
    console.log(`Elements: ${numberOfElements}`);
};


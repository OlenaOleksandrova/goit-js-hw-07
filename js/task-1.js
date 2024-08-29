const categories = document.querySelectorAll(`#categories .item`);
console.log(`${categories.length}`);


categories.forEach((category) => {
  
    const title = category.querySelector('h2').textContent;
    const itemAllCaunt = category.querySelectorAll(`li`).length;
    console.log(title);
    console.log(itemAllCaunt);
});

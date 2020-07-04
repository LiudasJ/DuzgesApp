const select = document.getElementById('select');
const save = document.getElementById('save');
const food = document.getElementById('food');
const additionFood = document.getElementById('optional-food-order');

save.addEventListener('click', () => {
    console.log(select.value);
})

food.addEventListener('click', () => {
    if (food.checked == true) {
        additionFood.style.display = "block";
    } else {
        additionFood.style.display = "none";
    }
})

const dateStart = document.getElementById('date-start');

dateStart.addEventListener('focusout', () => {
    if (dateStart.value == '') {
        alert('tuscias')
    } else {
        alert(dateStart.value);
    }
})

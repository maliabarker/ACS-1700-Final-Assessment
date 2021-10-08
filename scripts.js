//———————————————————Determining elements————————————————————
const nameInput = document.querySelector('#name-input')

const diameterInput = document.querySelector('#diameter-input')

const toppingInput = document.querySelector('#topping-input')

const pizza = document.querySelector('#pizza')

//————————————————————Adding event listeners————————————————————
nameInput.addEventListener('input', handleInput)
diameterInput.addEventListener('input', handleInput)
toppingInput.addEventListener('input', handleInput)

function handleInput(e) {
    
    const name = nameInput.value
    const diameter = diameterInput.value
    const topping = toppingInput.value
    // console.log(topping)

    // ——————————————Calculating area (square footage)————————————————————————————
    const radius = diameter / 2
    // console.log(radius)
    const pizzaSize = 3.14159 * radius * radius
    // console.log(pizzaSize)

    // ————————————————————Displaying Values————————————————————————————
    document.querySelector('#name-display').innerHTML = name
    document.querySelector('#diameter-display').innerHTML = diameter
    if (topping == 'Cheese') {
        // console.log('beep')
        document.querySelector('#cost-display').innerHTML = `$${(pizzaSize * 0.25).toFixed(2)}`
    } else {
        document.querySelector('#cost-display').innerHTML = `$${(pizzaSize * 0.33).toFixed(2)}`
        // console.log('boop')
    }
    
    // ————————————————————Displaying Pizza————————————————————————————
    pizza.style.width = diameter * 2 + 'px'
    pizza.style.height = diameter * 2 + 'px'
    if (topping == 'Onion') {
        pizza.style.backgroundImage = 'url(images/onions.jpeg)'
    } else if (topping == 'Pepperoni') {
        pizza.style.backgroundImage = 'url(images/peperoni.jpeg)'
    } else if (topping == 'Sausage') {
        pizza.style.backgroundImage = 'url(images/sausage.jpeg)'
    } else if (topping == 'Tomato') {
        pizza.style.backgroundImage = 'url(images/tomatoes.jpeg)'
    } else {
        pizza.style.backgroundImage = 'url(images/cheese.jpeg)'
    }

}
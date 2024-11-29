console.log('12')
class Tovars {


    constructor(type, name, price, img) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.img = img;
    }

    addHTML(_price) {
        let tovars = document.querySelector(".tovars");
        let orders_section = document.createElement("div");
        orders_section.setAttribute("class", `order ${this.type}`);

        orders_section.addEventListener("click", function () {
            localStorage.setItem("price", +_price + +localStorage.getItem("price"))
            console.log(localStorage.getItem("price"))
        })

        let img = document.createElement("img");
        img.setAttribute("src", this.img);

        let name = document.createElement("div");
        let price = document.createElement("div");
        name.innerHTML = this.name;
        price.innerHTML = this.price;

        orders_section.appendChild(img);
        orders_section.appendChild(name);
        orders_section.appendChild(price);
        tovars.appendChild(orders_section);
    }
}
let count = 0
localStorage.setItem("price", 0)
let tovar1 = new Tovars("food", "Potato", "10", "1.jpg").addHTML(10);
let tovar2 = new Tovars("groceries", "Tomato", "15", "2.jpg").addHTML(15);
let tovar3 = new Tovars("pharmacy", "Medicine", "50", "3.jpg").addHTML(50);
let tovar4 = new Tovars("stores", "Shoes", "100", "4.jpg").addHTML(100);
let tovar5 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar6 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar7 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar8 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar9 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar10 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar11 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar12 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar13 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar14 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);
let tovar15 = new Tovars("food", "Bread", "5", "5.jpg").addHTML(5);

function getPrice() {
    let suma = document.getElementById("total-price")
    suma.innerHTML = localStorage.getItem("price")
}
function filterProducts(category) {
    const products = document.querySelectorAll('.order');
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else if (product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
let cart_state = false
let show_state = false
function cart() {
    let cart_section = document.querySelector(".cart-section")
    if (!cart_state) {
        cart_section.style.display = "block"
        cart_state = true
    }
    else {
        cart_section.style.display = "none"
        cart_state = false

    }
}

function show_map() {
    let map = document.getElementById("map_frame")
    if (!show_state) {
        map.style.display = "block"
        show_state = true
    }
    else {
        map.style.display = "none"
        show_state = false

    }
}
filterProducts('all');
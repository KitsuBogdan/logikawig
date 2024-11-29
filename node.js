class Tovars {
    constructor(type, name, price, img) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.img = img;
    }

    addHTML() {
        let tovars = document.querySelector(".tovars");
        let orders_section = document.createElement("div");
        orders_section.setAttribute("class", `order ${this.type}`); 

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


let tovar1 = new Tovars("food", "Potato", "10$", "1.jpg").addHTML();
let tovar2 = new Tovars("groceries", "Tomato", "15$", "2.jpg").addHTML();
let tovar3 = new Tovars("pharmacy", "Medicine", "50$", "3.jpg").addHTML();
let tovar4 = new Tovars("stores", "Shoes", "100$", "4.jpg").addHTML();
let tovar5 = new Tovars("food", "Bread", "5$", "5.jpg").addHTML();

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


filterProducts('all');

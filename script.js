
class Tovars {
    constructor(type, name, price, img) {
        this.type = type
        this.name = name
        this.price = price
        this.img = img
    }

    addHTML() {
        let tovars = document.querySelector(".tovars")
        let HTML = `<div class="orders-section">
                        <div class="order">
                            <img src="glovo.png" alt="">
                            <p>123</p>
                            <p>123</p>
                        </div>
                    </div>`
        let orders_section = document.createElement('div')
        orders_section.setAttribute("class", "order")

        let img = document.createElement('img')
        img.setAttribute('src', this.img)

        let name = document.createElement('div')
        let price = document.createElement('div')
        name.innerHTML = this.name
        price.innerHTML = this.price
        console.log("123")
        orders_section.appendChild(img)
        orders_section.appendChild(name)
        orders_section.appendChild(price)
        tovars.appendChild(orders_section)
    }
}

let tovar1 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar2 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar3 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar4 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar5 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar6 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar7 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar8 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar9 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar0 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar10 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar11 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar12 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar123 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar14 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar15 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
let tovar16 = new Tovars("food", "potato", "10$", "1.jpg").addHTML()
// Регистрация

const registerScreen = document.querySelector("#registerScreen")
const registerForm = document.querySelector("#registerForm")
const registerName = document.querySelector("#registerName")
const registerEmail = document.querySelector("#registerEmail")
const registerPassword = document.querySelector("#registerPassword")
const registerError = document.querySelector("#registerError")
const goToLoginBtn = document.querySelector("#goToLoginBtn")

// Логин

const loginScreen = document.querySelector("#loginScreen")
const loginForm = document.querySelector("#loginForm")
const loginEmail = document.querySelector("#loginEmail")
const loginPassword = document.querySelector("#loginPassword")
const loginError = document.querySelector("#loginError")
const goToRegisterBtn = document.querySelector("#goToRegisterBtn")

// Магазин

const shopScreen = document.querySelector("#shopScreen")
const userInfo = document.querySelector("#userInfo")
const productList = document.querySelector("#productList")
const cartList = document.querySelector("#cartList")
const cartTotal = document.querySelector("#cartTotal")

const siteHeader = document.querySelector("#siteHeader")
const headerUser = document.querySelector("#headerUser")
const headerLogoutBtn = document.querySelector("#headerLogoutBtn")

const loadProductsBtn = document.querySelector("#loadProductsBtn")
const searchInput = document.querySelector("#searchInput")
const productError = document.querySelector("#productError")

// Pokemon

const pokemonInput = document.querySelector("#pokemonInput")
const findPokemonBtn = document.querySelector("#findPokemonBtn")
const pokemonCard = document.querySelector("#pokemonCard")
const pokemonSection = document.querySelector("#pokemonSection")

// Экраны

// Показываем регистрацию
function showRegisterScreen(){

    registerScreen.hidden = false
    loginScreen.hidden = true
    shopScreen.hidden = true
    pokemonSection.hidden = true

    siteHeader.hidden = true
}

// Показываем логин
function showLoginScreen(){

    registerScreen.hidden = true
    loginScreen.hidden = false
    shopScreen.hidden = true
    pokemonSection.hidden = true

    siteHeader.hidden = true
}

// Показываем магазин
function showShopScreen(){

    registerScreen.hidden = true
    loginScreen.hidden = true
    shopScreen.hidden = false
    pokemonSection.hidden = false

    siteHeader.hidden = false
}


// кнопки
// Из регистрации в логин
goToLoginBtn.addEventListener("click", () =>{

    showLoginScreen()

})

// Из логина в регистрацию
goToRegisterBtn.addEventListener("click", () =>{

    showRegisterScreen()

})

// Выход
headerLogoutBtn.addEventListener("click", () =>{

    localStorage.removeItem("isAuth")

    showLoginScreen()

})

// LocalStorage

function saveUser(user){
    localStorage.setItem("user", JSON.stringify(user))
}

function getUser(){

    const user = localStorage.getItem("user")

    if(user === null){
        return null
    }

    return JSON.parse(user)
}

// Регистрация

registerForm.addEventListener("submit", (event) =>{

    event.preventDefault()

    const name = registerName.value.trim()
    const email = registerEmail.value.trim()
    const password = registerPassword.value.trim()

    registerError.textContent = ""

    if(name.length < 2){

        registerError.textContent = "Имя минимум 2 символа"
        registerError.style.color = "red"

        return
    }

    if(!email.includes("@")){

        registerError.textContent = "Email должен содержать @"
        registerError.style.color = "red"

        return
    }

    if(password.length < 6){

        registerError.textContent = "Пароль минимум 6 символов"
        registerError.style.color = "red"

        return
    }

    const user = {
        name,
        email,
        password
    }

    saveUser(user)

    registerForm.reset()

    showLoginScreen()

})

// Логин

loginForm.addEventListener("submit", (event) =>{

    event.preventDefault()

    const email = loginEmail.value.trim()
    const password = loginPassword.value.trim()

    const savedUser = getUser()

    loginError.textContent = ""

    if(savedUser === null){

        loginError.textContent = "Сначала зарегистрируйтесь"

        return
    }

    if(email !== savedUser.email){

        loginError.textContent = "Неверный email"

        return
    }

    if(password !== savedUser.password){

        loginError.textContent = "Неверный пароль"

        return
    }

    localStorage.setItem("isAuth", "true")

    startShop()

})

// Товары

const products = [

    {
        id: 1,
        title: "Ноутбук",
        price: 850000,
        image: "https://static.insales-cdn.com/images/products/1/4179/285814867/cZ27SDCIPTRXGKnx.jpg",
        description: "Мощный ноутбук"
    },

    {
        id: 2,
        title: "Смартфон",
        price: 999000,
        image: "https://object.pscloud.io/cms/cms/Photo/img_0_77_7208_0_1_5gtecv.webp",
        description: "Современный смартфон"
    },

    {
        id: 3,
        title: "Клавиатура",
        price: 25000,
        image: "https://object.pscloud.io/cms/cms/Photo/img_0_88_618_0_1_ZBW0X2_320.webp",
        description: "Игровая клавиатура"
    }

]

// Корзина

let cart = []

function fakeFetchProducts(){

    return new Promise((resolve, reject) =>{

        setTimeout(() =>{

            const success = true

            if(success){
                resolve(products)
            }else{
                reject("Ошибка")
            }

        }, 2000)

    })

}

// Загрузка товаров

async function loadProducts(){

    try{

        productError.textContent = ""

        productList.textContent = "Загрузка товаров..."

        const loadedProducts = await fakeFetchProducts()

        renderProducts(loadedProducts)

    }catch(error){

        productError.textContent = "Ошибка загрузки"

    }

}

// Рендер

function renderProducts(productsArray){

    productList.innerHTML = ""

    productsArray.forEach((product) =>{

        productList.innerHTML += `

        <div class="productCard">

            <img src="${product.image}">

            <h3>${product.title}</h3>

            <p>${product.description}</p>

            <p>${product.price} тг</p>

            <button
                class="addToCartBtn"
                data-id="${product.id}"
            >
                Добавить в корзину
            </button>

        </div>

        `
    })

}

// Кнопка загрузки

loadProductsBtn.addEventListener("click", () =>{
    loadProducts()
})

// Поиск

searchInput.addEventListener("input", () =>{

    const value = searchInput.value.toLowerCase()

    const filteredProducts = products.filter((product) =>{

        return product.title
            .toLowerCase()
            .includes(value)

    })

    renderProducts(filteredProducts)

})

// Магазин

function startShop(){

    const savedUser = getUser()

    userInfo.textContent = `Пользователь: ${savedUser.name}`

    headerUser.textContent = savedUser.name

    showShopScreen()

    loadCartFromStorage()

    renderCart()

}

// Корзина

function saveCartToStorage(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    )

}

function loadCartFromStorage(){

    const savedCart = localStorage.getItem("cart")

    if(savedCart === null){

        cart = []

        return
    }

    cart = JSON.parse(savedCart)

}

// Добавление в корзину

productList.addEventListener("click", (event) =>{

    if(event.target.classList.contains("addToCartBtn")){

        const productId = Number(event.target.dataset.id)

        const product = products.find((item) =>{
            return item.id === productId
        })

        cart.push(product)

        saveCartToStorage()

        renderCart()

    }

})

// Рендер корзины

function renderCart(){

    cartList.innerHTML = ""

    if(cart.length === 0){

        cartList.textContent = "Корзина пустая"

        cartTotal.textContent = "Итого: 0 тг"

        return
    }

    cart.forEach((product, index) =>{

        cartList.innerHTML += `

        <div>

            <span>
                ${product.title} - ${product.price} тг
            </span>

            <button
                class="removeFromCartBtn"
                data-index="${index}"
            >
                Удалить
            </button>

        </div>

        `
    })

    const total = cart.reduce((sum, product) =>{

        return sum + product.price

    }, 0)

    cartTotal.textContent = `Итого: ${total} тг`

}

// Удаление

cartList.addEventListener("click", (event) =>{

    if(event.target.classList.contains("removeFromCartBtn")){

        const index = Number(event.target.dataset.index)

        cart.splice(index, 1)

        saveCartToStorage()

        renderCart()

    }

})

// Выход

headerLogoutBtn.addEventListener("click", () =>{

    localStorage.removeItem("isAuth")

    showLoginScreen()

})

// Проверка авторизации

function checkAuth(){

    const isAuth = localStorage.getItem("isAuth")

    if(isAuth === "true"){

        startShop()

    }else{

        showRegisterScreen()

    }

}

checkAuth()

// Pokemon Finder

findPokemonBtn.addEventListener("click", async () =>{

    const pokemonName = pokemonInput.value
        .toLowerCase()
        .trim()

    if(pokemonName === ""){
        return
    }

    pokemonCard.innerHTML = "Загрузка..."

    try{

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        )

        if(!response.ok){
            throw new Error()
        }

        const pokemon = await response.json()

        const types = pokemon.types.map((type) =>{
            return type.type.name
        })

        pokemonCard.innerHTML = `

        <div class="pokemonBox">

            <h2>${pokemon.name}</h2>

            <img
                src="${pokemon.sprites.front_default}"
            >

            <p>Height: ${pokemon.height}</p>

            <p>Weight: ${pokemon.weight}</p>

            <p>Types: ${types.join(", ")}</p>

        </div>

        `

    }catch(error){

        pokemonCard.innerHTML = `
            <p style="color:red;">
                Покемон не найден
            </p>
        `
    }

})
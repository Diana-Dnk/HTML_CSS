const API_URL = "https://dummyjson.com"

const loginScreen = document.getElementById("loginScreen")
const profileScreen = document.getElementById("profileScreen")
const productsScreen = document.getElementById("productsScreen")
const detailScreen = document.getElementById("detailScreen")
const productsBlock = document.getElementById("productsBlock")
const productDetailBlock = document.getElementById("productDetailBlock")
const goToProductsBtn = document.getElementById("goToProductsBtn")
const backToProfileBtn = document.getElementById("backtoProfileBtn")
const backToProductsBtn = document.getElementById("backToProductsBtn")
// добавить еще скрины для продуктов и одного продукта

// Login переменные
const loginForm = document.getElementById("loginForm")
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
const loginMessage = document.getElementById("loginMessage")


// Profile переменные
const profileBlock = document.getElementById("profileBlock")
const logoutBtn = document.getElementById("logoutBtn")

function showScreen(screenName){
    loginScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    productsScreen.classList.add("hidden")
    detailScreen.classList.add("hidden")
    if(screenName === "login"){
        loginScreen.classList.remove("hidden")
        logoutBtn.classList.add("hidden")
    }

    if(screenName === "profile"){
        profileScreen.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")
    }

    if(screenName === "products"){
        productsScreen.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")
    }

    if(screenName === "detail"){
        detailScreen.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")
    }
}

loginForm.addEventListener("submit", async function (event){
    event.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if(username === "" || password === ""){
        loginMessage.textContent = "Введите username и password"
        return
    }

    await loginUser(username, password)
})

async function loginUser(username,password){
    try{
        loginMessage.textContent = "Выполняется вход..."

        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresMins: 30
            })
        })
        if(!response.ok){
            throw new Error("Неверный логин или пароль")
        }
        const data = await response.json()

        localStorage.setItem("accessToken", data.accessToken)
        loginMessage.textContent = ""

      await loadProfile()
    }catch(error){
        loginMessage.textContent = error.message
    }
}

async function loadProfile(){
    try{
        profileBlock.innerHTML = "<p>Загрузка профиля...</p>"

        const token = localStorage.getItem("accessToken")

        if(!token){
            showScreen("login")
            return
        }

        const response = await fetch(`${API_URL}/auth/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error("Не удалось получить профиль")
        }
        const user = await response.json()

        renderProfile(user)
        showScreen("profile")
    }catch(error){
        localStorage.removeItem("accessToken")
        loginMessage.textContent = "Сессия истекла. Войдите снова."
        showScreen("login")
    }
}

function renderProfile(user){
    profileBlock.innerHTML = `
    <img src = "${user.image}" alt = "${user.firstName}">

    <div>
        <h3>${user.firstName}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Birthday: ${user.birthDate}</p>
        <p>Gender: ${user.gender}</p>
    </div>
    `
}

window.addEventListener("DOMContentLoaded", function(){
    const token = localStorage.getItem("accessToken")

    if(token){
        loadProfile()
    }
    else{
        showScreen("login")
    }
})


logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("accessToken")

    usernameInput.value = ""
    passwordInput.value = ""
    profileBlock.innerHTML = ""

    showScreen("login")
})


async function loadProducts(){
    try{
        productsBlock.innerHTML = "<p>Загрузка товаров...</p>"

        const response = await fetch(`${API_URL}/products`)

        if(!response.ok){
            throw new Error()
        }

        const data = await response.json()

        renderProducts(data.products)
        showScreen("products")

    }catch{
        productsBlock.innerHTML = "<p>Не удалось загрузить товары</p>"
    }
}

function renderProducts(products){
    productsBlock.innerHTML = ""

    products.forEach(product => {
        const card = document.createElement("div")
        card.className = "product-card"

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price} $</strong></p>
            <p>⭐${product.rating}</p>
            <button data-id="${product.id}">Подробнее</button>
        `

        const btn = card.querySelector("button")

        btn.addEventListener("click", () => {
            loadProductDetail(product.id)
        })

        productsBlock.appendChild(card)
    })
}

async function loadProductDetail(id){
    try{
        productDetailBlock.innerHTML = "<p>Загрузка товара...</p>"

        const response = await fetch(`${API_URL}/products/${id}`)

        if(!response.ok){
            throw new Error()
        }

        const product = await response.json()

        renderProductDetail(product)
        showScreen("detail")

    }catch{
        productDetailBlock.innerHTML = "<p>Не удалось загрузить товар</p>"
    }
}

function renderProductDetail(product){
    productDetailBlock.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>

        <p><strong>Категория:</strong> ${product.category}</p>
        <p><strong>Бренд:</strong> ${product.brand}</p>
        <p><strong>Цена:</strong> ${product.price} $</p>
        <p><strong>Скидка:</strong> ${product.discountPercentage}%</p>
        <p><strong>Рейтинг:</strong> ⭐ ${product.rating}</p>
        <p><strong>В наличии:</strong> ${product.stock}</p>
    `
}

backToProfileBtn.addEventListener("click", function(){
    showScreen("profile")
})

goToProductsBtn.addEventListener("click", function(){
    const token = localStorage.getItem("accessToken")

    if(!token){
        showScreen("login")
        return
    }

    loadProducts()
})

backToProductsBtn.addEventListener("click", function(){
    showScreen("products")
})


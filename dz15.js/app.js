// 1 задание
// const title = document.getElementById("title")
// console.log("h1:", title)

// const texts = document.getElementsByClassName("text")
// console.log("По классу:", texts)

// const paragraphs = document.getElementsByTagName("p")
// console.log("По тегу:", paragraphs)

// const firstButton = document.querySelector("button")
// console.log("Первая кнопка:", firstButton)

// const allParagraphs = document.querySelectorAll("p")
// console.log("querySelectorAll:", allParagraphs)

// 2 задание
// const title = document.getElementById("title")
// const btn = document.getElementById("changeBtn")
// const div = document.getElementById("content")

//btn.addEventListener("click", () => {
//     title.textContent = "Новый текст"
//})

// div.innerHTML = "<b>Добавили текст</b>"
// div.innerText = "Добавили текст1"
// div.textContent = "Добавили текст2"

// 3 задание
// const img = document.getElementById("image")
// const link = document.getElementById("link")
// const btn = document.getElementById("changeBtn")

// btn.addEventListener("click", () => {
//     img.src = "https://img.freepik.com/free-photo/pine-trees-rock-formation-near-mountains-gray-clouds_395237-198.jpg?semt=ais_hybrid&w=740&q=80"
//     img.alt = "Новая картинка"
//     link.href = "https://google.com"
//     link.textContent = "Перейти в Google"
//})

// 4 задание
// const title = document.getElementById("title")
// const btn = document.getElementById("paintBtn")
// const texts = document.querySelectorAll(".text")
// btn.addEventListener("click", () => {
//     title.style.color = "red"
//     title.style.fontSize = "40px"
//     title.style.backgroundColor = "yellow"
//     texts.forEach(item => {
//     item.style.color = "blue";
//     item.style.fontSize = "20px";
//     });
// })

// 5 задание
// const message = document.getElementById("message")
// const btn = document.getElementById("btn")
// btn.addEventListener("click", () => {
//     message.classList.toggle("dark")
//     message.classList.add("dark")
//     message.classList.remove("dark")
//     console.log(message.classList.contains("dark"))
// })

// 6 задание
// let count = 0
// const countEl = document.getElementById("count")
// const plusBtn = document.getElementById("plus")
// const minusBtn = document.getElementById("minus")
// plusBtn.addEventListener("click", () => {
//     count++
//     countEl.textContent = count
// });
// minusBtn.addEventListener("click", () => {
//     count--
//     countEl.textContent = count
// })

// 7 задание
// const input = document.getElementById("password")
// const btn = document.getElementById("toggleBtn")
// btn.addEventListener("click", () => {
//     if (input.type === "password") {
//     input.type = "text"
//     btn.textContent = "Скрыть"
//     } 
//     else {
//     input.type = "password"
//     btn.textContent = "Показать"
//     }
// })

// 8 задание
// const box = document.getElementById("box")
// const btn = document.getElementById("btn")
// box.addEventListener("mouseover", () => {
//     box.style.background = "orange"
// })
// box.addEventListener("mouseout", () => {
//     box.style.background = "lightgray"
// })
// btn.addEventListener("click", () => {
//     alert("Кнопка нажата")
// })

// 9 задание
// const input = document.getElementById("input")
// const output = document.getElementById("text")
// input.addEventListener("input", () => {
//     output.textContent = "Вы ввели: " + input.value
// })

// 10 задание
// const input = document.getElementById("nameInput")
// const btn = document.getElementById("sendBtn")
// const result = document.getElementById("result")
// btn.addEventListener("click", () => {
//     let name = input.value.trim();
//     if (name === "") {
//         result.textContent = "Введите имя"
//         result.style.color = "red"
//     } 
//     else {
//         result.textContent = "Привет, " + name + "!"
//     }
// })
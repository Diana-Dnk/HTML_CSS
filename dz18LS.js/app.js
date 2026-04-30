// const input = document.getElementById("colorInput")
// const button = document.getElementById("saveBtn")
// const text = document.getElementById("resultText")

// const savedColor = localStorage.getItem("favoriteColor")

// if (savedColor) {
//     text.textContent = `Ваш любимый цвет: ${savedColor}`
// }


// button.addEventListener("click", () => {
//     const color = input.value.trim()

//     if (color !== "") {
//         localStorage.setItem("favoriteColor", color)
//         text.textContent = `Ваш любимый цвет: ${color}`
//         input.value = ""
//     }
// })



// const text = document.getElementById("visitText")
// let visits = localStorage.getItem("visitCount")

// if (visits === null) {
//     visits = 1;
// } else {
//     visits = Number(visits) + 1
// }

// localStorage.setItem("visitCount", visits)

// text.textContent = `Вы открыли страницу ${visits} раз`


// const textarea = document.getElementById("note")
// const btn = document.getElementById("saveBtn")

// const savedNote = localStorage.getItem("myNote")
// if (savedNote !== null) {
//     textarea.value = savedNote
// }

// btn.addEventListener("click", () => {
//     const text = textarea.value
//     localStorage.setItem("myNote", text)
// })

// const block = document.getElementById("welcomeBlock")
// const btn = document.getElementById("hideBtn")

// const isHidden = localStorage.getItem("welcomeHidden")

// if (isHidden === "true") {
//     block.style.display = "none";
// }

// btn.addEventListener("click", () => {
//     block.style.display = "none"
//     localStorage.setItem("welcomeHidden", "true")
// })


// const input = document.getElementById("itemInput")
// const button = document.getElementById("addBtn")
// const list = document.getElementById("list")

// let items = JSON.parse(localStorage.getItem("products")) || []

// items.forEach(item => {
//     const li = document.createElement("li")
//     li.textContent = item
//     list.appendChild(li)
// });

// button.addEventListener("click", () => {
//     const value = input.value.trim()

//     if (value !== "") {
//         items.push(value)

//         localStorage.setItem("products", JSON.stringify(items))

//         const li = document.createElement("li")
//         li.textContent = value
//         list.appendChild(li)

//         input.value = ""
//     }
// })
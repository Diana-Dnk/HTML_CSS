// const form = document.getElementById("form")
// const input = document.getElementById("nameInput")
// const result = document.getElementById("result")
// const error = document.getElementById("error")

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     let name = input.value.trim()
//     result.textContent = ""
//     error.textContent = ""
//     if (name === "") {
//         error.textContent = "Введите имя"
//     } 
//     else if (name.length < 2) {
//         error.textContent = "Имя слишком короткое"
//     } 
//     else {
//         result.textContent = "Здравствуйте, " + name + "!"
//         input.value = ""
//     }
// })







const form = document.getElementById("form")
const comment = document.getElementById("comment")
const result = document.getElementById("result")
const error = document.getElementById("error")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let text = comment.value.trim();
    result.textContent = ""
    error.textContent = ""
    
    if (text === "") {
        error.textContent = "Комментарий не может быть пустым"
    }
    else if (text.length < 5) {
        error.textContent = "Комментарий слишком короткий"
    }
    else if (text.length > 50) {
        error.textContent = "Комментарий слишком длинный"
    }
    else {
        result.textContent = "Комментарий: " + text
        comment.value = ""; 
    }
})
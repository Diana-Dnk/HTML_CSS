// const form = document.getElementById("taskForm")

// form.addEventListener("submit",()=>{
//     alert("Форма отправлена")
// })

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("Форма отправлена без перезагрузки")
// })

// document.addEventListener("keydown",(event)=>{
//     console.log(event.key)
// })


// const form = document.getElementById("taskForm")
// const input = document.getElementById("taskInput")
// const result = document.getElementById("result")

// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     const text = input.value.trim()
//     if(text==""){
//         alert("Введите задачу")
//         return
//     }
//     result.textContent = "Вы ввели:" + text 
// })


// const form = document.getElementById("taskForm")
// const input = document.getElementById("taskInput")
// const result = document.getElementById("result")
// const success = document.getElementById("success")
// const error = document.getElementById("error")

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const text = input.value.trim()
//     error.textContent = ""
//     success.textContent = ""

//     if(text === ""){
//         error.textContent = "Поле не может быть пустым"
//         error.style.color = "red"
//         return
//     }
//     if(text.length < 3){
//         error.textContent = "Задача должна содержать не менее 3 символов"
//         error.style.color = "red"

//         return
//     }
//     if(text.length > 20){
//         error.textContent = "Задача не должна превышать 20 символов"
//         error.style.color = "red"
//         return
//     }
//     success.textContent = "Задача добавлена: " + text
//     success.style.color = "green"
//     input.value = ""
// })






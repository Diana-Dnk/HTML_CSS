// const title = document.getElementById("title"); 
// const texts = document.getElementsByClassName("text");
// const btn = document.getElementById("btn")
// const nameInput = document.getElementById("nameInput")
// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const registerForm = document.getElementById("registerForm")
// const para = document.getElementsByTagName("p");

// const title2 = document.querySelector("#title");
// const text2 = document.querySelector(".text");
// const para2 = document.querySelector("p");

// const texts3 = document.querySelectorAll("#text");

// title.textContent = "Новый Заголовок";
// // title.innerHTML = "<span>Новый текст со span</span>";

// title.style.color = "red";
// title.style.fontSize = "100px";


// const newPara = document.createElement("p");
// newPara.textContent = "Новый параграф, добавленный через JavaScript";
// document.body.appendChild(newPara);
// newPara.remove()

// btn.addEventListener("click",()=>{
//     title.textContent = "текст изменился"
// })


// title.classList.toggle("active")

// btn.addEventListener("click",()=>{
//     console.log("Кнопка была нажата")
// })

// btn.addEventListener("click",(event)=>{
//     console.log("event")
// })

// btn.addEventListener("click",function(event){
//     console.log("Тип события", event.type)
//     console.log("Тип события", event.target)
// })


// nameInput.addEventListener("input",function(event){
//     console.log(event.target.value)
// })

// registerForm.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     if(username.value.trim() == ""){
//         alert("Имя не заполнено")
//     }
//     if(email.value.trim() ==""){
//         alert("Почта не заполнена")
//     }
//     if(password.value.trim() ==""){
//         alert("пароль не заполнен")
//     }
// })


// новая тема

const taskList = document.getElementById("taskList")

taskList.addEventListener("click",()=>{
    if(event.target.classList.contains("delete-btn")){
        event.target.parentElement.remove()
    }
})


// const title = document.getElementById("title") -> обращение к DOM эдементу
// console.log(title)

// console.log(document)
// console.log(document.body)
// console.log(document.title)

// 1)getElementById -> получение одного элемента через айди


// 2)getElementsByClassName -> возращает коллекцию элементов
// const texts = document.getElementsByClassName("text")
// console.log(texts)


// 3)getElementsByTagName -> возращает коллекцию элементов по тегу
// const paras = document.getElementsByTagName("p")
// console.log(paras)

// 4) querySelector -> универсальный метод который возращает первый элемент по CSS селектору
// const sub = document.querySelector(".subtitle")
// console.log(sub)

// 5) querySelectorAll
// const allTexts = document.querySelectorAll(".text")
// console.log(allTexts)


// const title = document.getElementById("title")
// title.textContent = "Новый текст "

// const title=document.getElementById("title")
// title.innerHTML = "<div><b>ЭТО ИННЕР ХТМЛ</b></div>"

// const photo = document.getElementById("photo")
// const link = document.getElementById("link")

// console.log(photo.getAttribute("src"))
// photo.setAttribute("src","https://images.samsung.com/is/image/samsung/assets/ru/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$")
// photo.setAttribute("alt","Samsung")

// console.log(link.getAttribute("href"))
// link.setAttribute("href","https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwid0Ljwg-GTAxXEOwYAHR5yJxkYACICCAEQABoCd3M&co=1&ase=2&gclid=CjwKCAjwnN3OBhA8EiwAfpTYetUpYR3tmovgiABTTYkzStPtAlhjYY84np2dskRXWsTyICmiIMrw1RoCzfgQAvD_BwE&cid=CAAS0wHkaN8KFuiK_HkAcJLFrxfOIbtLhtnHgRmo358VT8WO8c237UcidEBMR9yi0PU05ZemDE5RGbKraAlbW8AcbWeb18AhQCjF4cKIM-H8GW91mQM8oMud3sftO89P_HqVANpgxqENr8NvNQdlEiMITzDrZWe8vY8lqWKJlW_NPNeYe90TT_dS9eIH0ZGuXtVG39HVzigRGiXc2AxMglXatC-l3YgVc9HfsqntX7JVAnewrzXZJiVMfQYAC3zgDX_c6Q_UFzq7KC1MSsGZ0Q_ctCqkHLJz&cce=2&category=acrcp_v1_32&sig=AOD64_03hWyVSYIxWcO7_dKAcZJH3mTKPg&q&nis=4&adurl=https://www.samsung.com/kz_ru/smartphones/galaxy-s26/buy/?cid%3Dkz_pd_search_google_f1h26_sustain_miracle_kwd-brand_imdep-product-s26_conversionkwd-102115458%26gad_source%3D1%26gad_campaignid%3D23600347410%26gbraid%3D0AAAAAo6lDvD0gcJO13MVXJr_bg8VK2Ry5%26gclid%3DCjwKCAjwnN3OBhA8EiwAfpTYetUpYR3tmovgiABTTYkzStPtAlhjYY84np2dskRXWsTyICmiIMrw1RoCzfgQAvD_BwE&ved=2ahUKEwie2rHwg-GTAxWmSPEDHYSnB18Q0Qx6BAgVEAE")
// link.textContent = "samsung"

// const text = document.getElementById("title")
// text.style.color = "red"
// text.style.fontSize = "5px"
// text.style.backgroundColor = "yellow"
// text.style.width
// text.style.height

// const hero = document.querySelector(".subtitle")
// hero.style.color = "blue"

// const p = document.querySelectorAll(".text")
// p.forEach(item => {
//     item.style.color = "yellow"
// })


// const message = document.getElementById("message")
// const btn = document.getElementById("btn")

// btn.addEventListener("click",() => {
//     message.classList.add("active")
// })
 
// const title = document.getElementById("title")
// const chanBtn = document.getElementById("btn")

// chanBtn.addEventListener("click",()=>{
//     title.textContent = "Новый текст"
// })

// const countEl = document.getElementById("count")
// const plusBtn = document.getElementById("plus")
// const minusBtn = document.getElementById("minus")

// let count = 0 
// plusBtn.addEventListener("click",()=>{
//     count++
//     countEl.textContent=count
// })

// minusBtn.addEventListener("click",()=>{
//     count--
//     countEl.textContent=count
// })


// const password = document.getElementById("password")
// const toggle = document.getElementById("togglePass")

// toggle.addEventListener("click",()=>{
//     if(password.type=="password"){
//         password.type="text"
//         toggle.textContent="Скрыть"
//     }
//     else{
//         password.type="password"
//         toggle.textContent="Показать"
//     }
// })

// const red = document.getElementById("red")
// const green = document.getElementById("green")
// const card = document.getElementById("card")
// red.addEventListener("click",()=>{
//     card.style.backgroundColor = "red"
// })
// green.addEventListener("click",()=>{
//     card.style.backgroundColor = "green"
// })
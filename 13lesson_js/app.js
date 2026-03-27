// function sayHello(){
//     console.log("hello")
// }

// sayHello()
// sayHello()
// sayHello()

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// greet("Alex")
// greet("John")
// greet("Edward")


// function sum(a,b){
//     return(a+b)
// }

// let numbers1=sum(1,1)
// console.log(sum(4,5))
// console.log(sum(1,3))
// console.log(sum(3,3))

// console.log(numbers1)


// function multiply(a,b){
//     return a*b
// }
// console.log(multiply(4,5))
// console.log(multiply(7,8))

// function checkAge(age){
//     if(age>=18){
//         console.log("Доступ разрещен")
//     }
//     else{
//         console.log("Доступ запрещен")
//     }
// }

// checkAge(20)
// checkAge(15)

// function shout(word){
//     console.log(word.toLowerCase())
// }
// shout("HELLO")
// shout("javascript")

// function getDiscount(price){
//     return price*0.9
// }
// let newPrice=getDiscount(1000);
// console.log("Цена со скидкой" + newPrice)



// function getUpper(num){
//     if(num<5){
//         console.log("твое число больше 5")
//     }
//     else{
//         return
//     }
// }

// getUpper(6)
// getUpper(2)


// function num (a){
//     return a*2
// }
// console.log(num(5))

// function num(a){
//     return a*a
// }
// console.log(num(4))

// function sum(a,b){
//     return a+b
// }
// console.log(sum(4,4))

// function min(a,b){
//     return a-b
// }
// console.log(min(5,2))

// function a(num){
//     if(num%2===0){
//         console.log("Четное")
//     }
//     else{
//         console.log("Нечетное")
//     }
// }
// a(5)
// a(4)


// function square(num){
//     return num*num
// }

// const square2 = (num) =>{
//     return num*num
// }

// const square3 = (num) => num*num


// const add = (a,b) => {
//     return a+b
// }
// console.log(add(1,2))

// const add2 = (a,b) => a+b
// console.log(add2(2,2))

// const isEven = num => num%2===0
// console.log(isEven(6))
// console.log(isEven(9))

// const isAdult = age => age>=18
// console.log(isAdult(15))
// console.log(isAdult(30))

// const getLenght = text => text.length
// console.log(getLenght("Java"))

// const getDiscount = price =>price*0.7
// console.log(getDiscount(5000))


// const toUpper = text => text.toUpperCase()
// console.log(toUpper("hello"))

// const applyDiscount = price => price*0.9
// console.log(applyDiscount(1000))

// const getMax = (a,b) => {
//     if(a>b){
//         return a
//     }
//     else{
//         return b
//     }

// }
// console.log(getMax(2,4))

// const getAge = age =>{
//     if(age>=18){
//         return "Доступ разрещен"
//     }
//     else{
//         return "Доступ запрещен"
//     }
// }
// console.log(getAge(14))
// console.log(getAge(20))

// const getNum = num =>{
//     if(num%2===0){
//         return "Четное"
//     }
//     else{
//         return "Нечетеное"
//     }
// }
// console.log(getNum(2))
// console.log(getNum(9))

// let numbers = [10,20,30,40,50,60]

// numbers.push(70)
// numbers.pop()
// numbers.unshift(0)
// numbers.shift()
// console.log(numbers.includes(50))
// console.log(numbers.includes(90))
// console.log(numbers.indexOf(60))
// console.log(numbers.slice(1,3))

// for(let i=0;i<numbers.length;i++){
//     console.log(i,numbers[i])
// }


// let words=["я","учу","JS"]
// let a = words.join(" ")
// console.log(a)


// map -> создать новый массив
// let nums = [1,2,3,4]
// let doubled = nums.map(num => num*2)
// console.log(doubled)

// filter -> оставть только подходящие элементы 
// let nums = [1,2,3,4,5,6,7,8]
// let evenNums=[]
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2===0){
//         evenNums.push(nums[i])
//     }
// }
// console.log(evenNums)

// let nums = [1,2,3,4,5,6,7,8]
// let evenNums=nums.filter(num => num%2===0)
// console.log(evenNums)


// let nums = [1,2,3,4,5,6,7,8]
// let result = nums.find(num => num>4)
// console.log(result)

// let fruits=["🍓","🍐","🥑"]
// fruits.forEach(fruit => {
//     console.log("Фрукт:",fruit)
// })
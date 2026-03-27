// let colors = ["red","blue"]
// colors.push("green")
// console.log(colors)

// let cart = ["milk","bread"]
// cart.push("eggs")
// cart.pop()
// cart.unshift("carrot")
// cart.shift()
// console.log(cart.indexOf("milk"))
// console.log(cart.includes("milk"))
// console.log(cart)

// let words = ["hello","world"]
// console.log(words.join("-"))


// let nums = [10,20,30,40,50,60]
// let part = nums.slice(1,4)
// console.log(part)
// console.log(nums)

// let fruits = ["apple","banana","orange"]
// fruits.splice(1,1,"kiwi")
// console.log(fruits)

// let fruits = ["apple","banana","orange"]
// fruits.splice(0,2,1,"grape")
// console.log(fruits)

// let arr1 = [1,2]
// let arr2 = [3,4]
// let result = arr1.concat(arr2)
// console.log(result)

// let nums = [1,2,3]
// nums.reverse()
// console.log(nums)

// let fruits = ["banana","apple","orange"]
// fruits.sort()
// console.log(fruits)

// let nums = [100,34,2,4,6,35]
// nums.sort()
// console.log(nums)  не работает 

// let nums=[2345,346,3456,7,245,45]
// nums.sort((a,b)=>a-b)
// console.log(nums)

// методы перебора массива 

// let nums = [1,2,3]
// nums.forEach(num => {
//     console.log(num)
// })

//map 

// let nums = [1,2,3,4,5]
// let doubled = nums.map (num => num*2)
// console.log(doubled)

// let words = ["Hello","JS","cat"]
// let legths = words.map(word => word.length)
// console.log(legths)


// let names = ["ali","aida","nurlan"]
// let upperNames = names.map(name =>name.toUpperCase())
// console.log(upperNames)


// let students=[
//     {name: "Ali", age:17},
//     {name: "Aruzhan", age:18},
//     {name: "Maksat", age:16}
// ]
// let studentNames = students.map(student=>student.name)
// console.log(studentNames)


// let products = [
//     {title: "Phone", price: 350000},
//     {title: "Laptop", price: 550000},
//     {title: "Mouse", price: 20000},
// ]
// console.log(products)

// let cards = products.map(product => {
//     return `${product.title} - ${product.price}тг`
// })
// console.log(cards)

// let nums = [1,2,3,4,5,6,7,8,9,10]
// let evenNumbers = nums.filter(num => num%2===0)
// console.log(nums)
// console.log(evenNumbers)

// let prices = [1000,500,3000,2000,4000]
// let expensive = prices.filter(price => price >2000)
// console.log(expensive)

// let students = [
//     {name: "Ali" , score:83},
//     {name: "Di" , score:92},
//     {name: "Aruzhan" , score:67},
//     {name: "Maksat" , score:100},
//     {name: "Sanzhar" , score:89},
// ]
// let excellentStudents = students.filter(student => student.score>=90)
// console.log(excellentStudents)

// let students = [
//     {name: "Ali" , score:83, isActive: true},
//     {name: "Di" , score:92, isActive: false},
//     {name: "Aruzhan" , score:67, isActive: true},
//     {name: "Maksat" , score:100, isActive: true},
//     {name: "Sanzhar" , score:89, isActive: false},
// ]
// let activeStudents = students.filter(student => student.isActive)
// console.log(activeStudents)

// let nums = [5,10,15,25,35]
// let found = nums.find(num => num>10)
// console.log(found)

// let users =[
//     {id:1, name:"Ali"},
//     {id:2, name:"Dana"},
//     {id:3, name:"Aiym"},
// ]
// let user = users.find(u => u.id===2)
// console.log(user)

// findIndex -> возращает индекс элемента
// IndexOf -> возращает индекс элемента

// let nums = [1,3,5,8]
// let hasEven = nums.some(num => num%2===0)
// console.log(hasEven)

// let prices = [2000,5000,800,10000]
// let cheapPrice = prices.some(price => price<1000)
// console.log(cheapPrice)

// let nums = [2,4,6,8,10]
// let allEven = nums.every(num => num % 2 ===0)
// console.log(allEven)

// let nums = [10,20,30,40]
// let sum = nums.reduce((acc,num) => {
//     return acc+num
// },0)
// console.log(sum)

// let cart = [
//     {title: "Phone", price: 350000},
//     {title: "Keyboard", price: 30000},
//     {title: "Mouse", price: 15000},
// ]
// let total = cart.reduce((acc,item) =>{
//     return acc+item.price
// },0)
// console.log(total)






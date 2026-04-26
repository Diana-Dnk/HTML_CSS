// 1.	Дан массив чисел. Получить новый массив, где каждое число умножено на 3. 
// let nums = [10,20,30,40,50,60]
// let doubled = nums.map(num => num * 3)
// console.log(doubled)

// 2.	Оставить только числа больше 10. 
// let nums = [1,2,3,4,555,10,20,8,40,9,60]
// let evenNumbers = nums.filter(num => num >=10)
// console.log(evenNumbers)

// 3.	Найти первое число, которое делится на 5.
// let nums = [1,2,3,4,555,10,20,8,40,9,60]
// let found = nums.find(num => num %5===0)
// console.log(found)

// 4.	Проверить, есть ли хотя бы одно число меньше нуля. 
// let nums = [1,2,3,4,555,10,-7,20,8,40,9,60]
// let found = nums.find(num => num<0)
// console.log(found)

// 5.	Проверить, все ли числа четные. 
// let nums = [1,2,3,-4,-555,10,-7,20,8,40,9,60,-3,542]
// let isAllEven = nums.every(num => num % 2 === 0)
// console.log(isAllEven)

// 6.	Посчитать сумму всех чисел. 
// let nums = [1,2,3,-4,-555,10,-7,20,8,40,9,60,-3,542]
// let sum = nums.reduce((acc, num) => acc + num, 0)
// console.log(sum)

// 7. Дан массив слов. Получить новый массив в верхнем регистре
// let words = ["apple", "banana", "orange", "strawberry", "kiwi"]
// let upperWords = words.map(word => word.toUpperCase())
// console.log(upperWords)

// 8. Оставить только слова длиннее 5 символов. 
// let words = ["apple", "banana", "orange", "strawberry", "kiwi"]
// let longWords = words.filter(word => word.length > 5)
// console.log(longWords)

// 9. Найти первое слово, длина которого больше 7.
// let words = ["apple", "banana", "orange", "strawberry", "kiwi"]
// let firstLongWord = words.find(word => word.length > 7)
// console.log(firstLongWord)

// 10. Получить массив имен пользователей. 
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let names = users.map(user => user.name)
// console.log(names)

// 11.Оставить только активных пользователей.
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let activeUsers = users.filter(user => user.isActive)
// console.log(activeUsers)

// 12. Оставить только пользователей старше 18 лет. 
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let adults = users.filter(user => user.age > 18)
// console.log(adults)

// 13. Найти первого неактивного пользователя
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let firstInactive = users.find(user => !user.isActive)
// console.log(firstInactive)

// 14. Проверить, есть ли пользователь младше 16 лет. 
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let hasUnder16 = users.some(user => user.age < 16)
// console.log(hasUnder16)

// 15. Проверить, все ли пользователи активны. 
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let allActive = users.every(user => user.isActive)
// console.log(allActive)

// 16. Посчитать сумму возрастов всех пользователей.
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ]
// let totalAge = users.reduce((sum, user) => sum + user.age, 0)
// console.log(totalAge)

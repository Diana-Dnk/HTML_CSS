// блок 1
// задание 1
// function triple(num){
//     return num*3
// }
// console.log(triple(5))

// задание 2
// function isNegative(num){
//     if(num>=0){
//         console.log("Положительное") 
//     }
//     else{
//         console.log("Отрицательное")
//     }
// }
// isNegative(-4)
// isNegative(6)

// задание 3
// function lastLetter(text){
//     return text[text.length - 1]
// }
// console.log(lastLetter("hello"))

// задание 4
// function makeQuestion(text){
//     return text + "?"
// }
// console.log(makeQuestion("Как дела")


// блок 2
// задание 1
// let nums = [7, 14, 2, 9, 20, 11, 4];
// let sum = 0
// for(let i = 0; i < nums.length; i++){
//     sum += nums[i]
// }
// console.log(sum)

// задание 2
// let nums = [7, 14, 2, 9, 20, 11, 4];
// let max = nums[0]
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i]
//     }
// }
// console.log(max)

// задание 3
// let nums = [7, 14, 2, 9, 20, 11, 4];
// let even = []
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 == 0){
//         even.push(nums[i])
//     }
// }
// console.log(even)

// задание 4
// let nums = [7, 14, 2, 9, 20, 11, 4];
// let plus = []
// for(let i = 0; i < nums.length; i++){
//     plus.push(nums[i] + 5)
// }
// console.log(plus)

// задание 5
// let nums = [7, 14, 2, 9, 20, 11, 4];
// let result = null
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 10){
//         result = nums[i]
//         break
//     }
// }
// console.log(result)


// блок 3
// задание 1
// let words = ["red", "blue", "green", "hi", "yellow", "cat"];
// let upper = []
// for(let i = 0; i < words.length; i++){
//     upper.push(words[i].toUpperCase())
// }
// console.log(upper)

// задание 2
// let words = ["red", "blue", "green", "hi", "yellow", "cat"];
// let lengths = []
// for(let i = 0; i < words.length; i++){
//     lengths.push(words[i].length)
// }
// console.log(lengths)

// задание 3
// let words = ["red", "blue", "green", "hi", "yellow", "cat"];
// let longWords = []
// for(let i = 0; i < words.length; i++){
//     if(words[i].length > 3){
//         longWords.push(words[i])
//     }
// }
// console.log(longWords)

// задание 4
// let words = ["red", "blue", "green", "hi", "yellow", "cat"];
// let result = null
// for(let i = 0; i < words.length; i++){
//     if(words[i][0] == "g"){
//         result = words[i]
//         break
//     }
// }
// console.log(result)

// задание 5
// let words = ["red", "blue", "green", "hi", "yellow", "cat"];
// let joined = ""
// for(let i = 0; i < words.length; i++){
//     joined += words[i]

//     if(i < words.length - 1){
//         joined += ", "
//     }
// }
// console.log(joined)
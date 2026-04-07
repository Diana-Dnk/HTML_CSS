// class User {
//     constructor(name,email){
//         this.name=name
//         this.email=email
//     }
//     login(){
//         console.log(this.name + "logged in")
//     }
// }

// const user1 = new User ("Alex" , "alex@gmail.com")
// console.log(user1.name)
// console.log(user1.email)
// user1.login()
// console.log(user1)


// class Bank {
//     #balance = 0;

//     deposit(amount){
//         if(amount <=0) return
//         this.#balance+=amount
//     }
//     withdraw (amount){
//         if(amount >this.#balance){
//             console.log("error")
//             return
//         }
//         this.#balance -= amount
//     }
//     getBalance(){
//         return this.#balance
//     }
// }


// const acc1 = new Bank()
// console.log(acc1.getBalance())
// acc1.deposit(5000)
// console.log(acc1.getBalance())
// acc1.withdraw(3000)
// console.log(acc1.getBalance())

// class Product{ 
//     constructor(name,price){
//         this.name=name
//         this.price=price
//     }
//     getInfo(){
//         console.log(this.name , "-" , this.price)
//     }
//     applyDiscount(percent){
//         if(percent>100){
//         console.log("error")
//         return  
//         }
//         console.log(this.price-=percent)
//     }
// }

// const product1 = new Product ("apple",300)
// product1.getInfo()
// product1.applyDiscount(20)

// class User{
//     constructor(name){
//         this.name=name
//     }
//     getRole(){
//         return "user"
//     }
// }
// class Admin extends User{
//     constructor(name){
//         super(name)
//         this.permissions = ["read", "write"]
//     }
//     getRole(){
//         return "admin"
//     }
// }

// class Student extends User{
//     constructor(name, score){
//         super(name)
//         this.score = score
//     }
//     getRole(){
//         return "student"
//     }
// }

// const scores = [70,85,92,61,88]

// const u = new User("Qwerty")
// const a = new Admin("Asd")
// const s = new Student("Alex")
// console.log(u.getRole())
// console.log(a.getRole())
// console.log(s.getRole())


// class User {
//     getPerission(){
//         return[]
//     }
// }

// class Admin extends User{ 
//     getPerission(){
//         return["write","read"]
//     }
// }

// class Student extends User{
//     getPerission(){
//         return ["read"]
//     }
// }

// const users = [
//     new Admin(),
//     new Student()
// ]

// users.forEach(user => {
//     console.log(user.getPerission())
// })





// мини проект система пользователей почти как backend

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }
//     getInfo(){
//         return `${this.name} (${this.email})`
//     }
//     // @Override
//     getRole(){
//         return "user"
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email)
//         this.permissons = ["read", "write", "delete", "update"]
//     }

//     deleteUser(user){
//         console.log(this.name+ " deleted " + user.name)
//     }

//     getRole(){
//         return "admin"
//     }
// }

// class Moderator extends User{
//     banUser(user){
//         console.log(this.name + " banned " + user.name)
//     }

//     getRole(){
//         return "moderator"
//     }
// }

// const admin = new Admin ("Alex", "admin@gmail.com")
// const user = new User("John", "john@gmail.com")
// const user1 = new User("John", "john@gmail.com")
// const mod = new Moderator("Kate", "mod@gmail.com")

// admin.deleteUser(user)
// mod.banUser(user)

// console.log(admin.getInfo())
// console.log(admin.getRole())

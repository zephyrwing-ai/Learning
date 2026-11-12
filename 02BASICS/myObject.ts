// const User = {
//     name: "zephyr",
//     email: "zephyr@example.com",
//     isActive: true
// }

// function createUser(user: {name: string, email: string, isActive: boolean})
//  {
//     return user
// }

// let newUser = {name: "zephyr", email: "zephyr@example.com", isActive:true, isPaid:true}

// createUser(newUser)

// function createCourse():{name: string, price:number}{
//     return {name: "TypeScript", price: 399}
// }

// type User =  {
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return {
//         name: user.name,
//         email: user.email,
//         isActive: user.isActive
//     }
// }

// createUser({name:"zephyr", email:"zephyr@example.com", isActive:true})

type User = {
    readonly _id : string
    name : string
    email : string
    isAvtive : boolean
    creditcard ?: number
}

let myUser:User = {
    _id:"12344",
    name:"zephyr",
    email:"zephyr@example.com",
    isAvtive:true
}

myUser.email = "newemail@example.com"

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type card = cardNumber & cardDate & {
    cvv: number
}

export {}


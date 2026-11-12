let user1:(string | number)[] = [1, 'hc@example.com']


user1 = ['newuser', 2]


//let rgb : number[] = [255, 0, 0]
let rgb : [number,number,number] = [255, 255, 255]

type User = [number, string]
let user: User = [1, 'hc@example.com']
console.log(user)

const newUser: User = [2, 'newuser@example.com']
console.log(newUser)

newUser[0]= 3



export{}
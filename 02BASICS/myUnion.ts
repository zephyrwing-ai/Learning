let score :number | string | boolean= 33 

score = 44
score = "44"
score = true

type MyUser = {
    name:string;
    id:number;
}

type Admin = {
    name:string;
    id:number;
    isAdmin:boolean;
}

let myUser:MyUser | Admin = {
    name:"zephyr",
    id:123,
    isAdmin:true
}

myUser.name = "newname"
myUser.id = 456
// myUser.isAdmin = false // Error: Property 'isAdmin' does not exist on type 'User'.


function getDbId(id:number | string){
    if(typeof id === "number"){
        console.log("DB id is : " + id);
    } else {
        id = id.toLowerCase();
        console.log("DB id is : " + id);
    }
}

getDbId(3)
getDbId("1212")

//Array
const arr1: (number | string)[] = [1, 2, 3, "4"];
const arr2: number[] | string[] = [1, 2, 3];
const arr3: number[] | string[] = ["1", "2", "3"];


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

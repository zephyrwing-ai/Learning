function detectType(val: number | string ) {
    if(typeof val ==="string"){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide an ID");
        return;
    }
    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if(strs) {
        if(Array.isArray(strs)) {
            for(const str of strs) {
                console.log(str);
            }
        } else {
            console.log(strs);
        }
    }
}

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    role: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}


function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toISOString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}


function getFood(pet: Fish | Bird): string {
    if(isFish(pet)) {
        return "fish food";
    } else {
        return "bird food";
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    if(shape.kind === "square") {
        return shape.side ** 2;
    }
    if(shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}

function getArea(shape:Shape){
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius **2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
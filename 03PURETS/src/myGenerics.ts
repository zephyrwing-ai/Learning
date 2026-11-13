const score: number[] = []
const name: Array<string> = []

function identityOne(value: boolean | number): boolean | number {
    return value
}

function identityTwo(value: any): any {
    return value
}

function identityThree<T>(value: T): T {
    return value
}

function identityFour<Type>(value: Type): Type {
    return value
}

identityTwo("hello")

identityThree(2)

function identityFIve<T, U>(value: T, message: U): T {
    return value
}

identityFIve(1, "hello")

interface Bootle{
    brand: string;
    type: string;
}

identityFour<Bootle>({brand: "Coca Cola", type: "Soda"})


function getSearchedProducts<T>(products: T[]): T | undefined{
    // do some database operations
    const myIndex = 2
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T | undefined => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

console.log(getSearchedProducts([1, 2, 3, 4, 5]))
console.log(getMoreSearchProducts([1, 2, 3, 4, 5]))

interface Database {
    connection: boolean;
    name: string;
    email: string;
}

function anotherGenerics<T, U extends Database>(valueT: T, valueU: U):object{
    return {
        valueT,
        valueU
    }
}

console.log(anotherGenerics(1, {connection: true, name: "John", email: "john@example.com"}))


interface Quize{
    name: string;
    type: string;
}

interface Course{
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(products: T){
        this.cart.push(products)
    }
}
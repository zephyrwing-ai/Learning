class User{
    name: string;
    age: number;
    city:string = "";

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const zephyr = new User("Zephyr", 25);
console.log(zephyr);

zephyr.city = "Shanghai";
console.log(zephyr);

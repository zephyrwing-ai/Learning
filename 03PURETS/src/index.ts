class User{

    city:string = "";

    constructor(
        public name: string, 
        private age: number,
        // private userId: string
    ) {
    }
}



const zephyr = new User("Zephyr", 25);
console.log(zephyr);

zephyr.city = "Shanghai";
console.log(zephyr);

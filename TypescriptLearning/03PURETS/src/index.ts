class User{

    protected _courseCount = 0;

    city:string = "";

    constructor(
        public name: string, 
        private age: number,
        // private userId: string
    ) {
    }
    private deleteToken(){
        console.log("Token deleted");
    }
    get getAppleEmail():string {
        return `${this.name}@apple.com`;
    }

    get courseCount(){
        return this._courseCount;
    }

    set courseCount(coursenum:number){
        if (coursenum <= 1){
            throw new Error("Course count must be greater than 1");
        }
        this._courseCount = coursenum;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const zephyr = new User("Zephyr", 25);
console.log(zephyr);

console.log(zephyr.getAppleEmail);

zephyr.city = "Shanghai";
console.log(zephyr);
console.log(zephyr.courseCount);

// zephyr.deleteToken();

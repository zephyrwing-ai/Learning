interface User2 {
    readonly id:number;
    name:string;
    email:string;
    isActive:boolean;
    //startTrail:() => string;
    startTrail():string;
    getCoupon(couponName:string, value:number):number;
}

interface User2{
    githubToken:string;
}

interface Admin1 extends User2{
    role:"admin" | "user" | "guest";
}

const zephyr:Admin1 = {
    id:1,
    name:"zephyr",
    role:"admin",
    email:"zephyr@example.com",
    isActive:true,
    startTrail:() => "Starting trail",
    getCoupon:(couponName:"MarryChrismas", value:10) => value,
    githubToken:"github123"
}

console.log(zephyr.getCoupon("MarryChrismas", 10));


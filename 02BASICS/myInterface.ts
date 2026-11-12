interface User2 {
    readonly id:number;
    name:string;
    email:string;
    isActive:boolean;
    //startTrail:() => string;
    startTrail():string;
    getCoupon(couponName:string, value:number):number;
}

const zeohyr:User2 = {
    id:1,
    name:"zephyr",
    email:"zephyr@example.com",
    isActive:true,
    startTrail:() => "Starting trail",
    getCoupon:(couponName:"MarryChrismas", value:10) => value
}

console.log(zeohyr.getCoupon("MarryChrismas", 10));


"use strict";
let score = 33;
score = 44;
score = "44";
score = true;
let myUser = {
    name: "zephyr",
    id: 123,
    isAdmin: true
};
myUser.name = "newname";
myUser.id = 456;
// myUser.isAdmin = false // Error: Property 'isAdmin' does not exist on type 'User'.
function getDbId(id) {
    if (typeof id === "number") {
        console.log("DB id is : " + id);
    }
    else {
        id = id.toLowerCase();
        console.log("DB id is : " + id);
    }
}
getDbId(3);
getDbId("1212");
//Array
const arr1 = [1, 2, 3, "4"];
const arr2 = [1, 2, 3];
const arr3 = ["1", "2", "3"];
let seatAllotment;
seatAllotment = "aisle";

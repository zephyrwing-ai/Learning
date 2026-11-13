"use strict";
const zeohyr = {
    id: 1,
    name: "zephyr",
    email: "zephyr@example.com",
    isActive: true,
    startTrail: () => "Starting trail",
    getCoupon: (couponName, value) => value
};
console.log(zeohyr.getCoupon("MarryChrismas", 10));

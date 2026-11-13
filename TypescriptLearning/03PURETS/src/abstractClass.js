"use strict";
class TakePhoto {
    constructor(cameraMode, filter, burst) { }
    getReelTime() {
        // calculations
        return 8;
    }
}
// const zephyr = new TakePhoto("test", "test", 1); 
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
    }
    getSepia() {
        console.log("Sepia filter applied");
    }
}
const zephyr = new Instagram("test", "test", 1);
console.log(zephyr.getReelTime());

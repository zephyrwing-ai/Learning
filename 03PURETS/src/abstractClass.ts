abstract class TakePhoto {
    constructor(
        cameraMode:string, 
        filter:string, 
        burst:number
    ) {}

    abstract getSepia():void 
    getReelTime():number {
        // calculations
        return 8;
    }

}

// const zephyr = new TakePhoto("test", "test", 1); 

class Instagram extends TakePhoto {
    constructor(cameraMode:string, filter:string, burst:number) {
        super(cameraMode, filter, burst);
    }
    
    getSepia():void {
        console.log("Sepia filter applied");
    }
}

const zephyr = new Instagram("test", "test", 1);
console.log(zephyr.getReelTime());

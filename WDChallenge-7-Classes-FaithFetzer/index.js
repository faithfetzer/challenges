class CapsuleContender {
  // Implement your code here
  constructor(fuel){
    this.fuel = fuel;
    this.maxFuel = 3000;
    this.dockingRing = false;
    this.radarSystem = false;
    this.reactionControlSystem = false;
  }
  currentFuelPercentage() {
    let fuelPercent = (this.fuel / this.maxFuel);
    console.log(fuelPercent)
  }

  toggleDockingRing(){
    this.dockingRing = !this.dockingRing;
    console.log(this.dockingRing)
  }

  toggleRadar(){
    this.radarSystem = !this.radarSystem;
  }

  toggleRCS(){
    if((this.fuel / this.maxFuel) >= .4){
      this.reactionControlSystem = !this.reactionControlSystem;
      console.log();
    } else {
      console.log('less than 40% fuel');
    }
  }

  preDockingProcedure(){
    this.dockingRing = true;
    this.radarSystem = true;
    this.reactionControlSystem = true;
    if(this.dockingRing && this.reactionControlSystem && this.reactionControlSystem){
      return 200;
    } else {
      console.log(this.dockingRing, this.radarSystem, this.reactionControlSystem, 500)
      return 500;
    }

  }

}

let testRocket = new CapsuleContender(1000);
console.log(testRocket);
// testRocket.currentFuelPercentage();
// testRocket.toggleDockingRing();
// testRocket.toggleRadar();
// console.log(testRocket.radarSystem);
// testRocket.toggleRadar();
// console.log(testRocket.radarSystem);
// testRocket.toggleDockingRing();
// Please do not modify line(s) below
// module.exports = CapsuleContender;

testRocket.preDockingProcedure();


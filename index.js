// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42){
        return pickupLocation - 42;
    } 
    if (pickupLocation < 42){
        return 42 - pickupLocation;
    } 
    if (pickupLocation=== 42){
        return 0
    }
}

function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(pickupLocation);
   return blocks * feetPerBlock;
}
function distanceTravelledInFeet(pickupLocation, destination) {
   const blocksTravelled = Math.abs(destination - pickupLocation);
   const feetPerBlock = 264
   const distanceInFeet = blocksTravelled * feetPerBlock;
   return distanceInFeet
}
function calculatesFarePrice(pickupLocation, destination) {
    const feetTravelled = Math.abs(pickupLocation - destination)*264;


   if (feetTravelled > 2500) {
        return 'cannot travel that far';
    } else if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    }
}
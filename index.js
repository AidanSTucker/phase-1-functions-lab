



function distanceFromHqInBlocks(pickupLocation) {
    const hqAddress = 42; 
    return Math.abs(pickupLocation - hqAddress);

}
 
  function distanceTravelledInFeet(start, destination) {
    const blockToFeet = 264;
    return Math.abs(blockToFeet * (start - destination));
  }



  function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    const hqAddress = 42
    const blockToFeet = 264
    return Math.abs(blockToFeet * (pickupLocation - hqAddress))

  }





  function calculatesFarePrice(start, destination) {

    const distance = Math.abs(264 * (destination - start) );

    if (distance < 400) {
        return (0)
    }
    else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * 0.02 )
    }
    else if (distance < 2500) {
        return (25)
    }
    else if (distance > 2500) {
        return ('cannot travel that far')
    }
  }


// set location for depo and variable of speed and a couple variables for time

var depo = {"location": {"latitude": -37.81666, "longitude" 144.96385}}
var speed = 50 //km/h
var currentTime = 1500422400
var yesterday = 1500336000

// function to calculate distance and time

function timeOfTravel(location1, location2){
  var distanceTraveled = (location1.latitude - location2.latitude, location1.longitude - location2.longitude)
  var time = (distanceTravled/ speed)
  return time
}


// sorting packages in priority from smallest delivery window to highest
var sortedShipments = function sortPackagePriority(shipments){
                   shipments.sort(function(a, b){
                    var deliveryWindow = x.deadline - timeOfTravel(depo, x.destination)
                    return a.deliveryWindow - b.deliveryWindow;
                  })
                }

function timeToDepo(drone){
  // if drone has a package  time = timeOfTravel(location, dropOff) + timeOfTravel(dropOff, depo)
  // no package just takes timeOfTravel(location, depo)
    drone.package ? timeOfTravel(drone.location, drone.packages.destination) + timeOfTravel(drone.packages.destination, depo) : timeOfTravel(drone.location, depo)
}

// sorting drones from shortest to longest time back to depo
var sortedDrones = function sortDrones(drones){
                drones.sort(function(a, b){
                  return timeToDepo(a) - timeToDepo(b);
                })
              }

// compares drone pick up time to package deadlines and assigns drones to packages
function assignDrones(sortedDrones, sortedShipments){
  var assignments = [],
    unassignedPackageIds = [],
    // checking to see that drone can deliver package before deadline
    for (let i = 0; i < drones.length; i++){
      if (currentTime + timeToDepo(drones[i]) + timeOfTravel(depo, shipments[0].destination) > shipments[0].deadline){
        // remove package from array and put in unassignedPackageIds
        unassignedPackageIds.push(shipments[0].packageId)
        sortedShipments.shift()

    } else {
      var singleDrone = {droneId : drones[i].droneId}
      var singlePackage = {packageId : shipments[0].packageId}
      var assignPackage = Object.assign(singleDrone, singlePackage)
      assignments.push(assignPackage)
      // remove singleDrone and singlePackage from arrays
        drones.splice(i, 1)
        i--
        shipments.shift()
      }
    }


  return {assingnments, unassignedPackageIds}
}

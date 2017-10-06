# Get Swift Code Challenge

## Implement a dispatching system for an array of Drones and an array of packages

1.  I first wanted to sort the array of packages by comparing their window of delivery time to each other.  They were ranked shortest to longest for the amount of time they had to travel before their deadline.

2. Sort Drones in order from shortest to longest for the amount of time it would take to return to the depo to pick up a package.

3. Compare to see if smallest package delivery time picked up by first arriving drone would make its deadline, if not they should be unassignedPackageIds and removed from the Array of shipments. Then the next package with longer amount of time would be checked against the timing of the first arriving drone to arrive.

4. If the first arriving drone was able to deliver the package before deadline, create an object of the drone and package and push into assignments while also removing them both from their arrays.

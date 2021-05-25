# Space Capsule Challenge: Classes in JavaScript

It's your first day on the job at "Super Cool Rockets Co".
You are faced with your first assignment.
Your boss came by and asked for you to create a digital representation of a new capsule that has been engineered.
## The schematic for the properties of the vehicle look like this:

1. A "fuel" property that shows how many lbs of fuel are onboard
2. A "maxFuel" property that is a default property of 3000 lbs. (A requirement of the vehicle)
3. A "dockingRing" property that is either "active" or "inactive", default should be "inactive" (represented by a boolean).
4. A "radarSystem" property that is either "active" or "inactive" , default shoud be "inactive" (represented by a boolean).
5. A "reactionControlSystem" property that is either "armed" or "disarmed", default should be "disarmed" (represented by a boolean).

## The schematic for the methods of the vehicle are as follows:
1. A constructor function that will take in and set the amount of fuel in lbs.
    - This function will set the defaults of all properties specified above ^

2. A procedure named "currentFuelPercentage" for retrieving the percentage of fuel onboard (from 0 - 1), using the
    "fuel" and "maxFuel" properties.
3. A procedure called "toggleDockingRing" for activating and deactivating the Docking Ring System.
4. A procedure called "toggleRadar" for activating and deactivating the Radar System.
5. A procedure called "toggleRCS" for arming and disarming the reactionControlSystem.
    * It can only be activated if there is more than 40% fuel left on the ship.
6. A procedure called "preDockingProcedure" that will do the following:
    - Activate and verify the Docking Ring System is active
    - Activate and verify the Radar System is active
    - Activate and verify the Reaction Control System is active
    - Return the number 200 if all are active and verified
    - Return the number 500 if one or more of the systems are inactive

Your boss assures you that this can be done in a JavaScript Class, and to have it done quickly!

`Hint: Remember to start with the constructor, and make sure you have all of the right properties!`
`Hint: Use the space below the class to test whether your functions are working properly!`
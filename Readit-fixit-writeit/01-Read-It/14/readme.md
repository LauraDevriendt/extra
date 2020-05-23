# READ IT
## EX 14
* Look at the reduce() function and research how it works exactly.
* Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.
    * It reduces the result by summing up the total capacity
    * the 0 is the default for the total so it will start from 0 otherwise you get a weird number
* What are we doing with the object that's passed to 'calculateAvailable'?
    * we calculate how much room is still available in each theatre

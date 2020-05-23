# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
    * We use here a for in loop which looks for the properties (title, year and director) in the movies object and stores the values of them in a p tage in the result variable.
        * The for and for/in looping constructs give you access to the index in the array, not the actual element. 
        * With the other two constructs, forEach() and for/of, you get access to the array element itself.
* Look at the documentation of for...in
* Look at the documentation of the .sort(à function. 
   
Explain how it's applied here.

     * makes it possible to sort the object 

* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?
    * difference with excercise 10 is due to the object we have an actual table 
    * due to the join the seconde table log is an string array and not a table 

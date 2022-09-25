#

# Exercise week 2

- [x] add a new router for hobbies.  The base url will be /hobbies
- [x] add a route of method=GET:
  * url will be   /hobbies/all   and will return a list of hobbies (
    array of strings)
  * the array will be a global variable already populated with a couple
    hobbies
- [x] add a route of method=POST, and a form on the frontend
  * a simple post route, with url /hobbies/add
  * inside the route use req.body.hobby to acces the new hobby, and add
    it to the array
  * on the frontend, add a form with method='post' and an input named
    "hobby"
- [x] add a div of id="listOfHobbies"
- [x] inside script add a fetch which gets data from 'http://localhost:3000/hobbies/all'
  - [x] after receiving the data, grab the div of id='listOfHobbies'
  - [x] iterate the hobbies (forof) and for each one add a new p element
        to the listOfHobbies
#

# Exercise week 2

- [x] add a new router for hobbies. The base url will be /hobbies
- [x] add a route of method=GET:
    * url will be /hobbies/all and will return a list of hobbies (
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

# Exercise week 3

## About Status codes and error handling

[Mozilla -- About Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Long story short:

What are status codes? When a browser requests a page from an API/Server it also receives a status which tells
whether the request was successful, if there were any error, and what type of error did happen.

There are only a few noteable (to get started with) ideas:

1. status codes start with 1,2,3,4 or 5. Each number denotes a category:
    * 1 = Information respons
    * 2 = Successful Response
    * 3 = Redirection Messages (used when a website may update its webpages, domain etc)
    * 4 = Client Error (such as sending a bad request = it has a wrong configuration). Most known = 404 issued when the
      page/resource at that URL does not exist.
    * 5 = Server Error (they happen when the server runs code which results in errors = 500, or are issued under other
      conditions
      such as unavailability, unimplemented features (501), infinite loops (510))
2. Most used codes are 200 (success and no errors), 404 (not found), 403 (forbidden for the user which send the request), 401 (unauthorized =
   unauthenticated), 400 (bad request, if the request send)

### Homework 3 - using post,get,put,and delete to create a CRUD

For frontend, you can see crud.html, which uses the songs router.

Requirements/ Steps

- [ ] The resource you are going to model is book
- [ ] Create the backend
  - [ ] Also take into account the details about status codes, exemplified in `routes/users.js`.
- [ ] Implement the backend, one by one:
  - [ ] 1 Read All
  - [ ] 2 Read One
  - [ ] 3 Delete
  - [ ] 4 Create
  - [ ] 5 Update     <-- I sorted them by the size of the forms used
- [ ] add validations to the forms 
  - [ ] use required for all fields
  - [ ] also use minlength=2 for title and min/max for year to be between 0 and 2022
  - [ ] be sure to use type='number' for the year input
- [ ] BONUS add validation messages to at least one of the forms



[//]: # (TODO)


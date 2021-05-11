const apiUrl = "https://rickandmortyapi.com/api/location/";

const retrieveLocation = async (id) => {
  // const result = await someAsyncFunction();
  await fetch(apiUrl)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (json) {
      let locationInfo = json.results;
      // console.log(locationInfo);
      for (l of locationInfo) {
        if (l.id == id) {
          console.log(l.name);
          let name = l.name;
          return name;
        }
      }
    });
  // const location = await bodyData.json();
  // console.log(location);
  // return location;
  // .then (results => {
  //     console.log('i did something');
  // })
  // .catch(err => console.log(err))
};

document.getElementById("getLocation").addEventListener("click", () => {
  retrieveLocation(document.getElementById("locationId").value).then((name) => {
    document.getElementById("locationName").innerHTML = name;
  });
});

// Here you have a function named retrieveLocation that takes in a location's id as the first argument (named id via the first parameter). Using this id that is recieved, craft a fetch using "await", retrieve the data from the body using "await", and return the location's name from the data.

// Please do not modify the HTML file or any lines in the JS file that state to not modify!

// Your challenge is as follows:

// Make the function "retrieveLocation" asynchronous.
// Use await to fetch a location using the id.
// Retrieve the data from the body using await.
// Return that location's name from the function.

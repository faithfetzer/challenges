const apiUrl = 'https://rickandmortyapi.com/api/location/';

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
};
// id>data>return location name

// Please do not modify this code below
document.getElementById('getLocation').addEventListener('click',()=>{retrieveLocation(document.getElementById('locationId').value).then(name=>{document.getElementById('locationName').innerHTML=name;});});
const display = () => { 
    fetch('https://rickandmortyapi.com/api/character/')    
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson){
        var firstURL = myJson.results[3].image;
        var secondURL = myJson.results[6].image;
        console.log(firstURL, secondURL);
        imageOne.src=firstURL;
        imageTwo.src=secondURL;
    })
    
}
display();
fetch('https://rickandmortyapi.com/api/character/')

// DOM manipulation and API requests
// Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. Hint: You will not need to edit/change anything in the HTML file, everything you need is already there.

// The fetch call to the specified endpoint is already defined in the JS file, finish coding the necessary promise resolvers for your fetch to access character information from the API. Once you are seeing character information in the console, utilize the display function that eventually work to display the images you retrieve from the fetch. Specific jsonified data from the API will need to be passed to this function.

// Inside the display function you will need to:

// Define two parameters that will hold the url's you retrieved from the json data.
// Grab each image element from the index.html file, and set the src to be the image link you stored in the parameters during step 1.
// After you successfully display two images in the DOM, use the attached style.css file to style each image with the following properties:

// Each image must have a border-radius
// Each image must have a border
// Each image must be centered
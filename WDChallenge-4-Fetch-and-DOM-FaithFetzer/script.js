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
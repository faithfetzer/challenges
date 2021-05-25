function filterNumbersFromArray(arr) {
    // Write the code that goes here
    for(i=0; i<arr.length; i++){
        if(typeof(arr[i]) !== "number") {
            arr.splice(i, 0);
            console.log(arr);
           } else {
           arr[i];
           console.log(arr);
           }
        }
        console.log(arr);
  };
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
//   for (var i = 0; i < arr.length; i++)
//     console.log(arr[i]);
  
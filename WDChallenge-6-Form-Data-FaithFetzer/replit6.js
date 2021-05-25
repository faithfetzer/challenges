/*
# Form Data Challenge

You have been tasked with building a small proof-of-concept module for a grocery store.
This simple web module is a form that will eventually be used in their inventory search feature, due to the store wanting customers to be able to shop digitally.
This form will have three different input fields, a count for how many items the shopper would like to purchase, an entry box for the name of the item the shopper would like to purchase, and the last entry box for the brand of the item the shopper would like to purchase.
There should be a submit button that will, in the future but not now, trigger the search functionality in their inventory system. For now, the button should craft a sentence displaying the following:
- If a customer wants 3 Apples with the brand of Marty's Orchard, the message should say: "Customer is shopping for 3 of Marty's Orchard Apples".
- If a customer wants 2 MacBook Pros with the brand of Microsoft, the message should say: "Customer is shopping for 2 Microsoft Macbook Pros".

The form should be styled to meet the minimum viable product, but you don't have to go overboard with it. It shouldn't be a massive form, as it will be integrated on the side of their current website. They leave the look of it up to your taste!

## Goal
- A form with three inputs and a submit
- Each input field's data type matches what should be entered
- The submit should trigger a procedure in JavaScript that creates a message
- That message should be displayed to the user on the webpage below the form

## Hints
There are multiple ways to reach the goal of this feature. Here are hints at two ways of solving it:
- Have the inputs attached to variables in JavaScript
- Have the procedure retrieve the values in the input from the form submit. (Event)
*/
// let itemName = document.getElementById('itemName').value;
// let itemCount = document.getElementById('itemCount').value;
// let itemBrand = document.getElementById('itemBrand').value;

document.getElementById('submit').onclick = outputData;
function outputData(e) {
    let itemName = document.getElementById('itemName').value;
    let itemCount = document.getElementById('itemCount').value;
    let itemBrand = document.getElementById('itemBrand').value;
    e.preventDefault();
    document.getElementById('output').innerText = "Customer is shopping for " + itemCount + " " + itemBrand + " " + itemName + "s."
}
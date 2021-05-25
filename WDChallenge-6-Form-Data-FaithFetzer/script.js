document.getElementById('submit').onclick = outputData;
function outputData(e) {
    let itemName = document.getElementById('itemName').value;
    let itemCount = document.getElementById('itemCount').value;
    let itemBrand = document.getElementById('itemBrand').value;
    e.preventDefault();
    document.getElementById('output').innerText = "Customer is shopping for " + itemCount + " " + itemBrand + " " + itemName + "s."
}
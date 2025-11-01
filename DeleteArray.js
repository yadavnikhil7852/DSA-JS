


function DeleteElement() {
    const arr = [10, 20, 30, 40, 50]
    console.log("Delete in array at index ");
    console.log("original array");
    console.log(arr);
    let position = document.getElementById("position").value
    position = parseInt(position)
    
    for (let i = position; i < arr.length-1; i++) {
        
        arr[i] = arr[i + 1]
        
    }
    arr.length = arr.length - 1;
    console.log("final value");
    console.log(arr);
}

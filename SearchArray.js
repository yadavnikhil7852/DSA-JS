
function SearchElement(){
let value = document.getElementById("value").value
value = parseInt(value)
let found = false 
    const arr=[1,2,3,40,5,6]
    for(let i= 0 ; i<arr.length ; i++){
       if(arr[i]== value){
        console.log(`Element ${value} is find at position ${i+1}`);
        found = true
        return ;
       }

    }
    if(!found){
        console.log("value not found!");
    }
}

const arr1 =[1,2,3,4,5]
const arr2 =[10,20,30,40,50]
 let arr3 = []

 function merge(){
    for(let i = 0; i<arr1.length ;i++){
        arr3 += arr1[i]
    }
     for(let j = 0; j<arr2.length ;j++){
        arr3 += arr2[j]
    }
    console.log(arr3);
}
merge()
console.log(arr3);
console.log(typeof(arr3));
//above code returns string 



//this code returns array

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [10, 20, 30, 40, 50];
// let arr3 = [];

// function merge() {
//   let k = 0; // index for arr3

//   for (let i = 0; i < arr1.length; i++) {
//     arr3[k] = arr1[i];
//     k++;
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     arr3[k] = arr2[j];
//     k++;
//   }

//   console.log(arr3);
// }

// merge();

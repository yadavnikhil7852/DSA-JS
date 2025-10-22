// //insertion in array at any given index
// let data = [10, 20, 30, 40, 50]
// let newElement = 7;
// let position = 2
// console.log(data)
// for (let i = data.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         data[i + 1] = data[i]

//         if (i === position) {
//             data[i] = newElement
//         }
//     }

// }
// console.log(data);


//in javaScript splice methods used to do insertion at any index , splice(index , delete , value)

function InsertElement(){
  let data = [10, 20, 30, 40, 50]
  let value = document.getElementById("element").value
let ePosition = document.getElementById("position").value
 
value = Number(value)
ePosition = Number(ePosition)

  //let newElement = 7;
//let position = 2
console.warn(data)
for (let i = data.length - 1; i >= 0; i--) {
    if (i >= ePosition) {
        data[i + 1] = data[i]

        if (i == ePosition) {
            data[i] = value
        }
    }

}
console.warn(data);

}
InsertElement()
// var iseven = (element) =>{
//     // if (element % 2==0){
//     //     return true;
//     // }
//     // return false;
//     return element % 2 ===0
// }
//  //console.log(iseven(9)); 

//  var result = [2,4,6,8].every(iseven(e) => (e % 2 ===0));

//  console.log(result);

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
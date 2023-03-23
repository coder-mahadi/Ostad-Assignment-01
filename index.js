/*
 This code for assignment 01
  Name:Mahadi Khan
  project name: multiplication table for 1 to 10 
*/
function multiplicationTable(num) {
  console.log(`This table for ${num} multiplication 1 to 10`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(20);

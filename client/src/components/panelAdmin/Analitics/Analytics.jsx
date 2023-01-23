export function salesValue (props) {
  if(props) {
    let total = props.reduce(function(accumulator, currentValue) {
      return accumulator + (currentValue.priceAmount * currentValue.count);
    }, 0);
    console.log(total);
    return '$' + total
  }}

export function salesBarValue (props) {
if(props) {
let count = props.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.count;
}, 0);
// console.log(count);
let stock = props.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.stock;
}, 0);
// console.log(stock);
let percentage = Math.ceil((count / stock) * 100);
// console.log(percentage);
return percentage
}}


export function usersBarValue (props) {
if(props){

let purchased = props.reduce(function(accumulator, currentValue) {
  if (currentValue.purchased) {
    return accumulator + currentValue.purchased.length;
  }
}, 0);
// console.log(props.length);
// console.log(stock);
let percentage = Math.ceil((purchased / props.length) * 100);
// console.log(percentage);
return percentage
}}



export function salesValue (props) {
      if(props) {
        let total = props.reduce(function(accumulator, currentValue) {
          let pre = parseInt(currentValue.price)
          return accumulator + (pre * currentValue.count);
        }, 0);
        return total
      }}

export function salesBarValue(props) {
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
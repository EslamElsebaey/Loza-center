
// counters

const numbers = document.querySelectorAll(".clients-exp h4");
const counters = Array(numbers.length);
const intervals = Array(numbers.length);
counters.fill(0);

numbers.forEach((number, index) => {
  intervals[index] = setInterval(() => {
    counters[0] += 1;
    counters[1] += 1000;
    if (counters[index] >= parseInt(number.dataset.num)) {
      clearInterval(intervals[index]);
      number.innerHTML = parseInt(number.dataset.num);
    } else {
      number.innerHTML = counters[index];
    }
  }, number.dataset.time);
});


// let exps = document.querySelectorAll(".num");
// let interval = 5000 ; 
// console.log(exps)

// exps.forEach((exp , index) => {
//   let startValue = 0 ;
//   let endValue = exp.dataset.num ;
//   let duration = Math.floor(interval / endValue) ;
//  let counter =  setInterval(() => {
//     startValue += 1 ;
//     exp.textContent = startValue ;
//     if(startValue == exp.dataset.num){
//       clearInterval(counter)
//     }
//   }, duration);
// })
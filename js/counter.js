
// counters

const numbers = document.querySelectorAll(".clients-exp h4"); 
const counters = Array(numbers.length);
const intervals = Array(numbers.length);
counters.fill(0);

numbers.forEach((number, index) => {
  intervals[index] = setInterval(() => {
    if (counters[index] == parseInt(number.dataset.num)) {
      clearInterval(intervals[index]);
    } else {
      counters[0] += 1;
      counters[1] += 1000;
      number.innerHTML = counters[index];
      console.log(counters[index])
    }
  }, number.dataset.time )
});
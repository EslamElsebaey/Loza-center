
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
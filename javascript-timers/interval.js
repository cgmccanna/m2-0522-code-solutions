var heading = document.querySelector('.countdown-display');
function replace() {
  if (heading.textContent === '4') {
    heading.textContent = '3';
  } else if (heading.textContent === '3') {
    heading.textContent = '2';
  } else if (heading.textContent === '2') {
    heading.textContent = '1';
  } else if (heading.textContent === '1') {
    heading.textContent = '~Earth Beeeelooowww Us~';
  }
}
var countdown = setInterval(replace, 1000);
setInterval(replace, 1000);
clearInterval(countdown);

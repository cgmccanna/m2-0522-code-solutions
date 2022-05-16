var heading = document.querySelector('.message');
function updateHeading(title) {
  title.textContent = 'Hello There';
}

setTimeout(updateHeading, 2000, heading);

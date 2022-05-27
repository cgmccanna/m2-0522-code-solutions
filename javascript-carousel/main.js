var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $image = document.querySelector('img');
var $dots = document.querySelectorAll('.dot');
var $alldots = document.querySelector('.together');
var carousel = null;
var counter = 1;
function cycle() {
  if (counter < images.length) {
    $image.src = images[counter];
    $dots[(counter)].className = 'dot filled';
    $dots[(counter - 1)].className = 'dot';
    counter++;
  } else {
    counter = 0;
    $image.src = images[counter];
    $dots[(counter)].className = 'dot filled';
    $dots[(counter + 4)].className = 'dot';
    counter++;
  }
}

carousel = setInterval(cycle, 3000);

var $next = document.querySelector('.fa-angle-right');
$next.addEventListener('click', function () {
  cycle();
  clearInterval(carousel);
  carousel = setInterval(cycle, 3000);
});

var $back = document.querySelector('.fa-angle-left');
$back.addEventListener('click', function () {
  if (counter > 1) {
    counter -= 2;
    $image.src = images[counter];
    $dots[(counter)].className = 'dot filled';
    $dots[(counter + 1)].className = 'dot';
    counter++;
    clearInterval(carousel);
    carousel = setInterval(cycle, 3000);
  } else {
    counter = 5;
    $image.src = images[counter - 1];
    $dots[0].className = 'dot';
    $dots[counter - 1].className = 'dot filled';
    clearInterval(carousel);
    carousel = setInterval(cycle, 3000);
  }
});

$alldots.addEventListener('click', function (event) {
  if (event.target.matches('span')) {
    var selected = event.target;
    for (var i = 0; i < $dots.length; i++) {
      if ($dots[i].id === selected.id) {
        $dots[i].className = 'dot filled';
        clearInterval(carousel);
        carousel = setInterval(cycle, 3000);
      } else {
        $dots[i].className = 'dot';
        clearInterval(carousel);
        carousel = setInterval(cycle, 3000);
      }
    }
    $image.src = images[Number(selected.id)];
    counter = Number(selected.id) + 1;
  }
});

var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < this.response.length; i++) {
    var $user = document.createElement('li');
    $user.textContent = this.response[i].name;
    $userList.appendChild($user);
  }
});
xhr.send();

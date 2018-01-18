document.querySelector("#button").addEventListener('click', loadData);

function loadData() {
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  //open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if(this.status === 200) {
      document.querySelector('#output').innerHTML = `<h1> ${this.responseText} </h1>`;
    }
  }
  xhr.send();
}
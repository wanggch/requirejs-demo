require(["js/hello"], function(hello) {
  var element = document.createElement('h2');
  element.innerHTML = hello.text;
  document.body.appendChild(element);
});

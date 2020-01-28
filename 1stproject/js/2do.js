//Criando o 'x' de remover
var minhaList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < minhaList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  minhaList[i].appendChild(span);
}

//Clicar no 'x' para remover o item da lista.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Adicionando a função de checado ao clicar no item da lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checado');
  }
}, false);

//Função de criar item novo na lista
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("adicionar").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
//Condicional de erro caso esteja em branco
  if (inputValue === '') {
    alert("Você precisa digitar algo!");
  } else {
    document.getElementById("minhaLista").appendChild(li);
  }
  document.getElementById("adicionar").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
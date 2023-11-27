

lista.forEach(item => {
  if (item.image === "") {
    item.image = imagemPadrao;
  }
});


// Agora, você pode usar a lista no seu HTML com template strings
const listaHTML = lista.map(item => `
  <li onclick="toggleAssistido(this)">
    <span><img class="imgpadraoep" src="${item.image}" /></span>
    <a href="${item.link}" class="infoeppp">
      <main class="infoe">
        <h6 id="titlenameep">${item.titulo}</h6>
        <h2 id="numbeppp">${item.episodio}</h2>
      </main>
      <div>
        <h3 id="categoriaep">${item.idioma}</h3>
        <h3>${item.time}</h3>
        <h3></h3>
      </div>
    </a>
  </li>
`).join('');

document.getElementById('listaEpisodios').innerHTML = listaHTML;



document.addEventListener('DOMContentLoaded', function() {
  var listaEpisodios = document.getElementById('listaEpisodios');
  var quantidadeLi = listaEpisodios.getElementsByTagName('li').length;

  // Atualiza o conteúdo do elemento adicional
  document.getElementById('episodesCount').textContent = quantidadeLi;
});
// modo assistido
function toggleAssistido(element) {
  element.classList.toggle('assistido');
  var hasClass = element.classList.contains('assistido');
  var listId = element.parentNode.getAttribute('data-id');
  var index = Array.from(element.parentNode.children).indexOf(element);
  var storageKey = 'assistidoState-' + listId + '-' + index;
  localStorage.setItem(storageKey, hasClass);
}

// Verificar o estado anterior na carga da página
window.onload = function() {
  var lists = document.querySelectorAll('ul[data-id]');
  lists.forEach(function(list) {
    var listId = list.getAttribute('data-id');
    var listItems = list.querySelectorAll('li');
    listItems.forEach(function(element, index) {
      var storageKey = 'assistidoState-' + listId + '-' + index;
      var savedState = localStorage.getItem(storageKey);
      if (savedState === 'true') {
        element.classList.add('assistido');
      }
    });
  });
};


// copiad 


// pesquisar 
function filtrarEpisodios() {
      var inputTexto = document.getElementById('searcheppp').value.toLowerCase();
      var listaEpisodios = document.getElementById('listaEpisodios');
      var episodios = listaEpisodios.getElementsByTagName('li');

      for (var i = 0; i < episodios.length; i++) {
        var numEpisodio = episodios[i].querySelector('.infoeppp h2').innerText.toLowerCase();
        if (numEpisodio.includes(inputTexto)) {
          episodios[i].style.display = ''; // Mostra o item
        } else {
          episodios[i].style.display = 'none'; // Esconde o item
        }
      }
    }

// ordernar 
let ordemCrescente = false;
  
  function ordenarEpisodios() {
    const listaEpisodios = document.getElementById('listaEpisodios');
    const items = Array.from(listaEpisodios.getElementsByTagName('li'));
  
    items.sort((a, b) => {
      const numA = parseInt(a.querySelector('#numbeppp').textContent.trim());
      const numB = parseInt(b.querySelector('#numbeppp').textContent.trim());
  
      if (ordemCrescente) {
        return numA - numB;
      } else {
        return numB - numA;
      }
    });
  
    // Atualiza a ordem dos elementos na lista
    listaEpisodios.innerHTML = '';
    items.forEach(item => listaEpisodios.appendChild(item));
  
    // Atualiza a classe com base na ordem
    const iconeOrdem = document.getElementById('iconeOrdem');
    iconeOrdem.classList.toggle('reverse', ordemCrescente);
    iconeOrdem.classList.toggle('noreverse', !ordemCrescente);
  
    // Alterna a ordem para a próxima vez que o botão for clicado
    ordemCrescente = !ordemCrescente;
  }
  
  
  

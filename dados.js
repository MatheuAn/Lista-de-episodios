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

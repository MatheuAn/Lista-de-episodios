// Imagem padrão dos episódios
const imagemPadrao = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_m4me6O3VTWs1TvWzzcaNvT15vSdDlP8BA&usqp=CAU";

const lista = [

	{
		image: "/Páginas blogger/Lista de episódios /imgs/boruto.gif",
		titulo: "Boruto: Naruto Next Generations",
		link: "",
		episodio: "01",
		idioma: "Legendado",
		time: "24 min"
  },
	{
		image: "/Páginas blogger/Lista de episódios /imgs/boruto2.gif",
		titulo: "Boruto: Naruto Next Generations",
		link: "",
		episodio: "02",
		idioma: "Legendado",
		time: "24 min"
  },
	{
		image: "/Páginas blogger/Lista de episódios /imgs/boruto3.gif",
		titulo: "Boruto: Naruto Next Generations",
		link: "",
		episodio: "03",
		idioma: "Legendado",
		time: "24 min"
  }
];


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
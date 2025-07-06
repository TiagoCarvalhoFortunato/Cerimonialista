  const imagens = [
    {
      src: 'imagem/catlevania.jpg_large',
      titulo: 'Casamento Castlevania',
      descricao: 'Evento ao entardecer com decoração floral branca e azul.'
    },
    {
      src: 'imagem/catlevania.jpg_large',
      titulo: 'Casamento Castlevania',
      descricao: 'Celebração ao ar livre em meio a natureza exuberante.'
    },
    {
      src: 'imagem/catlevania.jpg_large',
      titulo: 'Casamento Castlevania',
      descricao: 'Evento noturno com iluminação sofisticada e clima romântico.'
    },
    {
      src: 'imagem/catlevania.jpg_large',
      titulo: 'Casamento Castlevania',
      descricao: 'Festa de debutante com tema floral e luzes coloridas.'
    },
    {
      src: 'imagem/catlevania.jpg_large',
      titulo: 'Casamento Castlevania',
      descricao: 'Celebração de 50 anos de casamento com familiares e amigos.'
    },
    {
      src: 'imagem/catlevania.jpg_large',
      titulo: 'Casamento Castlevania',
      descricao: 'Casamento pequeno com clima aconchegante e familiar.'
    }
  ];

  const galeria = document.getElementById('galeria');
  imagens.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.src}" class="gallery-img card-img-top" alt="${item.titulo}">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
        </div>
      </div>
    `;
    galeria.appendChild(col);
  });
function pesquisar(){
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se a pesquisa for vazia, faça:
    if (campoPesquisa == ""){
      section.innerHTML = "O campo de busca está vazio"
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto no array de dados
    for(let dado of dados){
      titulo = dado.titulo.toLocaleLowerCase();
      descricao = dado.descricao.toLocaleLowerCase();
      tags = dado.tags.toLocaleLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
          
      // Constrói o HTML para cada resultado, incluindo título, descrição e link
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
      `;
    }
  }

    // caso as buscas não encontrem nada
    if(!resultados) {
      resultados = "<p>O resultado de busca não obteve resultados</p>"
    }
  
    // Atualiza o conteúdo da seção de resultados com o HTML construído
    section.innerHTML = resultados;
  }
  





function pesquisar(){
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada objeto no array de dados
    for(let dado of dados){
      // Constrói o HTML para cada resultado, incluindo título, descrição e link
      resultados += `
        <div class="item-resultado">
          <h2>${dado.Título}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção de resultados com o HTML construído
    section.innerHTML = resultados;
  }






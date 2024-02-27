  // Variável para armazenar o valor inicial do contador
  var contador = 1;

  // Função para atualizar dinamicamente o número exibido no <span>
  function atualizarNumero() {
    // Obter uma referência ao elemento <div> onde o contador será exibido
    var divContador = document.getElementById('contador');
    // Exibir o número do contador dentro de um <span>
    divContador.innerHTML = "<span>" + contador + "</span>";
    // Incrementar o contador em 2
    contador += 2;
  }

  // Chamar a função atualizarNumero a cada segundo (3000 milissegundos)
  setInterval(atualizarNumero, 3000);
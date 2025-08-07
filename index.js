const input = document.getElementById('valor');

const resultado = document.getElementById('resultado');

const converter = document.getElementById('converter');

const unidadeInicial = document.getElementById('unidadeInicial');
const unidadeDestino = document.getElementById('unidadeDestino');

function converterUnidade(valor, unidadeInicial, unidadeDestino) {
  const fatores = {
    'milimetros': 0.001,
    'centimetros': 0.01,
    'metros': 1,
    'quilometros': 1000
  };

  // Converte o valor para metros
  const valorEmMetros = valor * fatores[unidadeInicial];
  // Converte de metros para a unidade de destino
  const valorConvertido = valorEmMetros / fatores[unidadeDestino];

  return valorConvertido;
}

converter.addEventListener('click', () => {
  const valor = parseFloat(input.value);
  const unidadeOrigem = unidadeInicial.value;
  const unidadeAlvo = unidadeDestino.value;
  console.log(valor, unidadeOrigem, unidadeAlvo);

  const resultadoConversao = converterUnidade(valor, unidadeOrigem, unidadeAlvo);
  resultado.textContent = `Resultado: ${resultadoConversao} ${unidadeAlvo}`;
});

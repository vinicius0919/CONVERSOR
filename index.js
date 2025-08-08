const input = document.getElementById("valor");

const resultado = document.getElementById("resultado");

const converter = document.getElementById("converter");

const unidadeInicial = document.getElementById("unidadeInicial");
const unidadeDestino = document.getElementById("unidadeDestino");

function converterUnidade(valor, unidadeInicial, unidadeDestino) {
  const fatores = {
    milimetros: {value: 0.001, shortName: "mm"},
    centimetros: {value: 0.01, shortName: "cm"},
    metros: {value: 1, shortName: "m"},
    quilometros: {value: 1000, shortName: "km"},
  };

  // Converte o valor para metros
  const valorEmMetros = valor * fatores[unidadeInicial].value;
  // Converte de metros para a unidade de destino
  const valorConvertido = valorEmMetros / fatores[unidadeDestino].value;

  return `${valorConvertido} ${fatores[unidadeDestino].shortName}`;
}

// converter para formatação brasileira
function formatarResultado(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
  });
}

converter.addEventListener("click", () => {
  if (input.value && input.value > 0) {
    const valor = parseFloat(input.value);
    const unidadeOrigem = unidadeInicial.value;
    const unidadeAlvo = unidadeDestino.value;

    const resultadoConversao = converterUnidade(
      valor,
      unidadeOrigem,
      unidadeAlvo
    );
    resultado.textContent = `Resultado:
     ${formatarResultado(
      resultadoConversao
    )}`;
  }
});

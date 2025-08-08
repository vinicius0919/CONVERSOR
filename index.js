const input = document.getElementById("valor");

const resultado = document.getElementById("resultado");

const converter = document.getElementById("converter");

const unidadeInicial = document.getElementById("unidadeInicial");
const unidadeDestino = document.getElementById("unidadeDestino");

const image1 = document.getElementsByClassName("image-1")[0];
const image2 = document.getElementsByClassName("image-2")[0];
const image3 = document.getElementsByClassName("image-3")[0];

// execute display none one time at start
image1.style.display = "none";
image2.style.display = "none";
image3.style.display = "none";

let counter = 0;

setInterval(() => {
  image1.style.display = counter === 0 ? "" : "none";
  image2.style.display = counter === 1 ? "" : "none";
  image3.style.display = counter === 2 ? "" : "none";
  counter = (counter + 1) % 3;
}, 4000);

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

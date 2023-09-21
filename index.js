document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("meuForm");
  const resultado = document.getElementById("resultado");
  const enviarButton = document.getElementById("enviar");
  const campoA = document.getElementById("campoA");
  const campoB = document.getElementById("campoB");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
      resultado.textContent = "Formulário válido: B é maior que A.";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "Formulário inválido: B deve ser maior do que A.";
      resultado.style.color = "red";
    }
  });
  campoA.addEventListener("input", function () {
    resultado.textContent = ""; // Limpa a mensagem quando o usuário digita
  });

  campoB.addEventListener("input", function () {
    resultado.textContent = ""; // Limpa a mensagem quando o usuário digita
  });
});

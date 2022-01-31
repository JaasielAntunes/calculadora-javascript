function calcular(tipo, valor) {
  // == significa igual e === significa identico
  if (tipo === "acao") {
    if (valor === "c") {
      // limpa o visor
      document.getElementById("resultado").value = "";
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
    }

    if (valor === "=") {
      // o eval recupera o valor contido no JS
      var valor_campo = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("resultado").value += valor;
  }
}

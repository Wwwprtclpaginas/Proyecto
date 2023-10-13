function calcularCosto() {
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var costoTotal = cantidad % 20 === 0 ? (cantidad / 20) * 3000 : cantidad * 200;
  document.getElementById("resultado").innerHTML = "Costo Total: " + costoTotal + " pesos";
}

function calcularVuelto() {
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var pago = parseInt(document.getElementById("pago").value);
  var costoTotal = cantidad % 20 === 0 ? (cantidad / 20) * 3000 : cantidad * 200;
  var vuelto = pago - costoTotal;
  document.getElementById("vueltoResultado").innerHTML = "Vuelto: " + vuelto + " pesos";
}

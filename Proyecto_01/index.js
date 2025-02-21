const calcular = document.getElementById("calcular");
const monto = document.getElementById("monto");
const porcentaje = document.getElementById("porcentaje");
const total = document.getElementById("total");


function calcularPorcentaje(){
    const ValorMonto = monto.value;
    const ValorPorcentaje = porcentaje.value;
    const ValorTotal = ValorMonto * (1 + ValorPorcentaje / 100);
    total.innerText = ValorTotal.toFixed(2);
}

calcular.addEventListener("click", calcularPorcentaje);


// index
/* Debug viewport size */
const debug = document.querySelector(".viewport-debug");
function updateViewportSize() {
    debug.textContent =
    `Viewport: ${window.innerWidth} × ${window.innerHeight}`;
}
updateViewportSize();
window.addEventListener("resize", updateViewportSize);
/* Debug viewport size */

//salario / 200 = vlr-hr
//vlr-hr x (1 + 0,5)

  const input_salario = document.getElementById('salario');
  const input_hr_seg_sex = document.getElementById('hr-seg-sex');
  const resultado = document.getElementById('resultado');

  function calcular() {
    // converte "1.621,01" → 1621.01
    const valorBase = Number(
      input_salario.value.replace(/\./g, '').replace(',', '.')
    );

    const valorExtra = Number(input_hr_seg_sex.value);
    
    //Cálculo...
    const vlr_hr_seg_sex = valorBase / valorExtra;

    // exibe no formato brasileiro
    resultado.textContent = vlr_hr_seg_sex.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  // recalcula sempre que mudar
  input_salario.addEventListener('input', calcular);
  input_hr_seg_sex.addEventListener('input', calcular);

  // cálculo inicial
  calcular();



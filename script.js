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

/* 
Ano 365 dias
12 meses
4 semanas
7 dias (5 dias utéis)
24 horas
60 minutos
60 segundos
10 décimos 
100 centésimos

  1 ano tem 52,179 semanas.
  1 mês tem  4,333 semanas.

  2. Por que dividir por 6 e multiplicar por 30?
Embora muitos trabalhem 5 dias por semana (segunda a sexta), a lei considera que o sábado é dia útil 
e que o domingo (Descanso Semanal Remunerado - DSR) também deve ser pago. Por isso, o cálculo utiliza a base de 30 dias 
para garantir que o seu descanso também esteja contabilizado no valor do salário mensal.

  5 sabados de 4 horas cada = 20 horas
  40 horas por semana x 30 dias = 1.200
  =>  200 horas = 8 horas seg-sex, 6 dias úteis por semana em 30 dias.
  8 horas (seg-sex) + 0 horas (sabado) =          40 horas/semana / 5 dias utéis = 8,000 (média de HT) x 30 dias = 240 horas/mes
                                                  40 horas/semana / 6 dias utéis = 6,666 (média de HT) x 30 dias = 200 horas/mes *

  220 horas = 8 horas seg-sex e 4 horas sabado, 6 dias por semana = 40 horas/dia, 30 dias.
  8 horas (seg-sex) + 4 horas (sabado) = 40 + 4  = 44 horas/semana / 6 dias utéis = 7,333 (média de HT) x 30 dias = 220 horas/mes *
  40 horas por semana x 30 dias = 1.320
*/
  const input_salario = document.getElementById('salario');
  const input_hr_semana = document.getElementById('hr-semana');
  const resultado = document.getElementById('vlr_hr');
  const resultado2 = document.getElementById('vlr_sem');

  function calcular() {
      // converte "1.621,01" → 1621.01
      const Salbase = Number(
    
          input_salario.value.replace(/\./g, '').replace(',', '.')
      
      );

      //total de hora trabalhada por semana.
      const tot_hr_sem = Number(input_hr_semana.value);

      //total de hora trabalhada por mês (ref. pagamentos).
      let media_hr_tr_mes = tot_hr_sem / 5;

      //valor por hora semanal
      const vlr_hora_dia = Salbase / (media_hr_tr_mes * 30);

      // exibe no formato brasileiro                    6,75 ou 6,14
      resultado.textContent = vlr_hora_dia.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });

      //5- 6,1401515... x 44                                  = 270,1666....
      //6- 6,7541666... x 40                                  = 270,1666.... 
      let vlr_parc1 = ((vlr_hora_dia * media_hr_tr_mes) *5);  //270,1666666...
      let vlr_parc2 = (vlr_parc1 * 0.5);                      //135,0841666...
      const vlr_semana = vlr_parc1 + vlr_parc2;               //405,25
      //console.log(vlr_semana);

      // SEMANAL
      resultado2.textContent = vlr_semana.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });


  }

  // recalcula sempre que mudar
  input_salario.addEventListener('input', calcular);
  input_hr_semana.addEventListener('input', calcular);

  // cálculo inicial
  calcular();



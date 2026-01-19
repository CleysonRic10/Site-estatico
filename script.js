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
  const resultado3 = document.getElementById('hr-trab-mes');
  const resultado4 = document.getElementById('hr-trab-ano');
  const resultado5 = document.getElementById('R_vlr');    //              INFLACAO
  const resultado6 = document.getElementById('PV_vlr');   //              LUCRO
  const input_indice = document.getElementById('indice'); //r = ritmo ou taxa em decimal.(INFLACAO)
  const input_lucro = document.getElementById('lucro');   //              LUCRO

  function calcular() {
      // converte "1.621,01" → 1621.01
      const Salbase = Number(
    
          input_salario.value.replace(/\./g, '').replace(',', '.')
      );

      // converte text → number                                           INFLACAO
      const r = Number(

          input_indice.value.replace(/\./g, '').replace(',', '.')
      );

      // converte text → number                                           LUCRO
      const Lcr = Number(

          input_lucro.value.replace(/\./g, '').replace(',', '.')
      );

      //total de hora trabalhada por semana.
      const tot_hr_sem = Number(input_hr_semana.value);

      //total de hora trabalhada por dia (ref. pagamentos).
      let media_hr_tr_dia = tot_hr_sem / 5;

      //valor por hora semanal
      const vlr_hora_dia = Salbase / (media_hr_tr_dia * 30);

      // exibe no formato brasileiro                    6,75 ou 6,14
      resultado.textContent = vlr_hora_dia.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });

      const vlr_semana = Salbase * (7/30);

      // $ SEMANAL
      resultado2.textContent = vlr_semana.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

      //const num_semanas_ano = 52.179;
      const tot_semana_mes = 4.285719;      //índice quantid semanas do mes.
      const tot_hr_mes = tot_hr_sem * 5;    //num 5 semanas.

      // Hrs MENSAL
      resultado3.textContent = tot_hr_mes.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });

      const tot_hr_ano = tot_hr_mes * 12;    //num 12 meses.

      // Hrs ANUAL
      resultado4.textContent = tot_hr_ano.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });


    //                                                                    INFLACAO
      const Valor_Inicial = 100;                                         
      const t = 1;                  //t = 1 ano (tempo)
      let r_dec = r/100;
      const Valor_Futuro = Valor_Inicial * ((1-r_dec) * t);

      resultado5.textContent = Valor_Futuro.toLocaleString('pt-BR', {     //  INFLAÇÃO
       minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });

    //                                                                    LUCRO
      const Valor_custo = 100;                                         
      let Lcr_dec = Lcr/100;
      const Valor_PV = Valor_custo * (1+Lcr_dec);

      resultado6.textContent = Valor_PV.toLocaleString('pt-BR', {         //  LUCRO
       minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });

      //console.log(vlr_semana);
  }


  // recalcula sempre que mudar
  input_salario.addEventListener('input', calcular);
  input_hr_semana.addEventListener('input', calcular);

  resultado3.addEventListener('input', calcular);
  resultado4.addEventListener('input', calcular);

  input_indice.addEventListener('input', calcular);                       //  INFLAÇÃO
  input_lucro.addEventListener('input', calcular);                        //  LUCRO

  // cálculo inicial
  calcular();




//     **********         **********    Menu Mobile   **********         **********      //
const menu = document.getElementById('menu-mobile');
const overlay = document.querySelector('.overlay-menu');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

// const lista = document.querySelector('.item-menu'); 
const linksMenu = menu.querySelectorAll('a');

openMenu.addEventListener('click', abrirMenu);
closeMenu.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

function abrirMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    // document.body.style.overflow = 'hidden';
}
function fecharMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    // document.body.style.overflow = '';
}
// FIM **********         **********    Menu Mobile   **********         **********      //

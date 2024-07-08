document.addEventListener("DOMContentLoaded", () => {
    // Pegar os elementos do DOM
    const saldoDia = document.getElementById('saldo-dia');
    const despesas = document.getElementById('despesas');
    const totalDia = document.getElementById('total-dia');

    // Valores simulados (poderiam ser obtidos de um backend via API)
    const saldoDoDia = 1580;
    const despesasDia = 580;
    const totalDoDia = saldoDoDia - despesasDia;

    // Atualizar o conteúdo dos elementos
    saldoDia.textContent = `R$ ${saldoDoDia}`;
    despesas.textContent = `R$ ${despesasDia}`;
    totalDia.textContent = `R$ ${totalDoDia}`;
});

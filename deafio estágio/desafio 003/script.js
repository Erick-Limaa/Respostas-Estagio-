const faturamento = [
    { "dia": 1, "valor": 289700.45 },
    { "dia": 2, "valor": 250850.50 },
    { "dia": 3, "valor": 275005.99 },
];

function analisarFaturamento(faturamento) {
    const valores = faturamento.map(dia => dia.valor).filter(valor => valor > 0);
    
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
   
    const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    
    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
    
    console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
    
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia} dias`);
};

analisarFaturamento(faturamento);

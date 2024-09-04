const faturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53,
};

function calcularPercentuais(faturamentoEstado) {
    const total = Object.values(faturamentoEstado).reduce((acc, val) => acc + val, 0);

    for (const [estado, valor] of Object.entries(faturamentoEstado)) {
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
};

calcularPercentuais(faturamentoEstado);


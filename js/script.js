document.getElementById("impostoForm").addEventListener("submit", function(event){
    event.preventDefault();

    const valorProduto = parseFloat(document.getElementById("valorProduto").value);
    const aliquota = parseFloat(document.getElementById("aliquotaIcms").value);
    const aliquotaIpi = parseFloat(document.getElementById("aliquotaIpi").value);
    const aliquotaPis = parseFloat(document.getElementById("aliquotaPis").value);
    const aliquotaCofins = parseFloat(document.getElementById("aliquotaCofins").value);
    const aliquotaFcp = parseFloat(document.getElementById("aliquotaFcp").value);
    const mvaPercentual = parseFloat(document.getElementsByTagName("mvaPercentual").value);
    const frete = parseFloat(document.getElementById("frete").value);
    const outrosCustos = parseFloat(document.getElementById("outrosCustos").value);

    //funções para os calculos:

    function calcularIcms(valorProduto, aliquotaIcms){
        return valorProduto * (aliquotaIcms / 100);
    }

    function calcularIpi(valorProduto, aliquotaIpi){
        return valorProduto * (aliquotaIpi / 100);
    }

    function calcularPisCofins(valorProduto, aliquotaPis, aliquotaCofins){
        const pis = valorProduto * (aliquotaPis / 100);
        const Cofins = valorProduto * (aliquotaCofins / 100);
    }

    function calcularFcp(valorProduto, aliquotaFcp){
        return valorProduto * (aliquotaFcp / 100);
    }

    function calcularMva(valorProduto, mvaPercentual, frete, outrosCustos){
        return valorProduto + frete + outrosCustos + (valorProduto * (mvaPercentual / 100));
    }

    function calcularIcmsSt(valorProduto, aliquotaIcms, mvaPercentual, frete, outrosCustos){
        const baseCalculoIcmsSt = calcularMva(valorProduto, mvaPercentual, frete, outrosCustos);
        const icmsProprio = calcularIcms(valorProduto, aliquotaIcms);
        return (baseCalculoIcmsSt * (aliquotaIcms / 100)) - icmsProprio; 
    }

    function calcularTotalImposto(valorProduto, aliquotaIcms, aliquotaIpi, aliquotaPis, aliquotaCofins, aliquotaFcp, mvaPercentual, frete, outrosCustos){
        const icms = calcularIcms(valorProduto, aliquotaIcms);
        const ipi = calcularIpi(valorProduto,aliquotaIpi);
        const pisConfins = calcularPisCofins(valorProduto, aliquotaPis, aliquotaCofins);
        const fcp = calcularFcp(valorProduto, aliquotaFcp);
        const icmsSt = calcularIcmsSt(valorProduto, aliquotaIcms, mvaPercentual, frete, outrosCustos);
        return icms + ipi + pisConfins + fcp + icmsSt
    }
    
})
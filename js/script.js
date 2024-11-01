document.getElementById("impostoForm").addEventListener("submit", function(event){
    event.preventDefault();

    const valorProduto = parseFloat(document.getElementById("valorProduto").value);
    const aliquota = parseFloat(document.getElementById("aliquotaIcms").value);
    const aliquotaIpi = parseFloat(document.getElementById("aliquotaIpi").value);
    const aliquotaPis = parseFloat(document.getElementById("aliquotaPis").value);
    const aliquotaCofins = parseFloat(document.getElementById("aliquotaCofins").value);
    const aliquotaFcp = parseFloat(document.getElementById("aliquotaFcp").value);
    const mvaPercentual = parseFloat(document.getElementsByTagName("mvaPercentual").value);
    const frente = parseFloat(document.getElementById("frete").value);
    const outrosCustos = parseFloat(document.getElementById("outrosCustos").value);

})
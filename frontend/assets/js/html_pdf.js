
window.onload = function () {

    document.getElementById("reload").addEventListener("click", () => {
        location.reload();
    });

    document.getElementById("btnGerar")
        .addEventListener("click", () => {
            btnGerar.style.display = 'none';
            reload.style.display = 'none';
            addPrefixoReal();
            const body = this.document.getElementById("body");
            console.log(body);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'Proposta Comercial Iliot.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(body).set(opt).save();
            // btnGerar.style.display = 'inline';
        })
}
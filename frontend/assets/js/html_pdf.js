
window.onload = function () {

    document.getElementById("btnGerar")
        .addEventListener("click", () => {

            btnGerar.style.display = 'none';

            const body = this.document.getElementById("body");

            var opt = {
                margin: 0,
                filename: 'Proposta Comercial Iliot.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().from(body).set(opt).save();
        })
}
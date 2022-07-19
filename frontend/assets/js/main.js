// HEADER

let razaoSocial = document.getElementById('razaoSocial');
let cnpj = document.getElementById('cnpj');
let nome = document.getElementById('nome');
let dataProposta = document.getElementById('dataProposta');
let validadeProposta = document.getElementById('validadeProposta');

// PACOTE BASICO

let numeroUsuarios = document.getElementById('numeroUsuarios');
let precoUnitario = document.getElementById('precoUnitario');
let desconto = document.getElementById('desconto');
let precoUnitarioDesconto = document.getElementById('precoUnitarioDesconto');
let mensalidadePlanoFSM = document.getElementById('mensalidadePlanoFSM');

let numeroAtivos = document.getElementById('numeroAtivos');
let valorBase = document.getElementById('valorBase');
let ajusteVolume = document.getElementById('ajusteVolume');
let precoUnitarioAjustado = document.getElementById('precoUnitarioAjustado');
let mensalidadePlanoPCM = document.getElementById('mensalidadePlanoPCM');

// MIDDLE DIV

let mensalidadeBasica = document.getElementById('mensalidadeBasica');
let taxaAtivacao = document.getElementById('taxaAtivacao');

// PACOTE OPCIONAL

let setupWhiteLabel = document.getElementById('setupWhiteLabel');
let checkBox1 = document.getElementById('checkBox1');
let mensalidadeWhiteLabel = document.getElementById('mensalidadeWhiteLabel');
let checkBox2 = document.getElementById('checkBox2');
let dashboardAvancado = document.getElementById('dashboardAvancado');
let checkBox3 = document.getElementById('checkBox3');
let sla = document.getElementById('sla');
let checkBox4 = document.getElementById('checkBox4');
let DIVconexaoIot = document.getElementById('DIVconexaoIot');
let conexaoIot = document.getElementById('conexaoIot');
let qntIot = document.getElementById('qntIot');
let checkBox5 = document.getElementById('checkBox5');
let DIVhoraDesenvolvimento = document.getElementById('DIVhoraDesenvolvimento');
let horaDesenvolvimento = document.getElementById('horaDesenvolvimento');
let qntHorasDev = document.getElementById('qntHorasDev');
let checkBox6 = document.getElementById('checkBox6');

let mensalidadeOpcionais = document.getElementById('mensalidadeOpcionais');
let setupWhiteLabelUnico = document.getElementById('setupWhiteLabelUnico');
let desenvolvimentoUnico = document.getElementById('desenvolvimentoUnico');

// RESUMO E OBS

let FIM_taxaAtivacao = document.getElementById('FIM_taxaAtivacao');
let FIM_mensalidadeGeral = document.getElementById('FIM_mensalidadeGeral');
let taxaUnicaWL_DEV = document.getElementById('taxaUnicaWL_DEV');

let vencimentoTaxaAtivacao = document.getElementById('vencimentoTaxaAtivacao');
let formaPagamento = document.getElementById('formaPagamento');
let emailCobranca = document.getElementById('emailCobranca');
let obsAdicionais = document.getElementById('obsAdicionais');

const prefixoReal = 'R$ ';
const prefixoPorcentagem = '%';


// FIM DECLARAÇÃO DE VARIAVEIS

dataProposta.value = criaData(0, 0, 0);
validadeProposta.value = criaData(0, 1, 0);

// INICIO FUNÇÕES

function criaData(dia, mes, ano) {
    var dateObj = new Date();
    var day = dateObj.getUTCDate() + dia;
    var month = dateObj.getUTCMonth() + 1 + mes; //months from 1-12
    var year = dateObj.getUTCFullYear() + ano;

    const newdate = day + "/" + month + "/" + year;

    return newdate;
}

function cnpjMask() {
    cnpj.addEventListener('keyup', function (e) {
        var cnpjAux = cnpj.value.replace(/\D/g, '');
        var a = [];
        a[0] = cnpjAux.substr(0, 2);
        a[1] = cnpjAux.substr(2, 3);
        a[2] = cnpjAux.substr(5, 3);
        a[3] = cnpjAux.substr(8, 4);
        a[4] = cnpjAux.substr(12, 2);
        cnpj.value = `${a[0]}.${a[1]}.${a[2]}.${a[3]}/${a[4]}`;
    }
        , false);
}

function DEFINE_precoUnitario() {

}

function DEFINE_precoUnitarioDesconto() {

}

function DEFINE_mensalidadePlanoFSM() {

}

function DEFINE_precoUnitarioAjustado() {

}

function DEFINE_mensalidadePlanoPCM() {

}

function DEFINE_mensalidadeBasica() {

}

function STATUScheckBox1() {

}

function STATUScheckBox2() {

}

function STATUScheckBox3() {

}

function STATUScheckBox4() {

}

function STATUScheckBox5() {

}

function STATUScheckBox6() {

}

function DEFINE_mensalidadeOpcionais() {


}

function DEFINE_setupWhiteLabelUnico() {

}

function DEFINE_desenvolvimentoUnico() {

}

function DEFINE_taxaAtivacaoFIM() {

}

function DEFINE_mensalidadeGeralFIM() {

}

function DEFINE_taxaunicaWL_DEV() {

}

// function DEFINE_desconto() {}

// function DEFINE_valorBase() {}

// function DEFINE_ajusteVolume() {}

// function DEFINE_taxaAtivacaoUnica() {}

// function DEFINE_setupWhiteLabel() {}

// function DEFINE_mensalidadeWhiteLabel() {}

// function DEFINE_dashboardAvancado() {}

// function DEFINE_sla() {}

// function DEFINE_conexaoIot() {}

// function DEFINE_qntIot() {}

// function DEFINE_horaDesenvolvimento() {}

// function DEFINE_qntHorasDev() {}

// function DEFINE_vencimentoTaxaAtivacao() {}

// function DEFINE_emailCobranca() {}

// function DEFINE_formaPagamento() {}

// FIM FUNÇÕES


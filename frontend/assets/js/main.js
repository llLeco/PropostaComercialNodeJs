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

function addPrefixoReal() {

    if (numeroUsuarios.value.length > 0) {
        numeroUsuarios.value = numeroUsuarios.value;
    } else {
        numeroUsuarios.value = '0';
    }
    if (precoUnitario.value.length > 0) {
        precoUnitario.value = prefixoReal + precoUnitario.value;
    } else {
        precoUnitario.value = prefixoReal + '0';
    }
    if (desconto.value.length > 0) {
        desconto.value = desconto.value + prefixoPorcentagem;
    } else {
        desconto.value = '0' + prefixoPorcentagem;
    }
    if (precoUnitarioDesconto.value.length > 0) {
        precoUnitarioDesconto.value = prefixoReal + precoUnitarioDesconto.value;
    } else {
        precoUnitarioDesconto.value = prefixoReal + '0';
    }
    if (mensalidadePlanoFSM.value.length > 0) {
        mensalidadePlanoFSM.value = prefixoReal + mensalidadePlanoFSM.value;
    } else {
        mensalidadePlanoFSM.value = prefixoReal + '0';
    }
    if (numeroAtivos.value.length > 0) {
        numeroAtivos.value = numeroAtivos.value;
    } else {
        numeroAtivos.value = '0';
    }
    if (valorBase.value.length > 0) {
        valorBase.value = prefixoReal + valorBase.value;
    } else {
        valorBase.value = prefixoReal + '0';
    }
    if (ajusteVolume.value.length > 0) {
        ajusteVolume.value = ajusteVolume.value + prefixoPorcentagem;
    } else {
        ajusteVolume.value = '0' + prefixoPorcentagem;
    }
    if (precoUnitarioAjustado.value.length > 0) {
        precoUnitarioAjustado.value = prefixoReal + precoUnitarioAjustado.value;
    } else {
        precoUnitarioAjustado.value = prefixoReal + '0';
    }
    if (mensalidadePlanoPCM.value.length > 0) {
        mensalidadePlanoPCM.value = prefixoReal + mensalidadePlanoPCM.value;
    } else {
        mensalidadePlanoPCM.value = prefixoReal + '0';
    }
    if (mensalidadeBasica.value.length > 0) {
        mensalidadeBasica.value = prefixoReal + mensalidadeBasica.value;
    } else {
        mensalidadeBasica.value = prefixoReal + '0';
    }
    if (taxaAtivacao.value.length > 0) {
        taxaAtivacao.value = prefixoReal + taxaAtivacao.value;
    } else {
        taxaAtivacao.value = prefixoReal + '0';
    }
    if (setupWhiteLabel.value.length > 0) {
        setupWhiteLabel.value = prefixoReal + setupWhiteLabel.value;
    } else {
        setupWhiteLabel.value = prefixoReal + '0';
    }
    if (mensalidadeWhiteLabel.value.length > 0) {
        mensalidadeWhiteLabel.value = prefixoReal + mensalidadeWhiteLabel.value;
    } else {
        mensalidadeWhiteLabel.value = prefixoReal + '0';
    }
    if (dashboardAvancado.value.length > 0) {
        dashboardAvancado.value = prefixoReal + dashboardAvancado.value;
    } else {
        dashboardAvancado.value = prefixoReal + '0';
    }
    if (sla.value.length > 0) {
        sla.value = prefixoReal + sla.value;
    } else {
        sla.value = prefixoReal + '0';
    }
    if (conexaoIot.value.length > 0) {
        conexaoIot.value = prefixoReal + conexaoIot.value;
    } else {
        conexaoIot.value = prefixoReal + '0';
    }
    if (qntIot.value.length > 0) {
        qntIot.value = qntIot.value;
    } else {
        qntIot.value = '';
    }
    if (horaDesenvolvimento.value.length > 0) {
        horaDesenvolvimento.value = prefixoReal + horaDesenvolvimento.value;
    } else {
        horaDesenvolvimento.value = prefixoReal + '0';
    }
    if (qntHorasDev.value.length > 0) {
        qntHorasDev.value = qntHorasDev.value + ' Horas';
    } else {
        qntHorasDev.value = '';
    }
    if (mensalidadeOpcionais.value.length > 0) {
        mensalidadeOpcionais.value = prefixoReal + mensalidadeOpcionais.value;
    } else {
        mensalidadeOpcionais.value = prefixoReal + '0';
    }
    if (setupWhiteLabelUnico.value.length > 0) {
        setupWhiteLabelUnico.value = prefixoReal + setupWhiteLabelUnico.value;
    } else {
        setupWhiteLabelUnico.value = prefixoReal + '0';
    }
    if (desenvolvimentoUnico.value.length > 0) {
        desenvolvimentoUnico.value = prefixoReal + desenvolvimentoUnico.value;
    } else {
        desenvolvimentoUnico.value = prefixoReal + '0';
    }
    if (FIM_taxaAtivacao.value.length > 0) {
        FIM_taxaAtivacao.value = prefixoReal + FIM_taxaAtivacao.value;
    } else {
        FIM_taxaAtivacao.value = prefixoReal + '0';
    }
    if (FIM_mensalidadeGeral.value.length > 0) {
        FIM_mensalidadeGeral.value = prefixoReal + FIM_mensalidadeGeral.value;
    } else {
        FIM_mensalidadeGeral.value = prefixoReal + '0';
    }
    if (taxaUnicaWL_DEV.value.length > 0) {
        taxaUnicaWL_DEV.value = prefixoReal + taxaUnicaWL_DEV.value;
    } else {
        taxaUnicaWL_DEV.value = prefixoReal + '0';
    }

}

function DEFINE_precoUnitario() {
    if (numeroUsuarios.value <= 2) {
        precoUnitario.value = 148.70;
    } else if (numeroUsuarios.value == 3) {
        precoUnitario.value = 123.92;
    } else if (numeroUsuarios.value == 4) {
        precoUnitario.value = 108.43;
    } else if (numeroUsuarios.value == 5) {
        precoUnitario.value = 92.16;
    } else if (numeroUsuarios.value == 6) {
        precoUnitario.value = 79.87;
    } else if (numeroUsuarios.value == 7) {
        precoUnitario.value = 70.75;
    } else if (numeroUsuarios.value == 8) {
        precoUnitario.value = 63.67;
    } else if (numeroUsuarios.value == 9) {
        precoUnitario.value = 59;
    } else if (numeroUsuarios.value >= 10 && numeroUsuarios.value <= 12) {
        precoUnitario.value = 54.58;
    } else if (numeroUsuarios.value >= 13 && numeroUsuarios.value <= 15) {
        precoUnitario.value = 51.22;
    } else if (numeroUsuarios.value >= 16 && numeroUsuarios.value <= 21) {
        precoUnitario.value = 48.66;
    } else if (numeroUsuarios.value >= 22 && numeroUsuarios.value <= 27) {
        precoUnitario.value = 46.89;
    } else if (numeroUsuarios.value >= 28 && numeroUsuarios.value <= 38) {
        precoUnitario.value = 45.55;
    } else if (numeroUsuarios.value >= 39 && numeroUsuarios.value <= 49) {
        precoUnitario.value = 44.61;
    } else if (numeroUsuarios.value >= 50 && numeroUsuarios.value <= 60) {
        precoUnitario.value = 43.90;
    } else if (numeroUsuarios.value >= 61 && numeroUsuarios.value <= 71) {
        precoUnitario.value = 43.32;
    } else if (numeroUsuarios.value >= 72 && numeroUsuarios.value <= 82) {
        precoUnitario.value = 42.84;
    } else if (numeroUsuarios.value >= 83 && numeroUsuarios.value <= 93) {
        precoUnitario.value = 42.43;
    } else if (numeroUsuarios.value > 93) {
        precoUnitario.value = 42.43;
    }
    return precoUnitario.value;
}

function DEFINE_precoUnitarioDesconto() {

    let aux = parseFloat(precoUnitario.value) * parseFloat(1 - (desconto.value / 100));
    precoUnitarioDesconto.value = aux.toFixed(2);
    return precoUnitarioDesconto.value;
}

function DEFINE_mensalidadePlanoFSM() {
    let aux = parseFloat(numeroUsuarios.value) * parseFloat(precoUnitarioDesconto.value);
    mensalidadePlanoFSM.value = aux.toFixed(2);
    return mensalidadePlanoFSM.value;
}

function DEFINE_precoUnitarioAjustado() {
    let aux = parseFloat(valorBase.value) * parseFloat(1 - (ajusteVolume.value / 100));
    precoUnitarioAjustado.value = aux.toFixed(2);
    return precoUnitarioAjustado.value;
}

function DEFINE_mensalidadePlanoPCM() {
    let aux = parseFloat(numeroAtivos.value) * parseFloat(precoUnitarioAjustado.value);
    mensalidadePlanoPCM.value = aux.toFixed(2);
    return mensalidadePlanoPCM.value;
}

function DEFINE_mensalidadeBasica() {

    if (numeroUsuarios.value.length == 0) {
        let aux1 = parseFloat(mensalidadePlanoPCM.value);
        mensalidadeBasica.value = aux1.toFixed(2);

    } else if (numeroAtivos.value.length == 0) {
        let aux2 = parseFloat(mensalidadePlanoFSM.value);
        mensalidadeBasica.value = aux2.toFixed(2);

    } else {
        let aux3 = parseFloat(mensalidadePlanoFSM.value) + parseFloat(mensalidadePlanoPCM.value);
        mensalidadeBasica.value = aux3.toFixed(2);
    }

}

function checkValue() {
    console.log(mensalidadeOpcionais.value);
}

function STATUScheckBox1() {
    if (checkBox1.checked == false) {
        setupWhiteLabel.value = '';
        setupWhiteLabelUnico.value = '';
    } else {
        setupWhiteLabel.value = 9871.17;
    }
}

function STATUScheckBox2() {
    if (checkBox2.checked == false) {
        mensalidadeWhiteLabel.value = '';
        DEFINE_mensalidadeOpcionais();
        DEFINE_mensalidadeGeralFIM()
    } else {
        mensalidadeWhiteLabel.value = 455;
        DEFINE_mensalidadeOpcionais();
        DEFINE_mensalidadeGeralFIM()
    }
}

function STATUScheckBox3() {
    if (checkBox3.checked == false) {
        dashboardAvancado.value = '';
        DEFINE_mensalidadeOpcionais();
        DEFINE_mensalidadeGeralFIM()
    } else {
        dashboardAvancado.value = 397;
        DEFINE_mensalidadeOpcionais();
        DEFINE_mensalidadeGeralFIM()
    }
}

function STATUScheckBox4() {
    if (checkBox4.checked == false) {
        sla.value = '';
        DEFINE_mensalidadeOpcionais();
        DEFINE_mensalidadeGeralFIM()
    } else {
        sla.value = 197;
        DEFINE_mensalidadeOpcionais();
        DEFINE_mensalidadeGeralFIM()
    }
}

function STATUScheckBox5() {
    const htmlInput_conexaoIot =
        '<input type="text"id="qntIot"name="qntIot"placeholder="Inserir quantidade"autocomplete="off">'

    if (checkBox5.checked == false) {
        conexaoIot.value = '';
        qntIot.value = '';
    } else {
        conexaoIot.value = 0;
        // if (document.getElementById("qntIot") == null)
        //     DIVconexaoIot.insertAdjacentHTML("beforeend", htmlInput_conexaoIot);
    }
}

function STATUScheckBox6() {
    const htmlInput_horasDev = '<input onchange="DEFINE_desenvolvimentoUnico(), DEFINE_taxaunicaWL_DEV()" type="text"id="qntHorasDev" name="qntHorasDev" placeholder="Inserir quantidade" autocomplete="off">'
    if (checkBox6.checked == false) {
        horaDesenvolvimento.value = '';
        qntHorasDev.value = '';
    } else {
        horaDesenvolvimento.value = 385;
        // if (document.getElementById("qntHorasDev") == null)
        //     DIVhoraDesenvolvimento.insertAdjacentHTML("beforeend", htmlInput_horasDev);
    }
}

function DEFINE_mensalidadeOpcionais() {
    let aux = 0;

    if (checkBox2.checked == true) {
        aux += parseFloat(mensalidadeWhiteLabel.value);
    }
    if (checkBox3.checked == true) {
        aux += parseFloat(dashboardAvancado.value);
    }
    if (checkBox4.checked == true) {
        aux += parseFloat(sla.value);
    }

    mensalidadeOpcionais.value = aux.toFixed(0);
    return mensalidadeOpcionais.value;

}

function DEFINE_setupWhiteLabelUnico() {
    if (checkBox1.checked == false) {
        setupWhiteLabelUnico.value = '';
    } else setupWhiteLabelUnico.value = 9871.17;
}

function DEFINE_desenvolvimentoUnico() {
    if (checkBox6.checked == true) {
        let aux = parseFloat(horaDesenvolvimento.value) * parseFloat(qntHorasDev.value);
        desenvolvimentoUnico.value = aux.toFixed(2);
    } else desenvolvimentoUnico.value = '';

    return desenvolvimentoUnico.value;
}

function DEFINE_taxaAtivacaoFIM() {
    FIM_taxaAtivacao.value = taxaAtivacao.value;
    return FIM_taxaAtivacao.value;
}

function DEFINE_mensalidadeGeralFIM() {

    let aux = ((parseFloat(numeroUsuarios.value) * parseFloat(precoUnitarioDesconto.value)) + parseFloat(numeroAtivos.value) * parseFloat(precoUnitarioAjustado.value)) + parseFloat(mensalidadeOpcionais.value);
    FIM_mensalidadeGeral.value = aux.toFixed(2);
    return FIM_mensalidadeGeral.value;
}

function DEFINE_taxaunicaWL_DEV() {
    if (checkBox6.checked == true && qntHorasDev.value > 0 && checkBox1.checked == true) {
        let aux1 = parseFloat(setupWhiteLabelUnico.value) + parseFloat(desenvolvimentoUnico.value);
        taxaUnicaWL_DEV.value = aux1.toFixed(2);
    } else if (checkBox6.checked == true && qntHorasDev.value > 0 && checkBox1.checked == false) {
        let aux2 = parseFloat(desenvolvimentoUnico.value);
        taxaUnicaWL_DEV.value = aux2.toFixed(2);
    } else if (checkBox6.checked == false && checkBox1.checked == true) {
        let aux3 = parseFloat(setupWhiteLabelUnico.value);
        taxaUnicaWL_DEV.value = aux3.toFixed(2);
    } else if (checkBox6.checked == true && qntHorasDev.value == 0 || qntHorasDev.value.length == 0 && checkBox1.checked == true) {
        let aux4 = parseFloat(setupWhiteLabelUnico.value);
        taxaUnicaWL_DEV.value = aux4.toFixed(2);
    } else taxaUnicaWL_DEV.value = '';

    return taxaUnicaWL_DEV.value;
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


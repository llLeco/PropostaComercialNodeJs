const mongoose = require('mongoose');

const TabelaSchema = new mongoose.Schema({
    validadeDaProposta: { type: Number, required: true },
    valorBase: { type: Number, required: true },
    setupWhiteLabel: { type: Number, required: true },
    mensalidadeWhiteLabel: { type: Number, required: true },
    dashboardAvancado: { type: Number, required: true },
    sla: { type: Number, required: true },
    horaDeDesenvolvimento: { type: Number, required: true },

    menosque2: { type: Number, required: true },
    igual3: { type: Number, required: true },
    igual4: { type: Number, required: true },
    igual5: { type: Number, required: true },
    igual6: { type: Number, required: true },
    igual7: { type: Number, required: true },
    igual8: { type: Number, required: true },
    igual9: { type: Number, required: true },
    entre10e12: { type: Number, required: true },
    entre13e15: { type: Number, required: true },
    entre16e21: { type: Number, required: true },
    entre22e27: { type: Number, required: true },
    entre28e38: { type: Number, required: true },
    entre39e49: { type: Number, required: true },
    entre50e60: { type: Number, required: true },
    entre61e71: { type: Number, required: true },
    entre72e82: { type: Number, required: true },
    entre83e93: { type: Number, required: true },
    maisque93: { type: Number, required: true },
});

const TabelaModel = mongoose.model('Tabela', TabelaSchema);

function Tabela(body) {
    this.body = body;
    this.errors = [];
    this.tabela = null;
}


Tabela.prototype.valida = function() {
    this.cleanUp();
    
    if(!this.body.validadeDaProposta) this.errors.push('Validade da proposta é um campo obrigatório.');
    if(!this.body.valorBase) this.errors.push('Valor base é um campo obrigatório.');
    if(!this.body.setupWhiteLabel) this.errors.push(' Setup white label é um campo obrigatório.');
    if(!this.body.mensalidadeWhiteLabel) this.errors.push(' Mensalidade white label é um campo obrigatório.');
    if(!this.body.dashboardAvancado) this.errors.push(' Dashboard avancado é um campo obrigatório.');
    if(!this.body.sla) this.errors.push(' Sla é um campo obrigatório.');
    if(!this.body.horaDeDesenvolvimento) this.errors.push(' Hora de desenvolvimento é um campo obrigatório.');
}

Tabela.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    
    this.body = {
        validadeDaProposta: this.body.validadeDaProposta,
        valorBase: this.body.valorBase,
        setupWhiteLabel: this.body.setupWhiteLabel,
        mensalidadeWhiteLabel: this.body.mensalidadeWhiteLabel,
        dashboardAvancado: this.body.dashboardAvancado,
        sla: this.body.sla,
        horaDeDesenvolvimento: this.body.horaDeDesenvolvimento,
        
        menosque2: this.body.menosque2,
        igual3: this.body.igual3,
        igual4: this.body.igual4,
        igual5: this.body.igual5,
        igual6: this.body.igual6,
        igual7: this.body.igual7,
        igual8: this.body.igual8,
        igual9: this.body.igual9,
        entre10e12: this.body.entre10e12,
        entre13e15: this.body.entre13e15,
        entre16e21: this.body.entre16e21,
        entre22e27: this.body.entre22e27,
        entre28e38: this.body.entre28e38,
        entre39e49: this.body.entre39e49,
        entre50e60: this.body.entre50e60,
        entre61e71: this.body.entre61e71,
        entre72e82: this.body.entre72e82,
        entre83e93: this.body.entre83e93,
        maisque93: this.body.maisque93,

    };
}

Tabela.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.tabela = await TabelaModel.findByIdAndUpdate(id, this.body, { new: true });
};

Tabela.prototype.register = async function() {
    this.valida();
    if(this.errors.length > 0) return;
    this.tabela = await TabelaModel.create(this.body);
}

Tabela.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const tabela = await TabelaModel.findById(id);
    return tabela;
  };

Tabela.buscaTabelas = async function() {
        const tabelas = await TabelaModel.find();
        return tabelas;
}




module.exports = Tabela;

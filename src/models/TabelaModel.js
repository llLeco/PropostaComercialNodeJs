const mongoose = require('mongoose');

const TabelaSchema = new mongoose.Schema({
    validadeDaProposta: { type: String, required: true },
    precoUnitario: { type: String, required: true },
    valorBase: { type: String, required: true },
    setupWhiteLabel: { type: String, required: true },
    mensalidadeWhiteLabel: { type: String, required: true },
    dashboardAvancado: { type: String, required: true },
    sla: { type: String, required: true },
    conexaoIot: { type: String, required: true },
    horaDeDesenvolvimento: { type: String, required: true },
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
    if(!this.body.precoUnitario) this.errors.push('Preco unitario é um campo obrigatório.');
    if(!this.body.valorBase) this.errors.push('Valor base é um campo obrigatório.');
    if(!this.body.setupWhiteLabel) this.errors.push(' Setup white label é um campo obrigatório.');
    if(!this.body.mensalidadeWhiteLabel) this.errors.push(' Mensalidade white label é um campo obrigatório.');
    if(!this.body.dashboardAvancado) this.errors.push(' Dashboard avancado é um campo obrigatório.');
    if(!this.body.sla) this.errors.push(' Sla é um campo obrigatório.');
    if(!this.body.conexaoIot) this.errors.push(' Conexao iot é um campo obrigatório.');
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
        precoUnitario: this.body.precoUnitario,
        valorBase: this.body.valorBase,
        setupWhiteLabel: this.body.setupWhiteLabel,
        mensalidadeWhiteLabel: this.body.mensalidadeWhiteLabel,
        dashboardAvancado: this.body.dashboardAvancado,
        sla: this.body.sla,
        conexaoIot: this.body.conexaoIot,
        horaDeDesenvolvimento: this.body.horaDeDesenvolvimento,
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

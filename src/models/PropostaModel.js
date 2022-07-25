const mongoose = require('mongoose');
const validator = require('validator');

const PropostaSchema = new mongoose.Schema({
  account_id: { type: String, required: true },
  tabela_id: { type: String, required: true },
  razao_social: { type: String, required: true },
  nome: { type: String, required: true },
  cnpj: { type: String, required: true },
  email_cobranca: { type: String, required: true },
  numero_usuarios: { type: String, required: true },
  desconto: { type: String, required: false },
  numero_ativos: { type: String, required: true },
  ajuste_por_volume: { type: String, required: false },
  dashboardAvancadoCheckbox: { type: String, required: false },
  setupWhiteLabelCheckbox: { type: String, required: false },
  slaCheckbox: { type: String, required: false },
  mensalidadeWhiteLabelCheckbox: { type: String, required: false },
  horaDesenvolvimentoCheckbox: { type: String, required: false },
  qntd_horas: { type: String, required: false },
  taxa_unica_ativacao: { type: String, required: true },
  observacoes: { type: String, required: false },
});

const PropostaModel = mongoose.model('Proposta', PropostaSchema);

function Proposta(body) {
  this.body = body;
  this.errors = [];
  this.proposta = null;
}

Proposta.prototype.compareId = function(account_id) {
  return account_id === req.session.user._id;
}

Proposta.prototype.register = async function(account_id) {
  this.body.account_id = account_id;
  this.valida();
  if(this.errors.length > 0) return;
  this.proposta = await PropostaModel.create(this.body);
};

Proposta.prototype.valida = function() {
  this.cleanUp();
  if(!validator.isLength(this.body.razao_social, { min: 3, max: 100 })) {
    this.errors.push('Razão social deve ter entre 3 e 100 caracteres.');
  }
  if(!validator.isLength(this.body.nome, { min: 3, max: 100 })) {
    this.errors.push('Nome deve ter entre 3 e 100 caracteres.');
  }
  if(!validator.isLength(this.body.cnpj, { min: 14, max: 14 })) {
    this.errors.push('CNPJ deve ter 14 caracteres.');
  }
  if(!validator.isEmail(this.body.email_cobranca)) {
    this.errors.push('Email de cobrança inválido.');
  }
  if(!validator.isNumeric(this.body.numero_usuarios)) {
    this.errors.push('Número de usuários deve ser um número.');
  }
  if(!validator.isNumeric(this.body.numero_ativos)) {
    this.errors.push('Número de ativos deve ser um número.');
  }
  if(!validator.isNumeric(this.body.taxa_unica_ativacao)) {
    this.errors.push('Taxa única de ativação deve ser um número.');
  }
};

Proposta.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    account_id: this.body.account_id,
    tabela_id: this.body.tabela_id,
    razao_social: this.body.razao_social,
    nome: this.body.nome,
    cnpj: this.body.cnpj,
    email_cobranca: this.body.email_cobranca,
    numero_usuarios: this.body.numero_usuarios,
    desconto: this.body.desconto,
    numero_ativos: this.body.numero_ativos,
    ajuste_por_volume: this.body.ajuste_por_volume,
    dashboardAvancadoCheckbox: this.body.dashboardAvancadoCheckbox,
    setupWhiteLabelCheckbox: this.body.setupWhiteLabelCheckbox,
    slaCheckbox: this.body.slaCheckbox,
    mensalidadeWhiteLabelCheckbox: this.body.mensalidadeWhiteLabelCheckbox,
    horaDesenvolvimentoCheckbox: this.body.horaDesenvolvimentoCheckbox,
    qntd_horas: this.body.qntd_horas,
    taxa_unica_ativacao: this.body.taxa_unica_ativacao,
    observacoes: this.body.observacoes,
  };
};

Proposta.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0) return;
  this.proposta = await PropostaModel.findByIdAndUpdate(id, this.body, { new: true });
};

// Métodos estáticos
Proposta.buscaPorId = async function(id) {
  if(typeof id !== 'string') return;
  const proposta = await PropostaModel.findById(id);
  return proposta;
};

Proposta.buscaPropostas = async function() {
  const propostas = await PropostaModel.find()
    .sort({ criadoEm: -1 });
  return propostas;
};

Proposta.delete = async function(id) {
  if(typeof id !== 'string') return;
  const proposta = await PropostaModel.findOneAndDelete({_id: id});
  return proposta;
};


module.exports = Proposta;

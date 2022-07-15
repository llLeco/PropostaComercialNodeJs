const Tabela = require('../models/TabelaModel');
const Proposta = require('../models/PropostaModel');



exports.index = async(req, res) => {
  const propostas = await Proposta.buscaPropostas();
  const tabelas = await Tabela.buscaTabelas();
  res.render('index', { tabelas, propostas});
};


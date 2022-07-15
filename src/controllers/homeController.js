const Tabela = require('../models/TabelaModel');
const Proposta = require('../models/PropostaModel');



exports.index = async(req, res) => {
  const propostas = await Proposta.buscaPropostas();
  const tabelas = await Tabela.buscaTabelas();
  if(req.session.user){
    const usuario = req.session.user._id;
    res.render('index', { tabelas, propostas, usuario });
  } else{
    const usuario = null;
    res.render('index', { tabelas, propostas, usuario });
  }
};


const Proposta = require('../models/PropostaModel');
const Tabela = require('../models/TabelaModel');
const Template = require('../models/TemplateModel');

exports.index = async (req, res) => {
    return res.render('template', {});
};

exports.pdf = async (req, res) => {
    const tabela = await Tabela.buscaTabelas();
    const proposta = await Proposta.buscaPorId(req.params.id);
    res.render('template', { tabela, proposta });
}

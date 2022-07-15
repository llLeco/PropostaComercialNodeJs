const Proposta = require('../models/PropostaModel');

exports.index = (req, res) => {
  res.render('proposta', {
    proposta: {}
  });
};

exports.register = async(req, res) => {
  try {
    const proposta = new Proposta(req.body);
    await proposta.register();

    if(proposta.errors.length > 0) {
      req.flash('errors', proposta.errors);
      req.session.save(() => res.redirect('/proposta/index'));
      return;
    }

    req.flash('success', 'Proposta registrada com sucesso.');
    req.session.save(() => res.redirect(`/proposta/index/${proposta.proposta._id}`));
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const proposta = await Proposta.buscaPorId(req.params.id);
  if(!proposta) return res.render('404');

  res.render('proposta', { proposta });
};

exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('404');
    const proposta = new Proposta(req.body);
    await proposta.edit(req.params.id);

    if(proposta.errors.length > 0) {
      req.flash('errors', proposta.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Proposta editado com sucesso.');
    req.session.save(() => res.redirect(`/proposta/index/${proposta.proposta._id}`));
    return;
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const proposta = await Proposta.delete(req.params.id);
  if(!proposta) return res.render('404');

  req.flash('success', 'Proposta apagado com sucesso.');
  req.session.save(() => res.redirect('back'));
  return;
};

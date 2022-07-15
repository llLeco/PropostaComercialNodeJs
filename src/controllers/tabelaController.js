const Tabela = require('../models/TabelaModel');

// exports.index = (req, res) => {
//     res.render('tabela', {
//       tabela: {}
//     });
//   };

exports.index = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const tabela = await Tabela.buscaPorId(req.params.id);
    if(!tabela) return res.render('404');

    res.render('tabela', { tabela });
}

exports.register = async(req, res) => {
    try {
      const tabela = new Tabela(req.body);
      await tabela.register();
  
      if(tabela.errors.length > 0) {
        req.flash('errors', tabela.errors);
        req.session.save(() => res.redirect('back'));
        return;
      }
  
      req.flash('success', 'Tabela registrado com sucesso.');
      req.session.save(() => res.redirect(`/tabela/index/${tabela.tabela._id}`));
      return;
    } catch(e) {
      console.log(e);
      return res.render('404');
    }
  };

exports.edit = async function(req, res) {
   try{

    if(!req.params.id) return res.render('404');

    const tabela = new Tabela(req.body);
    await tabela.edit(req.params.id);

    if(tabela.errors.length > 0) {
        req.flash('errors', tabela.errors);
        req.session.save(() => res.redirect(`/tabela/index/${tabela.tabela._id}`));
        return;
    }

    req.flash('success', 'Tabela editada com sucesso!');
    req.session.save(() => res.redirect(`/tabela/index/${tabela.tabela._id}`));

    return;

   }catch(err){
       console.log(err);
       res.render('404');
   }
}

   




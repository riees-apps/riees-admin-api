/**
 * InstituicaoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    destroy: async function(req, res) {
        let instituicao = await Instituicao.updateOne({ id: req.params.id }).set({
            deletedAt: Date.now()
        });

        if (!instituicao) {
            res.status(404).type('text/plain').send('Not Found');
        }
        else {
            res.json(instituicao);
        }
    },
};


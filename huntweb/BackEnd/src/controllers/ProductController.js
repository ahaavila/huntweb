const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

    // Listo todos os produtos criados
    async index(req, res) {
        const { page = 1 } = req.query;

        const products = await Product.paginate({ }, { page , limit: 10 });

        return res.json(products);
    },

    // Mostra um produto específico
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Criação dos produtos
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Atualiza um produto
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true //retorna para a variavel product o produto atualizado
        });

        return res.json(product);
    },

    // Exclui um produto
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
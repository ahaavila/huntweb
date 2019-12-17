import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // Metodo que executa assim que um componente é exibido em tela
    componentDidMount() {
        this.loadProducts( );
    }

    loadProducts = async (page = 1)  => {

        // Vamos acessar nossa api
        const response = await api.get(`/products?page=${page}`);

        // Crio duas variáveis, docs que recebe o products e productInfo que recebe o restante.
        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        // Se a pagina for igual a um, não preciso voltar, apenas retorno.
        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        // Se a pagina que estamos atualmente for igual a última página, não faz nada.
        if (page === productInfo.pages) {
            return;
        } else {
            const pageNumber = page + 1;

            this.loadProducts(pageNumber);
        }

    };

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                { products.map(product => (
                    <article key={ product._id }>
                        <strong>{ product.title }</strong>
                        <p>{ product.description }</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={ page === 1 } onClick={this.prevPage}>Anterior</button>
                    <button disabled={ page === productInfo.pages } onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }   
}
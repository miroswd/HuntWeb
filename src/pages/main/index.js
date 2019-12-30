import React, {Component} from 'react'
import api from '../../services/api'

import {Link} from 'react-router-dom' // Para fazer o redirecionamento de páginas

import './style.css'

export default class Main extends Component {
  state = {
    products:[], // Array que armazenará todas as informações de response.data.docs
    productInfo: [], // Informações da página
    page: 1
  }

  componentDidMount(){
    // Executado assim que o componente é executado em tela
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)  // Requisição a api
    const {docs, ...productInfo} = response.data // Capturando docs e todas as outras informações
    this.setState({products:docs, productInfo, page}) // Propriedades que quero atualizar
    console.log(this.state)
    //console.log(response.data.docs)
  }

  prevPage = () => {
    const {page} = this.state

    if (page === 0) return;
    
    const pageNumber = page - 1
    this.loadProducts(pageNumber)
  };

  nextPage = () => {
    const{page, productInfo} = this.state

    if (page === productInfo.pages) return; // Valida se está na última página
    console.log(page)
    const pageNumber = page + 1 // Pegando a próxima página
    this.loadProducts(pageNumber)

  };


  render(){
    const {products, page, productInfo} = this.state

    return(
      <div className="product-list">
        {products.map(product => (
        <article key={product._id}>
          <strong>{product.title}</strong>         
          <p>{product.description}</p>
          <Link to={`/products/${product._id}`}>Acessar</Link>
        </article>
        ))}
        
        {/* Criando as funcionalidades de páginas */}

        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages}onClick={this.nextPage}>Próximo</button>
        </div>

      </div>

    )
  }
}


/*
  * Métodos do react devem ser no formato tradicional de function, named Function 
  * Functions criadas por nós, devem ser em arrow function
  * 
  * Dentro do react, não criamos variáveis para armazernar valores
  * Utilizamos o conceito estado, state = {}
  * Dentro do state, armazenamos as variáveis
*/
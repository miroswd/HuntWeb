import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'
const Routes = () => (
  <BrowserRouter>
    {/* Define as rotas através do Browser */}
    <Switch>
      {/* Permite que apenas uma rota seja chamada */}
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
      
    </Switch>
  </BrowserRouter>
)
export default Routes


/*
O react-router-dom, ao usar o path, ele busca pela primeira rota com "/", por conta do switch
ele verifica se tem aquele endereço, se tiver ele para de seguir 
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import CadastroVideo from './pages/Cadastro/Video'
import CadastroCategoria from './pages/Cadastro/Categoria'
import Pagina404 from './pages/404/index'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastroVideo' component={CadastroVideo} exact />
      <Route path='/cadastroCategoria' component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
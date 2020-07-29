import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDafault'

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>
      <Link to="/cadastroVideo/cadastroCategoria">
        Cadastrar Categoria
       </Link>
    </PageDefault>
    )
}

export default CadastroVideo
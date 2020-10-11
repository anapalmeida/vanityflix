import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState(['Teste'])
  const [values, setValues] = useState(valoresIniciais)

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {values.nome}</h1>
      <form onSubmit={function handleSumit(event) {
        event.preventDefault()
        console.log("Enviou")
        setCategorias([
          ...categorias,
          values
        ])
      }}>
        <div>
          <label>
            Nome da Categoria:
          <input type="text"
              value={values.nome}
              onChange={function handleChange(value) {
                setValues(value.target.value)
              }} />
          </label>
        </div>
        <div>
          <label>
            Descrição da Categoria:
          <textarea type="text"
              value={values.descricao}
              onChange={function handleChange(value) {
                setValues(value.target.value)
              }} />
          </label>
        </div>
        <div>
          <label>
            Cor da Categoria:
          <input type="color"
              value={values.cor}
              onChange={function handleChange(value) {
                setValues(value.target.value)
              }} />
          </label>
        </div>
        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}

            </li>
          )
        })}
      </ul>


      <Link to='/'>
        Ir para home
       </Link>
    </PageDefault>
  )
}

export default CadastroCategoria
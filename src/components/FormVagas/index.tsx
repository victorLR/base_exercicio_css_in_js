import React, { FormEvent, useState } from 'react'
import { Form, BtnPesquisar, Campo } from './styles' // Importando os componentes estilizados

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const aoAlterarTermo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={aoAlterarTermo} // Usando a função com tipo explícito
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Form>
  )
}

export default FormVagas

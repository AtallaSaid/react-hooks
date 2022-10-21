import Accordion from './Accordion'

const itens = [
  {
      titulo: "Java",
      conteudo: "Linguagem compilada e interpretada"
  },
  {
      titulo: "Python",
      conteudo: "Linguagem interpretada e dinamicamente tipada"
  },
  {
      titulo: "JavaScript",
      conteudo: "Interpretada, executa do lado do cliente e do lado do servidor também"
  }

 ]

const App = () => {
  return (
    <div>
      <Accordion itens={itens}/>
    </div>
  )
}

export default App
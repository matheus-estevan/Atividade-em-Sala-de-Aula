import HowlsMovin from './components/Comeco'
import Conteudo from './components/Conteudo'
import Estudios from './components/Estudio'

export default function App() {
  return (
    <section>
      <HowlsMovin />
      <div>
        <Conteudo />
        <Estudios />
      </div>
    </section>
  )
}

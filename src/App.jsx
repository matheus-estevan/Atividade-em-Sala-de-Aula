import HowlsMovin from './components/Comeco'
import Conteudo from './components/Conteudo'
import Estudios from './components/Estudio'

export default function App() {
  return (
    <section>
      <HowlsMovin />
      <div className='px-4'>
        <Conteudo />
        <Estudios />
      </div>
    </section>
  )
}

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HowlsMovin from './components/Comeco'
import Conteudo from './components/Conteudo'
import Estudios from './components/Estudio'
import Info from './components/Informacoes'

export default function App() {
  return (
    <section>
      <HowlsMovin />
      <div className='px-4'>
        <Conteudo />
        <Estudios />
        <Info />
      </div>
    </section>
  )
}

import Imagem from '/studio.png'
import Sophie from '/sophie.webp'
import Howl from '/howl.webp'

import Head from '../assets/components/Header'


export default function () {
 return (
  <div>
    <header>
    <Head />
    </header>
  
      <section>
        

          <div className='flex items-center'>
              <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Studios Ghibli</h1>
              <img src={Imagem} alt="Imagem dos Studios Ghibli" className='w-32 h-auto ml-5'/>
          </div>
          <p className='font-poppins'>Os Estúdios Ghibli são mundialmente conhecidos por sua excelência na produção de animações, e "O Castelo Animado" não é exceção. O filme foi produzido pelo Studio Ghibli, fundado por Hayao Miyazaki e Isao Takahata, renomados diretores e animadores japoneses.</p>

          <p className='font-poppins mb-10'>O Studio Ghibli é famoso por criar histórias cativantes, personagens complexos e mundos fantásticos que encantam pessoas de todas as idades. Suas animações são reconhecidas pela qualidade artística, atenção aos detalhes e temas profundos que exploram questões como o meio ambiente, a natureza humana, a amizade e a superação de desafios. "O Castelo Animado" é mais uma obra-prima do Studio Ghibli, que combina animação tradicional deslumbrante com uma narrativa emocionante e personagens memoráveis. O estúdio é amplamente admirado por sua capacidade de criar filmes que tocam o coração do público e permanecem como clássicos atemporais da animação.</p>
          <div className='flex'>
            <div className='mr-8'>
              <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Personagens</h1>
              <div className='flex items-center mb-4'>
                <img src={Sophie} alt='Sophie' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Sophie - Uma jovem amaldiçoada por uma bruxa.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Howl} alt='Howl' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Howl - Um mago poderoso e enigmático.</p>
              </div>
              {/* Adicione mais informações e imagens dos personagens conforme necessário */}
            </div>
            <div>
              <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Elenco</h1>
              <div className='flex items-center mb-4'>
                <img src='/caminho/para/imagem-ator1.jpg' alt='Emily Mortimer' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Emily Mortimer - Voz de Sophie.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src='/caminho/para/imagem-ator2.jpg' alt='Christian Bale' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Christian Bale - Voz de Howl.</p>
              </div>
              {/* Adicione mais informações e imagens do elenco conforme necessário */}
            </div>
          </div>
      </section>
    </div>
  )
}

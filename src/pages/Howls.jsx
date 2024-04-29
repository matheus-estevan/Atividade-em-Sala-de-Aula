import Imagem from '/studio.png'
import Sophie from '/sophie.webp'
import Howl from '/howl.webp'
import Markl from '/markl.jpg'
import Kakashi from '/kakashi.jpg'
import Calcifer from '/calcifer.jpg'
import Bruxa from '/bruxa.webp'

import Emily from '/emily.jpg'
import Takuya from '/takuya.jpg'
import Lauren from '/lauren.jfif'
import Tatsuya from '/tatsuya.webp'
import Ryu from '/ryu.webp'
import Yo from '/yo.jpg'

import Head from '../components/Header'


export default function () {
 return (
  <div>
    <header>
    <Head />
    </header>
  
      <section>
        <h1 className='font-poppins font-extrabold uppercase text-6xl mt-20 text-sky-500'>Howl's Moving Castle</h1>
        <p className='font-poppins  font-normal mt-4 mb-10'>É um filme de animação japonês de fantasia de 2004 escrito e dirigido por Hayao Miyazaki. É vagamente baseado no romance homônimo de 1986, da autora britânica Diana Wynne Jones. O filme foi produzido por Toshio Suzuki, animado pelo Studio Ghibli e distribuído pela Toho.</p>

        <h2 className="font-poppins text-sky-500 text-5xl font-semibold mb-5">Sinopse:</h2>

        <p className="font-poppins  mb-10">O filme conta a história de Sophie, uma jovem que trabalha na chapelaria de sua família. Um dia, ela é transformada em uma velha senhora por uma bruxa ciumenta. Desesperada, Sophie foge e encontra um imponente castelo ambulante pertencente ao misterioso Howl, um mago cujo coração foi amaldiçoado e preso por um demônio de fogo. Dentro do castelo, ela faz amizade com Calcifer, o demônio que alimenta o castelo, e se torna a governanta de Howl. Através de suas aventuras e encontros com personagens fascinantes, Sophie embarca em uma jornada de autoconhecimento e descobre segredos sobre si mesma, Howl e o mundo mágico que os cerca.</p>

        <h2 className="font-poppins text-sky-500 text-5xl font-semibold mb-4">História:</h2>

        <p className="font-poppins whitespace-pre-line mb-10">A história de "O Castelo Animado" é uma aventura mágica que segue a jornada de Sophie, uma jovem que trabalha em uma chapelaria e é transformada em uma velha senhora por uma bruxa ciumenta. Após essa transformação, Sophie embarca em uma jornada para encontrar uma cura para seu feitiço.<br></br>

        Durante sua busca, Sophie encontra o castelo ambulante de Howl, um mago enigmático que possui um coração amaldiçoado. O castelo é uma maravilha mecânica e mágica, movida por Calcifer, um demônio de fogo com quem Sophie faz um pacto para se tornar a nova governanta do castelo. Dentro do castelo, ela conhece Markl, o aprendiz de Howl, e o próprio Howl, um mago habilidoso mas atormentado por seus próprios segredos e medos.<br></br>

        Enquanto Sophie tenta desfazer sua própria maldição, ela se vê envolvida em uma guerra eminente entre dois reinos. Ela descobre segredos sombrios sobre Howl, incluindo seu passado traumático e sua ligação com o conflito que se aproxima. Através de suas aventuras e desafios, Sophie e Howl desenvolvem um vínculo especial, enfrentando juntos não apenas seus inimigos externos, mas também suas próprias inseguranças e medos.<br></br>

        A história é um conto de amizade, coragem e autodescoberta, ambientado em um mundo de magia, máquinas e personagens cativantes.<br></br></p>
        

          <div className='flex items-center'>
              <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Studios Ghibli</h1>
              <img src={Imagem} alt="Imagem dos Studios Ghibli" className='w-32 h-auto ml-5'/>
          </div>
          <p className='font-poppins'>Os Estúdios Ghibli são mundialmente conhecidos por sua excelência na produção de animações, e "O Castelo Animado" não é exceção. O filme foi produzido pelo Studio Ghibli, fundado por Hayao Miyazaki e Isao Takahata, renomados diretores e animadores japoneses.</p>

          <p className='font-poppins mb-10'>O Studio Ghibli é famoso por criar histórias cativantes, personagens complexos e mundos fantásticos que encantam pessoas de todas as idades. Suas animações são reconhecidas pela qualidade artística, atenção aos detalhes e temas profundos que exploram questões como o meio ambiente, a natureza humana, a amizade e a superação de desafios. "O Castelo Animado" é mais uma obra-prima do Studio Ghibli, que combina animação tradicional deslumbrante com uma narrativa emocionante e personagens memoráveis. O estúdio é amplamente admirado por sua capacidade de criar filmes que tocam o coração do público e permanecem como clássicos atemporais da animação.</p>
          <div className='flex justify-center'>
            <div className='mr-8'>
            
              <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Personagens</h1>
              <div className='flex items-center mb-4'>
                <img src={Calcifer} alt='Calcifer' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Calcifer - O coração do castelo animado.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Sophie} alt='Sophie' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Sophie - Uma jovem amaldiçoada por uma bruxa.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Howl} alt='Howl' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Howl - Um mago poderoso e enigmático.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Markl} alt='Markl' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Markl - Aprendiz do mago Howl.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Kakashi} alt='Kakashi no Kabu' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Kakashi no Kabu - Espantalho amaldiçoado.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Bruxa} alt='Kakashi no Kabu' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Bruxa do Nada - Uma bruxa muito poderosa e temida</p>
              </div>
              {/* Adicione mais informações e imagens dos personagens conforme necessário */}
            </div>
            <div>
              <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Elenco</h1>
              <div className='flex items-center mb-4'>
                <img src={Tatsuya} alt='Dublador Calcifer' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Tatsuya Gashuin - Voz de Calcifer.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Emily} alt='Dublador Sophie' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Emily Mortimer - Voz de Sophie.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Takuya} alt='Dublador Howl' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Takuya Kimura - Voz de Howl.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Ryu} alt='Dublador Markl' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Ryūnosuke Kamiki - Voz de Markl.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Yo} alt='Dublador Kakashi no Kabu' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Yo Oizumi - Voz de Kakashi no Kabu.</p>
              </div>
              <div className='flex items-center mb-4'>
                <img src={Lauren} alt='Dublador Bruxa do Desperdício' className='w-12 h-12 rounded-full mr-2' />
                <p className='font-poppins mb-10'>Akihiro Miwa - Voz da Bruxa do Nada.</p>
              </div>
            </div>
          </div>
          <h1 className='font-poppins text-sky-500 text-5xl font-semibold mb-4'>Onde assistir</h1>
          <p className='font-poppins mb-4'>
            "Howl's Moving Castle" está disponível para assistir nos seguintes serviços de streaming no Brasil:
          </p>
          <ul className='font-poppins mb-10'>
            <li>
              <a href='https://www.netflix.com/br-en/title/70028883' target='_blank' rel='noopener noreferrer' className='text-sky-500 text-4xl font-medium'>Netflix</a>
            </li>
            <li>
              <a href='https://www.amazon.com.br/' target='_blank' rel='noopener noreferrer' className='text-sky-500 text-4xl font-medium'>Amazon Prime Video</a>
            </li>
            <li>
              <a href='https://www.disneyplus.com/pt-br/' target='_blank' rel='noopener noreferrer' className='text-sky-500 text-4xl font-medium'>Disney+</a> 
            </li>
          </ul>
      </section>
    </div>
  )
}

import Imagem from '/studio.png'

export default function () {
 return (
    <section>
        <div className='flex items-center'>
            <h1 className='font-poppins text-5xl font-semibold mb-4'>Studios Ghibli</h1>
            <img src={Imagem} alt="Imagem dos Studios Ghibli" className='w-60 h-auto ml-4'/>
        </div>
        <p className='font-poppins'>Os Estúdios Ghibli são mundialmente conhecidos por sua excelência na produção de animações, e "O Castelo Animado" não é exceção. O filme foi produzido pelo Studio Ghibli, fundado por Hayao Miyazaki e Isao Takahata, renomados diretores e animadores japoneses.</p>

        <p className='font-poppins mb-2'>O Studio Ghibli é famoso por criar histórias cativantes, personagens complexos e mundos fantásticos que encantam pessoas de todas as idades. Suas animações são reconhecidas pela qualidade artística, atenção aos detalhes e temas profundos que exploram questões como o meio ambiente, a natureza humana, a amizade e a superação de desafios. "O Castelo Animado" é mais uma obra-prima do Studio Ghibli, que combina animação tradicional deslumbrante com uma narrativa emocionante e personagens memoráveis. O estúdio é amplamente admirado por sua capacidade de criar filmes que tocam o coração do público e permanecem como clássicos atemporais da animação.</p>
    </section>
  )
}

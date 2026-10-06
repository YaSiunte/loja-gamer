

const GameCard = () => {
  return (
    <div className="bg-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-4 hover:border-[#ff0479b0]">

      <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover"/>
      <article className="p-4 text-center">
        <h2 className="text-xl text-[#ff0479b0] uppercase mb-3 font-bold">{titulo}</h2>
        <p className="">{preco}</p>
        <button className="bf-gradient-to-r from bg-pink-800 to-pink-600 w-[50%] py-4 text-white rounded-2xl border-none cursor pointer hover:scale-105">
          Comprar
        </button>
      </article>
      
    </div>
  )
}

export default GameCard

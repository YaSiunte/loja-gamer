import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center">
        <h2 className="text-[#008cff] text-6xl font-bold">404</h2>
        <p className="text-2xl font-semibold mb-2 text-white">Ops! Página não encontrada</p>
        <p className="text-gray-400 mb-8 max-w-md">Parece que você se perdeu no mapa do Jogo. A Página que você está procurando não existe ou foi removida.</p>
        <Link to="/" className="animate-pulse space-x-6 text-white py-3 px-20 bg-blue-600 rounded-2xl transition hover:bg-blue-900">Voltar para a Home</Link>
    </main>
  )
}

export default Error

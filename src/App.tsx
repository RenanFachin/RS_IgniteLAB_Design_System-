// Importando a folha de estilos globais
import './styles/global.css'

import { Logo } from './logo'

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <Logo />
    </div>
  )
}
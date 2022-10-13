// Importando a folha de estilos globais
import './styles/global.css'

// Importando componentes
import { Logo } from './logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <Logo />

      <Heading size="lg">
        Ignite Lab
      </Heading>

      <Text size="lg" className="text-gray-400">
        Faça login e comece a usar!
      </Text>
    </div>
  )
}
// Importando componentes
import { Logo } from '../logo'
import { Heading } from '../components/Heading'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'

// Importação de ícones
import { Envelope, Lock } from 'phosphor-react'

// Tipando o evento de SignIn
import { FormEvent, useState } from 'react'

// Importando o axios para simular conexão com banco de dados
import axios from 'axios'

export function SignIn(){
  // Criando um estado para simular o login
  // Dica: sempre que a resposta do estado for um valor booleano (V ou F), criar em forma de pergunta
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  // Simulando o processo de login
  async function handleSignIn(event: FormEvent){
    event.preventDefault();

    // Simulando uma conexão com o banco de dados e usando um método http post
    await axios.post('/sessions', {
      email: 'renan@email.com',
      password: '123456789',
    })

    setIsUserSignedIn(true)
  }

    return(
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      
        <header className="flex flex-col items-center">
          <Logo />
  
          <Heading size="lg" className="mt-4">
            Ignite Lab
          </Heading>
  
          <Text size="lg" className="text-gray-400 mt-1">
            Faça login e comece a usar!
          </Text>
        </header>
  
        <form 
        onSubmit={handleSignIn} 
        className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10"
        >
          { isUserSignedIn && <Text>Login realizado!</Text>}
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
  
              <TextInput.Input type= "email" id="email" placeholder="Digite seu e-mail"/>
            </TextInput.Root>
          </label>
  
          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
  
              <TextInput.Input type= "password" id="password" placeholder="********"/>
            </TextInput.Root>
          </label>
  
          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember"/>
            <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text> 
          </label>
  
          <Button type="submit" className="mt-4">Entrar na plataforma</Button>
        </form>
  
        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href='' className="text-gray-400 underline hover:text-gray-200">
              Esqueceu sua senha?
            </a>
          </Text>
  
          <Text asChild size="sm">
            <a href='' className="text-gray-400 underline hover:text-gray-200">
              Não possui conta? Cria uma agora!
            </a>
          </Text>
        </footer>
  
      </div>
    )
}
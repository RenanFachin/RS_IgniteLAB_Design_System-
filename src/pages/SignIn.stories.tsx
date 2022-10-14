// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'

// Importando o componente e as props
import { SignIn } from './SignIn'

// Imports de addons do storybook
import { within, userEvent, waitFor} from '@storybook/testing-library'
import { expect } from '@storybook/jest'

// Exportando a config. global do componente
export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes:{}
} as Meta

export const Default: StoryObj = {
    // Criando os testes
    // Dentro do play vai ter os testes automatizados
    // canvasElement é o wideframe que mostrar o componente no storybook
    
    
    // Será necessário dizer que a função é async em virtude da "demora" da atualização de estado
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        // Simulando a digitação dos campos
        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'renan@email.com.br')
        userEvent.type(canvas.getByPlaceholderText('********'), '123456789')

        // Pegando a partir do clique no único botão da tela
        userEvent.click(canvas.getByRole('button'))

        
        // É possível dizer o que é esperado que aconteça após a realização do teste
        // Neste caso, como é uma simulação, espera que apareça um texto em tela
        // Porém a troca de estado no react não é instantâneo. Demora algumas milisegundos para que aconteça

        // Então, usamos o await e o waitFor para aguardar a atualização do estado
        await waitFor(() => {
            expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}

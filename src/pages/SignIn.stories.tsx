// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'

// Importando o componente e as props
import { SignIn } from './SignIn'

// Imports de addons do storybook
import { within, userEvent} from '@storybook/testing-library'
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
    play: ({canvasElement}) => {
        const canvas = within(canvasElement)

        // Simulando a digitação dos campos
        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'renan@email.com.br')
        userEvent.type(canvas.getByPlaceholderText('********'), '123456789')

        // Pegando a partir do clique no único botão da tela
        userEvent.click(canvas.getByRole('button'))

        
        // É possível dizer o que é esperado que aconteça após a realização do teste
        // Neste caso, como é uma simulação, espera que apareça um texto em tela

        expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    }
}

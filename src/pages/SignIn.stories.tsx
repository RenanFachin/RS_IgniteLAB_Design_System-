// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'

// Importando o componente e as props
import { SignIn } from './SignIn'

// Exportando a config. global do componente
export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes:{}
} as Meta

export const Default: StoryObj = {}

// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'

// Importando o componente e as props
import { Button, ButtonProps } from './Button'

// Exportando a config. global do componente
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account Button',
    },
    argTypes:{}
} as Meta <ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

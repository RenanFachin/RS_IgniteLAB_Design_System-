// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'
// Importando o componente e as props
import { TextInput, TextInputRootProps } from './TextInput'
// Importando ícone do phosphor
import { Envelope } from 'phosphor-react'

// Exportando a config. global do componente
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        // Passando o componente de INPUT como um children do TextInputRoot que é a div
        children: 
        // Passando com vetor para não aparecer o fragment no storybook
            [
            //Passando o ícone}
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,

            // Passando o input}
            <TextInput.Input 
                placeholder='Type your e-mail address.'
            />
            ]

        
    },
    argTypes:{        
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta <TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children:
        <TextInput.Input placeholder='Type your e-mail address.'/>
    }
}
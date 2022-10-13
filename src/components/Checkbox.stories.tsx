// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'

// Importando o componente e as props
import { Checkbox, CheckboxProps } from './Checkbox'

import { Text } from './Text'

// Exportando a config. global do componente
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    // Decorators serve para adicionar uma div ao redor do componente e assim, poder adicionar outro componente
    decorators: [
        (Story) => {
            return(
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ],
} as Meta <CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

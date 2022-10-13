import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'


// Pattern de composição
// Criando props específicas pro TextInputRoot podendo receber qualquer componente do react
export interface TextInputRootProps{
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

// Apenas uma alteração de nome para melhor usabilidade por outros desenvolvedores
TextInputRoot.displayName = 'TextInput.Root'


// ÍCONE
export interface TextInputIconProps{
    children: ReactNode,
}

// props: TextInputIconProps é o mesmo que {props}: textInputIconProps e depois apenas {children}
function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

// Input
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}
function TextInputInput(props: TextInputInputProps){
    return(
            <input 
                // Flex-1 vai ocupar o máximo do espaço
                className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
                // Repassando toda e qualquer prop que um input padrão poderia receber
                {...props}
            />        
    )
}

TextInputInput.displayName = 'TextInput.Input'

// Dessa forma, será necessário utilizar o .Input para buscar a função TextInputInput
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}
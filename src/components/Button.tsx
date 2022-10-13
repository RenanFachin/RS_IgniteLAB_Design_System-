
import { clsx } from 'clsx'

import { Slot } from '@radix-ui/react-slot'

import { ReactNode } from 'react'

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild}: ButtonProps){
    // Caso esteja sendo recebida a propriedade asChild
    // Se sim, o componente será um <Slot>. 
    // Se não, o componente será um <Span>
    const Component = asChild ? Slot : 'button'

    return(
        <Component 
            className={clsx(
                // Definições padrões
                'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white')}
        >
            {children}
        </Component>
    )
}
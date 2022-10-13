// Importando o clsx
import { clsx } from 'clsx'

// Importando o radix-react-slot
import { Slot } from '@radix-ui/react-slot'

import { ReactNode } from 'react'

// Definindo as variantes deste componente (size,)
// ?: quer dizer que é uma propriedade opcional
// Children será o texto de fato. ReactNode pode receber qualquer coisa
// É necessário fazer o export para que seja possível receber dentro do storyBook como args
export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

// { size = 'md'} -> Define que o padrão a ser utilizado é o md
export function Heading({ size = 'md', children, asChild}: HeadingProps){
    // Caso esteja sendo recebida a propriedade asChild
    // Se sim, o componente será um <Slot>. 
    // Se não, o componente será um <Span>
    const Component = asChild ? Slot : 'h2'

    return(
        <Component 
            className={clsx(
                // Definições padrões
                'text-gray-100 font-bold font-sans',
                {
                    // Aplicar o texto xs caso o text do component for definido com o sm
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }
            )}
        >
            {children}
        </Component>
    )
}
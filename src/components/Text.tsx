// Importando o clsx
import { clsx } from 'clsx'

// Importando o radix-react-slot
import { Slot } from '@radix-ui/react-slot'

import { ReactNode } from 'react'

// Definindo as variantes deste componente (size,)
// ?: quer dizer que é uma propriedade opcional
// Children será o texto de fato. ReactNode pode receber qualquer coisa
// É necessário fazer o export para que seja possível receber dentro do storyBook como args
export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

// { size = 'md'} -> Define que o padrão a ser utilizado é o md
export function Text({ size = 'md', children, asChild}: TextProps){
    // Caso esteja sendo recebida a propriedade asChild
    // Se sim, o componente será um <Slot>. 
    // Se não, o componente será um <Span>
    const Component = asChild ? Slot : 'span'

    return(
        <Component 
            className={clsx(
                // Definições padrões
                'text-gray-100 font-sans',
                {
                    // Aplicar o texto xs caso o text do component for definido com o sm
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </Component>
    )
}
// Modificando o tema da página do storybook
import { themes } from '@storybook/theming'

// Import do arquivo de estilização global do tailwind para o storybook poder computar as modificações
import '../src/styles/global.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({
  // fazendo não aparecer os logs de requisições não tratadas pelo msw
  onUnhandledRequest: 'bypass'
});

export const decorators = [mswDecorator];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}
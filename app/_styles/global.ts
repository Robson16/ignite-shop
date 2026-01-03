import { globalCss } from '@/app/_styles/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'var(--font-roboto-sans)',
    fontWeight: 400,
  },
})

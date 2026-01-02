import { styled } from '@/stitches.config'

const Button = styled('button', {
  backgroundColor: '$green500',
  fontSize: '3rem',
})

export default function Home() {
  return <Button>Hello Shop</Button>
}

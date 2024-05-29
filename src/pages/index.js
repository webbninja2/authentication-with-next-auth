import { Inter } from 'next/font/google'
import Signin from './auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Signin/>
  )
}

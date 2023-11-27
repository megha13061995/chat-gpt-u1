import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT'
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='bg-[#202123] h-screen overflow-y-auto min-w-[300px]'><Sidebar/></div>
        <div className='bg-[#343541] flex-1'>{props.children}</div>
        </div>
        </body>
    </html>
  )
}

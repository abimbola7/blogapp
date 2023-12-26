import { Inter, Merriweather, Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Widget from '@/components/widget'
import { AuthProvider } from './providers/provider'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight : ["300", "400", "700", "900"]
})
const lato = Lato({
  subsets : ['latin', 'latin-ext'],
  weight : ["100", "300", "400", "700", "900"]
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className}  min-h-screen max-w-[110rem] mx-auto`}>
        <AuthProvider>
          <Header />
          <Widget/>
        </AuthProvider>
        {children}
      </body>
    </html>
  )
}

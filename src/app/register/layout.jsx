import { Inter, Merriweather } from 'next/font/google'
import "../globals.css"
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight : ["300", "400", "700", "900"]
})

const inter = Inter({ subsets: ['latin'] })


export default function SearchLayout({ children }) {
  return (
      <div className={`${merriweather.className} flex items-center justify-center`}>
        {children}
      </div>
  )
}
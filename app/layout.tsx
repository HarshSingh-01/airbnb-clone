import './globals.css'
import { Nunito } from 'next/font/google'

// Components imports
import Navbar from "./Components/Navbar/Navbar";
import ClientOnly from './Components/ClientOnly';
import Modal from './Components/modals/Modal';
import RegisterModal from './Components/modals/RegisterModal';
import LoginModal from './Components/modals/LoginModal';


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
      </body>
    </html>
  )
}

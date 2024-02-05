//    ESTILOS.    //
import { Inter } from 'next/font/google';
import './globals.css';
//   /ESTILOS.    //

//    UTIL.    //
import type { Metadata } from 'next';
//    /UTIL.    //

export const metadata: Metadata = {
  title: 'SGH',
  description: 'O seu sistema de gestão de horários',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div>
          <div id='topo'>
            {/* <h1>Header</h1> */}
          </div>
          <div id="principal">
            {children}
          </div>
          <div id='rodape'>
            {/* <h1>Footer</h1> */}
          </div>
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Providers from '@/lib/Providers/Providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealthCare',
  description: 'Doctors and patients can connect with each other',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['HealthCare', 'Doctors', 'Patients'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
    <body className={inter.className}>
    <AppRouterCacheProvider>
      {children}
      </AppRouterCacheProvider>
      </body>
  </html>
  </Providers>
  )
}

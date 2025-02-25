import '@/styles/globals.css';
import Search from '@/components/Search'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Search />
        <main>{children}</main>
        
      </body>
    </html>
  )
}
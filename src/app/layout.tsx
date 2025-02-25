import '@/styles/globals.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
        
      </body>
    </html>
  )
}
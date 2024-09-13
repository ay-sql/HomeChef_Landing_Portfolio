import './globals.css'

export const metadata = {
  title: 'SE Foundations Portfolio Project',
  description: 'A seamless way to showcase your developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  )
}
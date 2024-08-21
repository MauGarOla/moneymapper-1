import React from 'react'

const layout = ({ 
  children 
}: { 
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default layout
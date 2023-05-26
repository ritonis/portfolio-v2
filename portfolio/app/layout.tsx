import Provider from '@/app/providers'
import React from "react";
import Navigation from "@/app/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>SSerVe</title>
      </head>
      <body>
        <Provider>
            <Navigation />
            {children}
        </Provider>
      </body>
    </html>
  )
}

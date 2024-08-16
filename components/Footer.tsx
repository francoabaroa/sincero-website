'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2018 Sincero. All rights reserved.</p>
      </div>
    </footer>
  )
}
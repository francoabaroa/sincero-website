'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo_yellow.png" width={52} height={56} alt="Sincero logo" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-black hover:text-gray-600 transition-colors">About</Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-4"
        >
          <nav className="flex flex-col items-center gap-4">
            <Link href="#about" className="text-black hover:text-gray-600 transition-colors">About</Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
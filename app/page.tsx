'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sincero</h1>
            <p className="text-xl mb-8">A one-stop tech shop for all your design and software development needs.</p>
            <Image src="/bedazzle.png" width={166} height={166} alt="Sincero icon" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <p className="mb-4">Reach out to us for pricing questions, a chat about your business needs, or just to say hello at contact @ this domain.</p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Us</h2>
          <p className="text-xl mb-12 text-center">
            A team of husband and wife teaming up since 2017 to bring <span className="font-bold">products</span> and <span className="font-bold">services</span> to life.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 max-w-md"
            >
              <Image src="/franco.JPG" width={126} height={126} alt="Franco Abaroa" className="rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-center">Franco Abaroa</h3>
              <ul className="space-y-2">
                <li>Full stack software engineer</li>
                <li>Generalist software consultant</li>
                <li><a href="https://francoabaroa.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">See more about Franco&apos;s personal past work</a></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 max-w-md"
            >
              <Image src="/ale.jpeg" width={126} height={126} alt="Alejandra Lacayo" className="rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-center">Alejandra Lacayo</h3>
              <ul className="space-y-2">
                <li>Customer experience, product and service designer</li>
                <li>Workshop facilitator</li>
                <li><a href="https://alejandralacayo.github.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">See more about Alejandra&apos;s personal past work</a></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add Services section here */}
    </main>
  )
}
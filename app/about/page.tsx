'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function About() {
  const content = {
    title: "About Sincero",
    description1: "Sincero's strength lies in its leadership team's collective experience in software engineering, design, and product development.",
    description2: "By combining seasoned industry insight with cutting-edge technology and user-driven development, Sincero is uniquely positioned to guide businesses through the ever-evolving tech landscape, helping them navigate challenges and seize opportunities for success.",
    testimonialName: "John Doe",
    testimonialQuote: "Sincero has been a game-changer for our business. Their expertise in both design and development has helped us create products that our customers love. The team's dedication and innovative approach have been invaluable to our success.",
    testimonialTitle: "CEO, Tech Startup",
    rating: "5 / 5 star rating on Sincero",
    cta: "Work with Sincero Today"
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 py-20">
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{content.title}</h1>
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg mb-6">{content.description1}</p>
          <p className="text-lg mb-6">{content.description2}</p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <Avatar>
                <AvatarImage src="/client-avatar.jpg" alt="Client Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-lg font-semibold mb-2">{content.testimonialName}</p>
                <p className="text-gray-700 mb-2">&ldquo;{content.testimonialQuote}&rdquo;</p>
                <p className="text-sm text-gray-500">{content.testimonialTitle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-8">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="text-sm font-medium text-gray-700">{content.rating}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
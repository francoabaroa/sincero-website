'use client'

import { useState } from 'react'
import { AnimatedButton } from "@/components/AnimatedButton"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const content = {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    // You might want to show a success message to the user here
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary text-white py-20">
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{content.title}</h1>
      </div>
    </main>
  )
}
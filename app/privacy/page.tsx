'use client'

import React from 'react';

export default function PrivacyPolicy() {
  const content = {
    title: "Privacy Policy",
    section1: {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, and the content you create or share with us."
    },
    section2: {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience with Sincero."
    },
    section3: {
      title: "3. Sharing and Disclosure of Information",
      content: "We do not share your personal information with third parties except as described in this policy. We may share information with service providers, for legal reasons, or in connection with a business transfer."
    },
    section4: {
      title: "4. Data Security",
      content: "We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction."
    },
    section5: {
      title: "5. Your Rights and Choices",
      content: "You have the right to access, correct, or delete your personal information. You may also choose to opt-out of certain data collection or use practices."
    },
    lastUpdated: "Last updated:"
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary text-white py-20">
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{content.title}</h1>
        <div className="bg-white text-gray-700 rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          {Object.values(content).map((section, index) => {
            if (typeof section === 'object' && 'title' in section) {
              return (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-gray-700">{section.content}</p>
                </div>
              )
            }
            return null
          })}
          <p className="text-sm text-gray-500 mt-8">{content.lastUpdated} {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  );
}
'use client'

import React from 'react';

export default function TermsOfService() {
  const content = {
    title: "Terms of Service",
    section1: {
      title: "1. Acceptance of Terms",
      content: "By accessing or using Sincero's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    section2: {
      title: "2. Description of Service",
      content: "Sincero provides software development and design services. Our services may change over time without prior notice."
    },
    section3: {
      title: "3. User Responsibilities",
      content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account."
    },
    section4: {
      title: "4. Intellectual Property",
      content: "All intellectual property rights in the services are owned by Sincero or its licensors. Users retain ownership of content they create and share with Sincero."
    },
    section5: {
      title: "5. Prohibited Activities",
      content: "Users may not engage in any illegal activities or violate any third-party rights while using Sincero's services."
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
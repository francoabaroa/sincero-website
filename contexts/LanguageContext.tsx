'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

type Language = 'en' | 'es' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // If no saved language, check IP
      fetch('/api/getIP')
        .then(res => res.json())
        .then(data => {
          console.log('IP Address:', data.ip);
          fetch(`https://ipapi.co/${data.ip}/json/`)
            .then(res => res.json())
            .then(locationData => {
              console.log('Location Data:', locationData);
              if (locationData.error) {
                console.error('Error from ipapi:', locationData.reason);
                setLanguage('en');
                localStorage.setItem('language', 'en');
                return;
              }
              let detectedLanguage: Language = 'en'
              if (['BR', 'PT'].includes(locationData.country_code)) {
                detectedLanguage = 'pt'
              } else if (['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'].includes(locationData.country_code)) {
                detectedLanguage = 'es'
              }
              setLanguage(detectedLanguage)
              localStorage.setItem('language', detectedLanguage)
            })
            .catch((error) => {
              console.error('Error fetching location data:', error);
              setLanguage('en')
              localStorage.setItem('language', 'en')
            })
        })
        .catch((error) => {
          console.error('Error fetching IP:', error);
          setLanguage('en')
          localStorage.setItem('language', 'en')
        })
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
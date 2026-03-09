'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mediaQuery.matches) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const enter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(true)
      }
    }

    const leave = () => setIsHovering(false)

    const hide = () => setIsVisible(false)
    const show = () => setIsVisible(true)

    const tick = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', enter)
    window.addEventListener('mouseout', leave)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', enter)
      window.removeEventListener('mouseout', leave)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [isVisible])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000,
        pointerEvents: 'none',
        width: isHovering ? '56px' : '16px',
        height: isHovering ? '56px' : '16px',
        borderRadius: '50%',
        background: isHovering ? 'transparent' : '#F3A953',
        border: isHovering ? '1.5px solid #F3A953' : 'none',
        transition: 'width 0.35s cubic-bezier(0.76,0,0.24,1), height 0.35s cubic-bezier(0.76,0,0.24,1), background 0.25s ease, opacity 0.25s ease',
        opacity: isVisible ? 1 : 0,
        mixBlendMode: 'normal',
      }}
    />
  )
}

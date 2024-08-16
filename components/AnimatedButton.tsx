'use client'

import { Button as UIButton, ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AnimatedButton({ children, ...props }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <UIButton {...props}>
        {children}
      </UIButton>
    </motion.div>
  )
}
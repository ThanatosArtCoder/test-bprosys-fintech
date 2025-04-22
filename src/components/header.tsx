"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "./ui-styled/logo"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold text-xl">FinTech Pro</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                  Productos
                </Link> 
              </li>
              
            </ul>
          </nav>
         
        </div>

        <div className="flex items-center gap-2 md:hidden">

          <button onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container mx-auto px-4 py-4 border-t">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
              </li>
             
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

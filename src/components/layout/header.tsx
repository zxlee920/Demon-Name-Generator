"use client"

import Link from "next/link"
import { Skull, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <Skull className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Demon Name Generator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Generator
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 pb-4 pt-2">
              <Link 
                href="/" 
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                onClick={closeMobileMenu}
              >
                Generator
              </Link>
              <Link 
                href="/blog" 
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
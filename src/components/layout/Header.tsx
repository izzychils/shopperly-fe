import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Shopperly</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta-desktop">
            <button className="btn-secondary">Sign in</button>
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className="mobile-menu-dropdown">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="mobile-menu-btn-glass" aria-label="Toggle menu">
                  <Menu size={24} />
                  <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent 
                className="mobile-menu-dropdown-content"
                align="end"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <a href="#features" className="dropdown-nav-link">
                    Features
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#how-it-works" className="dropdown-nav-link">
                    How it works
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#pricing" className="dropdown-nav-link">
                    Pricing
                  </a>
                </DropdownMenuItem>
                <div className="dropdown-cta-buttons">
                  <button className="btn-secondary-dropdown">Sign in</button>
                  <button className="btn-primary-dropdown">Get Started</button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

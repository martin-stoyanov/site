import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import pinguino from '../assets/images/pinguino.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('/#')) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(href.substring(2))
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header className="bg-[#3d4d54] px-[10vw] py-0">
      <div className="flex items-center justify-between h-[100px]">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={pinguino}
            alt="Logo"
            className="w-[50px] h-[50px] rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href.startsWith('/#') ? '/' : link.href}
              onClick={() => link.href.startsWith('/#') && handleNavClick(link.href)}
              className="font-mono text-sm text-white lowercase transition-colors hover:text-light-purple relative group"
            >
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-light-purple transition-all group-hover:w-full" />
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/martin-stoyanov"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-white lowercase transition-colors hover:text-light-purple relative group"
          >
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-light-purple transition-all group-hover:w-full" />
            Github
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[200px] pb-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href.startsWith('/#') ? '/' : link.href}
              onClick={() => {
                if (link.href.startsWith('/#')) {
                  handleNavClick(link.href)
                } else {
                  setIsOpen(false)
                }
              }}
              className="font-mono text-sm text-white lowercase text-center transition-colors hover:text-light-purple"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/martin-stoyanov"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm text-white lowercase text-center transition-colors hover:text-light-purple"
          >
            Github
          </a>
        </nav>
      </div>
    </header>
  )
}

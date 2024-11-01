import React from 'react'
import { Code, Sun, Moon, Laptop } from 'lucide-react'

interface HeaderProps {
  theme: 'light' | 'dark' | 'system'
  toggleTheme: (theme: 'light' | 'dark' | 'system') => void
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={32} />
          <span className="text-2xl font-bold">CodeAcademy</span>
        </div>
        <div className="flex items-center">
          <nav className="mr-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-200">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-200">Cursos</a></li>
              <li><a href="#" className="hover:text-blue-200">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-200">Contacto</a></li>
            </ul>
          </nav>
          <div className="flex bg-white dark:bg-gray-800 p-1 rounded-full">
            <button 
              onClick={() => toggleTheme('light')} 
              className={`p-1 rounded-full ${theme === 'light' ? 'bg-yellow-200 text-yellow-800' : 'text-gray-600 dark:text-gray-400'}`}
              aria-label="Modo claro"
            >
              <Sun size={20} />
            </button>
            <button 
              onClick={() => toggleTheme('dark')} 
              className={`p-1 rounded-full ${theme === 'dark' ? 'bg-gray-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}
              aria-label="Modo oscuro"
            >
              <Moon size={20} />
            </button>
            <button 
              onClick={() => toggleTheme('system')} 
              className={`p-1 rounded-full ${theme === 'system' ? 'bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200' : 'text-gray-600 dark:text-gray-400'}`}
              aria-label="Modo del sistema"
            >
              <Laptop size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
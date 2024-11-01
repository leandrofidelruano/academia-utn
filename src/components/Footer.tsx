import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 CodeAcademy. Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
          <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
          <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
          <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
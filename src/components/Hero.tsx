import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Aprende a Programar con Expertos</h1>
        <p className="text-xl mb-8">Descubre el mundo de la programación y da el salto a tu carrera tech</p>
        <a href="#" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
          Comienza Ahora
        </a>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { Link } from 'react-router-dom'
import { Book, Code, Database, Globe } from 'lucide-react'

const courses = [
  { id: 1, icon: <Code size={48} />, title: 'Desarrollo Web', description: 'HTML, CSS, JavaScript y más' },
  { id: 2, icon: <Database size={48} />, title: 'Bases de Datos', description: 'SQL, NoSQL, y gestión de datos' },
  { id: 3, icon: <Globe size={48} />, title: 'Desarrollo Backend', description: 'Node.js, Python, y arquitecturas de servidor' },
  { id: 4, icon: <Book size={48} />, title: 'Algoritmos', description: 'Estructuras de datos y resolución de problemas' },
]

const Courses: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">Nuestros Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Link key={course.id} to={`/course/${course.id}`} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-500 mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white transition-colors duration-300">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{course.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
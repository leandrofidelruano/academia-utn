import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Chapter {
  id: number
  title: string
  lessons: { id: number; title: string }[]
}

const mockChapters: Chapter[] = [
  {
    id: 1,
    title: 'Introducción al curso',
    lessons: [
      { id: 1, title: 'Bienvenida al curso' },
      { id: 2, title: 'Configuración del entorno de desarrollo' },
    ],
  },
  {
    id: 2,
    title: 'Fundamentos',
    lessons: [
      { id: 3, title: 'Variables y tipos de datos' },
      { id: 4, title: 'Estructuras de control' },
      { id: 5, title: 'Funciones' },
    ],
  },
  {
    id: 3,
    title: 'Conceptos avanzados',
    lessons: [
      { id: 6, title: 'Programación orientada a objetos' },
      { id: 7, title: 'Manejo de errores' },
      { id: 8, title: 'Asincronía' },
    ],
  },
]

const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [expandedChapters, setExpandedChapters] = useState<number[]>([])

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Curso {id}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-gray-200 dark:bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
            <p className="text-xl text-gray-600 dark:text-gray-300">Reproductor de video</p>
          </div>
        </div>
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Capítulos del curso</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {mockChapters.map(chapter => (
              <div key={chapter.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <button
                  className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <span className="font-medium">{chapter.title}</span>
                  {expandedChapters.includes(chapter.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedChapters.includes(chapter.id) && (
                  <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700">
                    {chapter.lessons.map(lesson => (
                      <div key={lesson.id} className="py-2 pl-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors duration-150">
                        {lesson.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
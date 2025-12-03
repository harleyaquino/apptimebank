'use client'

import Navbar from '@/components/Navbar'
import { Search, Tag, Mic, Languages, Image, Globe, Users, Clock, Coins } from 'lucide-react'
import Link from 'next/link'

const tareas = [
  {
    id: 1,
    titulo: 'Etiquetar sonidos Naturales',
    duracion: '10 minutos',
    dificultad: 'Fácil',
    tokens: 50,
    icon: Tag,
    color: 'from-blue-600 to-blue-500'
  },
  {
    id: 2,
    titulo: 'Categorizar voces Humanas',
    duracion: '15 minutos',
    dificultad: 'Media',
    tokens: 75,
    icon: Mic,
    color: 'from-purple-600 to-purple-500'
  },
  {
    id: 3,
    titulo: 'Traducir documentación Técnica',
    duracion: '20 minutos',
    dificultad: 'Media',
    tokens: 100,
    icon: Languages,
    color: 'from-indigo-600 to-indigo-500'
  },
  {
    id: 4,
    titulo: 'Validar Datos de Imágenes',
    duracion: '12 minutos',
    dificultad: 'Fácil',
    tokens: 60,
    icon: Image,
    color: 'from-green-600 to-green-500'
  },
  {
    id: 5,
    titulo: 'Testing de interfaces Web',
    duracion: '18 minutos',
    dificultad: 'Media',
    tokens: 90,
    icon: Globe,
    color: 'from-cyan-600 to-cyan-500'
  },
  {
    id: 6,
    titulo: 'Mentoría a Principiantes',
    duracion: '30 minutos',
    dificultad: 'Difícil',
    tokens: 150,
    icon: Users,
    color: 'from-pink-600 to-pink-500'
  },
]

export default function ExplorarPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Explorar tareas
          </h1>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar tareas"
                className="w-full bg-accent-orange rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>
            <button className="bg-primary-blue hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Filtros
            </button>
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tareas.map((tarea) => {
            const IconComponent = tarea.icon
            return (
              <div
                key={tarea.id}
                className={`bg-gradient-to-br ${tarea.color} rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                  {tarea.titulo}
                </h3>

                {/* Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tarea.duracion}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    tarea.dificultad === 'Fácil' 
                      ? 'bg-green-500/30 text-green-200' 
                      : tarea.dificultad === 'Media'
                      ? 'bg-yellow-500/30 text-yellow-200'
                      : 'bg-red-500/30 text-red-200'
                  }`}>
                    {tarea.dificultad}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-white" />
                    <span className="text-2xl font-bold">{tarea.tokens}</span>
                  </div>
                  <Link href={`/tarea/${tarea.id}`}>
                    <button className="bg-accent-orange hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                      Aceptar
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-colors border border-white/20">
            Cargar más tareas
          </button>
        </div>
      </main>
    </div>
  )
}
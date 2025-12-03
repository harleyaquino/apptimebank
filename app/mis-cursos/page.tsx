'use client'

import Link from 'next/link'
import Image from "next/image";
import Navbar from '@/components/Navbar'
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react'

const cursosActivos = [
  {
    id: 1,
    titulo: 'Inteligencia Artificial aplicada',
    subtitulo: 'Machine Learning',
    progreso: 35,
    modulos: { completados: 5, totales: 15 },
    horas: { completadas: 35, totales: 100 },
    ultimoAcceso: 'Hace 3 días',
    imagen: '/IA.jpg',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 2,
    titulo: 'Java',
    subtitulo: 'Intermedio',
    progreso: 70,
    modulos: { completados: 12, totales: 20 },
    horas: { completadas: 70, totales: 100 },
    ultimoAcceso: 'Hace 3 días',
    imagen: '/Java.jpg',
    color: 'from-orange-600 to-red-600'
  }
]

export default function MisCursosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <button className="text-white/60 hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Mis cursos
          </h1>
          <p className="text-white/60">
            Continúa tu aprendizaje en tecnologías avanzadas
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span className="text-sm text-white/60">Cursos activos</span>
            </div>
            <div className="text-3xl font-bold">2</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-white/60">Horas completadas</span>
            </div>
            <div className="text-3xl font-bold">105</div>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-2xl p-6 border border-green-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-green-400" />
              <span className="text-sm text-white/60">Certificados</span>
            </div>
            <div className="text-3xl font-bold">1</div>
          </div>
        </div>

        {/* Cursos Activos */}
        <div className="space-y-6">
          {cursosActivos.map((curso) => (
            <Link 
              key={curso.id} 
              href={`/curso/${curso.id}`}
              className="block"
            >
              <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 transition-all cursor-pointer group">
                <div className="flex flex-col lg:flex-row gap-6">
                  
                  {/* Imagen del Curso */}
                  <div
                  className={`w-full lg:w-64 h-48 bg-gradient-to-br ${curso.color} 
                  rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                  <Image
                  src={curso.imagen}
                  alt={curso.titulo}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
                 />
                 </div>
                  

                  {/* Información del Curso */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-1 group-hover:text-accent-orange transition-colors">
                        {curso.titulo}
                      </h2>
                      <p className="text-white/60 mb-4">{curso.subtitulo}</p>

                      {/* Barra de Progreso */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-white/60">Progreso</span>
                          <span className="text-sm font-semibold">{curso.progreso}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-accent-orange to-pink-500 transition-all duration-500"
                            style={{ width: `${curso.progreso}%` }}
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div>
                          <span className="text-white/60">Módulos</span>
                          <p className="font-semibold">
                            {curso.modulos.completados}/{curso.modulos.totales}
                          </p>
                        </div>
                        <div>
                          <span className="text-white/60">Horas</span>
                          <p className="font-semibold">
                            {curso.horas.completadas}/{curso.horas.totales}h
                          </p>
                        </div>
                        <div>
                          <span className="text-white/60">Último acceso</span>
                          <p className="font-semibold">{curso.ultimoAcceso}</p>
                        </div>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="mt-4">
                      <button className="bg-accent-purple hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2 group">
                        Continuar Curso
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Buscas más cursos?</h2>
          <p className="text-white/90 mb-6">
            Descubre nuevos cursos de tecnología y canjea tus tokens
          </p>
          <Link href="/explorar">
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-colors">
              Explorar catálogo
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
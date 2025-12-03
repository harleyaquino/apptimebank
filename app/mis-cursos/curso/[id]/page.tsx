'use client'

import Navbar from '@/components/Navbar'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface CursoDetallePageProps {
  params: {
    id: string
  }
}

export default function CursoDetallePage({ params }: CursoDetallePageProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <Link 
          href="/mis-cursos"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Columna Principal - Información del Curso */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl h-64 md:h-80 flex items-center justify-center mb-6 overflow-hidden relative">
              <div className="text-9xl">🤖</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Título y Descripción */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Inteligencia Artificial aplicada
              </h1>
              <p className="text-xl text-white/60 mb-6">Machine Learning</p>

              <p className="text-white/80 leading-relaxed">
                Aprende a construir sistemas inteligentes con técnicas avanzadas de Machine
                Learning y Deep Learning. Implementa modelos predictivos y sistemas de
                recomendación.
              </p>
            </div>

            {/* Instructor */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <p className="text-sm text-white/60 mb-3">Instructor(a)</p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                  👩‍🏫
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. María Gonzalez</h3>
                  <p className="text-sm text-white/60">PhD en Machine Learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Progreso */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Tu progreso</h2>

              {/* Progreso General */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Progreso</span>
                  <span className="text-2xl font-bold">35%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-accent-orange to-pink-500"
                    style={{ width: '35%' }}
                  />
                </div>
              </div>

              {/* Estadísticas */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Horas completadas</span>
                  <span className="font-semibold">35/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Módulos completados</span>
                  <span className="font-semibold">5/15</span>
                </div>
              </div>

              {/* Botón Principal */}
              <Link href={`/curso/${params.id}/leccion/1`}>
                <button className="w-full bg-accent-purple hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors mb-4">
                  Continuar Aprendiendo
                </button>
              </Link>

              {/* Certificado */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-white/60 mb-2">
                  Completa el curso para obtener tu certificado
                </p>
                <div className="flex items-center gap-2 text-accent-orange">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">65% restante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Play, Pause, Volume2, Settings, Maximize, Download, CheckCircle, Circle, BookOpen } from 'lucide-react'
import Link from 'next/link'

// Datos de ejemplo de cursos y lecciones
const cursosData: any = {
  '1': {
    titulo: 'Inteligencia Artificial aplicada',
    subtitulo: 'Machine Learning',
    moduloActual: 'Módulo 9: Optimización de Modelos',
    progreso: 35,
    completadas: 3,
    totales: 12,
    lecciones: {
      '1': {
        titulo: 'Introducción a la Optimización de Modelos',
        duracion: '12:30',
        tipo: 'Video',
        numero: 1,
        total: 12,
        videoActual: '4:05',
        videoTotal: '10:18',
        completada: true,
        contenido: {
          descripcion: 'En esta lección aprenderás técnicas avanzadas de optimización de hiperparámetros utilizando búsqueda aleatoria y optimización bayesiana. Estas técnicas son fundamentales para mejorar el rendimiento de tus modelos de Machine Learning.',
          detalles: 'La optimización bayesiana es especialmente útil cuando el espacio de búsqueda es grande y la evaluación de cada configuración es costosa computacionalmente. A diferencia de Grid Search, que prueba todas las combinaciones posibles, la optimización bayesiana aprende de evaluaciones anteriores para elegir inteligentemente qué configuraciones probar a continuación.',
          objetivos: [
            'Comprender las diferencias entre Grid Search, Random Search y Optimización Bayesiana',
            'Implementar Random Search usando scikit-learn',
            'Aplicar optimización bayesiana con bibliotecas especializadas',
            'Comparar el rendimiento de diferentes estrategias de optimización'
          ],
          recursos: [
            { nombre: 'Notebook: Hyperparameter_Tuning_Advanced.ipynb', tipo: 'notebook' },
            { nombre: 'Dataset: model_optimization_data.csv', tipo: 'dataset' },
            { nombre: 'Slides de la lección (PDF)', tipo: 'pdf' }
          ]
        }
      },
      '2': {
        titulo: 'Hyperparameter Tuning: Grid Search',
        duracion: '18:45',
        tipo: 'Video',
        numero: 2,
        total: 12,
        completada: true
      },
      '3': {
        titulo: 'Hyperparameter Tuning: Random Search',
        duracion: '22:15',
        tipo: 'Video',
        numero: 3,
        total: 12,
        completada: true
      },
      '4': {
        titulo: 'Práctica: Optimización con Optuna',
        duracion: '30:00',
        tipo: 'Exercise',
        numero: 4,
        total: 12,
        completada: false
      }
    }
  },
  '2': {
    titulo: 'Java',
    subtitulo: 'Intermedio',
    moduloActual: 'Módulo 5: Programación Orientada a Objetos',
    progreso: 70,
    completadas: 12,
    totales: 20,
    lecciones: {
      '1': {
        titulo: 'Introducción a POO en Java',
        duracion: '15:30',
        tipo: 'Video',
        numero: 1,
        total: 20,
        completada: true
      }
    }
  }
}

export default function LeccionPage() {
  const params = useParams()
  const router = useRouter()
  const cursoId = params.id as string
  const leccionId = params.leccionId as string
  
  const curso = cursosData[cursoId]
  const leccion = curso?.lecciones[leccionId]

  const [isPlaying, setIsPlaying] = useState(false)
  const [tabActiva, setTabActiva] = useState('resumen')

  if (!curso || !leccion) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-white/60">Lección no encontrada</p>
          <Link href="/mis-cursos" className="text-accent-orange hover:underline">
            Volver a mis cursos
          </Link>
        </div>
      </div>
    )
  }

  const leccionesList = Object.entries(curso.lecciones).map(([id, data]: [string, any]) => ({
    id,
    ...data
  }))

  const handleSiguiente = () => {
    const siguienteId = parseInt(leccionId) + 1
    if (curso.lecciones[siguienteId.toString()]) {
      router.push(`/curso/${cursoId}/leccion/${siguienteId}`)
    } else {
      router.push(`/curso/${cursoId}`)
    }
  }

  return (
    <div className="min-h-screen bg-primary-navy">
      <Navbar />
      
      <main className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href={`/curso/${cursoId}`}
                className="text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">{curso.titulo}</h1>
                <p className="text-sm text-white/60">{curso.moduloActual}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent-green" />
                <span className="hidden sm:inline">{curso.completadas}/{curso.totales} completado</span>
                <span className="sm:hidden">{curso.completadas}/{curso.totales}</span>
              </div>
              <button className="text-white/60 hover:text-white">
                <BookOpen className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Contenido Principal */}
          <div className="flex-1 lg:border-r border-white/10">
            {/* Video Player */}
            <div className="bg-black relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-accent-purple/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent-purple transition-colors">
                    {isPlaying ? (
                      <Pause className="w-10 h-10 text-white" />
                    ) : (
                      <Play className="w-10 h-10 text-white ml-1" />
                    )}
                  </div>
                  <p className="text-white/60 text-sm">Reproductor de video</p>
                </div>
              </div>

              {/* Controles de Video */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                {/* Barra de progreso */}
                <div className="mb-3">
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-1.5 transition-all">
                    <div className="h-full bg-accent-purple" style={{ width: '40%' }}></div>
                  </div>
                </div>

                {/* Controles */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-accent-purple transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <span className="text-white text-sm">
                      {leccion.videoActual || '0:00'} / {leccion.videoTotal || leccion.duracion}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-white hover:text-accent-purple transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-accent-purple transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-accent-purple transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Título de la Lección */}
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold mb-2">{leccion.titulo}</h2>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  {leccion.duracion}
                </span>
                <span>Lección {leccion.numero} de {leccion.total}</span>
              </div>
            </div>

            {/* Tabs de Contenido */}
            <div className="border-b border-white/10">
              <div className="flex gap-1 px-6">
                {['resumen', 'código', 'ejercicio', 'notas', 'discusión'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setTabActiva(tab)}
                    className={`px-4 py-3 text-sm font-medium transition-colors capitalize relative ${
                      tabActiva === tab
                        ? 'text-accent-purple'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tab}
                    {tabActiva === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-purple"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Contenido del Tab */}
            <div className="p-6">
              {tabActiva === 'resumen' && leccion.contenido && (
                <div className="space-y-6 max-w-4xl">
                  {/* Sobre esta lección */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Sobre esta lección</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      {leccion.contenido.descripcion}
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      {leccion.contenido.detalles}
                    </p>
                  </div>

                  {/* Objetivos de Aprendizaje */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 text-accent-purple">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold">Objetivos de Aprendizaje</h3>
                    </div>
                    <ul className="space-y-3">
                      {leccion.contenido.objetivos.map((objetivo: string, index: number) => (
                        <li key={index} className="flex gap-3 text-white/80">
                          <span className="text-accent-purple mt-1">•</span>
                          <span>{objetivo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recursos Descargables */}
                  <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Download className="w-5 h-5 text-accent-orange" />
                      <h3 className="text-lg font-bold">Recursos Descargables</h3>
                    </div>
                    <div className="space-y-3">
                      {leccion.contenido.recursos.map((recurso: any, index: number) => (
                        <div
                          key={index}
                          className="bg-white/5 hover:bg-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <span className="text-white/90">{recurso.nombre}</span>
                          <Download className="w-5 h-5 text-white/60 hover:text-accent-orange transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {tabActiva !== 'resumen' && (
                <div className="text-center py-12">
                  <p className="text-white/60">Contenido de {tabActiva} próximamente</p>
                </div>
              )}
            </div>

            {/* Botones de Navegación */}
            <div className="p-6 border-t border-white/10 flex gap-4">
              <button className="flex-1 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-colors border border-white/10">
                Anterior
              </button>
              <button
                onClick={handleSiguiente}
                className="flex-1 bg-gradient-to-r from-accent-purple to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Siguiente
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </div>

          {/* Sidebar - Lista de Contenido */}
          <div className="w-full lg:w-96 bg-primary-purple/30 overflow-y-auto max-h-screen">
            <div className="p-6 border-b border-white/10 sticky top-0 bg-primary-purple/50 backdrop-blur-sm z-10">
              <h3 className="font-bold text-lg mb-2">Contenido del Módulo</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Progreso</span>
                <span className="font-semibold">{curso.progreso}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-gradient-to-r from-accent-purple to-pink-500"
                  style={{ width: `${curso.progreso}%` }}
                />
              </div>
            </div>

            <div className="p-4 space-y-2">
              {leccionesList.map((lec) => (
                <Link
                  key={lec.id}
                  href={`/curso/${cursoId}/leccion/${lec.id}`}
                  className={`block rounded-xl p-4 transition-all ${
                    lec.id === leccionId
                      ? 'bg-accent-purple border border-purple-400'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {lec.completada ? (
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1 line-clamp-2">
                        {lec.titulo}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>{lec.duracion}</span>
                        <span>•</span>
                        <span>{lec.tipo}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
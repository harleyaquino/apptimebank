'use client'

import Link from 'next/link'
import Navbar from "@/components/Navbar";
import { Coins, Clock, CheckCircle, TrendingUp, MoreHorizontal } from 'lucide-react'

export default function InicioPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            ¡Bienvenido de nuevo!
          </h1>
          <p className="text-white/60">
            Continúa ganando tokens y desbloqueando nuevos cursos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Coins className="w-6 h-6 text-accent-orange" />
              <span className="text-sm text-white/60">Tokens Totales</span>
            </div>
            <div className="text-3xl font-bold">250</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-white/60">Horas Acumuladas</span>
            </div>
            <div className="text-3xl font-bold">12.5</div>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-2xl p-6 border border-green-500/20">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-sm text-white/60">Tareas Completadas</span>
            </div>
            <div className="text-3xl font-bold">28</div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 rounded-2xl p-6 border border-pink-500/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-pink-400" />
              <span className="text-sm text-white/60">Nivel</span>
            </div>
            <div className="text-3xl font-bold">5</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Tareas Recientes */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Tareas recientes</h2>
              <Link 
                href="/explorar"
                className="text-accent-orange hover:text-orange-400 text-sm font-medium"
              >
                Ver todas
              </Link>
            </div>

            <div className="space-y-3">
              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">Etiquetar sonidos naturales</h3>
                  <MoreHorizontal className="w-4 h-4 text-white/40" />
                </div>
                <p className="text-sm text-white/60 mb-2">Hace 2 días</p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">Categorizar voces humanas</h3>
                  <MoreHorizontal className="w-4 h-4 text-white/40" />
                </div>
                <p className="text-sm text-white/60 mb-2">Hace 3 días</p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">Traducir documentación técnica</h3>
                  <MoreHorizontal className="w-4 h-4 text-white/40" />
                </div>
                <p className="text-sm text-white/60 mb-2">Hace 5 días</p>
              </div>
            </div>
          </div>

          {/* Cursos Disponibles */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Cursos disponibles</h2>
              <Link 
                href="/explorar"
                className="text-accent-orange hover:text-orange-400 text-sm font-medium"
              >
                Ver todas
              </Link>
            </div>

            <div className="space-y-4">
              {/* Curso 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">React avanzado</h3>
                    <p className="text-xs text-white/80">40h • Avanzado</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                    <Coins className="w-4 h-4" />
                    <span className="text-sm font-bold">500</span>
                  </div>
                </div>
                <button className="w-full bg-white/90 hover:bg-white text-blue-600 font-semibold py-2 rounded-lg text-sm transition-colors mt-2">
                  Tokens insuficientes
                </button>
              </div>

              {/* Curso 2 */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">Machine Learning básico</h3>
                    <p className="text-xs text-white/80">20h • Básico</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                    <Coins className="w-4 h-4" />
                    <span className="text-sm font-bold">250</span>
                  </div>
                </div>
                <button className="w-full bg-accent-orange hover:bg-orange-500 text-white font-semibold py-2 rounded-lg text-sm transition-colors mt-2">
                  Canjear curso
                </button>
              </div>

              {/* Curso 3 */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">DevOps Fundamentals</h3>
                    <p className="text-xs text-white/80">30h • Intermedio</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                    <Coins className="w-4 h-4" />
                    <span className="text-sm font-bold">400</span>
                  </div>
                </div>
                <button className="w-full bg-white/90 hover:bg-white text-green-600 font-semibold py-2 rounded-lg text-sm transition-colors mt-2">
                  Tokens insuficientes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-8 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-2xl p-8 text-center">
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
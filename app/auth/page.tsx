'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Target, BookOpen, Rocket } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí irá la lógica de autenticación
    router.push('/inicio')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Sección Izquierda - Hero */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              HIGH TECH
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-orange">
              TIME BANK
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/80">
            Conviértete en tu mejor<br />versión tecnológica
          </p>

          

          {/* Features */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="bg-accent-orange/20 p-2 rounded-lg">
                <Target className="w-6 h-6 text-accent-orange" />
              </div>
              <span className="text-white/90">Gana tokens completando tareas</span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="bg-accent-orange/20 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-accent-orange" />
              </div>
              <span className="text-white/90">Canjea por cursos avanzados</span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="bg-accent-orange/20 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-accent-orange" />
              </div>
              <span className="text-white/90">Mejora tus habilidades tech</span>
            </div>
          </div>
        </div>

        {/* Sección Derecha - Formulario */}
        <div className="w-full">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    className="input-field"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input-field"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input-field"
                    required={!isLogin}
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary text-lg"
              >
                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-accent-orange hover:text-orange-400 transition-colors"
              >
                {isLogin 
                  ? '¿No tienes cuenta? Regístrate' 
                  : '¿Ya tienes cuenta? Inicia sesión'}
              </button>
            </div>

            {/* Estadísticas */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-accent-orange">
                    10K+
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">
                    Estudiantes
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-accent-orange">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">
                    Tareas
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-accent-orange">
                    50+
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">
                    Cursos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
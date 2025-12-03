'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Clock, Coins, CheckCircle, Upload, Mic } from 'lucide-react'
import Link from 'next/link'

// Datos de ejemplo de tareas
const tareasData: any = {
  '1': {
    titulo: 'Etiquetar sonidos Naturales',
    descripcion: 'Escucha los siguientes sonidos y etiquétalos correctamente según corresponda.',
    duracion: '10 minutos',
    tokens: 50,
    tipo: 'audio',
    icon: '🎵',
    color: 'from-blue-600 to-blue-500',
    sonidos: [
      { id: 1, nombre: 'sonido_1.mp3', opciones: ['Lluvia', 'Viento', 'Olas del mar', 'Trueno'] },
      { id: 2, nombre: 'sonido_2.mp3', opciones: ['Pájaros', 'Grillos', 'Ranas', 'Perros'] },
      { id: 3, nombre: 'sonido_3.mp3', opciones: ['Fuego', 'Agua corriendo', 'Hojas', 'Viento'] },
    ]
  },
  '2': {
    titulo: 'Categorizar voces Humanas',
    descripcion: 'Escucha las grabaciones de voz y categoriza según las características solicitadas.',
    duracion: '15 minutos',
    tokens: 75,
    tipo: 'voz',
    icon: '🎤',
    color: 'from-purple-600 to-purple-500',
    voces: [
      { id: 1, nombre: 'voz_1.mp3', categorias: ['Masculina', 'Femenina', 'Infantil'] },
      { id: 2, nombre: 'voz_2.mp3', categorias: ['Masculina', 'Femenina', 'Infantil'] },
      { id: 3, nombre: 'voz_3.mp3', categorias: ['Masculina', 'Femenina', 'Infantil'] },
    ]
  },
  '4': {
    titulo: 'Validar Datos de Imágenes',
    descripcion: 'Revisa las imágenes y marca si contienen los elementos especificados.',
    duracion: '12 minutos',
    tokens: 60,
    tipo: 'imagen',
    icon: '🖼️',
    color: 'from-green-600 to-green-500',
    imagenes: [
      { id: 1, url: 'placeholder', pregunta: '¿Contiene un vehículo?', opciones: ['Sí', 'No', 'No estoy seguro'] },
      { id: 2, url: 'placeholder', pregunta: '¿Contiene personas?', opciones: ['Sí', 'No', 'No estoy seguro'] },
      { id: 3, url: 'placeholder', pregunta: '¿Es una imagen al aire libre?', opciones: ['Sí', 'No', 'No estoy seguro'] },
    ]
  }
}

export default function TareaDetallePage() {
  const params = useParams()
  const router = useRouter()
  const tareaId = params.id as string
  const tarea = tareasData[tareaId]

  const [respuestas, setRespuestas] = useState<any>({})
  const [completado, setCompletado] = useState(false)
  const [progreso, setProgreso] = useState(0)

  if (!tarea) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-white/60">Tarea no encontrada</p>
          <Link href="/explorar" className="text-accent-orange hover:underline">
            Volver a explorar
          </Link>
        </div>
      </div>
    )
  }

  const handleRespuesta = (itemId: number, respuesta: string) => {
    const nuevasRespuestas = { ...respuestas, [itemId]: respuesta }
    setRespuestas(nuevasRespuestas)
    
    // Calcular progreso
    const totalItems = tarea.sonidos?.length || tarea.voces?.length || tarea.imagenes?.length || 0
    const completadas = Object.keys(nuevasRespuestas).length
    setProgreso(Math.round((completadas / totalItems) * 100))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const totalItems = tarea.sonidos?.length || tarea.voces?.length || tarea.imagenes?.length || 0
    const completadas = Object.keys(respuestas).length
    
    if (completadas < totalItems) {
      alert('Por favor completa todas las tareas antes de enviar')
      return
    }
    
    setCompletado(true)
  }

  const handleContinuar = () => {
    router.push('/explorar')
  }

  // Modal de confirmación
  if (completado) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-3xl p-8 md:p-12 text-center animate-fadeIn">
            <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Tarea Completada!
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Has ganado tokens por completar esta tarea
            </p>

            <div className="bg-white/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Coins className="w-8 h-8 text-yellow-300" />
                <span className="text-5xl font-bold">+{tarea.tokens}</span>
              </div>
              <p className="text-white/80">Tokens ganados</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleContinuar}
                className="w-full bg-white text-green-600 font-semibold py-4 px-6 rounded-xl hover:bg-white/90 transition-colors"
              >
                Explorar más tareas
              </button>
              
              <Link href="/inicio">
                <button className="w-full bg-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/30 transition-colors">
                  Ir al inicio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <Link 
          href="/explorar"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a tareas</span>
        </Link>

        {/* Título de la tarea */}
        <div className={`bg-gradient-to-br ${tarea.color} rounded-2xl p-6 mb-6`}>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{tarea.icon}</div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {tarea.titulo}
              </h1>
              <p className="text-white/90 mb-4">{tarea.descripcion}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span>{tarea.duracion}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
                  <Coins className="w-4 h-4" />
                  <span className="font-bold">{tarea.tokens} tokens</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">Progreso</span>
            <span className="text-sm font-semibold">{progreso}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-orange to-pink-500 transition-all duration-500"
              style={{ width: `${progreso}%` }}
            />
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Tarea tipo Audio */}
          {tarea.tipo === 'audio' && tarea.sonidos && (
            <>
              {tarea.sonidos.map((sonido: any, index: number) => (
                <div key={sonido.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold">Sonido {index + 1}</h3>
                  </div>

                  {/* Simulación de reproductor de audio */}
                  <div className="bg-white/5 rounded-lg p-4 mb-4 flex items-center gap-4">
                    <button type="button" className="bg-accent-orange hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div className="flex-1 h-1 bg-white/20 rounded-full">
                      <div className="h-full bg-accent-orange rounded-full" style={{width: '0%'}}></div>
                    </div>
                    <span className="text-sm text-white/60">0:00 / 0:10</span>
                  </div>

                  <p className="text-sm text-white/60 mb-3">Selecciona la categoría correcta:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {sonido.opciones.map((opcion: string) => (
                      <button
                        key={opcion}
                        type="button"
                        onClick={() => handleRespuesta(sonido.id, opcion)}
                        className={`p-3 rounded-lg font-medium transition-all ${
                          respuestas[sonido.id] === opcion
                            ? 'bg-accent-orange text-white'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Tarea tipo Voz */}
          {tarea.tipo === 'voz' && tarea.voces && (
            <>
              {tarea.voces.map((voz: any, index: number) => (
                <div key={voz.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold">Grabación {index + 1}</h3>
                  </div>

                  {/* Simulación de reproductor */}
                  <div className="bg-white/5 rounded-lg p-4 mb-4 flex items-center gap-4">
                    <Mic className="w-5 h-5 text-accent-purple" />
                    <button type="button" className="bg-accent-purple hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div className="flex-1 h-1 bg-white/20 rounded-full">
                      <div className="h-full bg-accent-purple rounded-full" style={{width: '0%'}}></div>
                    </div>
                    <span className="text-sm text-white/60">0:00 / 0:05</span>
                  </div>

                  <p className="text-sm text-white/60 mb-3">Categoriza esta voz:</p>
                  <div className="grid grid-cols-3 gap-3">
                    {voz.categorias.map((categoria: string) => (
                      <button
                        key={categoria}
                        type="button"
                        onClick={() => handleRespuesta(voz.id, categoria)}
                        className={`p-3 rounded-lg font-medium transition-all ${
                          respuestas[voz.id] === categoria
                            ? 'bg-accent-purple text-white'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {categoria}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Tarea tipo Imagen */}
          {tarea.tipo === 'imagen' && tarea.imagenes && (
            <>
              {tarea.imagenes.map((imagen: any, index: number) => (
                <div key={imagen.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold">Imagen {index + 1}</h3>
                  </div>

                  {/* Placeholder de imagen */}
                  <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg h-64 mb-4 flex items-center justify-center">
                    <Upload className="w-16 h-16 text-white/40" />
                  </div>

                  <p className="text-sm font-medium mb-3">{imagen.pregunta}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {imagen.opciones.map((opcion: string) => (
                      <button
                        key={opcion}
                        type="button"
                        onClick={() => handleRespuesta(imagen.id, opcion)}
                        className={`p-3 rounded-lg font-medium transition-all ${
                          respuestas[imagen.id] === opcion
                            ? 'bg-accent-green text-white'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Botón de envío */}
          <div className="sticky bottom-4 pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accent-orange to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
            >
              Completar Tarea ({progreso}%)
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
import Link from "next/link"
import { Play, Download, Star, CheckCircle, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function CursoPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            EduPlus
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm font-medium text-gray-600 hover:text-emerald-600">
              Iniciar sesión
            </Link>
            <Button asChild>
              <Link href="/auth?register=true">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-emerald-600">
              Inicio
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/cursos" className="text-gray-500 hover:text-emerald-600">
              Cursos
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Introducción al Desarrollo Frontend</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {/* Reproductor de video */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-8 aspect-video flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=800&text=Video del curso"
                alt="Video del curso"
                className="w-full h-full object-cover opacity-50"
              />
              <Button size="lg" className="absolute rounded-full w-16 h-16 flex items-center justify-center">
                <Play size={24} />
              </Button>
            </div>

            {/* Tabs de contenido */}
            <Tabs defaultValue="descripcion" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                <TabsTrigger value="material">Material</TabsTrigger>
                <TabsTrigger value="comentarios">Comentarios</TabsTrigger>
              </TabsList>
              <TabsContent value="descripcion" className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Introducción al Desarrollo Frontend</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(220 calificaciones)</span>
                  <span className="text-sm text-gray-500">1,245 estudiantes</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Este curso te enseñará los fundamentos del desarrollo web frontend, desde los conceptos básicos de
                  HTML y CSS hasta la creación de interfaces interactivas con JavaScript. Aprenderás a construir sitios
                  web responsivos y accesibles siguiendo las mejores prácticas de la industria.
                </p>
                <p className="text-gray-700 mb-4">
                  A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar los conocimientos
                  adquiridos y construir un portafolio profesional. Al finalizar, estarás preparado para comenzar tu
                  carrera como desarrollador frontend.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4">Lo que aprenderás</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Fundamentos de HTML5 y semántica web",
                    "CSS moderno y sistemas de diseño responsivo",
                    "JavaScript y manipulación del DOM",
                    "Frameworks y bibliotecas populares",
                    "Optimización y rendimiento web",
                    "Accesibilidad y mejores prácticas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="material" className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Material del curso</h2>
                <div className="space-y-4">
                  {[
                    "Guía de HTML5",
                    "Referencia de CSS",
                    "Ejercicios de JavaScript",
                    "Proyecto final - Documentación",
                    "Recursos adicionales",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-emerald-500" />
                        <span className="font-medium">{item}</span>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Descargar</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="comentarios" className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Comentarios de estudiantes</h2>
                <div className="mb-8">
                  <Textarea placeholder="Escribe tu comentario..." className="mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Tu calificación:</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                        ))}
                      </div>
                    </div>
                    <Button>Enviar comentario</Button>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      name: "Ana Martínez",
                      date: "15 de abril, 2025",
                      rating: 5,
                      comment:
                        "Excelente curso. El contenido está muy bien estructurado y los ejercicios prácticos son muy útiles. Recomendado para principiantes.",
                    },
                    {
                      name: "Carlos Rodríguez",
                      date: "2 de abril, 2025",
                      rating: 4,
                      comment:
                        "Muy buen curso, aunque me hubiera gustado más contenido sobre frameworks modernos. De todas formas, la base que proporciona es sólida.",
                    },
                    {
                      name: "Laura Gómez",
                      date: "28 de marzo, 2025",
                      rating: 5,
                      comment:
                        "El instructor explica de manera clara y concisa. Los proyectos son desafiantes pero accesibles. Definitivamente valió la pena.",
                    },
                  ].map((comment, index) => (
                    <div key={index} className="border-b pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{comment.name}</h4>
                            <p className="text-sm text-gray-500">{comment.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${star <= comment.rating ? "text-yellow-400" : "text-gray-300"} fill-current`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Progreso del curso</h3>
              <div className="mb-6">
                <div className="flex justify-between mb-2 text-sm">
                  <span>Completado</span>
                  <span>35%</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm">Módulo 1: Introducción a HTML</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm">Módulo 2: Fundamentos de CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                  <span className="text-sm">Módulo 3: JavaScript Básico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                  <span className="text-sm">Módulo 4: Diseño Responsivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                  <span className="text-sm">Módulo 5: Proyecto Final</span>
                </div>
              </div>
              <Button className="w-full mb-3">Continuar aprendiendo</Button>
              <Button variant="outline" className="w-full">
                Marcar como completado
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-emerald-600">
                EduPlus
              </Link>
              <p className="text-sm text-gray-600 mt-1">© 2025 EduPlus. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Sobre nosotros
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Contacto
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Términos
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

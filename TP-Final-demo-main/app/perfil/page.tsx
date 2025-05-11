"use client"

import { useState } from "react"
import Link from "next/link"
import { User, BookOpen, Bookmark, Settings, LogOut, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("en-progreso")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            EduPlus
          </Link>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarFallback className="text-xl">JP</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Juan Pérez</h2>
                <p className="text-gray-500">juan@ejemplo.com</p>
              </div>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil" className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    <span>Mis cursos</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil/guardados" className="flex items-center">
                    <Bookmark className="mr-2 h-5 w-5" />
                    <span>Guardados</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil/configuracion" className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    <span>Editar perfil</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil/configuracion" className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    <span>Configuración</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  <span>Cerrar sesión</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg border p-6 mb-8">
              <h1 className="text-2xl font-bold mb-6">Mis cursos</h1>
              <Tabs defaultValue="en-progreso" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="en-progreso">En progreso</TabsTrigger>
                  <TabsTrigger value="completados">Completados</TabsTrigger>
                  <TabsTrigger value="guardados">Guardados</TabsTrigger>
                </TabsList>
                <TabsContent value="en-progreso">
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        title: "Introducción al Desarrollo Frontend",
                        category: "Desarrollo Web",
                        progress: 35,
                        image: "/placeholder.svg?height=200&width=400&text=Curso 1",
                      },
                      {
                        id: 2,
                        title: "Diseño de Interfaces Modernas",
                        category: "Diseño UX/UI",
                        progress: 68,
                        image: "/placeholder.svg?height=200&width=400&text=Curso 2",
                      },
                    ].map((curso) => (
                      <Card key={curso.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4">
                            <img
                              src={curso.image || "/placeholder.svg"}
                              alt={curso.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 p-6">
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <div className="text-sm text-emerald-600 mb-2">{curso.category}</div>
                                <h3 className="text-lg font-semibold mb-2">{curso.title}</h3>
                                <div className="mb-4">
                                  <div className="flex justify-between mb-1 text-sm">
                                    <span>Progreso</span>
                                    <span>{curso.progress}%</span>
                                  </div>
                                  <Progress value={curso.progress} className="h-2" />
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Última actividad: Hace 2 días</span>
                                <Button asChild>
                                  <Link href={`/cursos/${curso.id}`}>Continuar</Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="completados">
                  <div className="space-y-6">
                    {[
                      {
                        id: 3,
                        title: "Fundamentos de HTML y CSS",
                        category: "Desarrollo Web",
                        completedDate: "15 de marzo, 2025",
                        image: "/placeholder.svg?height=200&width=400&text=Curso 3",
                      },
                    ].map((curso) => (
                      <Card key={curso.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4">
                            <img
                              src={curso.image || "/placeholder.svg"}
                              alt={curso.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 p-6">
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <div className="text-sm text-emerald-600 mb-2">{curso.category}</div>
                                <h3 className="text-lg font-semibold mb-2">{curso.title}</h3>
                                <div className="flex items-center text-emerald-600 mb-4">
                                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span>Completado</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Completado el: {curso.completedDate}</span>
                                <Button variant="outline" asChild>
                                  <Link href={`/cursos/${curso.id}`}>Ver curso</Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="guardados">
                  <div className="space-y-6">
                    {[
                      {
                        id: 4,
                        title: "Estrategias de Marketing Digital",
                        category: "Marketing",
                        savedDate: "20 de abril, 2025",
                        image: "/placeholder.svg?height=200&width=400&text=Curso 4",
                      },
                      {
                        id: 5,
                        title: "Introducción a Python",
                        category: "Programación",
                        savedDate: "15 de abril, 2025",
                        image: "/placeholder.svg?height=200&width=400&text=Curso 5",
                      },
                    ].map((curso) => (
                      <Card key={curso.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4">
                            <img
                              src={curso.image || "/placeholder.svg"}
                              alt={curso.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 p-6">
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <div className="text-sm text-emerald-600 mb-2">{curso.category}</div>
                                <h3 className="text-lg font-semibold mb-2">{curso.title}</h3>
                                <div className="flex items-center text-gray-500 mb-4">
                                  <Bookmark className="w-4 h-4 mr-1" />
                                  <span className="text-sm">Guardado para más tarde</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Guardado el: {curso.savedDate}</span>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <Bookmark className="w-4 h-4 mr-1" />
                                    <span>Quitar</span>
                                  </Button>
                                  <Button asChild>
                                    <Link href={`/cursos/${curso.id}`}>Inscribirse</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {activeTab === "en-progreso" && (
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold mb-6">Recomendados para ti</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: 6,
                      title: "JavaScript Avanzado",
                      category: "Desarrollo Web",
                      image: "/placeholder.svg?height=200&width=400&text=Curso 6",
                    },
                    {
                      id: 7,
                      title: "Diseño Responsivo",
                      category: "Diseño Web",
                      image: "/placeholder.svg?height=200&width=400&text=Curso 7",
                    },
                  ].map((curso) => (
                    <Card key={curso.id} className="overflow-hidden">
                      <img
                        src={curso.image || "/placeholder.svg"}
                        alt={curso.title}
                        className="w-full h-40 object-cover"
                      />
                      <CardContent className="p-4">
                        <div className="text-sm text-emerald-600 mb-1">{curso.category}</div>
                        <h3 className="text-lg font-semibold mb-3">{curso.title}</h3>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/cursos/${curso.id}`}>
                            Ver detalles
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 border-t mt-12">
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

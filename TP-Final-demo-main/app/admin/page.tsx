"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Settings,
  LogOut,
  Plus,
  Search,
  Edit,
  Trash2,
  CheckCircle,
  BarChart2,
  Users,
  FileText,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            EduPlus
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Admin</span>
            <Avatar>
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r hidden md:block">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-6">Panel de administración</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin" className="flex items-center">
                  <BarChart2 className="mr-2 h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start bg-gray-100" asChild>
                <Link href="/admin/cursos" className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  <span>Cursos</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin/usuarios" className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>Usuarios</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin/reportes" className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  <span>Reportes</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin/configuracion" className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  <span>Configuración</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="mr-2 h-5 w-5" />
                <span>Cerrar sesión</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Dashboard de administración</h1>
            <p className="text-gray-600">Gestiona cursos, usuarios y contenido de la plataforma</p>
          </div>

          {/* Tarjetas de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total de cursos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">124</div>
                <p className="text-xs text-emerald-600 mt-1">+12% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Usuarios activos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,845</div>
                <p className="text-xs text-emerald-600 mt-1">+8% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Cursos completados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,432</div>
                <p className="text-xs text-emerald-600 mt-1">+15% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Ingresos mensuales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$12,450</div>
                <p className="text-xs text-emerald-600 mt-1">+5% desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabla de cursos */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-xl font-bold">Gestión de cursos</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Buscar cursos..."
                      className="pl-10 w-full md:w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  <Button className="flex items-center gap-2">
                    <Plus size={16} />
                    <span>Nuevo curso</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Curso</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Estudiantes</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: 1,
                      title: "Introducción al Desarrollo Frontend",
                      category: "Desarrollo Web",
                      instructor: "Ana Martínez",
                      status: "Publicado",
                      students: 245,
                    },
                    {
                      id: 2,
                      title: "Diseño de Interfaces Modernas",
                      category: "Diseño UX/UI",
                      instructor: "Carlos Rodríguez",
                      status: "Publicado",
                      students: 189,
                    },
                    {
                      id: 3,
                      title: "Estrategias de Marketing Digital",
                      category: "Marketing",
                      instructor: "Laura Gómez",
                      status: "Pendiente",
                      students: 0,
                    },
                    {
                      id: 4,
                      title: "Introducción a Python",
                      category: "Programación",
                      instructor: "Miguel Sánchez",
                      status: "Borrador",
                      students: 0,
                    },
                    {
                      id: 5,
                      title: "Fundamentos de HTML y CSS",
                      category: "Desarrollo Web",
                      instructor: "Ana Martínez",
                      status: "Publicado",
                      students: 312,
                    },
                  ].map((curso) => (
                    <TableRow key={curso.id}>
                      <TableCell className="font-medium">{curso.title}</TableCell>
                      <TableCell>{curso.category}</TableCell>
                      <TableCell>{curso.instructor}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            curso.status === "Publicado"
                              ? "bg-green-100 text-green-800"
                              : curso.status === "Pendiente"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {curso.status}
                        </div>
                      </TableCell>
                      <TableCell>{curso.students}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menú</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Editar</span>
                            </DropdownMenuItem>
                            {curso.status !== "Publicado" && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                <span>Aprobar</span>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Eliminar</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Mostrando 5 de 124 cursos</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gray-100">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Siguiente
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

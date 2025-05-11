import Link from "next/link"
import { Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CursosPage() {
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
            <span className="text-gray-800">Cursos</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Explora nuestros cursos</h1>

        {/* Filtros y búsqueda */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Input type="text" placeholder="Buscar cursos..." className="pl-10 w-full" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="flex gap-4">
            <Select defaultValue="recientes">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recientes">Más recientes</SelectItem>
                <SelectItem value="populares">Más populares</SelectItem>
                <SelectItem value="calificacion">Mejor calificados</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Filtros</span>
            </Button>
          </div>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Todos",
            "Desarrollo Web",
            "Diseño UX/UI",
            "Marketing Digital",
            "Idiomas",
            "Negocios",
            "Ciencia de Datos",
          ].map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "" : "text-gray-600"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, id) => (
            <Card key={id} className="overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={`/placeholder.svg?height=200&width=400&text=Curso ${id + 1}`}
                alt={`Curso ${id + 1}`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-emerald-600 mb-2">
                  {["Desarrollo Web", "Diseño UX/UI", "Marketing Digital"][id % 3]}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {
                    [
                      "Introducción al Desarrollo Frontend",
                      "Diseño de Interfaces Modernas",
                      "Estrategias de Marketing Digital",
                    ][id % 3]
                  }
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {
                    [
                      "Aprende los fundamentos de HTML, CSS y JavaScript para crear sitios web interactivos.",
                      "Domina las técnicas de diseño de interfaces centradas en el usuario.",
                      "Desarrolla estrategias efectivas para promocionar tu negocio en línea.",
                    ][id % 3]
                  }
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(220)</span>
                  </div>
                  <Link href={`/cursos/${id + 1}`} className="text-sm font-medium text-emerald-600 hover:underline">
                    Ver curso
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="default" size="sm">
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

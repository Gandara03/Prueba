"use client";

import Link from "next/link"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// ... el resto del código

import Link from "next/link"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  // Estado para comentarios
  const [comentarios, setComentarios] = useState([
    { usuario: "Usuario1", texto: "¡Muy buen curso!", rating: 5 },
    { usuario: "Usuario2", texto: "Me gustó el contenido.", rating: 4 }
  ]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevoRating, setNuevoRating] = useState(5);

  // Estado para favoritos
  const [favoritos, setFavoritos] = useState(["Curso A", "Curso B"]);
  const [nuevoFavorito, setNuevoFavorito] = useState("");

  // Estado para progreso
  const [progreso, setProgreso] = useState(60);

  // Estado para calificación por estrellas
  const [calificacion, setCalificacion] = useState(4);
  const [hoverCalificacion, setHoverCalificacion] = useState(0);

  // Estado para búsqueda y selección de cursos
  const [busqueda, setBusqueda] = useState("");
  const cursos = [
    { nombre: "Curso 1", descripcion: "Frontend básico", modulos: ["Intro", "HTML", "CSS", "JS"] },
    { nombre: "Curso 2", descripcion: "Backend básico", modulos: ["Intro", "Node.js", "Express"] },
    { nombre: "Curso 3", descripcion: "Diseño UX", modulos: ["Intro", "Wireframes", "Prototipos"] },
    { nombre: "Curso A", descripcion: "React avanzado", modulos: ["Hooks", "Context", "Testing"] },
    { nombre: "Curso B", descripcion: "Bases de datos", modulos: ["SQL", "NoSQL"] }
  ];
  const cursosFiltrados = cursos.filter(c => c.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  // Estado para visualización de contenidos
  const [moduloActual, setModuloActual] = useState(0);

  // Estado para subida y edición de contenidos (admin)
  const [contenidos, setContenidos] = useState([
    { titulo: "React avanzado", descripcion: "Hooks, Context, Testing" },
    { titulo: "Bases de datos", descripcion: "SQL y NoSQL" }
  ]);
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [editando, setEditando] = useState(null);
  const [editTitulo, setEditTitulo] = useState("");
  const [editDescripcion, setEditDescripcion] = useState("");

  // Funciones para comentarios
  const handleAgregarComentario = () => {
    if (nuevoComentario.trim() !== "") {
      setComentarios([...comentarios, { usuario: "Tú", texto: nuevoComentario, rating: nuevoRating }]);
      setNuevoComentario("");
      setNuevoRating(5);
    }
  };
  const handleEliminarComentario = (idx) => {
    setComentarios(comentarios.filter((_, i) => i !== idx));
  };

  // Funciones para favoritos
  const handleAgregarFavorito = () => {
    if (nuevoFavorito.trim() !== "" && !favoritos.includes(nuevoFavorito)) {
      setFavoritos([...favoritos, nuevoFavorito]);
      setNuevoFavorito("");
    }
  };

  // Funciones para calificación por estrellas
  const handleSetCalificacion = (valor) => setCalificacion(valor);

  // Funciones para visualización de contenidos
  const handleSeleccionarCurso = (curso) => {
    setCursoSeleccionado(curso);
    setModuloActual(0);
  };
  const handleModuloAnterior = () => {
    setModuloActual((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleModuloSiguiente = () => {
    if (cursoSeleccionado && moduloActual < cursoSeleccionado.modulos.length - 1) {
      setModuloActual((prev) => prev + 1);
    }
  };

  // Funciones para subida y edición de contenidos (admin)
  const handleSubirContenido = () => {
    if (nuevoTitulo.trim() && nuevaDescripcion.trim()) {
      setContenidos([...contenidos, { titulo: nuevoTitulo, descripcion: nuevaDescripcion }]);
      setNuevoTitulo("");
      setNuevaDescripcion("");
    }
  };
  const handleEditarContenido = (idx) => {
    setEditando(idx);
    setEditTitulo(contenidos[idx].titulo);
    setEditDescripcion(contenidos[idx].descripcion);
  };
  const handleGuardarEdicion = (idx) => {
    const nuevos = [...contenidos];
    nuevos[idx] = { titulo: editTitulo, descripcion: editDescripcion };
    setContenidos(nuevos);
    setEditando(null);
  };
  const handleCancelarEdicion = () => setEditando(null);
  const handleEliminarContenido = (idx) => {
    setContenidos(contenidos.filter((_, i) => i !== idx));
  };

  // Funciones
  const handleLogin = () => {
    alert("¡Login exitoso!");
  };
  const handleRegistro = () => {
    alert("¡Registro exitoso!");
  };
  const handleIrPanel = () => {
    alert("Navegando al panel de administración...");
  };
  const handleAumentarProgreso = () => {
    setProgreso(p => (p < 100 ? p + 10 : 100));
  };

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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aprende a tu ritmo, crece sin límites</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre cientos de cursos impartidos por expertos y desarrolla las habilidades que necesitas para alcanzar
            tus metas.
          </p>
          <div className="relative max-w-md mx-auto">
            <Input type="text" placeholder="Buscar cursos..." className="pl-10 pr-4 py-6 rounded-full" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Requerimientos Funcionales (según imagen) - DEMO FUNCIONAL */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Requerimientos Funcionales (Demo)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sistema de calificación por estrellas */}
            <div className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-start">
              <h3 className="font-semibold mb-2">Sistema de calificación por estrellas</h3>
              <div className="flex mb-2">
                {[1,2,3,4,5].map(star => (
                  <span
                    key={star}
                    className={`text-2xl cursor-pointer ${hoverCalificacion >= star || calificacion >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                    onClick={() => handleSetCalificacion(star)}
                    onMouseEnter={() => setHoverCalificacion(star)}
                    onMouseLeave={() => setHoverCalificacion(0)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-300">Calificación: {calificacion} de 5</span>
            </div>
            {/* Exploración y búsqueda de capacitaciones */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exploración y búsqueda de capacitaciones</h3>
              <input className="w-full mb-2 px-2 py-1 rounded text-black" placeholder="Buscar..." value={busqueda} onChange={e => setBusqueda(e.target.value)} />
              <ul className="list-disc pl-5">
                {cursosFiltrados.map(c => (
                  <li key={c.nombre} className="cursor-pointer hover:underline" onClick={() => handleSeleccionarCurso(c)}>{c.nombre}</li>
                ))}
              </ul>
              {cursoSeleccionado && (
                <div className="mt-4 p-2 bg-gray-700 rounded">
                  <h4 className="font-bold">{cursoSeleccionado.nombre}</h4>
                  <p className="text-sm">{cursoSeleccionado.descripcion}</p>
                  <button className="mt-2 bg-emerald-600 text-white py-1 px-4 rounded" onClick={() => setCursoSeleccionado(null)}>Cerrar</button>
                </div>
              )}
            </div>
            {/* Visualización de contenidos */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Visualización de contenidos</h3>
              {cursoSeleccionado ? (
                <>
                  <div className="mb-2">Módulo: <span className="font-bold">{cursoSeleccionado.modulos[moduloActual]}</span></div>
                  <div className="flex gap-2 mb-2">
                    <button className="bg-emerald-600 text-white py-1 px-2 rounded" onClick={handleModuloAnterior} disabled={moduloActual === 0}>Anterior</button>
                    <button className="bg-emerald-600 text-white py-1 px-2 rounded" onClick={handleModuloSiguiente} disabled={moduloActual === cursoSeleccionado.modulos.length - 1}>Siguiente</button>
                  </div>
                  <div className="bg-gray-700 rounded p-2">Contenido de {cursoSeleccionado.modulos[moduloActual]}</div>
                </>
              ) : (
                <p className="bg-gray-700 rounded p-2">Selecciona un curso para ver los módulos.</p>
              )}
            </div>
            {/* Comentarios y reseñas */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Comentarios y reseñas</h3>
              <div className="flex items-center mb-2">
                {[1,2,3,4,5].map(star => (
                  <span
                    key={star}
                    className={`text-xl cursor-pointer ${nuevoRating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                    onClick={() => setNuevoRating(star)}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm">{nuevoRating} de 5</span>
              </div>
              <textarea className="w-full mb-2 px-2 py-1 rounded text-black" placeholder="Escribe tu comentario..." value={nuevoComentario} onChange={e => setNuevoComentario(e.target.value)} />
              <button className="bg-emerald-600 text-white py-1 px-4 rounded" onClick={handleAgregarComentario}>Enviar</button>
              <div className="mt-2 text-sm text-gray-300">
                {comentarios.map((c, i) => (
                  <div key={i} className="flex items-center justify-between mb-1">
                    <span><b>{c.usuario}:</b> {c.texto} {Array.from({length: c.rating}).map((_, idx) => <span key={idx} className="text-yellow-400">★</span>)}</span>
                    <button className="ml-2 text-red-400 text-xs" onClick={() => handleEliminarComentario(i)}>Eliminar</button>
                  </div>
                ))}
              </div>
            </div>
            {/* Subida y edición de contenidos (admin) */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Subida y edición de contenidos (admin)</h3>
              <input className="w-full mb-2 px-2 py-1 rounded text-black" placeholder="Título del contenido" value={nuevoTitulo} onChange={e => setNuevoTitulo(e.target.value)} />
              <textarea className="w-full mb-2 px-2 py-1 rounded text-black" placeholder="Descripción..." value={nuevaDescripcion} onChange={e => setNuevaDescripcion(e.target.value)} />
              <button className="bg-emerald-600 text-white py-1 px-4 rounded mr-2" onClick={handleSubirContenido}>Subir</button>
              <ul className="mt-4">
                {contenidos.map((cont, idx) => (
                  <li key={idx} className="mb-2">
                    {editando === idx ? (
                      <div>
                        <input className="w-full mb-1 px-2 py-1 rounded text-black" value={editTitulo} onChange={e => setEditTitulo(e.target.value)} />
                        <textarea className="w-full mb-1 px-2 py-1 rounded text-black" value={editDescripcion} onChange={e => setEditDescripcion(e.target.value)} />
                        <button className="bg-emerald-500 text-white py-1 px-2 rounded mr-1" onClick={() => handleGuardarEdicion(idx)}>Guardar</button>
                        <button className="bg-gray-500 text-white py-1 px-2 rounded" onClick={handleCancelarEdicion}>Cancelar</button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <b>{cont.titulo}</b>: {cont.descripcion}
                        </div>
                        <div>
                          <button className="bg-emerald-500 text-white py-1 px-2 rounded mr-1" onClick={() => handleEditarContenido(idx)}>Editar</button>
                          <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleEliminarContenido(idx)}>Eliminar</button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requerimientos Funcionales Extra - DEMO VISUAL */}
      <section className="py-8 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Requerimientos Funcionales Extra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Panel de administración */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Panel de administración</h3>
              <ul className="list-disc pl-5">
                <li>Ver usuarios</li>
                <li>Gestionar cursos</li>
                <li>Estadísticas</li>
              </ul>
              <button className="bg-emerald-600 text-white py-1 px-4 rounded mt-2" onClick={handleIrPanel}>Ir al panel</button>
            </div>
            {/* Visualización del progreso del usuario */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Visualización del progreso del usuario</h3>
              <div className="w-full bg-gray-600 rounded h-4 mb-2">
                <div className="bg-emerald-400 h-4 rounded" style={{ width: `${progreso}%` }}></div>
              </div>
              <p className="text-sm">Progreso: {progreso}%</p>
              <button className="mt-2 bg-emerald-600 text-white py-1 px-4 rounded" onClick={handleAumentarProgreso}>Avanzar</button>
            </div>
            {/* Guardar capacitaciones como favoritas */}
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <h3 className="font-semibold mb-2">Guardar capacitaciones como favoritas</h3>
              <input className="w-full mb-2 px-2 py-1 rounded text-black" placeholder="Nombre del curso" value={nuevoFavorito} onChange={e => setNuevoFavorito(e.target.value)} />
              <button className="bg-emerald-600 text-white py-1 px-4 rounded mb-2" onClick={handleAgregarFavorito}>Agregar a favoritos</button>
              <ul className="list-disc pl-5 mb-2">
                {favoritos.map((f, i) => <li key={i}>{f} <span className="ml-2 text-yellow-400">★</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Categorías destacadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Desarrollo Web", "Diseño UX/UI", "Marketing Digital", "Idiomas", "Negocios", "Ciencia de Datos"].map(
              (category) => (
                <Link
                  href={`/cursos?categoria=${category}`}
                  key={category}
                  className="bg-white border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-gray-800">{category}</h3>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Cursos populares */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Cursos populares</h2>
            <Link href="/cursos" className="text-emerald-600 hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Card key={id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Curso ${id}`}
                  alt={`Curso ${id}`}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-emerald-600 mb-2">Desarrollo Web</div>
                  <h3 className="text-lg font-semibold mb-2">Introducción al Desarrollo Frontend</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Aprende los fundamentos de HTML, CSS y JavaScript para crear sitios web interactivos.
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
                    <Link href={`/cursos/${id}`} className="text-sm font-medium text-emerald-600 hover:underline">
                      Ver curso
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t">
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

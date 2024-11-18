import MainLayout from "../layouts/MainLayout"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"

export const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path: '/nosotros',
    layout: MainLayout,
    component: About
  },
  {
    path: '/habilidades',
    layout: MainLayout,
    component: Skills
  },
  {
    path: '/proyectos',
    layout: MainLayout,
    component: Projects
  },
  {
    path: '/contacto',
    layout: MainLayout,
    component: Contact
  }
]
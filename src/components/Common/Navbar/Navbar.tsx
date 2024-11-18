import { NavLink } from 'react-router-dom'
import logo from '/img/logos/logo.png'
import { FaBars } from 'react-icons/fa'
import { useMenu } from '../../../hooks/useMenu'

export default function Navbar() {

  const {menuActive, handleMenu} = useMenu();

  return (
    <header className='relative z-10 h-[80px]'>
      <nav className="fixed top-0 w-full h-[80px]">
        <div className="contain w-full flex justify-between items-center px-5 py-5">
          <figure className='h-[50px] md:h-[60px] xl:h-[65px]'>
            <img src={logo} alt="" className='h-full w-full' />
          </figure>
          <div className=''>
            <button className='block md:hidden' onClick={handleMenu}>
              <FaBars className='text-mainText' size={26} />
            </button>
            <ul className={`w-full h-[calc(100vh-75px)] md:h-full font-title text-secondaryText flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6 xl:gap-10 absolute md:static  top-[75px] md:top-0 ${menuActive ? '-left-[20%]' : 'top-[115px] -left-[100%]'} transition-all duration-300 ease-in-out`}>
              <NavLink to='/' className={({isActive})=> `${isActive ? 'active' : ''}`} onClick={handleMenu}><span className='text-mainText'>01.</span>Inicio</NavLink>
              <NavLink to='/nosotros' className={({isActive})=> `${isActive ? 'active' : ''}`} onClick={handleMenu}><span className='text-mainText'>02.</span>Nosotros</NavLink>
              <NavLink to='/habilidades' className={({isActive})=> `${isActive ? 'active' : ''}`} onClick={handleMenu}><span className='text-mainText'>03.</span>Habilidades</NavLink>
              <NavLink to='/proyectos' className={({isActive})=> `${isActive ? 'active' : ''}`} onClick={handleMenu}><span className='text-mainText'>04.</span>Proyectos</NavLink>
              <NavLink to='/contacto' className={({isActive})=> `${isActive ? 'active' : ''}`} onClick={handleMenu}><span className='text-mainText'>05.</span>Contáctame</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
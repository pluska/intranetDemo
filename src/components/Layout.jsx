import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Logo from '../assets/scotiabank.png'
import avatarWhite from '../assets/avatar-white.svg'
import avatarRed from '../assets/avatar-red.svg'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  const [show, setShow] = React.useState(false)
  const [avatar, setAvatar] = React.useState(avatarWhite)
  const userMenuRef = useRef(null);
  const avatarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  const handleMouseOver = () => {
    setAvatar(avatarRed);
  };

  const handleMouseLeave = () => {
    setAvatar(avatarWhite);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const user = {
    name: 'Juan Perez',
    role: 'Administrador',
    branch: 'Agencia 1234',
  }
  const options = ([
    {name: 'Definiciones', ref: '#' , },
    {name: 'Operaciones', ref: '#'},
    {name: 'Eventos Corporativos', ref: '#'},
    {name: 'Consultas', ref: '#'},
    {name: 'Información en BT', ref: '#'},
    {name: 'Reportes', ref: '#', dropdown: [
      {name: 'Reportes Varios', ref: '#'},
      {name: 'Egresos y Rescates', ref: '#'},
      {name: 'Rescates Pendientes', ref: '#'},
      {name: 'Comisiones Pendientes', ref: '#'},
      {name: 'Ingresos y Suscripciones', ref: '#'},
      {name: 'Intereses Bancarios', ref: '#'},
      {name: 'Cartas de Liquidación', ref: '#'},
      {name: 'Op. de Inversión por Liquidar', ref: '#'},
      {name: 'Resumen de operaciones', ref: '#'},
      {name: 'Sustento Comisión Custodia', ref: '#'},
      {name: 'Obligaciones Compra Venta Pendientes', ref: '#'},
      {name: 'Operaciones Spot, Forward, Swaps, y Opciones', ref: '#'},
      {name: 'Reportes Operativos en Formato XLS', ref: '#'},
      ]},])

  return (
    <div>
      <header className='navbar'>
          <div className='navbar-logo'>
          <img src={Logo} alt="logo" />
        </div>
        <nav className='navbar-nav'>
        <Navbar options={options}/>
        </nav>
        <div
          className='user-span-menu'
          ref={userMenuRef}
          onClick={() => setShow(!show)}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <span className='user-info-name'>Hola, {user.name}</span>
          <img src={avatar} alt='Avatar' className='avatar' ref={avatarRef} />
          <div className='span-menu' style={show ? {display: "block"} : {display: 'none'}}>
              <span className='text-muted'>{user.branch}</span>
            <ul>
              <li><Link href='#'>Cerrar Sesión</Link></li>
            </ul>
          </div>
        </div>

      </header>
      <main className='content'>
        {children}
      </main>
    </div>
  )
}

export default Layout
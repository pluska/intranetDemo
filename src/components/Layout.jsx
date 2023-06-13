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
    {name: 'Consultas', ref: '#' ,dropdown: [
      {name: 'Documentacion Pendiente', ref: '/Documentation-Pending-Delivery'},
      {name: 'Cargo Electrónico a Depsa', ref: '#', dropdown: [
        {name: 'Persona Natural', ref: '/Depsa-Electronic-Charge-Natural-Person'},
        {name: 'Persona Jurídica', ref: '/Depsa-Electronic-Charge-Juridical-Person'}
      ]}
      ]}, 
    {name: 'Registros', ref: '#',dropdown: [
      {name: 'Suscripciones', ref: '/Subscriptions-Search-Clients-Funds'} ,
      {name: 'Rescates', ref: '/Rescue-Client-Search'},
      {name: 'Traspasos', ref: '/Transfer-Client-Search'}  

      ]},
    {name: 'Información', ref: '#'},
    {name: 'Sistemas', ref: '#'}, 
    {name: 'Reportes', ref: '#', dropdown: [
      {name: 'Generación de reporte deuda documentaria en sistema', ref: '/Documentary-Deb-Generation-System'} 
      ]},
    ])

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
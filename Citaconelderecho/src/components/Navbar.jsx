import React from "react";
import { useState } from "react";
import "./Navbar.css"
import Logo from "../assets/Logo.png"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-izq"><img src={Logo}></img></div>
            
            <div className="nav-der">
            <div className="nav-item" onMouseEnter={() => {setShowMenu(true)}} onMouseLeave={() => {setShowMenu(false)}}>
                <span className="nav-label">CONSULTA LEGAL ▾</span>
                { showMenu && (
                    <ul className="dropdown-list">
                    <li>Abogados en linea Colombia</li>
                    <li>Pregunta a un Abogado</li>
                    <li>Abogados en España</li>
                    <li>Abogados Pasto</li>
                    <li>Migracion</li>
                    <li>Familia</li>
                    <li>Derechos humanos</li>
                    <li>Derecho Medico</li> 
                    <li>Cobranzas Juridicas</li>
                    <li>Penal</li>
                    <li>Laboral</li>
                    <li>Registro de marca</li>
                    <li>Administrativo</li>
                    <li>Asesoria Contable</li>
                    <li>Empresas</li>
                </ul>
                )}
            </div>
            <div className="nav-item">Inicio</div>
            <div className="nav-item">Nosotros</div>
            <div className="nav-item">Contacto</div>
            <div className="nav-item">Blog</div>
            <div className="nav-item-blog">Asesoria</div>
            
            </div>
        </nav>
    )
}

export default Navbar



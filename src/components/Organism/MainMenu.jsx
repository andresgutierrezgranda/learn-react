import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const MainMenu = () => (

    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://api.ed.team/public-files/bloginlineimg/5b557c57-8969-45ca-b880-a05441ca353b.png" alt=""/>
                </a>
            </div>
            <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li> <Link exact to="/" activeClassName="activo"> Inicio </Link> </li>
                        <li> <Link to="/cursos" activeClassName="activo"> Cursos </Link> </li>
                        <li> <Link to="/formulario" activeClassName="activo"> Formulario </Link> </li>                        
                        <li> <Link to="/usuarios" activeClassName="activo"> Usuarios </Link> </li>                        
                        <li> <Link to="/privado" activeClassName="activo"> Privado </Link> </li>   
                        <li> <Link to="/imagenes" activeClassName="activo"> Imagenes </Link> </li>                       
                    </ul>
                </nav>
                <nav className="main-menu-toggle to-l" id="main-menu">
                    <li> <Link exact to="/" activeClassName="activo"> Inicio </Link> </li>
                    <li> <Link to="/cursos" activeClassName="activo"> Cursos </Link> </li>
                    <li> <Link to="/formulario" activeClassName="activo"> Formulario </Link> </li>                        
                    <li> <Link to="/usuarios" activeClassName="activo"> Usuarios </Link> </li>     
                    <li> <Link to="/privado" activeClassName="activo"> Privado </Link> </li>  
                    <li> <Link to="/imagenes" activeClassName="activo"> Imagenes </Link> </li>  
                </nav>
            </div>
        </div>
    </header>
)



export default MainMenu;
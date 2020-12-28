import React from 'react'
import "../styles/styles.scss"
import From from './Pages/Form'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainMenu from './Organism/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Private from './Pages/Private'
import Images from './Pages/Images'

const App = () => 

<Router>
    <MainMenu />
    <Switch>
        <Route path="/" exact component={ Home }/>
        <Route path="/cursos/:id" component={ Course }/>
        <Route path="/cursos" component={ Courses }/>
        <Route path="/historial" component={ History }/>
        <Route path="/usuarios" component={ Users }/>
        <Route path="/formulario" component={ () => <From name="página de contacto" /> }/>
        <Route path="/privado" exact component={ Private }/>
        <Route path="/imagenes" exact component={ Images }/>
        <Route component={ () => (
            <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
            </div>
        ) } />
    </Switch>
</Router>
export default App;

/*REGLAS JSX
    1: Toda etiqueta debe cerrarse
    2: Los componentes deben devolver UN sólo elemento padre
    3: Apoyarse de los Fragment cuando necesito devolcver 2 elementos (Fragment hace que el codigo html se vea más limpio al no indexarlo)
        import React, {Fragment} from 'react';
        <Fragment> o <>
            <h1>Hola mundo</h1>
            <p>Adiós</p>
        </Fragment> o </>
    4: img siempre se cierra => <img src=""/>
    5: className => className
    6: for => htmlFor
*/
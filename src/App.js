import React, {Fragment} from 'react'
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
    {
        "title": "React desde cero",
        "image": "https://img.freepik.com/vector-gratis/fondo-rojo-diseno-tecnologia-moderna_43969-1040.jpg?size=626&ext=jpg",
        "price": 30,
        "profesor": "Andrés"
    },
    {
        "title": "Drupal desde cero",
        "image": "https://www.movilzona.es/app/uploads/2019/03/fondos-fold.jpg",
        "price": 40,
        "profesor": "Pepe"
    },
    {
        "title": "Go desde cero",
        "image": "https://www.xtrafondos.com/wallpapers/cubos-3d-neon-3313.jpg",
        "price": 50,
        "profesor": "Norman"
    },
    {
        "title": "Html desde cero",
        "image": "https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/01/4-min-620x350.jpg",
        "price": 10,
        "profesor": "Álvaro"
    }
]

const App = () => 
/*    
    <Fragment>
        <div className="saludo">
            <h1>Hola mundo</h1>
            <p>Adiós</p> 
        </div>
        <div>
            <img src="https://ed.team/static/images/logo/logo-premium-alt.svg"/>
        </div>
    </Fragment>
*/

// Banner de EDTeam Style Guides y Tarjeta de EDTeam Style Guides
<Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
            <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">Cursos EDTeam</p>
                <p> Tu futuro te está esperando</p>
                <a href="https://ed.team" className="button">Suscribirse</a>
            </div>
            </div>
        </div>
    </div>

    <div className="ed-grid m-grid-3">
        {
            cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/> )
        }
    </div>
</Fragment>
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
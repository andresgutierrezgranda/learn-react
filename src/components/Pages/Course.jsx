import React from 'react'

const Courses = [
    {
        "id": 1,
        "title": "React desde cero",
        "image": "https://img.freepik.com/vector-gratis/fondo-rojo-diseno-tecnologia-moderna_43969-1040.jpg?size=626&ext=jpg",
        "price": 30, 
        "professor": "Andrés"
    },
    {
        "id": 2,
        "title": "Drupal desde cero",
        "image": "https://www.movilzona.es/app/uploads/2019/03/fondos-fold.jpg",
        "price": 40,
        "professor": "Pepe"
    },
    {
        "id": 3,
        "title": "Go desde cero",
        "image": "https://www.xtrafondos.com/wallpapers/cubos-3d-neon-3313.jpg",
        "price": 50,
        "professor": "Norman"
    },
    {
        "id": 4,
        "title": "Html desde cero",
        "image": "https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/01/4-min-620x350.jpg",
        "price": 10,
        "professor": "Álvaro"
    }
]

const Course = ({ match }) => {

    const CursoActual = Courses.filter( c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            CursoActual ? (
                <>
                    <h1 className="m-cols-3">{CursoActual.title}</h1>
                    <img className="m-cols-1" src={ CursoActual.image } alt={CursoActual.title}/>
                    <p className="m-cols-2">Profesor: {CursoActual.professor}</p>
                </>
            ) : (
                <h1>El curso no existe</h1>
            )
            
        }
        </div>
    )
}

export default Course
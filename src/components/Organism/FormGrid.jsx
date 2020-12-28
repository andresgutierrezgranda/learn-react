import React from "react"

const FormGrid = ({name, date, changeName, changeEmail, updateName, updateDate}) => (

    <div className="ed-grid">
        <h1>Formulario {name}</h1>
        <h4>Fecha actual: {date}</h4>
        <form id="elemento">
            <div className="ed-grid m-grid-2">
                <div className="form__item">
                    <label>Nombre completo</label>
                    <input type="text" onChange={ changeName }/>
                </div>
                <div className="form__item">
                    <label>Correo electrónico</label>
                    <input type="email" onChange={ changeEmail }/>
                </div>
            </div>
        </form>
        <div>
            <h2>{`Hola ${ updateName }`}</h2>
            <span>{`Tu correo es: ${ updateDate }`}</span>
        </div> 
    </div>

)

export default FormGrid

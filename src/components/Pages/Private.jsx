import React from 'react'
import withLoader from '../HOC/withLoader'
import withLogin from '../HOC/withLogin'

const Private = (props) => (
    <div>
        {console.log(props.loggued)}
        <h1>{props.loggued.loggued === 1 ? `Página privada de ${props.loggued.username}`: `No hay login ${props.loggued.username}`}</h1>
    </div>
)

export default withLoader("history")(withLogin(Private))
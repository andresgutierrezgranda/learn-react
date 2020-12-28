import React, { Component } from 'react'
import axios from 'axios'
import UsersGrid from '../Organism/UsersGrid'

class Users extends Component {

    constructor(props){

        super(props)

        this.state = {
            users: []
        }

    }
/*
    componentDidMount(){
        //Mostrar usuarios desde una API con fetch
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
        .then( response => response.json() )
        .then( response2 => {
            this.setState({
                users: response2
            })
        } )

    }
*/

    //Mostrar usuarios desde una API con axios (yarn add axios)
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( resp => {
            this.setState({
                users: resp.data
            })
        } )
    }

    render() {

        const { users } = this.state

        return <UsersGrid users={users}/>
    }

}

export default Users
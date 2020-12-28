import React, { Component } from 'react'
import axios from 'axios';
import CourseGrid from '../Organism/CourseGrid';

class Courses extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            Courses: []
        }
    }

    componentDidMount(){
        axios.get("https://my-json-server.typicode.com/andresgutierrezgranda/json-db/cursos")
        .then(resp => this.setState({
            Courses: resp.data
        }))
    }

    render(){
        const { Courses }=this.state
        return <CourseGrid courses={Courses} />
    }
}
export default Courses;
import React, {Component} from 'react'
import FormGrid from '../Organism/FormGrid'

class From extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            date: new Date()
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)

    }

    changeName(e) {
        this.setState({
            name: e.target.value
        }) 
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        }) 
    }

    changeDate() {       
        this.setState({
            date: new Date()
        }) 
    }

    render() {
        return <FormGrid 
                    name={ this.props.name } 
                    date={Math.ceil( this.state.date/1000) } 
                    changeName={ this.changeName } 
                    changeEmail={ this.changeEmail } 
                    updateName={ this.state.name } 
                    updateDate={ this.state.email }
               />
    }

    componentDidMount(){
        /*let elemento = document.getElementById("elemento")
        console.log(elemento);*/
        
        this.intervalDate= setInterval( () => {
            this.changeDate()
            console.log(new Date())
        }, 1000)

    }

    componentDidUpdate(prevProps, prevState) {
        /*console.log(prevProps)
        console.log(prevState)
        console.log("-----")*/
    }

    componentWillUnmount(){
        clearImmediate(this.intervalDate)
    }

}

export default From;
import axios from "axios"
import React, { Component } from "react"

const withLogin = (WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props){
            super(props)

            this.state = { loggued : [] }
            this.verifyUserLogin = this.verifyUserLogin.bind(this)
        }

        verifyUserLogin(){
            setTimeout( () => {
                axios.get("https://my-json-server.typicode.com/andresgutierrezgranda/json-db/users")
                .then(res => {
                    const loggued = res.data
                    this.setState({loggued: loggued[0]})
                })
                
            } )
        }

        componentDidMount() {
            this.verifyUserLogin()
        }

        render() {
            return <WrappedComponent {...this.props} loggued={this.state.loggued}/>
        }

    }
}

export default withLogin
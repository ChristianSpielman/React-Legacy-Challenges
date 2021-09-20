import React from 'react'
import apidisplay from './apidisplay'
//this will not display this is an example
export default class apiexample extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleList: []
        }
    }

    componentDidMount () {
        //https://swapi.dev/api/people
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(json => this.setState({peopleList: json.results}))//will pull character names
            .catch(e => console.error(e))
    }

    componentDidUpdate() {
        console.log(this.state.peopleList)
    }

    render() {
        return (
            <div>
                <h1>API DEMO</h1>
                {
                    this.state.peopleList.map((current, index) => {
                        return(
                            <apidisplay person={current} key={index} /> //call to display apidisplay & display name
                        )
                    })
                }
            </div>
        )
    }
}
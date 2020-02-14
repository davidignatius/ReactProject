import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             car:['mercedez','bmw','ferrari']
        }
    }
    
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.car.map((car)=><li>{car}</li>)}
                </ul>
            </div>
        )
    }
}

export default ClassClick

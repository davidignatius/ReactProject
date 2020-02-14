import React, { Component } from 'react'
import Header from '../Header/Index'
import Post from '../Post/Index'

class Feed extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Post/>
                </div>
                
            </div>
        )
    }
}

export default Feed

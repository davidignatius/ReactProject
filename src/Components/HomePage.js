import React, { Component } from 'react'
import './Header/Header.css'
class HomePage extends Component {
    render() {
        return (
            <div className="row user-header p-y-2">
                <div className="col-md-offset-2 col-md-8 p-y-4">
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                className="media-object"
                                src="https://i.pinimg.com/originals/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg"
                                alt="profile-pic"
                                />
                            </a>
                            </div>
                            <div className="media-body p-l-6">
                                <h2 className="media-heading m-t-15">John Smith</h2>
                                <h4><strong>TV Actor</strong></h4>
                                <ul className="header-ul">
                                    <li><strong>100</strong>posts</li>
                                    <li><strong>197k</strong>followers</li>
                                    <li><strong>275</strong>following</li>

                                </ul>


                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomePage

import React, { Component } from 'react'
import "./Cards3.css"
import { FontAwesomeIcon } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook, faTwitter } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-brands-svg-icons";
import { faHeart, faComment } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-regular-svg-icons"
import { faShareAlt } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-solid-svg-icons"
import { Avatar, Icon } from 'antd';


class Cards3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {username,place,numofviewers,comments,tagwho,hashtags,numofcomments,time,imagesrc}=this.props
        const {backgroundColor}= this.state
        return (
            // <div className="container">
            <div className="card">
                <div className="card-header">
                    {/* <div className="profile-img">
                    </div> */}
                    {/* <Avatar style={{ backgroundColor: '#87d068' }} icon="user" /> */}
                    <Avatar icon="user" className="avatar" />
                    <div className="profile-info">
                        <div className="name">
                            {username}
                        </div>
                        <div className="location">
                            {place}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <img src={imagesrc} />
                </div>
                <div className="card-footer">
                    <div className="icons">
                        <FontAwesomeIcon icon={faHeart} size="2x" className='heart' />
                        <FontAwesomeIcon icon={faComment} size="2x" className='comment' />
                        <FontAwesomeIcon icon={faShareAlt} size="2x" className='share' />
                    </div>
                    <div className="views">
                        {numofviewers} views
                    </div>
                    <div className="comments">
                        {username}
                        <span> {comments} <span className='one'>{tagwho} {hashtags}</span></span>
                    </div>
                    <div className="viewcomments">
                        View all {numofcomments} comments
                    </div>
                    <div className="time">
                        {time} MINUTES AGO
                    </div>
                    <hr></hr>
                    <div className="addcomment">
                        Add a comment...
                    </div>
                    <div className="postbutton">
                        Post
                    </div>
                </div>
            </div>
        // </div>
        )
    }
}

export default Cards3

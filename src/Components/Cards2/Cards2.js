import React, { Component } from 'react'

import { Card, Icon, Avatar } from 'antd';

import "./Cards2.css"

const { Meta } = Card;

class Cards2 extends Component {
    render() {
        return (
            <div>
            <Card
                className="Cards2"
                style={{ width: 400}}
                cover={
                    <img
                        alt="example"
                        src="https://i.pinimg.com/originals/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg"
                    />
                }
                actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Oh my gosh today is too hot!"
                    description="I finally wrote 5 books in 1 day!"
                />
            </Card>
            <Card
            className="Cards2"
            style={{ width: 400}}
            cover={
                <img
                    alt="example"
                    src="https://i.pinimg.com/originals/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg"
                />
            }
            actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Oh my gosh today is too hot!"
                description="I finally wrote 5 books in 1 day!"
            />
        </Card>
        </div>
        )
    }
}

export default Cards2
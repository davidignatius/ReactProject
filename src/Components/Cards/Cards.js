// import { Card, Icon, Avatar } from 'antd';
// import React, { Component } from 'react';

// const { Meta } = Card;

// class Cards extends Component {
//     render() {
//         return (
//             // <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv6 ba b--black-10">
//             <article class="center mw5 mv6">
//             <div>
//                 <Card
//                     style={{ width: 300 }}
//                     cover={
//                         <img
//                             alt="example"
//                             src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//                         />
//                     }
//                     actions={[
//                         <Icon type="setting" key="setting" />,
//                         <Icon type="edit" key="edit" />,
//                         <Icon type="ellipsis" key="ellipsis" />,
//                     ]}
//                 >
//                     <Meta
//                         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                         title="Card title"
//                         description="This is the description"
//                     />
//                 </Card>
//                 {/* mountNode, */}
//             </div>
//             </article>
//         )
//     }
// }

// export default Cards

import { Card, Col, Row, Avatar, Icon } from 'antd';
import React, { Component } from 'react'

const { Meta } = Card;


class Cards extends Component {
    render() {
        return (
            // <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv6 ba b--black-10">
            <article class="pa5">
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Borris" bordered={false}>
                                <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Amanda" bordered={false}>
                                <img alt="Icon Living" src="https://i.pinimg.com/originals/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Johnny Depp" bordered={false}>
                                <img src="https://picsum.photos/200" />
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Johnny Depp" bordered={false}>
                                <img src="https://picsum.photos/200" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Borris" bordered={false}>
                                <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Amanda" bordered={false}>
                                <img alt="Icon Living" src="https://i.pinimg.com/originals/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg" />
                            </Card>
                        </Col>


                    </Row>
                </div>
            </article>
        )
    }
}

export default Cards
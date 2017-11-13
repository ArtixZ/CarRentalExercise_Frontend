import React, { Component } from 'react';
import { Row, Col } from 'antd';

import LeftPanel from "../LeftPanel";
import RightPanel from '../RightPanel';

class Home extends Component {

    render() {
        return (
            <Row className="container">
                <Col span={10}>
                    <LeftPanel />
                </Col>
                <Col span={14} className="container">
                    <RightPanel />
                </Col>
            </Row>
        )
    }
}

export default Home
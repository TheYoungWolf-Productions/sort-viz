import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Sorter from './Sorter/Sorter';
import Controls from './Controller/Controller';

const player: React.FC = (props) => {
    return (
        <Row>
            <Col>
                <Sorter />
                <Controls />
            </Col>
        </Row>
    )
}

export default player;
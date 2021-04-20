import React from 'react';
import Navigation from './Navigation/Navigation';
import { Row } from 'react-bootstrap';


const layout: React.FC = (props) => {
    return (
        <Row>
            <Navigation />
        </Row>
    )
}

export default layout;

import React from 'react';
import Navigation from '../Navigation/Navigation';
import Player from '../../Containers/Player/Player'
import Description from '../Description/Description'
import { Row, Col, Container } from 'react-bootstrap';
import Aux from '../../hoc/Aux/Aux';


const layout: React.FC = (props) => {
    return (
        <Aux>
            <Row className='m-0 p-0'>
                <Col className='m-0 p-0'>
                    <Navigation />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <Player />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Description />
                    </Col>
                </Row>
            </Container>
        </Aux>
    )
}

export default layout;

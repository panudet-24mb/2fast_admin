/* eslint-disable */
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Lottie from 'lottie-react-web'

export default function Card(props) {
    const styleTet = {
        textAlign:'center', 
        fontWeight:'bold', 
        color: props.color, 
        marginTop:'20px'
    }
    return (
    <div style={{ border:`2px solid ${props.color}`, borderRadius:'7px', height:'150px', marginTop:'20px' }}>
        <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1 style={styleTet} > {props.value || 0} </h1>
            <h4 style={styleTet} > {props.type_count} </h4>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div style={{ marginTop:'20px' }}>
      
                        <Lottie
                        height={100}
                        options={{
                            animationData: props.animation
                                }}
                    />
    
                </div> 
            </Col>
        </Row>
    </div>
    )
}

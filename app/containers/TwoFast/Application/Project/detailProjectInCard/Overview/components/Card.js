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
    <div style={{ borderTop:`5px solid ${props.color}` , margin:'5px', boxShadow:'rgb(158, 158, 158) 0px 0px 5px' }}>
        <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1 style={styleTet} > {props.value || 0} </h1>
            <p style={{
                textAlign:'center', 
                color: props.color, 
                marginTop:'20px',
                fontSize:'25px'
            }} > {props.type_count} </p>
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

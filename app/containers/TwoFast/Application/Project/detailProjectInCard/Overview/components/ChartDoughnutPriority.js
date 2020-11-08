/* eslint-disable */
import React,{useState, useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ChartDoughnut(props) {
    const [data, setData] = useState()
    const [high, setHigh] = useState(0)
    const [medium, setMedium] = useState(0)
    const [low, setLow] = useState(0)

    // console.log(props.value);
    useEffect(() => {
        mappingData()
        return () => {
            
        }
    }, [props.value])
    useEffect(() => {
        setDataInChart()
        return () => {
            
        }
    }, [high, medium, low])

    function mappingData() {
        props.value.map( donut => {
            if(donut.High) setHigh(donut.High)
            else if(donut.Medium) setMedium(donut.Medium)
            else if(donut.Low) setLow(donut.Low)
        })
    }
    function setDataInChart() {
        setData({
            labels: [
                'High',
                'Medium',
                'Low'
            ],
            datasets: [{
                data: [high, medium, low],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }],
        })
    }

    const options = {
        maintainAspectRatio : false,
        legend: {
          display: false,
        },
      };

    const textNumber = {
        float:'right'
    }
    const text = {
        marginLeft:'30px'
    }

    return (
<div style={{ marginTop:'20px'}}>
    <Row>
        <Col>
            <div style={{ marginTop:'25px' }}>
                <div style={{ position:'relative' }}>
                    <div style={{ backgroundColor:'#FF6384' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                    <h5 style={text}>High <span style={textNumber}>{high}</span></h5>
                </div>
                <hr />
                <div style={{ position:'relative' }}>
                    <div style={{ backgroundColor:'#36A2EB' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                    <h5 style={text}>Medium <span style={textNumber}>{medium}</span></h5>
                </div>
                <hr />
                <div style={{ position:'relative' }}>
                    <div style={{ backgroundColor:'#FFCE56' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                    <h5 style={text}>Low <span style={textNumber}>{low}</span></h5>
                </div>
            </div>
        </Col>
        <Col>
            <div style={{ marginRight:'0px' }}>
                <Doughnut data={data} options={options} />
            </div>
        </Col>
    </Row>
</div>
    )
}

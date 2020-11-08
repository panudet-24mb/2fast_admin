/* eslint-disable */
import React,{useState, useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ChartDoughnutStatus(props) {
    const [active, setActive] = useState(0)
    const [pending, setPending] = useState(0)
    const [pending_client, setPending_client] = useState(0)
    const [inprogress, setInprogress] = useState(0)
    const [complete, setComplete] = useState(0)
    const [reject, setReject] = useState(0)
    const [inActive, setInActive] = useState(0)
    const [cancle, setCancle] = useState(0)
    const [dataToChart, setDataToChart] = useState()

    useEffect(() => {
        mappingData()
        return () => {
            
        }
    }, [props.value])

    useEffect(() => {
        setDataDonutChart()
        return () => {
            
        }
    }, [active, pending, pending_client, inprogress, complete, reject, inActive, cancle])

    function  mappingData() {
        props.value.map( donut => {
            if(donut.Active) setActive(donut.Active)
            else if(donut.Inprogress) setInprogress(donut.Inprogress)
            else if(donut.InActive) setInActive(donut.InActive)
            else if(donut.Complete) setComplete(donut.Complete)
            else if(donut.Cancle) setCancle(donut.Cancle)
            else if(donut.Reject) setReject(donut.Reject)
            else if(donut.Pending) setPending(donut.Pending)
            else if(donut.Pending_client) setPending_client(donut.Pending_client)
        })
    }

    function setDataDonutChart() {
        setDataToChart({
            labels: [
                'InActive',
                'Active',
                'Inprogress',
                'Pending',
                'Pending_client',
                'Complete',
                'Reject',
                'Cancle'
            ],
            datasets: [{
                data: [inActive, active, inprogress, pending, pending_client, complete, reject, cancle],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#fcf876',
                    '#16a596',
                    '#8bcdcd',
                    '#9088d4',
                    '#FF6384',
                    '#898b8a',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#fcf876',
                    '#16a596',
                    '#8bcdcd',
                    '#9088d4',
                    '#FF6384',
                    '#898b8a',
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
                <div style={{ marginTop:'25px', overflow: 'auto', height:'145px' }}>
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#FF6384' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>InActive <span style={textNumber}>{inActive}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#36A2EB' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Active <span style={textNumber}>{active}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#fcf876' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Inprogress <span style={textNumber}>{inprogress}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#16a596' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Pending <span style={textNumber}>{pending}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#8bcdcd' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Pending_client <span style={textNumber}>{pending_client}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#9088d4' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Complete <span style={textNumber}>{complete}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#FF6384' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Reject <span style={textNumber}>{reject}</span></h5>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#898b8a' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <h5 style={text}>Cancle <span style={textNumber}>{cancle}</span></h5>
                    </div>

                </div>
            </Col>
            <Col>
                <div style={{ marginRight:'0px' }}>
                    <Doughnut data={dataToChart} options={options} />
                </div>
            </Col>
        </Row>      
    </div>
    )
}

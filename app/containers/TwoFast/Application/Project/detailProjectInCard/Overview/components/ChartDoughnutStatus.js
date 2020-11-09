/* eslint-disable */
import React,{useState, useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CanvasJSReact from './Chart/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
                    '#AF2384',
                    '#898b8a',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#fcf876',
                    '#16a596',
                    '#8bcdcd',
                    '#9088d4',
                    '#AF2384',
                    '#898b8a',
                ]
            }],
            
        })
    }
    const options = {
        maintainAspectRatio : false,
        responsive: true,
        legend: {
            display: true,
            position: "left",
            align: "center",
            fontFamily: "Allianz-Neo",
            textDirection: 'ltr',
              labels: {
                usePointStyle: true,
                fontColor: "#006192",
              }
          },
      };
    const textNumber = {
        float:'right'
    }
    const text = {
        marginLeft:'30px'
    }

    // const optionsTest = {
    //     animationEnabled: true,
    //     title: {
    //         // text: "Stats"
    //     },
    //     subtitles: [{
    //         // text: "71% Positive",
    //         verticalAlign: "center",
    //         fontSize: 24,
    //         dockInsidePlotArea: true
    //     }],
    //     data: [{
    //         type: "doughnut",
    //         showInLegend: false,
    //         indexLabel: "{name}: {y}",
          
    //         dataPoints: [
    //             { name: "Unsatisfied", y: 5 , color:'#36A2EB'},
    //             { name: "Very Unsatisfied", y: 31 },
    //             { name: "Very Satisfied", y: 40 },
    //             { name: "Satisfied", y: 17 },
    //             { name: "Neutral", y: 7 },
    //         ]
    //     }]
    // }

    return (

    //     <div>
    //     <CanvasJSChart options = {optionsTest} 
    //         /* onRef={ref => this.chart = ref} */
    //     />
    // </div>

    <div>
    <h5 style={{fontWeight:'bold', color:'#6c757d'}}>Status</h5>
        <Row>
            <Col xs={12} sm={12} md={12} lg={7} xl={7}>
                <div style={{ marginRight:'0px' }}>
                    <Doughnut data={dataToChart} options={options} />
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                <div style={{ marginTop:'25px' }}>
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#FF6384' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>InActive <span style={textNumber}>{inActive}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#36A2EB' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Active <span style={textNumber}>{active}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#fcf876' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Inprogress <span style={textNumber}>{inprogress}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#16a596' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Pending <span style={textNumber}>{pending}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#8bcdcd' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Pending_client <span style={textNumber}>{pending_client}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#9088d4' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Complete <span style={textNumber}>{complete}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#FF6384' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Reject <span style={textNumber}>{reject}</span></p>
                    </div>
                    <hr />
                    <div style={{ position:'relative' }}>
                        <div style={{ backgroundColor:'#898b8a' , width:'20px', height:'20px', position:'absolute', borderRadius:'50%', marginTop:'3px'}} /> 
                        <p style={text}>Cancle <span style={textNumber}>{cancle}</span></p>
                    </div>

                </div>
            </Col>
        </Row>      
    </div>
    )
}

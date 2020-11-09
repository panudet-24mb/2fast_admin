/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function JobNear5Day(props) {
    const { job_name, job_enddate } = props.value
    const [totalDate, setTotalDate] = useState(null)

      function countDay() {    
        var date1 = new Date(props.value.job_enddate);
        var date2 = new Date();
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 
        setTotalDate(diffDays);
      }

      function renderColor() {
          if(totalDate === 0){
            return(
                <div>
                      <h1 style={{ fontWeight:'bold', position:'absolute', color:'#8ADFE2' }}> {totalDate} </h1>
                      <h3  style={{ position:'absolute', left:'40px', top:'7px', color:'rgb(109, 107, 107)'  }}>day</h3>
                </div>
            )
          } else  if(totalDate === 1){
            return(
                <div>
                      <h1 style={{ fontWeight:'bold', position:'absolute', color:'#FC8476' }}> {totalDate} </h1>
                      <h3  style={{ position:'absolute', left:'40px', top:'7px', color:'rgb(109, 107, 107)'  }}>day</h3>
                </div>
            )
          }else  if(totalDate === 2){
            return(
                <div>
                      <h1 style={{ fontWeight:'bold', position:'absolute', color:'#FFD67E' }}> {totalDate} </h1>
                      <h3  style={{ position:'absolute', left:'40px', top:'7px', color:'rgb(109, 107, 107)'  }}>day</h3>
                </div>
            )
          }else  if(totalDate === 3){
            return(
                <div>
                      <h1 style={{ fontWeight:'bold', position:'absolute', color:'#F79C65' }}> {totalDate} </h1>
                      <h3  style={{ position:'absolute', left:'40px', top:'7px', color:'rgb(109, 107, 107)'  }}>day</h3>
                </div>
            )
          }else  if(totalDate === 4){
            return(
                <div>
                      <h1 style={{ fontWeight:'bold', position:'absolute', color:'#9088d4' }}> {totalDate} </h1>
                      <h3  style={{ position:'absolute', left:'40px', top:'7px', color:'rgb(109, 107, 107)'  }}>day</h3>
                </div>
            )
          }else  if(totalDate === 5){
            return(
                <div>
                      <h1 style={{ fontWeight:'bold', position:'absolute', color:'#55C5D1' }}> {totalDate} </h1>
                      <h3  style={{ position:'absolute', left:'40px', top:'7px', color:'rgb(109, 107, 107)'  }}>Day</h3>
                </div>
            )
          }
      }

      useEffect(() => {
        countDay()
        
          return () => {
              
          }
      }, [props.value])
    
    return (
    <div style={{ height:'100px', borderRadius:'7px' }}>
        <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
               <div style={{ position:'relative', top:'20px', left:'20px' }}>
               { renderColor() }
               </div>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div style={{ marginTop:'20px' }}>
                    <h5 style={{ fontWeight:'bold', color:'rgb(109, 107, 107)' }}>{job_name}</h5>
                    <h5 style={{ color:'rgb(109, 107, 107)'  }}>{job_enddate}</h5>
                </div>
            </Col>
        </Row>
        <hr />
    </div>
    )
}

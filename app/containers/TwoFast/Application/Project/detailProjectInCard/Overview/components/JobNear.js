/* eslint-disable */
import React,{useEffect, useState} from 'react'
import JobNear5Day from './JobNear5Day'
import { Scrollbar } from "react-scrollbars-custom";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const compareLast = ( a, b ) => {
    if ( a.job_enddate < b.job_enddate ){
      return 1;
    }
    if ( a.job_enddate > b.job_enddate ){
      return -1;
    }
    return 0;
  }
const compareOld = ( a, b ) => {
    if ( a.job_enddate > b.job_enddate ){
      return 1;
    }
    if ( a.job_enddate < b.job_enddate ){
      return -1;
    }
    return 0;
  }

export default function JobNear(props) {
    const [data, setData] = useState()
    const [sizeIconUp, setSizeIconUp] = useState(30)
    const [sizeIconDown, setSizeIconDown] = useState(30)
    const [colorIconUp, setColorIconUp] = useState('#4699C3')
    const [colorIconDown, setColorIconDown] = useState('#C6C6C6')
    const [dec, setDeo] = useState(null)
    const listDataLast = () => {
        setSizeIconUp(45)
        setSizeIconDown(30)
        setColorIconUp('#4699C3')
        setColorIconDown('#C6C6C6')
        setData(props.value.sort(compareLast))
        setDeo('q')
        renderData()
    }
    const listDataOld = () => {
        setSizeIconUp(30)
        setSizeIconDown(45)
        setColorIconUp('#C6C6C6')
        setColorIconDown('#4699C3')
        setData(props.value.sort(compareOld))
        setDeo('w')
        renderData()
    }

    useEffect(() => {
        listDataLast()
        return () => {
            
        }
    }, [props.value])

    function renderData() {
        if(data){
          return  data.map( (dt, index) => {
                return <JobNear5Day key={index} value={dt} />
            })
        }
    }
    
    return(
    <div>
        <Row>
            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
           <h3 style={{fontWeight:'bold', color:'#6c757d', marginTop:'50px'  }}> Job enddate near 5 day</h3>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <div style={{ marginTop:'50px' }}>
                <a><AiOutlineUp color={colorIconUp} size={sizeIconUp} onClick={() => listDataLast()}/></a>
                <a><AiOutlineDown color={colorIconDown} size={sizeIconDown} onClick={() => listDataOld()}/></a>
            </div>
            </Col>
        </Row>
        <Row>
            <Scrollbar style={{ height: 400 }}>
                { renderData() }
            </Scrollbar>
        </Row>

    </div>
    )
}
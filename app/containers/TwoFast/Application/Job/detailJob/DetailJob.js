/* eslint-disable */
import React from 'react'

export default function DetailJob(props) {
    console.log(props.location.state);
    return (
        <div>
            <p>{props.location.state.job_name}</p>
            <p>{props.location.state.job_number}</p>
            DetailJob
        </div>
    )
}

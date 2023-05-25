import React from 'react'

const Feature = ({ title, text }) => {
    return (
        <div className='feature'>
            <div className="feature_heading" >
                <div />
                <h1>{title}</h1>
            </div >
            <div className="feature_text" >
                <p>{text}</p>
            </div >
        </div >
    )
}

export default Feature
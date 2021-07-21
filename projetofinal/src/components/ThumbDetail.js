import React from 'react'

function ThumbDetail({ image_url, title, population, region, capital }) {
    return (
        <div >
            <img src={image_url}  alt={title} />
            <div >
                <h3 >{title}</h3>
                <p >Population: <span >{population}</span></p>
                <p >Region: <span >{region}</span></p>
                <p >Capital: <span >{capital}</span></p>  
            </div>
        </div>
    )
}

export default ThumbDetail

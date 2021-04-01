import React from 'react'
import '../styles/SectionR.scss'

function SectionR({title, imageUrl, body}) {
    return (
        <section className='containerR'>
            <img src={imageUrl} className='photoR' alt='' />
            <h2 className='titleR'>{title}</h2>
            <p className='bodyR'>{body}</p>
        </section>
    )
}

export default SectionR

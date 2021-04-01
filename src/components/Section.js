import React from 'react'
import '../styles/Section.scss'

function Section({title, imageUrl, body}) {
    return (
        <section className='container'>
            <img src={imageUrl} className='photo' alt='' />
            <h2 className='title'>{title}</h2>
            <p className='body'>{body}</p>
        </section>
    )
}

export default Section

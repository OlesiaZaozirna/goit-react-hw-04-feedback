import React from 'react';
import css from './Section.module.css'
import '../fonts/font.css'


const Section = ({ title, children }) => {
    return (
        <section className={css.Feedback__section}>
            <h2 className={css.Title} style={{ fontFamily: 'TitleFont', fontSize: '56px' }}>{title}</h2>
            {children}
        </section>
    )
}

export default Section;


  
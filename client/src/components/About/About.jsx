import './About.css'

function About() {
    return (
        <>
            <img src="/AL.png" alt="dat_boi" style={{width: '250px', borderRadius: '10px', outline: 'solid white .1rem'}}/>
            <h1 style={{marginTop: '-.25rem'}}>Alexandre Labbe</h1>
            <h2 style={{marginTop: '-2rem', marginBottom: '8px'}}>University of Washington - Informatics 2025</h2>
            <div className='social-button' style={{display: 'flex', justifyContent: 'center'}}>
                <a style={{marginRight: '3rem'}} href='https://linkedin.com/in/alexandrelabbe' target='_blank'>LinkedIn</a>
                <a style={{marginLeft: '3rem'}} href='https://github.com/alex-labbe' target='_blank'>GitHub</a>
            </div>
        </>
    )
}

export default About
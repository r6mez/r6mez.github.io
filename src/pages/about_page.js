import React from 'react';
import laptop from "../imgs/laptop.png";


class AboutPage extends React.Component {
    render() {
        return (
            <div className='basic-page'>
            <div className='basic-text'>
                <p className='about-title'>About Me</p>
                <p className='about-text'>I am a 18-year-old Egyptian boy, I study computer science, I'm passionate about learning and creating cool things.</p>
            </div>
            <div className='img-container'>
                <img src={laptop} className='img'></img>
            </div>
        </div>
        );
    }
}

export default AboutPage;
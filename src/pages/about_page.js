import React from 'react';
import laptop from "../imgs/laptop.png";


class AboutPage extends React.Component {
    render() {
        return (
            <div className='home-page'>
            <div className='home-text'>
                <p className='about-title'>About Me</p>
                <p className='about-text'>I am a 16-year-old Egyptian boy who is passionate about learning. The basis of anything I learn is, can I be creative in it or not? So I chose to learn programming, I took a look at coding mobile apps, then websites, then games. I also learned other skills such as video editing and design. I can say that I am always on a learning journey.</p>
            </div>
            <div className='img-container'>
                <img src={laptop} className='img'></img>
            </div>
        </div>
        );
    }
}

export default AboutPage;
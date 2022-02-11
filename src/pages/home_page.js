import React from 'react';
import planet from "../imgs/planet.png";

class HomePage extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <div className='home-text'>
                    <p className='name-text'>Ramez</p>
                    <p className='name-text'>Medhat</p>
                    <p className='skill-text'>- Programmer</p>
                </div>
                <div className='img-container'>
                    <img src={planet} className='planet-img'></img>
                </div>
            </div>
        );
    }
}

export default HomePage;
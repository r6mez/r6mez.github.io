import React from 'react';
import planet from "../imgs/planet.png";

class HomePage extends React.Component {
  render() {
    return (
      <div className='basic-page'>
        <div className='basic-text'>
          <p className='name-text'>Ramez</p>
          <p className='name-text'>Medhat</p>
          <p className='skill-text'>- Software Engineer</p>
        </div>
        <div className='img-container'>
          <img src={planet} className='img'></img>
        </div>
      </div>
    );
  }
}

export default HomePage;
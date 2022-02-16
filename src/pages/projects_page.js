import React from 'react';
import prodkit from "../imgs/prodkit.png";
import masbaha from "../imgs/masbaha.png";
import discover from "../imgs/discover.png";
import xjoo from "../imgs/xjoo.png";
import adgt from "../imgs/2dgt.png";
import game from "../imgs/game.png";

class ProjectsPage extends React.Component {
    render() {
        return (
            <div className='projects-page'>
                <div className='grid-container'>
                    <Cards />
                </div>
            </div>
        );
    }
}

export default ProjectsPage;

const Cards = () => {
    const cardsList = [
        {
            name: "Productivity kit app",
            text: "Coding project i used flutter to build it, and it’s on google play.",
            photoName: prodkit,
            url: "https://shorturl.at/sBCMX"
        },
        {
            name: "Masbaha app",
            text: "Coding project i built with flutter, and it’s on google play.",
            photoName: masbaha,
            url: "https://shorturl.at/oqBE2",
        },
        {
            name: "Discover Aseer app",
            text: "Coding project i built with flutter for a clinet while i was working as a freelancer.",
            photoName: discover,
            url: "",
        },
        {
            name: "Memes account",
            text: "Two years of posting memes on IG for fun, and 60k follower liked it",
            photoName: xjoo,
            url: "https://www.instagram.com/xjoo/",
        },
        {
            name: "Editing account",
            text: "Creating this types of edits was a passion to me, just take a look.",
            photoName: adgt,
            url: "https://www.instagram.com/2dgt/",
        },
        {
            name: "Some silly games",
            text: "Playing around with Unity, i made some games and learned the logic of creating games. it was a great experince.",
            photoName: game,
            url: "",
        },
    ];


    return cardsList.map(function (card) {
        let button;
        if (card.url != "") {
            button = <form><button className='card-btn' formAction={card.url} formTarget="_blank">visit</button></form>
        } else {
            button = <div></div>
        }
        return (<div className='card' key={card.name}>
            <img className='card-img' src={card.photoName}></img>
            <div className='card-box'>
                <h1 className='card-title'>{card.name}</h1>
                <p className='card-text'>{card.text}</p>
                {button}
            </div>
        </div>);
    }
    );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <div className='contact-page'>
                <h1 className="contact-title">Feel free to contact me 😊</h1>
                <div className='c-grid-container'>
                    <ContactCards />
                </div>
            </div>
        );
    }
}

const ContactCards = () => {
    const cardsList = [
        {
            name: "Gmail",
            icon: faGoogle,
            url: "mailto:iramezdev@gmail.com?"
        },
        {
            name: "Github",
            icon: faGithub,
            url: "https://github.com/r6mez"
        },
        {
            name: "Instagram",
            icon: faInstagram,
            url: "https://www.instagram.com/r6mez/"
        },
        {
            name: "Facebook",
            icon: faFacebook,
            url: "https://www.facebook.com/r6mez/"
        },
    ];


    return cardsList.map(function (card) {
        return (
            <a href={card.url} target="_blank" key={card.name}>
                <div className='c-card'>
                    <div className="c-card-box">
                        <FontAwesomeIcon icon={card.icon} className="icon" />
                        <h1 className='c-card-title'>{card.name}</h1>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="arrow" />
                </div>
            </a>
        );
    }
    );
}

export default ContactPage;
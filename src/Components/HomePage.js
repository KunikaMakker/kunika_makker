import React from 'react';
import NavigationBar from './NavigationBar';
import ResumeFile from '../files/Kunika_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="header-space"></div>
                <div className="body">
                    <div className="banner">
                        <div className="title-container">
                            <h2 className="title">About Me</h2>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className="content-title">WHO AM I?</h2>
                        <div className="underline"></div>
                        <p className="content-text"><strong>Hi I'm Kunika Makker</strong> Innovative front end developer with 1+ year of experience of building and maintaining responsive
websites. Proficient in HTML, CSS, Javascript and other libraries and frameworks. Passionate about
learning various frameworks and other coding techniques.</p>
                        <div className="btn-container">
                            <a href={ResumeFile} target="_blank" rel="noopener noreferrer" className="textDecorationNone" download>
                            <button className="download-btn">
                                <FontAwesomeIcon icon={faFileDownload}/>
                                Download File
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;

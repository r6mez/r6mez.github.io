import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home_page';
import AboutPage from './about_page';
import ProjectsPage from './projects_page';
import ContactPage from './contact_page';
import NavBar from "../componants/nav_bar"


class MainPage extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path="/#/about_page" element={<AboutPage />} />
                    <Route exact path="/#/projects_page" element={<ProjectsPage />} />
                    <Route exact path="/#/contact_page" element={<ContactPage />} />
                </Routes>
            </div>
        );
    }
}

export default MainPage;
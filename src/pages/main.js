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
                    <Route path='/' element={<HomePage />} />
                    <Route path="/about_page" element={<AboutPage />} />
                    <Route path="/projects_page" element={<ProjectsPage />} />
                    <Route path="/contact_page" element={<ContactPage />} />
                </Routes>
            </div>
        );
    }
}

export default MainPage;
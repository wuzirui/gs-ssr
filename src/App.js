import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma/css/bulma.min.css';
import React from 'react';
import Abstract from './components/Abstract';
import Citation from './components/Citation';
import ComparisonSection from './components/ComparisonSection';
import DecompositionSection from './components/DecompositionSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Poster from './components/Poster';
import TeaserImage from './components/TeaserImage';
import VideoCarousel from './components/VideoCarousel';
import VideoPresentation from './components/VideoPresentation';
import './styles/index.css';

function App() {
    return (
        <div className="App">
            <Hero />
            <TeaserImage />
            <Abstract />
            <VideoPresentation />
            <ComparisonSection />
            <DecompositionSection />
            <VideoCarousel />
            <Poster />
            <Citation />
            <Footer />
        </div>
    );
}

export default App; 
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return(
        <section className='container'>
            <div className="first-content text-center p-md-4">
                <img src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" className="img-fluid w-25" alt="Image représentant la lib react-router-dom" />
                <h1 className="mt-3">React Router</h1>
            </div>

            <div className="informations p-md-4">
                <h2 id="rappel" className="fs-4">Q'est-ce que React Router ?</h2>
                <hr />
                <p className="text-justify">
                    React Router est une bibliothèque de routage pour React qui permet de gérer la navigation dans une application React. 
                    Elle offre une manière déclarative de définir les routes et de gérer les transitions entre les différentes vues de l'application.
                </p>
                <h3 id="rappel" className="fs-5">Pourquoi utiliser React Router ?</h3>
                <p className='text-justify'>
                    <strong>Navigation sans rechargement de page :</strong> React Router permet de naviguer entre les pages sans recharger l'ensemble de la page, ce qui rend l'expérience utilisateur plus fluide.<br />
                    <strong>URL synchronisées :</strong> Les routes définies avec React Router sont synchronisées avec l'URL du navigateur, permettant de garder l'état de l'application cohérent avec l'URL.<br />
                    <strong>Facilité de gestion des routes complexes :</strong> React Router permet de gérer facilement les routes imbriquées et les redirections, ce qui est utile pour les applications complexes.
                </p>
                <h3 id="rappel" className="fs-5">Voici un exemple de configuration de React Router :</h3>
                <pre>
                {`
                    import React from 'react';
                    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
                    import Home from './Home';
                    import About from './About';
                    import Contact from './Contact';

                    function App() {
                        return (
                            <Router>
                                <Routes>
                                    <Route path="/" Component={HomePage} />
                                    <Route path="/about" Component={AboutPage} />
                                    <Route path="/contact" Component={ContactPage} />
                                </Routes>
                            </Router>
                        );
                    }

                    export default App;
                `}
                </pre>
            </div>
            <p className='text-center'>Dans cet exemple, nous avons défini trois routes principales : Home, About, et <Link to='/contact'>Contact</Link>.</p>
        </section>
    );
}

export default AboutPage;
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return(
        <section className='container'>
            <div className="first-content text-center p-md-4">
                <img src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" className="img-fluid w-25" alt="Image représentant la lib react-router-dom" />
                <h1 className="mt-3">React Router</h1>
            </div>

            <div className="informations p-md-4">
                <h2 id="rappel" className="fs-4">Avant tout, <b>petit rappel</b>!</h2>
                <hr />
                <h3 id="rappel" className="fs-5 fw-light"><i>Frontend vs API</i></h3>
                <p className="text-justify">
                    <strong>Frontend</strong> : Le front-end, ou l'interface utilisateur, est la partie visible d'une application web. 
                    C'est ce que l'utilisateur voit et avec quoi il interagit directement. Il comprend tout ce qui est affiché sur l'écran, 
                    les boutons, les menus, les formulaires, etc. Le front-end est généralement développé en utilisant des technologies 
                    telles que HTML, CSS et JavaScript (ainsi que des frameworks/bibliothèques comme React, Angular, Vue.js, etc.).
                </p>
                <p className='text-justify'>
                    <strong>API</strong> (Application Programming Interface) : L'API est la partie backend qui permet à différentes 
                    applications de communiquer entre elles. Elle définit un ensemble de règles et de protocoles que les applications 
                    peuvent suivre pour échanger des données. Les API sont souvent utilisées pour récupérer des données d'un serveur, 
                    les envoyer à une base de données, ou pour connecter des services tiers. Elles sont généralement développées en utilisant 
                    des langages côté serveur comme Node.js, Python, Ruby, Java, etc.
                </p>
                <h3 id="rappel" className="fs-5 fw-light"><i>Rôle de chaque partie</i></h3>
                <p className='text-justify m-0'><strong>Frontend</strong> : Présentation des données à l'utilisateur, capture des actions de l'utilisateur et envoi de requêtes à l'API.</p>
                <p className='text-justify'><strong>API</strong> : Gestion de la logique métier, traitement des données, interaction avec la base de données et réponse aux requêtes du frontend.</p>
            </div>
            <p className='text-center'>Maintenant que nous avons revus les bases, nous allons pouvoir parler de <b>router</b> avec React. Pour la suite, <Link className='' to='/about'>cliquez simplement ici</Link> !</p>
        </section>
    );
}

export default HomePage;
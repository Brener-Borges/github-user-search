import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
    return (
        <div className="row">
            <div className="col-6">
                <h1 className="home-title">
                    Desafio do Capítulo 3,<br />Bootcamp DevSuperior
                </h1>
                <p className="home-text">
                    <p>
                        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
                    </p>
                    <p>
                        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
                    </p>
                    <p>
                        Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
                    </p>
                </p>
                <Link to="/search">
                    <div className="home-button">
                        <button className="btn btn-primary">
                            Começar
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;